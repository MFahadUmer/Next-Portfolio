'use server';
import React from 'react';
import { validateString } from '@/lib/utils';
import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';
const resend = new Resend(process.env.RESEND_API_KEY);
import ContactFormEmail from '@/email/contact-form-email';

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { error: 'Invalid Email' };
  }
  if (!validateString(message, 5000)) {
    return { error: 'Invalid Message' };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact from <onboarding@resend.dev>',
      to: 'eng.fahadumer@gmail.com',
      subject: 'Message from portfolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
