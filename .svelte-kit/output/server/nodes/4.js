

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/donations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C1iFrb70.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Bv59FTsO.js","_app/immutable/chunks/DnePrMx2.js"];
export const stylesheets = [];
export const fonts = [];
