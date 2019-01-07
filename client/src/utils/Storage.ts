const Storage = {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  getItem(key: string): string | object {
    const value = localStorage.getItem(key);
    if (value === null) {
      throw Error('No Value Matching Key');
    }
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  deleteItem(key: string) {
    localStorage.removeItem(key);
  },
};

export default Storage;
