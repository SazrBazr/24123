import { NextResponse } from "next/server";
import { saveQuizResponse } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user, answers } = body;

    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json({ error: "No answers provided" }, { status: 400 });
    }

    saveQuizResponse(user || {}, answers);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("API submission error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to save response" },
      { status: 500 }
    );
  }
}