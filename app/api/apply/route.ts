const resendEndpoint = 'https://api.resend.com/emails';

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.APPLICATION_EMAIL;
  const from = process.env.APPLICATION_FROM_EMAIL;
  if (!apiKey || !recipient || !from) {
    return Response.json({ error: 'Email service is not configured.' }, { status: 503 });
  }

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object') {
    return Response.json({ error: 'Invalid submission.' }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  if (clean(data.company, 100)) return Response.json({ ok: true });

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const profile = clean(data.profile, 500);
  const goals = clean(data.goals, 4000);
  if (!name || !goals || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  const message = [`Name: ${name}`, `Email: ${email}`, `Creator profile: ${profile || 'Not provided'}`, '', 'Goals:', goals].join('\n');
  const result = await fetch(resendEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'LunelleManagement/1.0',
      'Idempotency-Key': crypto.randomUUID(),
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject: `Creator application — ${name}`,
      text: message,
    }),
  });

  if (!result.ok) {
    console.error('Application email failed:', result.status);
    return Response.json({ error: 'Unable to send application.' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
