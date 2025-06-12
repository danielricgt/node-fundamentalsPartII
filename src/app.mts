import { yarg } from "./config/plugins/yarns.plugin.mjs";
import { ServerApp } from "./presentation/server-app.mjs";

// console.log(hideBin(process.argv));

(async () => {
  await main();
})();

async function main() {
  const {b: base, l: limit, s: showTable, n: fileName, d: fileDestination} = yarg;
ServerApp.run({base, limit, showTable, fileName, fileDestination});  
}
