import typescript from '@rollup/plugin-typescript';
import glob from 'glob';

let tsFiles;
glob("gen/**/*.ts", {}, function (er, files) {
  tsFiles = files
  console.log("Files", files)
})

console.log("tsFiles", tsFiles)

const configs = tsFiles && tsFiles.map(input => ({
  external: ['long', 'protobufjs'],
  input,
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [typescript()]
}))

export default {
  external: ['long', 'protobufjs/minimal'],
  input: "gen/greeter.ts",
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [typescript()]
};