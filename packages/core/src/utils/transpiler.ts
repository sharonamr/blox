import * as esbuild from 'esbuild-wasm';
// @ts-ignore
import esbuildWASMUrl from 'esbuild-wasm/esbuild.wasm?url';

export const initialize = async () => {
	await esbuild.initialize({
		wasmURL: esbuildWASMUrl,
		worker: true,
	});
}

export const transpile = async (code: string): Promise<string | Error> => {
	try {
		const res = await esbuild.transform(code, {
			loader: 'jsx',
			format: 'cjs',
			// format: 'esm',
			target: 'es2015',
		});
		return res.code;
	} catch (error: any) {
		return error;
	}
};
