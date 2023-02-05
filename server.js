// // modules installed
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // set up a server to send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);

// // change this to vercel server or check other solutions

// const port = process.env.PORT ||3000;
// app.listen(port, () => {
//     console.log(`Server Running on port: ${port}`)
// });

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: "0Auth2",
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN
//     },
// });

// // if there is a two-factor authentication there may be problems in sending the response to your email

// // Check if its running
// contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

// // this makes an API request
// router.post("/contact", async (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//       from: name,
//       to: process.env.EMAIL,
//       subject: "Contact Form Submission - Portfolio",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Phone: ${phone}</p>
//              <p>Message: ${message}</p>`,
//     };

//     try {
//         await contactEmail.sendMail(mail, (error) => {
//             if (error) {
//               res.json(error);
//             } else {
//               res.json({ code: 200, status: "Message Sent" });
//             }
//           });
//     } catch (error) {
//         res.status(500).json(error.message);
//     }
//     // send back if there is an error or the message was successfully sent
    
//     });