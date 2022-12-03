/* eslint-disable security/detect-child-process */
import { spawnSync } from 'child_process';
import fs from 'fs';

export const spawn = (command, args, options = {}, shouldExit = true) => {
  const ret = spawnSync(command, args, {
    stdio: 'inherit',
    ...options,
  });
  if (ret.error) {
    throw ret.error;
  } else if (shouldExit && ret.status !== 0) {
    process.exit(ret.status || 0);
  }
};

export const getFileContent = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const ret = buffer.toString();
  return ret;
};

export const getMDFiles = () => {
  const PACKAGE_PATH = process.cwd();
  const files = fs.readdirSync(`${PACKAGE_PATH}/data`);
  return files.filter(file => file.endsWith('md'));
}
