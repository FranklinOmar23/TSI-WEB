import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  const { nombre, empresa, email, telefono, servicio, mensaje } = req.body

  // crea tu transporter con env vars
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Web TSI" <${process.env.SMTP_USER}>`,
      to: 'agarcia@tsi.com.do',
      subject: `Nueva cotización: ${servicio}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false })
  }
}
