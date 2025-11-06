

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rant/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DLVh015N.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Bv59FTsO.js","_app/immutable/chunks/DnePrMx2.js"];
export const stylesheets = [];
export const fonts = [];
