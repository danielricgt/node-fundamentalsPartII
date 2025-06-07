
import fs from 'fs';

let outPutMessage = '';
const base = 5;
const headerMessage = `

========================================

TABLA DEL  ${base}
========================================\n

`;

for (let i = 1; i <= 10; i++) {
    outPutMessage += `${base} X ${i} = ${base*i}\n` 
    
}

outPutMessage= headerMessage + outPutMessage;
console.log(outPutMessage);

const outPutPath = `outputs/folder1/folder2/folder3`;

fs.mkdirSync(outPutPath,{recursive: true});
fs.writeFileSync(`${outPutPath}/tabla-${base}.txt`, outPutMessage);
console.log('file created!');