import { spawn } from './scripts-utils.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

spawn('node', [`${__dirname}/generate`], {
  cwd: process.cwd()
});

spawn('vite', [], {
  cwd: process.cwd()
});