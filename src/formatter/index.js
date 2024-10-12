import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data, 0);
    case 'json':
      return json(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`${formatName} is not supported`);
  }
};
