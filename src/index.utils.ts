export const HEADER_LINE_WIDTH = 26;

export function renderQuestionHeader(questionName: string) {
  console.log('\n')
  console.log(`| \x1b[1m${questionName}\x1b[0m`.padEnd(HEADER_LINE_WIDTH - 1));
  console.log("-".repeat(HEADER_LINE_WIDTH));
}
