import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import bundleSize from 'rollup-plugin-bundle-size';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: 'inline',
        strict: false,
        compact: true
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: false }),
      terser(),
      bundleSize(),
    ],
    external: ['react', 'react-dom']
}