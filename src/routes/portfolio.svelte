<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Card from '$lib/project_card.svelte';

	import img1 from '$lib/assets/projects/site.webp';
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

	// import img from '$lib/assets/projects/';

	let date = "August 2nd, 2022";

	let solo = [
		{
			name: "This Site", type: "website 2021-2022", tech: ['SvelteKit', 'HTML', 'CSS'],
			link: "https://github.com/RodFireProductions/deadinsideartist.art", img: img1,
			desc: "The current site you're looking at!"
		},
		{
			name: "DeadLogs", type: "tool 2022", tech: ['JavaScript', 'HTML', 'CSS'],
			link: "https://deadlogs.shroom.ink/", img: img10,
			desc: "A tool for making static blogs and sites."
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
			name: "Meet Chalice<3", type: "zine 2021", tech: null,
			link: "https://rodfireproductions.itch.io/meet-chalice3", img: img2,
			desc: "It's just a simple piece about one of my original characters, Chalice."
		},
		{
			name: "Hurt✂️", type: "zine 2021", tech: null,
			link: "https://rodfireproductions.itch.io/hurt", img: img3,
			desc: "This is just a vent zine about dealing with thoughts of self harm."
		},
		{
			name: "Desktop Backdrop", type: "tool 2021", tech: ['ElectronJs'],
			link: "https://rodfireproductions.itch.io/desktop-backdrop", img: img7,
			desc: "Covers up that pesky, cluttered desktop."
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
	]

	let team = [
		{
			name: "Poseidon's Orb", type: "game 2021", tech: ['Ren\'Py'],
			link: "https://rodfireproductions.itch.io/poseidons-orb", img: img5,
			desc: "Charlotte is turned into a merperson and threatened by a sea witch!",
			contribute: "coding & cg art"
		},
		{
			name: "Blooming Hearts!", type: "game 2021", tech: ['Ren\'Py'],
			link: "https://lavinnia.itch.io/blooming-hearts", img: img6,
			desc: "Rowan must teach Penelope, her crush, how to be a magical girl.",
			contribute: "sprite art"
		},
		{
			name: "Blood of the Covenant", type: "game 2022", tech: ['Ren\'Py'],
			link: "https://opheliaveu.itch.io/blood-of-the-covenant", img: img11,
			desc: "You meet someone in a chilly alleyway at night.",
			contribute: "coding"
		}
		/*
		{
			name: "", type: "", tech: [],
			link: "", img: null,
			desc: "",
			contribute: ""
		}
		*/
	]

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
			You can view my art here: <a target="_blank" href="https://www.artstation.com/RodFireProductions">ArtStation</a>,
			<a target="_blank" href="https://www.deviantart.com/rodfireproductions">DeviantArt</a>,
			and this random <a target="_blank" href="https://deadinsideartist.carrd.co/">Carrd</a> I made.
		</p>

	</div>
	<hr>

	<h2 class="center">Solo Projects</h2>
	<div class="portfolio_grid">

		{#each solo as p}
			<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} />
		{/each}

	</div>

	<hr>

	<h2 class="center">Team Projects</h2>
	<div class="portfolio_grid">

		{#each team as p}
			<Card tech={p.tech} img={p.img} link={p.link} desc={p.desc} name={p.name} type={p.type} part={p.contribute} />
		{/each}

	</div>
</Base>


<style>

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
