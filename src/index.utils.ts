export const LINE_WIDTH = 26;

export function renderQuestionHeader(questionName: string) {
  console.log("\n");
  console.log("-".repeat(LINE_WIDTH));
  console.log(`| ${questionName}`.padEnd(LINE_WIDTH - 1, " ") + "|");
  console.log("-".repeat(LINE_WIDTH));
}
