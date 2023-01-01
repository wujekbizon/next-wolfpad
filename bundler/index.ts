import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let initialized = false;

const codeProcessor = async (rawCode: string) => {
  if (!initialized) {
    try {
      await esbuild.initialize({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.15.14/esbuild.wasm',
      });

      initialized = true;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  }

  try {
    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
    });
    return {
      code: result.outputFiles[0].text,
      err: '',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        code: '',
        err: error.message,
      };
    }
  }
};

export default codeProcessor;
