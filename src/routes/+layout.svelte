<script lang="ts">
	import 'uno.css';
	import '../css/app.css';
	import favicon from '$lib/assets/triangle.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
    <a href="/">Home</a>
    <a href="/details">Details</a>
    <a href="/rant">Rant</a>
    <a href="/subscribe">Subscribe</a>
    <a href="/donations">Donations</a>
</nav>

{@render children?.()}
