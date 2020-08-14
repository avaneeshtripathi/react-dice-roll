import { terser } from "rollup-plugin-terser";
import sass from 'rollup-plugin-sass';
import bundleSize from 'rollup-plugin-bundle-size';
import cleanup from 'rollup-plugin-cleanup';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: false }),
    cleanup(),
    terser(),
    bundleSize(),
  ],
  external: ['react', 'react-dom']
}