<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Card from '$lib/project_card.svelte';

	import img1 from '$lib/assets/projects/site.png';
	import img2 from '$lib/assets/projects/meetchalice.webp';
	import img3 from '$lib/assets/projects/hurt.webp';
	import img4 from '$lib/assets/projects/mylittlecatgirl.webp';
	import img5 from '$lib/assets/projects/poseidonorb.webp';
	import img6 from '$lib/assets/projects/bloominghearts.webp';
	import img7 from '$lib/assets/projects/deskdrop.webp';
	import img8 from '$lib/assets/projects/waswere.webp';
	import img9 from '$lib/assets/projects/figurepantry.webp';
	import img10 from '$lib/assets/projects/deadlogs.webp';
	import img11 from '$lib/assets/projects/bloodasher.png';
	import img12 from '$lib/assets/projects/creature.png';
	import img13 from '$lib/assets/projects/leftathome.png';
	import img14 from '$lib/assets/projects/mgla.png';
	import img15 from '$lib/assets/projects/knights.png';
	import img16 from '$lib/assets/projects/Shroom.jpg';
	import img17 from '$lib/assets/projects/unicorns.png';

	// import img from '$lib/assets/projects/';

	let date = "December 27th, 2022";

	let solo = {
		games: [
		{
			name: "Left At Home", type: "game 2022", tech: ['JavaScript', 'HTML', 'CSS', 'Ink'],
			link: "https://rodfireproductions.itch.io/left-at-home", img: img13,
			desc: "Freckles is left at home sick as their partner, Beads, goes out to buy them medication."
		},
		{
			name: "WAS/WERE", type: "game 2022", tech: ['JavaScript', 'HTML', 'CSS', 'Ink'],
			link: "https://rodfireproductions.itch.io/waswere", img: img8,
			desc: "Murdering a person that hurt you is hot, right?"
		},
		{
			name: "The Creature", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/the-creature", img: img12,
			desc: "An injured creature enters your tent at night."
		},
		{
			name: "The Figure in the Pantry", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/figure-in-the-pantry", img: img9,
			desc: "Late night snacks aren't supposed to be like this."
		},
		{
			name: "My Little Cat Girl", type: "game 2019", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/my-little-cat-girl", img: img4,
			desc: "Take in a sickly homeless cat girl and nurse her to health. "
		}
		/*
		{
			name: "", type: "", tech: [],
			link: "", img: null,
			desc: ""
		}
		*/
	],

	writings: [
		{
			name: "WAS/WERE", type: "game 2022", tech: ['JavaScript', 'HTML', 'CSS', 'Ink'],
			link: "https://rodfireproductions.itch.io/waswere", img: img8,
			desc: "Murdering a person that hurt you is hot, right?"
		},
		{
			name: "Rodrick's Unicorns 🦄", type: "zine 2023", tech: null,
			link: "https://rodfireproductions.itch.io/unicorns", img: img17,
			desc: "A zine that shows off a bit of the unicorn design and lore I've been working on for a little bit."
		},
		{
			name: "Meet Chalice<3", type: "zine 2021", tech: null,
			link: "https://rodfireproductions.itch.io/meet-chalice3", img: img2,
			desc: "It's just a simple piece about one of my original characters, Chalice."
		},
		{
			name: "Hurt✂️", type: "zine 2021", tech: null,
			link: "https://rodfireproductions.itch.io/hurt", img: img3,
			desc: "This is just a vent zine about dealing with thoughts of self harm."
		},
		/*
		{
			name: "", type: "", tech: [],
			link: "", img: null,
			desc: ""
		},
		*/
	],

	webdev: [
		{
			name: "This Site", type: "website 2021-present", tech: ['SvelteKit', 'HTML', 'CSS'],
			link: "https://github.com/RodFireProductions/deadinsideartist.art", img: img1,
			desc: "The current site you're looking at!"
		},
		{
			name: "DeadLogs", type: "tool 2022", tech: ['JavaScript', 'HTML', 'CSS'],
			link: "https://deadlogs.shroom.ink/", img: img10,
			desc: "A tool for making static blogs and sites."
		},
		{
			name: "Shroom.Ink", type: "website 2022-present", tech: ['Hugo', 'HTML', 'CSS'],
			link: "https://shroom.ink", img: img16,
			desc: "Drown in the ink that oozes from the inkiest of caps. Be consumed and ripped apart by the holiest of fungi."
		},
		{
			name: "Left At Home", type: "game 2022", tech: ['JavaScript', 'HTML', 'CSS', 'Ink'],
			link: "https://rodfireproductions.itch.io/left-at-home", img: img13,
			desc: "Freckles is left at home sick as their partner, Beads, goes out to buy them medication."
		},
		{
			name: "WAS/WERE", type: "game 2022", tech: ['JavaScript', 'HTML', 'CSS', 'Ink'],
			link: "https://rodfireproductions.itch.io/waswere", img: img8,
			desc: "Murdering a person that hurt you is hot, right?"
		},
		/*
		{
			name: "", type: "", tech: [],
			link: "", img: null,
			desc: ""
		},
		*/
	]
};

	let team = [
		{
			name: "Poseidon's Orb", type: "game 2021", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/poseidons-orb", img: img5,
			desc: "Charlotte is turned into a merperson and threatened by a sea witch!",
			contribute: "coding & cg art"
		},
		{
			name: "Blood of the Covenant", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://opheliaveu.itch.io/blood-of-the-covenant", img: img11,
			desc: "You meet someone in a chilly alleyway at night.",
			contribute: "coding"
		},
		{
			name: "My Grandma's Last Adventure", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/my-grandmas-last-adventure", img: img14,
			desc: "What would you do if your adventuring party was joined by… your grandma?!",
			contribute: "coding & logo"
		},
		{
			name: "The Knight's Dilemma", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://lavinnia.itch.io/the-knights-dilemma", img: img15,
			desc: "When the king is incompetent you face a dilemma: will you try to change his ways or join the rebellion?",
			contribute: "coding"
		},
		/*
		{
			name: "Blooming Hearts!", type: "game 2021", tech: ['Ren\'Py'],
			link: "https://lavinnia.itch.io/blooming-hearts", img: img6,
			desc: "Rowan must teach Penelope, her crush, how to be a magical girl.",
			contribute: "sprite art"
		}
		*/
		/*
		{
			name: "", type: "", tech: [],
			link: "", img: null,
			desc: "",
			contribute: ""
		}
		*/
	]

	let sections = 1;
	let soloprojects = 1;
	import { fade } from 'svelte/transition';

