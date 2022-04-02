export const HEADER_LINE_WIDTH = 26;

export function renderQuestionHeader(questionName: string) {
  console.log("\n");
  console.log("-".repeat(HEADER_LINE_WIDTH));
  console.log(`| ${questionName}`.padEnd(HEADER_LINE_WIDTH - 1, " ") + "|");
  console.log("-".repeat(HEADER_LINE_WIDTH));
}
