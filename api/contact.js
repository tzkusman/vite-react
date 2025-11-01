const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, company, service, message } = req.body || {}

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields: name, email, and message are required' })
    return
  }

  // Check if environment variables are set
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('Missing email configuration environment variables')
    res.status(500).json({ 
      error: 'Email service not configured. Please contact us directly at tzkusman786@gmail.com' 
    })
    return
  }

  try {
    // Transport configuration from environment  
    const transporter = nodemailer.createTransporter({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587,
      secure: process.env.MAIL_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const toEmail = process.env.TO_EMAIL || 'tzkusman786@gmail.com'

    const mailOptions = {
      from: `"${name}" <${process.env.MAIL_USER}>`, // Use authenticated email as sender
      to: toEmail,
      replyTo: email, // Set reply-to as the form submitter's email
      subject: `New Contact Request from ${name} - ${service || 'General Inquiry'}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\nService: ${service || 'General Inquiry'}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
        <hr />
        <p><small>Sent from TZKSolution portfolio contact form</small></p>
      `,
    }

    console.log('Attempting to send email with config:', {
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: process.env.MAIL_PORT || 587,
      user: process.env.MAIL_USER,
      to: toEmail
    })

    await transporter.sendMail(mailOptions)
    
    console.log('Email sent successfully to:', toEmail)
    res.status(200).json({ success: true, message: 'Email sent successfully!' })
    
  } catch (err) {
    console.error('Error sending email:', err)
    res.status(500).json({ 
      error: 'Failed to send email. Please contact us directly at tzkusman786@gmail.com',
      details: err.message 
    })
  }
}
