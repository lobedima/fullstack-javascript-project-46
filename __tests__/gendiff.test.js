import genDiff from '../src/index.js';

const answer1 = `
"{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}"
`;

const answer3 = `
"Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]"
`;

const answer4 = '"[{"key":"common","type":"nested","children":[{"key":"follow","type":"added","value":false},{"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"removed","value":200},{"key":"setting3","type":"changed","value1":true,"value2":null},{"key":"setting4","type":"added","value":"blah blah"},{"key":"setting5","type":"added","value":{"key5":"value5"}},{"key":"setting6","type":"nested","children":[{"key":"doge","type":"nested","children":[{"key":"wow","type":"changed","value1":"","value2":"so much"}]},{"key":"key","type":"unchanged","value":"value"},{"key":"ops","type":"added","value":"vops"}]}]},{"key":"group1","type":"nested","children":[{"key":"baz","type":"changed","value1":"bas","value2":"bars"},{"key":"foo","type":"unchanged","value":"bar"},{"key":"nest","type":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","type":"removed","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","type":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]"';

test('comparison json files', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toMatchInlineSnapshot(answer1);
});

test('comparison yaml files', () => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toMatchInlineSnapshot(answer1);
});

test('comparison json files plain', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toMatchInlineSnapshot(answer3);
});

test('comparison yaml files plain', () => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toMatchInlineSnapshot(answer3);
});

test('comparison json files json', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toMatchInlineSnapshot(answer4);
});

test('comparison yaml files json', () => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toMatchInlineSnapshot(answer4);
});
