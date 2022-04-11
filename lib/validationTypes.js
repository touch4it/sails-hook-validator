// All the validation types and the method name to validate
const V = require('validator');

// Add isString method to Validator object
V.isString = function (value) {
  return (typeof value === 'string');
};

// Add isBoolean method to Validator object
V.isBoolean = function (value) {
  return (typeof value === 'boolean' || value === 'true' || value === 'false');
};

// Add toBoolean method to Validator object
V.toBoolean = function (value) {
  return (value === 'true' || value === true || value === '1' || value === 1);
};

// Add isDate method to Validator object
V.isDate = function (value) {
  return (V.isRFC3339(value) || V.isISO8601(value));
};

// Add toIntFix method to Validator object to handle numeric output
V.toIntFix = function (value) {
  return Number(V.toInt(value));
};

// Add toFloatFix method to Validator object to handle numeric output
V.toFloatFix = function (value) {
  return Number(V.toFloat(value));
};

module.exports = {
  alpha: {
    method: 'isAlpha',
  },
  alphanumeric: {
    method: 'isAlphanumeric',
  },
  ascii: {
    method: 'isAscii',
  },
  base64: {
    method: 'isBase64',
  },
  boolean: {
    method: 'isBoolean',
    sanitizer: V.toBoolean,
  },
  country2: {
    method: 'isISO31661Alpha2',
  },
  country3: {
    method: 'isISO31661Alpha3',
  },
  creditcard: {
    method: 'isCreditCard',
  },
  date: {
    method: 'isDate',
  },
  email: {
    method: 'isEmail',
  },
  empty: {
    method: 'isEmpty',
  },
  escape: {
    method: 'escape',
  },
  fqdn: {
    method: 'isFQDN',
  },
  float: {
    method: 'isFloat',
    sanitizer: V.toFloatFix,
  },
  hex: {
    method: 'isHexadecimal',
  },
  hexcolor: {
    method: 'isHexColor',
  },
  int: {
    method: 'isInt',
    sanitizer: V.toIntFix,
  },
  ip: {
    method: 'isIP',
  },
  iprange: {
    method: 'isIPRange',
  },
  isbn: {
    method: 'isISBN',
  },
  issn: {
    method: 'isISSN',
  },
  isin: {
    method: 'isISIN',
  },
  isrc: {
    method: 'isISRC',
  },
  json: {
    method: 'isJSON',
  },
  jwt: {
    method: 'isJWT',
  },
  latlon: {
    method: 'isLatLong',
  },
  lower: {
    method: 'isLowercase',
  },
  ltrim: {
    method: 'ltrim',
  },
  macaddress: {
    method: 'isMACAddress',
  },
  md5: {
    method: 'isMD5',
  },
  mobilephone: {
    method: 'isMobilePhone',
  },
  mongoid: {
    method: 'isMongoId',
  },
  numeric: {
    method: 'isNumeric',
  },
  port: {
    method: 'isPort',
  },
  rtrim: {
    method: 'rtrim',
  },
  string: {
    sanitizer: 'toString',
  },
  toboolean: {
    sanitizer: 'toBoolean',
  },
  todate: {
    method: 'isDate',
    sanitizer: V.toDate,
    type: 'date',
  },
  toemail: {
    method: 'isEmail',
    sanitizer: V.normalizeEmail,
    type: 'email',
  },
  tolower: {
    method: 'isString',
    sanitizer: toLowerCase,
    type: 'string',
  },
  toupper: {
    method: 'isString',
    sanitizer: toUpperCase,
    type: 'string',
  },
  trim: {
    method: 'trim',
  },
  url: {
    method: 'isURL',
  },
  unescape: {
    method: 'unescape',
  },
  uuid: {
    method: 'isUUID',
  },
  upper: {
    method: 'isUppercase',
  },

};

/*
* ToLowerCase - Function
* @params - value {String}
* Check if is posible to set the string .toLowerCase and if it is lowerCase
*/
function toLowerCase(value) {
  return value.toLowerCase();
}

/*
* ToLowerCase - Function
* @params - value {String}
* Check if is posible to set the string .toLowerCase and if it is lowerCase
*/
function toUpperCase(value) {
  return value.toUpperCase();
}
