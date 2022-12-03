import { PropsWithChildren, useEffect, useState } from "react";
import { Preview } from "./Preview";
import CodeEditor from '@uiw/react-textarea-code-editor';

export const DocsCode: React.FC<PropsWithChildren<{ code: string, dependencies: object }>> = ({ code: defaultCode, dependencies }) => {
  const [code, setCode] = useState(defaultCode);
  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);
  return (
    <>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Edit you blox"
        onChange={(e) => setCode(e.target.value)}
        padding={15}
        className="blox-code-editor"
      />
      <div className="blox-code-preview">
        <Preview code={code} dependencies={dependencies}>docs code: {code}</Preview>
      </div>
    </>
  );
};