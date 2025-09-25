import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "hoarauraphael444@gmail.com",
      subject: subject || "Nouveau message de contact",
      text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}
Message:
${message}
      `,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erreur d'envoi: " + err.message });
  }
}
