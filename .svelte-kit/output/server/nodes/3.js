

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/details/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.v7UO_GRx.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Bv59FTsO.js","_app/immutable/chunks/DnePrMx2.js"];
export const stylesheets = [];
export const fonts = [];
