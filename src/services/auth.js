export const TOKEN_KEY = 'challenge-dow-quimica-transcription';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);