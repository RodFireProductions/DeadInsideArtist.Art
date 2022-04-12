<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import title from '$lib/assets/rodricktitle.png'
	import pfp from '$lib/assets/pfp.png'

</script>

<svelte:head>
	<title>About | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Base>
	<div class="top">
		<img id="pfp" src={pfp} alt="Rodrick's Picture">
		<div id="bio">
			<div>
			<img draggable="false" id="rodrick" src={title} alt="Rodrick">
			<span class="pronouns">[they/them]</span>
			</div>
			<div>
				Howdy, I'm Rodrick!<br>
				I'm a queer and trans Afro Mexican.
				<br>
				I'm a student that does art, game development, and web development.
				<br><br>
				<em>Being mentally ill in this economy is going to be the end of me.</em>
				<br>
				<figure>
					<blockquote>When I die, you stay away from my funeral.</blockquote>
					<figcaption>- Squidward Tentacles, <cite>Spongbob Squarepants.</cite></figcaption>
				</figure>

			</div>
		</div>
	</div>


</Base>

<style>

.top {
	display: grid;
	grid-template-columns: 40% 1fr;
	grid-template-rows: 1fr;
}

#pfp {
	display: block;
	width: 100%;
	margin: auto;

	border-radius: 50%;

	justify-self: center;
}

#bio { width: 100%; }
#bio div {
	text-align: center;
}

.pronouns {
	position: relative;
	top: -10px;
	font-size: 0.7em;
	opacity: 0.5;
}

#rodrick {
	display: block;
	width: 70%;
	margin: auto;
}

@media only screen and (max-width: 700px) {
    .top {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}

	#pfp { height: 300px; width: auto; }
}

figure {
	width: 70%;
	margin: 5px auto;
}


</style>
