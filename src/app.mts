import { yarg } from './config/plugins/yarns.plugin.mjs';
import { hideBin } from 'yargs/helpers';


// console.log(hideBin(process.argv));

(async () => {
await main();
console.log('fin del prgorama')

})();

async function main() {
    console.log('main function executed');
}