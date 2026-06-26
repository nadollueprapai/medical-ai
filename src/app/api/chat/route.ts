import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";

export async function POST(request: Request) {
  try {
    const { message, language } = await request.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are talking to a patient who hasn't had time to see a doctor yet,
they are consulting you about a surprise health issue,
your goal is to direct them to the correct doctor in a specialized field.

Rules:
- Never claim to diagnose a disease.
- Provide educational information only.
- Recommend seeing a healthcare professional when appropriate.
- If symptoms could represent an emergency, clearly recommend immediate emergency medical care.
- Ask follow-up questions if more information is needed.
- Keep responses concise and easy to understand.
- Send the responses in a one-line, preferably one-sentence format.
- Respond in the language that you are spoken to in.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        reply: "Unable to contact the AI.",
      },
      {
        status: 500,
      }
    );
  }
}