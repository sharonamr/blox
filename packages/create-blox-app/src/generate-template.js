import fs from "fs";
import { copyRecursiveSync } from "./utils.js";

const TEMPLATE_DIR = 'template';

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

// Copy package.json + manipulate
// Copy tsconfig.json + manipulate
// Copy vite.config.js + manipulate

