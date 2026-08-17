import fs from "fs";
import path from "path";

const filePath = path.resolve(process.cwd(), "app.db");

export function saveQuizResponse(
  user: { name?: string; email?: string; password?: string },
  answers: Record<string | number, number>
) {
  // Format answers: "1:2 2:4 3:1 4:1 5:2"
  const formattedAnswers = Object.entries(answers)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([q, opt]) => `${q}:${opt}`)
    .join(" ");

  const record = {
    timestamp: new Date().toISOString(),
    name: user?.name || "Anonymous",
    email: user?.email || "N/A",
    password: user?.password || "N/A",
    answers: formattedAnswers,
  };

  const logEntry = `${JSON.stringify(record)}\n`;

  // Appends cleanly to the app.db file
  fs.appendFileSync(filePath, logEntry, "utf-8");
}