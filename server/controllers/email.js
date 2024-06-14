const nodemailer = require("nodemailer");

const sentEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log({ name, email, message });
    const toEmail = "riteshdhapatepatil966@gmail.com";
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      // port: 587,
      auth: {
        user: "rieshdhapatepatil@gmail.com",
        pass: "qivfhfxkjjftcjwa",
      },
    });
    const info = await transporter.sendMail({
      from: '"portfolio 💖" <portfolio@gmail.com>', // sender address
      to: toEmail, // list of receivers
      subject: "Reset Password", // Subject line
      text: "hello from node js", // plain text body
      html: `
          <p> name : ${name}</p>
          <b>email: <strong>${email}</strong></b>  
          <p>message : ${message}</p>
          <p>from portfolio</p>
      `, // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json({ message: "email sent successfully" });
  } catch (error) {
    res.json({ message: "email not sent !!!!" });
    console.log("email sent error ---->",error);
  }
};

module.exports = sentEmail;
