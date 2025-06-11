import { yarg } from "./config/plugins/yarns.plugin.mjs";
import { hideBin } from "yargs/helpers";
import { ServerApp } from "./presentation/server-app.mjs";

// console.log(hideBin(process.argv));

(async () => {
  await main();
})();

async function main() {
  const {b: base, l: limit, s: showTable} = yarg;
ServerApp.run({base, limit, showTable});  
}
