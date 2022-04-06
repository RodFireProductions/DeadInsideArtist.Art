<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Card from '$lib/social_card.svelte';

	import twitter from '$lib/assets/icons/twitter.webp';
	import artst from '$lib/assets/icons/artstation.webp';
	import itch from '$lib/assets/icons/itchio.webp';
	import github from '$lib/assets/icons/github.webp';

	let socials = [
		//{social: "", link: "", at: "", img:  }
		{social: "Twitter", link: "https://twitter.com/RodFire8181", at: "@RodFire8181", img: twitter },
		{social: "ArtStation", link: "https://www.artstation.com/RodFireProductions", at: "RodFireProductions", img: artst },
		{social: "Itch.io", link: "https://RodFireProductions.itch.io", at: "RodFireProductions", img: itch },
		{social: "GitHub", link: "https://github.com/RodFireProductions", at: "RodFireProductions", img: github }
	]
</script>

<svelte:head>
	<title>Contact | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Base>
	<div class="center">
		<h1>Stalk Me!</h1>

		rodrick [at] deadinsideartist.art
	</div>

	<hr>

	<div class="social_grid">
		{#each socials as s}

		<Card social={s.social} at={s.at} link={s.link} img={s.img} />

		{/each}
	</div>

</Base>

<style>

.center { text-align: center; }

.social_grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
}

@media only screen and (max-width: 850px) {
    .social_grid { grid-template-columns: 1fr 1fr; }
}
@media only screen and (max-width: 500px) {
    .social_grid { grid-template-columns: 1fr; }
}

</style>
