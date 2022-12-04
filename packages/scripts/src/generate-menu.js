import Handlebars from "handlebars";
import fs from "fs";
import { getFileContent } from "./scripts-utils.js";

export const generateMenu = async (packagePath, files) => {
  const templateContent = getFileContent(`${packagePath}/blox/Menu.template.hbs`);
  const template = Handlebars.compile(templateContent);
  const components = files.map(file => file.slice(0, -3));
  const { default: sortFunc } = await import(`${packagePath}/blox/menu.sort.js`);
  const compiledTemplate = template({ components: sortFunc(components) });
  const dirName = `${packagePath}/src/generated-docs`;
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(`${dirName}/Menu.jsx`, compiledTemplate);
}
