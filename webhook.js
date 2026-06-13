export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("Webhook recebido:", req.body);

  return res.status(200).json({
    success: true,
    message: "Webhook recebido com sucesso"
  });
}
