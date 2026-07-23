import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const configuredBasePath = process.env.BASE_PATH?.trim() ?? '';
const trimmedBasePath = configuredBasePath.replace(/^\/+|\/+$/g, '');
const basePath = trimmedBasePath ? `/${trimmedBasePath}` : '';

if (!basePath) {
  console.log('No deployment base path configured; generated URLs stay root-relative.');
  process.exit(0);
}

const supportedExtensions = new Set(['.html', '.css']);
let updatedFiles = 0;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(path) : [path];
  }));

  return files.flat();
}

function prefixRootRelativeUrls(source) {
  return source
    .replace(/\b(href|src|poster|action)=(['"])\/(?!\/)/g, `$1=$2${basePath}/`)
    .replace(/\bsrcset=(['"])(.*?)\1/g, (attribute, quote, value) => {
      const prefixedValue = value
        .split(',')
        .map((candidate) => candidate.replace(/^(\s*)\/(?!\/)/, `$1${basePath}/`))
        .join(',');
      return `srcset=${quote}${prefixedValue}${quote}`;
    })
    .replace(/url\((['"]?)\/(?!\/)/g, `url($1${basePath}/`);
}

for (const file of await collectFiles(outputDirectory)) {
  if (!supportedExtensions.has(extname(file))) continue;

  const original = await readFile(file, 'utf8');
  const updated = prefixRootRelativeUrls(original);

  if (updated !== original) {
    await writeFile(file, updated);
    updatedFiles += 1;
  }
}

console.log(`Prefixed root-relative URLs with ${basePath} in ${updatedFiles} generated files.`);
