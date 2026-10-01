export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed." });
  const { email } = req.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: "Enter a valid email address." });
  // TODO: database / email service e save korbe
  res.status(200).json({ message: "Subscribed. Check your inbox for your discount." });
}
