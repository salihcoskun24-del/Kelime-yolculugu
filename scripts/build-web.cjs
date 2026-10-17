require('./validate-vocabulary.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'www');
const output = path.join(root, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(source, output, { recursive: true });
console.log('Web uygulaması dist/ klasörüne hazırlandı.');
