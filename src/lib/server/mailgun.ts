import * as formData from 'form-data';
import Mailgun from 'mailgun.js';
import { MAILGUN_API_KEY, SEND_DOMAIN, RECEIVER } from '$env/static/private';

const mailgun = new Mailgun(formData.default);
const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY });

interface SendParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function Send({ name, email, subject, message }: SendParams): Promise<void> {
  try {
    const msg = await mg.messages.create(SEND_DOMAIN, {
      from: name,
      to: [RECEIVER],
      subject: subject,
      text: subject,
      html: `${message}`
    });
    console.log(msg)
  } catch (err) {
    console.error(err);
  }
}
