import { google } from 'googleapis';
import nodemailer, { TransportOptions } from 'nodemailer';

interface sendVerificationProps {
    username: string;
    email: string;
    verification_token: string;
    origin: string;
}

export const sendVerificationEmail = async ({ username, email, verification_token, origin }: sendVerificationProps) => {
    try {
        const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);
        oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
                clientId: process.env.OAUTH_CLIENTID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        } as TransportOptions);

        const verifyEmail = `${origin}/verify?token=${verification_token}&email=${email}`;

        const message = `<p>Please confirm your email by clicking on the following link: <a href=${verifyEmail}>Verify Email Address</a></p>`;

        const result = await transporter.sendMail({
            from: '"TechPortal" <techportalteam@gmail.com>',
            to: `${email}`,
            subject: 'Email Confirmation',
            html: `<h4>Hello, ${username}!</h4> ${message}`,
        });

        return result;
    } catch (error) {
        return error;
    }
};
