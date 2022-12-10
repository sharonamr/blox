import { PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import { Preview } from './Preview';

const StyledEditor = styled(Editor).attrs((props) => ({
    className: 'blox-code-editor',
}))`
  margin-bottom: 1rem;
  background-color: #111827;
  color: #d1d5db;
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
`;

const StyledCodePreview = styled.div.attrs((props) => ({
    className: 'blox-code-preview',
}))`
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #f3f4f6;
  border-style: solid;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const DocsCode: React.FC<
  PropsWithChildren<{ code: string; dependencies: object }>
> = ({ code: defaultCode, dependencies }) => {
  const [code, setCode] = useState(defaultCode);
  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);
  return (
    <>
      <StyledEditor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.jsx, 'jsx')}
        padding={10}
      />
      <StyledCodePreview>
        <Preview code={code} dependencies={dependencies}>
          docs code: {code}
        </Preview>
      </StyledCodePreview>
    </>
  );
};
