<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';

</script>

<svelte:head>
	<title>RodFireProductions | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Base>
    <div class="center">
		<!--
        <div style="font-size: 2em;">Error 404</div>
		-->
		<img src="https://http.cat/404.jpg" draggable="false">

        <div>This page doesn't exist.</div>
        <div>Head to <a sveltekit:prefetch href="/">home</a>?</div>

		Image provided by <a target="_blank" href="https://http.cat/">Http.cat</a>
    </div>

</Base>

<style>

img {
	width: 40%;
	display: block;
	margin: 25px auto;
}

@media only screen and (max-width: 625px) {
	img { width: 90%; }
}

</style>
