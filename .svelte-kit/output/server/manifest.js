export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BblspdLX.js",app:"_app/immutable/entry/app.bOeHn4us.js",imports:["_app/immutable/entry/start.BblspdLX.js","_app/immutable/chunks/bECKZk8f.js","_app/immutable/chunks/BtYgc0IT.js","_app/immutable/chunks/DnePrMx2.js","_app/immutable/chunks/DT_dTNx_.js","_app/immutable/chunks/DXnaIwbT.js","_app/immutable/entry/app.bOeHn4us.js","_app/immutable/chunks/DnePrMx2.js","_app/immutable/chunks/BtYgc0IT.js","_app/immutable/chunks/DT_dTNx_.js","_app/immutable/chunks/DXnaIwbT.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/details","/donations","/rant","/subscribe"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
