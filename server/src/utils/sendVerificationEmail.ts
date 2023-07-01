import nodemailer, { TransportOptions } from 'nodemailer';

interface sendVerificationProps {
    username: string;
    email: string;
    verification_token: string;
    origin: string;
}

export const sendVerificationEmail = async ({ username, email, verification_token, origin }: sendVerificationProps) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    } as TransportOptions);

    const verifyEmail = `${origin}/verify?token=${verification_token}&email=${email}`;

    const message = `<p>Please confirm your email by clicking on the following link: <a href=${verifyEmail}>Verify Email Address</a></p>`;

    await transporter.sendMail({
        from: '"TechPortal" <techportalteam@gmail.com>',
        to: `${email}`,
        subject: 'Email Confirmation',
        html: `<h4>Hello, ${username}!</h4> ${message}`,
    });
};
