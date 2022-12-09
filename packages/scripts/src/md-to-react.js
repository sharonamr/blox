import { marked } from "marked";
import Handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { getFileContent } from "./scripts-utils.js";

const replacePropsTable = (content) => {
  const ret = content.replace(
    '{{props-table}}',
    `<PropsTable table={propsTable} />`
    );
  return ret;
}

const replaceBlocks = (content, packagePath) => {
  let ret = content;
  const searchResult = content.match(/{{.*block.*}}/g);
  searchResult?.forEach(block => {
    const blockFile = block.split('block:')[1].slice(0, -2);
    const blockContent = getFileContent(`${packagePath}/data/${blockFile}`).replace(/`/g, '\\`');
    ret = ret.replace(block, `<DocsCode dependencies={dependencies} code={\`${blockContent}\`} />`);
  });
  return ret;
}

export const mdToReact = (filePath) => {
  const packagePath = path.resolve(filePath, '../../');
  const fileName = filePath.split('/').pop().slice(0, -3);
  const dirName = `${packagePath}/src/generated-docs`;

  const templateContent = getFileContent(`${packagePath}/blox/Page.template.hbs`);
  const mdContent = getFileContent(`${packagePath}/data/${fileName}.md`);

  const template = Handlebars.compile(templateContent);
  const propsTablePath = mdContent.includes('{{props-table}}') ? `./${fileName}.props-table.json` : null;
  const compiledTemplate = template({ mdContent: marked.parse(mdContent), name: fileName, propsTablePath });

  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(`${dirName}/${fileName}Demo.jsx`, replacePropsTable(replaceBlocks(compiledTemplate, packagePath)));
}


