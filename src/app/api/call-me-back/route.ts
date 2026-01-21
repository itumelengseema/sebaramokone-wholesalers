import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Send email using Resend
    // Using onboarding@resend.dev (free tier) - emails will only be delivered to your verified email
    const toEmail =
      process.env.RESEND_TO_EMAIL || 'development@nyami-nyami.co.za';

    // Format reason for display
    const reasonDisplay = reason
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [toEmail], // Your verified email address
      replyTo: email, // User's email for easy replies
      subject: `New Call Back Request from ${name} - ${reasonDisplay}`,
      html: `
        <h2>New Call Me Back Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Reason:</strong> ${reasonDisplay}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        <hr />
        <p><small>This request was submitted via the Sebara Wholesalers contact form.</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          error: 'Failed to send email',
          details: error.message || 'Unknown error from Resend',
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your request has been received. We will call you back soon!',
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
