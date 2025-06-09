import { yarg } from "./config/plugins/yarns.plugin.mjs";
import { hideBin } from "yargs/helpers";

// console.log(hideBin(process.argv));

(async () => {
  await main();
})();

async function main() {
  console.log('main starting');
  console.log(yarg);
}
