import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const stylishRes = fs.readFileSync(getFixturePath('result.txt'), 'utf-8');
const plainRes = fs.readFileSync(getFixturePath('answerPLain.txt'), 'utf-8');
const jsonRes = fs.readFileSync(getFixturePath('answerJSON.txt'), 'utf-8');

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');

const yamlFile1 = getFixturePath('file1.yml');
const yamlFile2 = getFixturePath('file2.yml');

test('comparison json files', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toMatchInlineSnapshot(stylishRes);
});

test('comparison yaml files', () => {
  expect(genDiff(yamlFile1, yamlFile2)).toMatchInlineSnapshot(stylishRes);
});

test('comparison json files plain', () => {
  expect(genDiff(jsonFile1, jsonFile2, 'plain')).toMatchInlineSnapshot(plainRes);
});

test('comparison yaml files plain', () => {
  expect(genDiff(yamlFile1, yamlFile2, 'plain')).toMatchInlineSnapshot(plainRes);
});

test('comparison json files json', () => {
  expect(genDiff(jsonFile1, jsonFile2, 'json')).toMatchInlineSnapshot(jsonRes);
});

test('comparison yaml files json', () => {
  expect(genDiff(yamlFile1, yamlFile2, 'json')).toMatchInlineSnapshot(jsonRes);
});
