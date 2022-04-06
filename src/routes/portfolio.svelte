<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Card from '$lib/project_card.svelte';

	import banner from '$lib/assets/banner2.png';
	import site from '$lib/assets/site.png';


	let te = ['RenPy', 'Python', 'NodeJS', 'Svelte'];
	let tee = ['SvelteKit', 'HTML', 'CSS'];

</script>

<svelte:head>
	<title>Portfolio | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Base>
	Last updated April 4, 2022

	<div>
	Languages: JavaScript, Svelte, Python<br>
	Frontend: HTML, CSS, SvelteKit<br>
	Backend: NodeJS<br>
	Game Development: Ren'Py<br>
	Art/Visuals: FireAlpaca, Photoshop, After Effects<br>
	</div>
	<br>
	grid-auto-flow: dense; if gallery

	<hr>

	List projects here.

	<div class="portfolio_grid">

		<Card tech={tee} img={site} link="https://deadinsideartist.art">
			<span slot="title">RodFireProductions Site</span>
			<span slot="description">The current site you're looking at!</span>
			<span slot="link">Go to Home Page</span>
		</Card>

	</div>
</Base>


<style>

.portfolio_grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 1250px) {
    .portfolio_grid {
		grid-template-columns: 1fr 1fr;
		justify-items: center !important;
	}
}
@media only screen and (max-width: 800px) {
    .portfolio_grid {
		grid-template-columns: 1fr;
		justify-items: center !important;
	}
}

</style>
