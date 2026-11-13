// Vercel Function: ontvangt het aanvraagformulier en mailt het naar KOBAMA.
//
// Waarom een functie: de site is statisch, dus de browser kan zelf geen mail versturen.
// De mail gaat via Gmail (SMTP), dezelfde dienst die het privacybeleid al noemt.
//
// Omgeving (Vercel, Production en Preview), nooit in de repo:
//   SMTP_USER   Gmail-adres waarmee verstuurd wordt, bijvoorbeeld kobama.info@gmail.com
//   SMTP_PASS   app-wachtwoord van dat account (Google-account, Beveiliging, 2-stapsverificatie,
//               App-wachtwoorden). Niet het gewone wachtwoord.
//   LEAD_TO     optioneel: waar de aanvragen heen gaan. Standaard hetzelfde als SMTP_USER.

import nodemailer from "nodemailer";

const METHODS = { bellen: "Bellen", whatsapp: "WhatsApp", mailen: "Mailen" };
const clean = (v, max) => String(v ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);

export function validate(body) {
  if (body?.company) return { honeypot: true };
  const name = clean(body?.name, 100);
  const hasSite = body?.hasSite === "ja" ? "ja" : body?.hasSite === "nee" ? "nee" : "";
  const siteName = clean(body?.siteName, 200);
  const method = Object.keys(METHODS).includes(body?.method) ? body.method : "";
  const phone = clean(body?.phone, 30);
  const email = clean(body?.email, 160);

  if (name.length < 2) return { error: "name" };
  if (!hasSite) return { error: "hasSite" };
  if (hasSite === "ja" && siteName.length < 3) return { error: "siteName" };
  if (!method) return { error: "method" };
  if (method === "mailen") {
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) return { error: "email" };
  } else {
    const digits = phone.replace(/\D/g, "");
    if (!/^[\d\s+()-]+$/.test(phone) || digits.length < 8 || digits.length > 15) return { error: "phone" };
  }
  return { data: { name, hasSite, siteName, method, phone, email } };
}

export function buildMail(d) {
  const lines = [
    `Naam: ${d.name}`,
    d.hasSite === "ja" ? `Heeft al een website: ja (${d.siteName})` : "Heeft al een website: nee, nog niet",
    `Contact via: ${METHODS[d.method]}`,
    d.method === "mailen" ? `E-mailadres: ${d.email}` : `Telefoonnummer: ${d.phone}`,
  ];
  return {
    subject: `Nieuwe aanvraag via kobama.nl: ${d.name}`,
    text: lines.join("\n") + "\n\nVerstuurd via het aanvraagformulier op www.kobama.nl.",
    replyTo: d.method === "mailen" ? d.email : undefined,
  };
}

const allowedOrigin = (origin) => {
  if (!origin) return true;
  try {
    const h = new URL(origin).hostname;
    return h === "kobama.nl" || h.endsWith(".kobama.nl") || h.endsWith(".vercel.app") || h === "localhost";
  } catch {
    return false;
  }
};

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ ok: false });
  if (!allowedOrigin(request.headers.origin)) return response.status(403).json({ ok: false });

  const v = validate(request.body);
  if (v.honeypot) return response.status(200).json({ ok: true }); // bots krijgen een nep-succes
  if (v.error) return response.status(400).json({ ok: false, field: v.error });

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return response.status(500).json({ ok: false, error: "mail niet ingesteld" });

  try {
    const transport = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    const mail = buildMail(v.data);
    await transport.sendMail({
      from: `KOBAMA website <${user}>`,
      to: process.env.LEAD_TO || user,
      subject: mail.subject,
      text: mail.text,
      replyTo: mail.replyTo,
    });
    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ ok: false, error: "versturen mislukt" });
  }
}
