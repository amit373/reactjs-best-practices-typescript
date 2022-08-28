/* eslint-disable no-unused-vars */
export const wordsToArray = (str: string, pattern = /[^a-zA-Z-]+/): string[] =>
  str.split(pattern).filter(Boolean);

export const uniq = (arr: any[]): any[] => [...(new Set(arr) as any)];

export const uniqBy = (arr: any[], fn: any) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x: any) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

export const truncateString = (str: string, num: number): string =>
  str.length > num ? `${str?.slice(0, num > 3 ? num - 3 : num)}...` : str;

export const truncateStringAtWhitespace = (
  str: string,
  lim: number,
  ending: string = "..."
): string => {
  if (str?.length <= lim) return str;
  const lastSpace = str?.slice(0, lim - ending.length + 1).lastIndexOf(" ");
  return (
    // eslint-disable-next-line no-unsafe-optional-chaining
    str?.slice(0, lastSpace > 0 ? lastSpace : lim - ending.length) + ending
  );
};

export const toCurrency = (
  n: number,
  curr: string = "INR",
  LanguageFormat = undefined
): string =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);

export const take = (arr: any[], n: number = 1): any[] => arr.slice(0, n);

export const takeRightUntil = (arr: any[], fn: any): any[] => {
  const array = [...arr].reverse().entries() as any;
  // eslint-disable-next-line no-restricted-syntax
  for (const [i, val] of array) {
    if (fn(val)) return i === 0 ? [] : arr.slice(-i);
  }
  return arr;
};

export const sumBy = (arr: any[], fn: any) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc: any, val) => acc + val, 0);

export const sum = (...arr: number[]): number =>
  [...arr].reduce((acc, val) => acc + val, 0);

export const stripHTMLTags = (str: string): string =>
  str?.replace(/<[^>]*>/g, "");

export const splitLines = (str: string) => str?.split(/\r?\n/);

export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const countSize = (val: any): number =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;

export const reverseString = (str: any): string => [...str].reverse().join("");

export const reverseNumber = (n: any): number =>
  parseFloat(`${n}`.split("").reverse().join("")) * Math.sign(n);

export const renameKeys = (keysMap: any, obj: any): any =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );

export const remove = (arr: any[], func: any): any[] =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

export const randomIntegerInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomIntArrayInRange = (
  min: number,
  max: number,
  n: number = 1
): number[] =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

export const padNumber = (n: number, l: number): string =>
  `${n}`.padStart(l, "0");

export const orderBy = (
  arr: any[],
  props: any,
  orders: "desc" | "asc"
): any[] =>
  [...arr].sort((a, b) =>
    props.reduce((acc: number, prop: string | number, i: number) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        // eslint-disable-next-line no-param-reassign
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

export const mergeSortedArrays = (a: any[], b: any[]): any[] => {
  const _a = [...a];
  const _b = [...b];
  return Array.from({ length: _a.length + _b.length }, () => {
    if (!_a.length) return _b.shift();
    if (!_b.length) return _a.shift();
    return _a[0] > _b[0] ? _b.shift() : _a.shift();
  });
};

export const groupBy = (arr: any[], fn: any): any =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc: any, val: any, i: number) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

export const detectLanguage = (defaultLang = "en-US") =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLang;

export const detectDeviceType = (): "Mobile" | "Desktop" =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

export const countBy = (arr: any[], fn: any) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc: any, val: any) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

export const debouncePromise = (fn: any, ms = 0) => {
  let timeoutId: any;
  const pending: {
    // eslint-disable-next-line no-unused-vars
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
  }[] = [];
  return (...args: any) =>
    new Promise((res, rej) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentPending = [...pending];
        pending.length = 0;
        Promise.resolve(fn.apply(this, args)).then(
          (data) => {
            currentPending.forEach(({ resolve }) => resolve(data));
          },
          (error) => {
            currentPending.forEach(({ reject }) => reject(error));
          }
        );
      }, ms);
      pending.push({ resolve: res, reject: rej });
    });
};

export const capitalize = ([first, ...rest]: any, lowerRest = false): string =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

export const averageBy = (arr: any, fn: any): number =>
  arr
    .map(typeof fn === "function" ? fn : (val: { [x: string]: any }) => val[fn])
    .reduce((acc: any, val: any) => acc + val, 0) / arr.length;

export const average = (...nubs: number[]): number =>
  nubs.reduce((acc, val) => acc + val, 0) / nubs.length;