</script>

<svelte:head>
	<title>Portfolio | A Dead Inside Artist and Their Work</title>
	<meta name="title" content="Portfolio | A Dead Inside Artist and Their Work">
</svelte:head>

<Base>
	<h1 class="center">Portfolio</h1>
	<div class="center">
		<p>
			[ Last updated {date} ]
		</p>
		<p>
			View my <a href="https://gallery.deadinsideartist.art/" target="_blank">artwork.</a>
		</p>

	</div>
	<hr>
	<div class="radio_container radio1">
		<label class="radio1_1">
			<input type=radio bind:group={sections} value={1}>
			Solo Projects
		</label>
		<span class="radio1_2">|</span>
		<label class="radio1_3">
			<input type=radio bind:group={sections} value={2}>
			Team Projects
		</label>
	</div>

	<hr>

	{#if sections == 1}
	<section transition:fade>
		<h2 class="center">Solo Projects</h2>

		<div class="radio_container radio2">
			<label class="radio2_1">
				<input type=radio bind:group={soloprojects} value={1}>
				Games
			</label>
			<span class="radio2_mid">|</span>
			<label class="radio2_2">
				<input type=radio bind:group={soloprojects} value={2}>
				Writings
			</label>
			<span class="radio2_mid">|</span>
			<label class="radio2_3">
				<input type=radio bind:group={soloprojects} value={3}>
				Web Dev
			</label>
		</div>
		<hr>
		{#if soloprojects == 1}
		<section transition:fade>
			<h3 class="center">Games</h3>
			<div class="portfolio_grid">
				{#each solo.games as p}
					<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} />
				{/each}
			</div>
		</section>
		{/if}
		{#if soloprojects == 2}
		<section transition:fade>
			<h3 class="center">Writings</h3>
			<div class="portfolio_grid">
				{#each solo.writings as p}
					<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} />
				{/each}
			</div>
		</section>
		{/if}
		{#if soloprojects == 3}
		<section transition:fade>
			<h3 class="center">Web Development</h3>
			<div class="portfolio_grid">
				{#each solo.webdev as p}
					<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} />
				{/each}
			</div>
		</section>
		{/if}
	</section>
	{/if}

	<!--<hr>-->

	{#if sections == 2}
	<section transition:fade>
		<h2 class="center">Team Projects</h2>
		<div class="portfolio_grid">

			{#each team as p}
				<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} part={p.contribute} />
			{/each}

		</div>
	</section>
	{/if}
</Base>

<style>

.radio_container {
	display: grid;
	grid-auto-flow: column;
}

.radio1 {
	grid-template-columns: 1fr 15px 1fr;
}
.radio2 {
	grid-template-columns: 1fr 15px 1fr 15px 1fr;
}

.radio1_1, .radio2_1 {
	text-align: right;
}
.radio1_2, .radio2_2, .radio2_mid {
	text-align: center;
}
.radio1_3, .radio2_3 {
	text-align: left;
}

.portfolio_grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 1300px) {
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
