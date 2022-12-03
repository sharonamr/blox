import Handlebars from "handlebars";
import fs from "fs";
import { getFileContent } from "./scripts-utils.js";
 
export const generateRoutes = (packagePath, files) => { 
  const templateContent = getFileContent(`${packagePath}/blox/Routes.template.hbs`);
  const template = Handlebars.compile(templateContent);
  const components = files.map(file => file.slice(0, -3));
  const compiledTemplate = template({ components });
  const dirName = `${packagePath}/src/generated-docs`;
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(`${dirName}/Routes.jsx`, compiledTemplate);
}
