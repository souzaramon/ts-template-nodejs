import fs from "fs/promises";
import path from "path";

import * as utils from "./index.utils";

async function main() {
  const files = await fs.readdir(path.resolve(__dirname, "questions"));

  for (const file of files) {
    const { run } = await import(path.resolve(__dirname, "questions", file));

    if (run) {
      utils.renderQuestionHeader(file);

      await run();
    }
  }
}

main();
