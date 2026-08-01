import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^(0?5[0-9]{8})$/),
});

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@flaztechnicalservices.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "noreply@flaztechnicalservices.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }
  const { name, phone } = parsed.data;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Flaz Website <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    subject: `New callback request from ${name}`,
    text: `Name: ${name}\nPhone: +971 ${phone.replace(/^0/, "")}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
