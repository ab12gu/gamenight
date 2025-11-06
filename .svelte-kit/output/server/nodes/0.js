import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.eluNL5Qs.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DnePrMx2.js","_app/immutable/chunks/DT_dTNx_.js","_app/immutable/chunks/DXnaIwbT.js"];
export const stylesheets = ["_app/immutable/assets/0.CtnRUxUY.css"];
export const fonts = [];
