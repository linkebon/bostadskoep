import ls from 'local-storage';

export const saveState = (key, state) => ls.set(key, state);

export const getState = (key) => ls.get(key);

export const clear = () => ls.clear();