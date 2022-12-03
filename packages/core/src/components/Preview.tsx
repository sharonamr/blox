import React, { PropsWithChildren, useCallback, useState, useEffect } from "react";
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as reactLib from 'react';
import { transpile } from "../utils/transpiler";

const evalCode = (code: string, scope: Record<string, any>) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map((key) => scope[key]);
  const res = new Function(...scopeKeys, code);
  return res(...scopeValues);
};

const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => (
  <span>
    <p>Something went wrong:</p>
    <pre>{children}</pre>
  </span>
);

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <ErrorMessage>{error.message}</ErrorMessage>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const TranspileError: React.FC<{ msg: string }> = ({ msg }) => (
  <div role="alert">
    <ErrorMessage>{msg}</ErrorMessage>
  </div>
);

const TranspiledElement: React.FC<PropsWithChildren<{ code: string, dependencies: Record<string, any> }>> = ({ code, dependencies }) => {
  const [transpiledCode, setTranspiledCode] = useState("");
  const [transpiledError, setTranspiledError] = useState("");
  useEffect(() => {
    (async () => {
      const transpiledCode = await transpile(code);
      if (transpiledCode instanceof Error) {
        setTranspiledError(transpiledCode.message.split('<stdin>:')[1]);
      } else {
        setTranspiledError("")
        setTranspiledCode(transpiledCode);
      }
    })();
  }, [code]);
  return transpiledError ? <TranspileError msg={transpiledError} /> : (transpiledCode ? <PreviewElement code={transpiledCode} dependencies={dependencies} /> : null)
};

const PreviewElement: React.FC<PropsWithChildren<{ code: string, dependencies: Record<string, any> }>> = ({ code, dependencies }) => {
  const customRequire = useCallback((key: string) => {
    const deps = {
      ...dependencies,
      'react': reactLib,
    };
    const res = (deps as any)[key];
    if (res) {
      return res;
    }
    throw new Error("dependency: " + key + " not found");
  }, [dependencies]);

  const scope = { require: customRequire };
  const _module: any = {
    exports: {},
  };

  evalCode(code, {
    ...scope,
    exports: _module.exports,
    module: _module,
    React,
  });

  const Element = _module.exports.default;
  return Element ? <Element /> : null;
}

export const Preview: React.FC<PropsWithChildren<{ code: string, dependencies: Record<string, any> }>> = ({ code, dependencies }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <TranspiledElement code={code} dependencies={dependencies} />
  </ErrorBoundary>
);