// Vercel Function: ontvangt het aanvraagformulier en mailt het naar KOBAMA.
//
// Waarom een functie: de site is statisch, dus de browser kan zelf geen mail versturen.
// De mail gaat via Resend (https://resend.com), met een gewone fetch: geen pakket nodig.
//
// Omgeving (Vercel, Production en Preview), nooit in de repo:
//   RESEND_API_KEY  API-sleutel uit het Resend-dashboard (API Keys, rechten: alleen verzenden).
//   LEAD_TO         waar de aanvragen heen gaan. Standaard kobama.info@gmail.com.
//   LEAD_FROM       afzender, bijvoorbeeld "KOBAMA website <aanvraag@kobama.nl>". Het domein
//                   moet in Resend geverifieerd zijn. Zonder LEAD_FROM gebruiken we
//                   onboarding@resend.dev: dat mailt alleen naar het adres van het Resend-account.

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

  const key = process.env.RESEND_API_KEY;
  if (!key) return response.status(500).json({ ok: false, error: "mail niet ingesteld" });

  try {
    const mail = buildMail(v.data);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || "KOBAMA website <onboarding@resend.dev>",
        to: [process.env.LEAD_TO || "kobama.info@gmail.com"],
        subject: mail.subject,
        text: mail.text,
        ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
      }),
    });
    if (!res.ok) return response.status(502).json({ ok: false, error: `Resend gaf HTTP ${res.status}` });
    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ ok: false, error: "versturen mislukt" });
  }
}
