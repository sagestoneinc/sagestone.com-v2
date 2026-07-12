import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();

  if (String(form.get("website") ?? "")) {
    return NextResponse.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const company = String(form.get("company") ?? "").trim();
  const need = String(form.get("need") ?? "").trim();

  if (!name || !email.includes("@") || !company || need.length < 10) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please provide your name, email, company, and a brief note about the support you need.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry received.",
  });
}
