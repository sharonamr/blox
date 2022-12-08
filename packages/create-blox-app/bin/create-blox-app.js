#!/usr/bin/env node
import fs from 'fs';
import { copyRecursiveSync } from '../src/utils.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const appName = args[0];
const SCRIPTS_PATH = path.resolve(__dirname, '../');

if (!appName) {
  throw new Error('app name is required. for example "create-blox-app my-app"');
}
console.log(`Creating ${appName} blox app`);

copyRecursiveSync(`${SCRIPTS_PATH}/template/`, `${appName}/`);

console.log("Done.\n");

console.log("Now you can:");
const commands = [
  `cd ${appName}`,
  'npm install',
  'npm start',
];

console.log(commands.join('\n'));