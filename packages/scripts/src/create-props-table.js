import docgen from "react-docgen-typescript";
import fs from "fs";

export const createPropsTable = (name, file, packagePath) => {
  if (!fs.existsSync(file)) {
    return;
  }
  const dirName = `${packagePath}/src/generated-docs`;
  const customParser = docgen.withDefaultConfig();
  const docs = customParser.parse(file);
  const json = JSON.stringify(docs[0], null, 2);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(`${dirName}/${name}.props-table.json`, json);
};