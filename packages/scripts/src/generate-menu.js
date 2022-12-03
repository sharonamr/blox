import Handlebars from "handlebars";
import fs from "fs";
import { getFileContent } from "./scripts-utils.js";
 
export const generateMenu = (packagePath, files) => { 
  const templateContent = getFileContent(`${packagePath}/blox/Menu.template.hbs`);
  const template = Handlebars.compile(templateContent);
  const components = files.map(file => file.slice(0, -3));
  const compiledTemplate = template({ components });
  const dirName = `${packagePath}/src/generated-docs`;
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(`${dirName}/Menu.jsx`, compiledTemplate);
}
