import fs from "fs";
import { copyRecursiveSync } from "./utils.js";

const TEMPLATE_DIR = 'template';

const replaceInFile = (file, regex, replaceWith) => {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = data.replace(regex, replaceWith);
  
    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
};

console.log('generating template');

console.log('cleanup');

fs.rmSync(TEMPLATE_DIR, { recursive: true, force: true });
fs.mkdirSync(TEMPLATE_DIR);
fs.mkdirSync(`${TEMPLATE_DIR}/packages`);

['components', 'docs'].forEach(name => {
  console.log('Coping', name);
  copyRecursiveSync(`../${name}`, `${TEMPLATE_DIR}/packages/${name}`);
});

fs.copyFileSync('../../package.json', `./${TEMPLATE_DIR}/package.json`)
fs.copyFileSync('../../.npmrc', `./${TEMPLATE_DIR}/.npmrc`)

console.log('Removing core references after copy')

replaceInFile(`./${TEMPLATE_DIR}/packages/docs/tsconfig.json`, /[\r\n]+.*@ui-blox\/core.*/, '');
replaceInFile(`./${TEMPLATE_DIR}/packages/docs/vite.config.ts`, /[\r\n]+.*@ui-blox\/core.*/, '');
