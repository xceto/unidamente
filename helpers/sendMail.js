"use strict";
const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL, 
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: '"Formulario de contacto" <contacto@unidamente.org>',
    to: "contacto@unidamente.org", 
    subject: "Enviado Desde la pagina web ✔",
    html: `Nombre: <b> ${req.body.name} </b> <br> Email: ${req.body.email} <br> Por que contacta: ${req.body.whyContact} <br> texto: ${req.body.textWrite} `, // html body
  }).then((info) => {
    console.log(info)
    if (info.messageId) {
      res.json({
        status: 200,
        message: 'Hemos recibido su email'
      })
    }
  }). catch((e) => {
    console.log(e);
    res.json({ status: 500, message: "Problemas internos"})
  })
}

module.exports = {
  sendMail,
};
