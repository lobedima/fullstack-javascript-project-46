### Hexlet tests and linter status:
[![Actions Status](https://github.com/lobedima/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/lobedima/fullstack-javascript-project-46/actions)
<a href="https://codeclimate.com/github/lobedima/fullstack-javascript-project-44/test_coverage"><img src="https://api.codeclimate.com/v1/badges/30b12d7fa7ce59b2463f/test_coverage" /></a>
<a href="https://codeclimate.com/github/lobedima/fullstack-javascript-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/30b12d7fa7ce59b2463f/maintainability" /></a>

# gendiff <filepath1> <filepath2>

Находит различия между глубокими и плоскими JSON и YAML файлами в виде stylish.

name1.json
```
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```
name2.json
```
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": {
      "test": "aboba"
    },
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```
## gendiff ./name1.json ./name2.json 

Или gendiff -f ./name1.json ./name2.json или gendiff --format stylish ./name1.json ./name2.json

Output:
```
{
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
}
```
# gendiff --format plain <filepath1> <filepath2>

Находит различия между глубокими и плоскими JSON и YAML файлами в виде plain.

Output:
```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: "blah blah"
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From "" to "so much"
Property 'common.setting6.ops' was added with value: "vops"
Property 'group1.baz' was updated. From "bas" to "bars"
Property 'group1.nest' was updated. From "str" to [complex value]
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```