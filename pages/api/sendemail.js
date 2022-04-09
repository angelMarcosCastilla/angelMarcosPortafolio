const nodemailer = require("nodemailer");
const nodemailerSengrid = require("nodemailer-sendgrid")

export default async function sendemail(req, res) {
  try {
  const { email, subject, message } = req.body
   let transporter =  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.USER, 
      pass: process.env.KEY, 
    },
  }); 

 /* console.log(process.env.APY_KEY_EMAIL )
  let transporter =  nodemailer.createTransport(
    nodemailerSengrid({ apiKey: "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" })
  )  */

    let info = await transporter.sendMail({
      from: `Propuesta de trabajo de: <yo@as>`,
      to: "ajmarcosc15@gmail.com",
      subject: subject,
      text: message,
     });  
  
    res.status(200).json({success:true})
   } catch (error) {
     console.log(error)
   }
}
