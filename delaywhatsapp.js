export default function handler(req, res) {
  const now = new Date().toISOString();
  const target = req.body?.target || "unknown";
  res.status(200).json({
    status: "success",
    aksi: "delaywhatsapp",
    target: target,
    waktu: now
  });
}
