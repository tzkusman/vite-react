const nodemailer = require('nodemailer')

// This serverless function expects the following environment variables to be set in Vercel:
// MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, TO_EMAIL
// TO_EMAIL can be your receiving email (e.g. tzkusman786@gmail.com)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, company, service, message } = req.body || {}

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  // Transport configuration from environment
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const toEmail = process.env.TO_EMAIL || 'tzkusman786@gmail.com'

  const mailOptions = {
    from: `${name} <${email}>`,
    to: toEmail,
    subject: `New contact request from ${name} — ${service || 'General'}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Company:</strong> ${company || '-'}</p>
           <p><strong>Service:</strong> ${service || '-'}</p>
           <hr />
           <p>${message.replace(/\n/g, '<br/>')}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error sending email:', err)
    res.status(500).json({ error: 'Error sending email' })
  }
}
