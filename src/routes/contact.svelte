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
	import mastodon from '$lib/assets/icons/mastodon.png';
	import kofi from '$lib/assets/icons/kofi.png';
	import da from '$lib/assets/icons/deviantart.jpg';
	import pronouns from '$lib/assets/icons/pronouns.png';
	import youtube from '$lib/assets/icons/youtube.png';
	import curiouscat from '$lib/assets/icons/curiouscat.png';

	let socials = [
		//{social: "", link: "", at: "", img:  }
		{social: "Ko-fi", link: "https://ko-fi.com/rodfireproductions", at: "RodFireProductions", img: kofi },
		{social: "ArtStation", link: "https://www.artstation.com/RodFireProductions", at: "RodFireProductions", img: artst },
		{social: "Itch.io", link: "https://RodFireProductions.itch.io", at: "RodFireProductions", img: itch },
		{social: "Twitter", link: "https://twitter.com/RodFire8181", at: "@RodFire8181", img: twitter },
		{social: "GitHub", link: "https://github.com/RodFireProductions", at: "RodFireProductions", img: github },
		{social: "Youtube", link: "https://www.youtube.com/channel/UC9x1ux5Qw09CmKCngIFy7kw", at: "RodFireProductions", img: youtube },
		{social: "Mastodon", link: "https://mastodon.art/@rodfire8181", at: "@RodFire8181@mastodon.art", img: mastodon },
		{social: "DeviantArt", link: "https://www.deviantart.com/rodfireproductions", at: "RodFireProductions", img: da },
		{social: "Pronouns.page", link: "https://en.pronouns.page/@RodFire8181", at: "@RodFire8181", img: pronouns },
		{social: "CuriousCat", link: "https://curiouscat.live/RodFireProductions", at: "RodFireProductions", img: curiouscat }
	]
</script>

<svelte:head>
	<title>Contact | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Base>
	<div class="center">
		<h1>Stalk Me!</h1>
		You can email me for <b>business and/or collaborations</b> inquiries at:<br>
		<em>rodrick [at] deadinsideartist.art</em><br>
		For <b>general questions, etc,</b> you can email me here:<br>
		<em>howdy [at] deadinsideartist.art<em><br>
		You can also contact me on other sites as well. Twitter and Discord (RodFire8181#0924) are your best options.
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
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 15px;
}

@media only screen and (max-width: 920px) {
    .social_grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
}
@media only screen and (max-width: 500px) {
    .social_grid { grid-template-columns: 1fr 1fr 1fr; }
}

</style>
