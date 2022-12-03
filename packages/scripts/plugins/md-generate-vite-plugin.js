import { mdToReact } from '../src/md-to-react.js';
import { getMDFiles } from '../src/scripts-utils.js';
import { generateMenu } from '../src/generate-menu.js';
import { generateRoutes } from '../src/generate-routes.js';
import { createPropsTable } from '../src/create-props-table.js';

const PACKAGE_PATH = process.cwd();

export const mdToReactPlugin = () => {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      try {
        if (file.endsWith('.md')) {
          console.log(`blox: converting ${file} to React`);
          mdToReact(file);
          const mdFiles = getMDFiles();
          generateMenu(PACKAGE_PATH, mdFiles);
          generateRoutes(PACKAGE_PATH, mdFiles);
        } else if (file.includes('.blox.')) {
          const mdFile = file.replace(/\w*\.blox\..*/, "md");
          console.log('blox:  updating md update .blox file change', mdFile);
          mdToReact(mdFile);
        } else if (file.includes('/components/src/')) {
          console.log('blox: creating props table for', file);
          const name = file.match(/\w*\.\w*$/)[0].split('.')[0];
          createPropsTable(name, file, PACKAGE_PATH);
        }
      } catch (error) {
        console.log('\x1b[31m', error);
      }
    },
  }
}