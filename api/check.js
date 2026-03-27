export default function handler(req, res) {
  const { password } = req.body || {};
  const correct = process.env.SITE_PASSWORD || '123';
  res.json({ ok: password === correct });
}
