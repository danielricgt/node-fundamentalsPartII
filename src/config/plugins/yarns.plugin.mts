import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplicacion table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "show mult table",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "multiplication-table",
    describe: "destination folder for the file",
  })
    .option("n", {
        alias: "name",
        type: "string",
        default: "table",
        describe: "file name",
    })
  .check((argv, options) => {
    if (argv.b < 1) throw "base must be positive";
    return true;
  })

  .parseSync();
