import { google } from 'googleapis';
import nodemailer, { TransportOptions } from 'nodemailer';

interface sendResetPasswordProps {
    username: string;
    email: string;
    password_token: string;
    origin: string;
}

export const sendResetPasswordEmail = async ({ username, email, password_token, origin }: sendResetPasswordProps) => {
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

        const resetPassword = `${origin}/reset?token=${password_token}&email=${email}`;

        const message = `<p>Please reset password by clicking on the following link: <a href=${resetPassword}>Reset Password</a></p>`;

        const result = await transporter.sendMail({
            from: '"TechPortal" <techportalteam@gmail.com>',
            to: `${email}`,
            subject: 'Reset Password',
            html: `<html>
                        <head>
                        </head>
                        <body>
                            <header>
                                <h3>Hello, ${username}!</h3>
                                <p>${message}</p>
                            </header>
                            <footer>
                                <p>
                                    Kind Regards,<br>
                                    <br>
                                    TechPortal Support Team<br>
                                </p>
                            </footer>
                        </body>
                    </html>`,
        });
        return result;
    } catch (error) {
        return error;
    }
};
