<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import './usual.css';
	import './console.js';
	let year = 2022;
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	&#169; 2021-{year} RodFireProductions - All Rights Reserved
	<br>
	Powered by <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and blood.
</footer>

<style>
</style>
