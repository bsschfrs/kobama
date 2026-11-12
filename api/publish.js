// Vercel Cron: bouwt de site elke ochtend opnieuw, zodat ingeplande blogartikelen live gaan.
//
// Waarom: de site is statisch en een artikel met een datum in de toekomst wordt bij het
// bouwen overgeslagen. Er is dus een nieuwe build nodig op het moment dat het artikel live
// moet. De GitHub-workflow (.github/workflows/publish-scheduled.yml) doet dat ook, maar
// GitHub voert geplande workflows soms maar eens per paar uur uit. Deze cron is de vaste basis.
//
// Schema staat in vercel.json: 07:00 en 08:00 UTC. Op het Hobby-plan draait een cron ergens
// binnen dat uur. In de winter (UTC+1) zorgt de run van 08:00 UTC voor een build tussen
// 09:00 en 10:00, in de zomer (UTC+2) de run van 07:00 UTC. Plan artikelen daarom op 09:00.
//
// Omgeving (Vercel, Production), nooit in de repo:
//   CRON_SECRET         willekeurige lange tekst; Vercel stuurt hem mee als Bearer-token.
//   VERCEL_DEPLOY_HOOK  de deploy-hook-URL van dit project.

export default async function handler(request, response) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.authorization !== `Bearer ${secret}`) {
    return response.status(401).json({ ok: false });
  }
  const hook = process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) return response.status(500).json({ ok: false, error: "VERCEL_DEPLOY_HOOK ontbreekt" });

  const res = await fetch(hook, { method: "POST" });
  if (!res.ok) return response.status(502).json({ ok: false, error: `deploy hook gaf HTTP ${res.status}` });
  return response.status(200).json({ ok: true, started: new Date().toISOString() });
}
