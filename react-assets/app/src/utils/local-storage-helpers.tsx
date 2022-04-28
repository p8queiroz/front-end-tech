// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const persistState = (storageKey: string, state: Record<string, any>): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};
//todo

export const getIntialState = (storageKey: string): Record<string, undefined> | undefined => {
  const savedState = window.localStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? `{}`);
  } catch (e) {
    console.error(`Error loading persisted local state : ` + storageKey);
    return undefined;
  }
};
