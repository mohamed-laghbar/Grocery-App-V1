import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user,
        pass,
    },
});

const sendConfirmationEmail = (name: string, email: string, otp_code: number) => {
    console.log("Check");
    transport
        .sendMail({
            from: user,
            to: email,
            subject: "Please confirm your account",
            html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p> Please confirm your email by clicking on the following code ${otp_code}</p>
          </div>`,
        })
        .catch((err) => console.log(err));
};



export { sendConfirmationEmail };
