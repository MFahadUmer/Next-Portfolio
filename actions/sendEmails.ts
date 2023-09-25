'use server';
import { validateString } from '@/lib/utils';
import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { error: 'Invalid Email' };
  }
  if (!validateString(message, 5000)) {
    return { error: 'Invalid Message' };
  }
  try {
    await resend.emails.send({
      from: 'Contact from <onboarding@resend.dev>',
      to: 'eng.fahadumer@gmail.com',
      subject: 'Message from portfolio',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
