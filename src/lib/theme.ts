export const THEME_STORAGE_KEY = 'theme';

/**
 * Runs before first paint (inlined in <head>) so the page never flashes the wrong theme.
 * Falls back to the visitor's OS preference when nothing is stored.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){}})();`;
