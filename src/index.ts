import fs from "node:fs/promises";
import path from "node:path";
import * as utils from "./index.utils";

async function importAndRunQuestion(fileName: string) {
  const { run } = await import(path.resolve(__dirname, "questions", fileName));

  if (run) {
    utils.renderQuestionHeader(fileName);

    await run();
  }
}

async function main() {
  const providedQuestion = process.argv[2]
  const pathQuestions = path.join(__dirname, "questions")

  if(providedQuestion) {
    await importAndRunQuestion(providedQuestion)

    return;
  }

  for (const file of await fs.readdir(pathQuestions)) {
    await importAndRunQuestion(file);
  }
}

main();
