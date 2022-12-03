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

console.log('copy files from template to', appName, SCRIPTS_PATH);

copyRecursiveSync(`${SCRIPTS_PATH}/template/`, `${appName}/`);