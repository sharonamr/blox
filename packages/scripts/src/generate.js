import { mdToReact } from '../src/md-to-react.js';
import { generateMenu } from '../src/generate-menu.js';
import { generateRoutes } from '../src/generate-routes.js';
import { getMDFiles } from './scripts-utils.js';
import { createPropsTable } from '../src/create-props-table.js';

const mdFiles = getMDFiles();

generateMenu(process.cwd(), mdFiles);
generateRoutes(process.cwd(), mdFiles);

mdFiles.forEach(file => {
  mdToReact(`${process.cwd()}/data/${file}`);
});

mdFiles.map(file => file.slice(0, -3)).forEach(name => {
  createPropsTable(name, `../components/src/${name}/${name}.tsx`, process.cwd());
});
