const Storage = {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  getItem(key: string): string | object {
    const value = localStorage.getItem(key);
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
};

export default Storage;
