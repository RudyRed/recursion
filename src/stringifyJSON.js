// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = obj => {

  var strArray = arr =>
    '[' + arr.map(item => stringifyJSON(item)).join(',') + ']';

  var isObject = obj =>
    Object.prototype.toString.call(obj) === '[object Object]';

  var strObject = obj => {
    var strings = [];

    for(var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        strings.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + strings.join(',') + '}';
  };

  if (Array.isArray(obj)) {
    return strArray(obj);
  } else if (isObject(obj)) {
    return strObject(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return obj + '';
  }
};
