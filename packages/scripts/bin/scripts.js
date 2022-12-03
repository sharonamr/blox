#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from '../src/scripts-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const scriptName = args.shift() || '';

const supportedScripts = ['start', 'generate'];

if (supportedScripts.includes(scriptName)) {
  spawn('node', [
    path.resolve(__dirname, '..', `./src/${scriptName}`),
    ...args,
  ]);
} else {
  // eslint-disable-next-line no-console
  console.log(`${scriptName} script ins't supported. Please use one of the following scripts:\n [${supportedScripts.join(', ')}]`);
}
