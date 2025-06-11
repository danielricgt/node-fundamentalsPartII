import { yarg } from "./config/plugins/yarns.plugin.mjs";
import fs from 'fs';

console.log(yarg);


const {b: base, l:limit, s: show} = yarg;
let outPutMessage = '';

const headerMessage = `

========================================

TABLA DEL  ${base}
========================================\n

`;

for (let i = 1; i <= limit; i++) {
    outPutMessage += `${base} X ${i} = ${base*i}\n` 
    
}

outPutMessage= headerMessage + outPutMessage;
if (show) {
    console.log(outPutMessage);
}

const outPutPath = `outputs/folder1/folder2/folder3`;

fs.mkdirSync(outPutPath,{recursive: true}) ;
fs.writeFileSync(`${outPutPath}/tabla-${base}.txt`, outPutMessage);
console.log('file created!');