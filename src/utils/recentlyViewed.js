const STORAGE_KEY = "recentlyViewed";
const MAX_ITEMS = 20;

export const getRecentlyViewed = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addRecentlyViewed = (item) => {
  try {
    const items = getRecentlyViewed();
    const filtered = items.filter(
      (existing) => !(existing.id === item.id && existing.type === item.type)
    );
    filtered.unshift(item);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(filtered.slice(0, MAX_ITEMS))
    );
  } catch {}
};

export const clearRecentlyViewed = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
};
