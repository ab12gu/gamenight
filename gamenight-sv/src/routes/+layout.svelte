<script lang="ts">
	import 'uno.css';
	import '../css/app.css';
	import favicon from '$lib/assets/triangle.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
