export const isBoolean = (val: any): boolean => typeof val === "boolean";

export const isDateValid = (val: any): boolean =>
  !Number.isNaN(new Date(val).valueOf());

export const isEmpty = (val: any): boolean =>
  val === null || !(Object.keys(val) || val).length;

export const isEven = (num: number): boolean => num % 2 === 0;

export const isFunction = (val: any): boolean => typeof val === "function";

export const isISOString = (val: any): boolean => {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
};

export const isLowerCase = (str: string): boolean => str === str.toLowerCase();

export const isNil = (val: any): boolean =>
  val === undefined || val === null || val === "";

export const isNull = (val: any): boolean => val === null;

export const isNumber = (n: any): boolean => {
  const num: number = parseFloat(n);
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) === n;
};

export const isObject = (obj: any): boolean => obj === Object(obj);

export const isOdd = (num: number): boolean => num % 2 === 1;

export const isString = (val: any): boolean => typeof val === "string";

export const isUpperCase = (str: string): boolean => str === str.toUpperCase();

export const isUndefined = (val: any): boolean => val === undefined;

export const isValidJSON = (str: any): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
