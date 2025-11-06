
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/details" | "/donations" | "/rant" | "/subscribe";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/details": Record<string, never>;
			"/donations": Record<string, never>;
			"/rant": Record<string, never>;
			"/subscribe": Record<string, never>
		};
		Pathname(): "/" | "/details" | "/details/" | "/donations" | "/donations/" | "/rant" | "/rant/" | "/subscribe" | "/subscribe/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}