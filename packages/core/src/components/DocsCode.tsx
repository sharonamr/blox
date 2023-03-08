import { PropsWithChildren, useEffect, useState } from "react";
import { Preview } from "./Preview";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';

export const DocsCode: React.FC<PropsWithChildren<{ code: string, dependencies: object }>> = ({ code: defaultCode, dependencies }) => {
  const [code, setCode] = useState(defaultCode);
  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);
  return (
    <>
      <div className="blox-code-container">
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.jsx, 'jsx')}
            padding={10}
            className="blox-code-editor"
        />
        <button className="blox-code-copy" onClick={() => navigator.clipboard.writeText(code)}>Copy Code</button>
      </div>
      <div className="blox-code-preview">
        <Preview code={code} dependencies={dependencies}>docs code: {code}</Preview>
      </div>
    </>
  );
};