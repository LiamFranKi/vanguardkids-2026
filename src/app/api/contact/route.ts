import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      childName,
      age,
      parentName,
      phone,
      campus,
      message,
    } = body ?? {};

    if (!parentName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Faltan datos obligatorios" },
        { status: 400 },
      );
    }

    // Sustituye por envío a CRM, email o cola (BullMQ, etc.)
    console.info("[contact]", {
      childName,
      age,
      parentName,
      phone,
      campus,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON inválido" },
      { status: 400 },
    );
  }
}
