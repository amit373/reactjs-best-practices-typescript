const getFromLocalStorage = (key: string): object | null => {
  try {
    const item = window.localStorage.getItem(key) as any;
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(`Error: Value not get in key:${key}`);
    return null;
  }
};

const setToLocalStorage = <T>(key: string, data: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(`Error: Value not set in key:${key}`);
  }
};

const removeFromLocalStorage = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(`Error: Value not remove in key:${key}`);
  }
};

const getFromSessionStorage = (key: string): object | null => {
  try {
    const item = window.localStorage.getItem(key) as any;
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(`Error: Value not get in key:${key}`);
    return null;
  }
};

const setToSessionStorage = <T>(key: string, data: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(`Error: Value not set in key:${key}`);
  }
};

const removeFromSessionStorage = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(`Error: Value not remove in key:${key}`);
  }
};

export const storageService = {
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
  getFromSessionStorage,
  setToSessionStorage,
  removeFromSessionStorage,
};
