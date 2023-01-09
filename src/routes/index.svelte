<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Quote from '$lib/quote.svelte';

	import title from '$lib/assets/bannertitle.png';
	import title2 from '$lib/assets/rodricktitle.png';
	import pfp from '$lib/assets/pfp.png';
	import meettheartist from '$lib/assets/MeetTheArtist.jpg';

	let now = new Date();
	let day; let time; let ye = now.getFullYear();
    if (now.getDay() == 0 ) { day = "Sunday" };
    if (now.getDay() == 1 ) { day = "Monday" };
    if (now.getDay() == 2 ) { day = "Tuesday" };
    if (now.getDay() == 3 ) { day = "Wednesday" };
    if (now.getDay() == 4 ) { day = "Thursday" };
    if (now.getDay() == 5 ) { day = "Friday" };
    if (now.getDay() == 6 ) { day = "Saturday" };

	if ( now.getHours() <= 11 && now.getHours() >= 0 ) { time = "morning"; }
	else if ( now.getHours() <= 19 && now.getHours() >= 12 ) { time = "afternoon"; }
	else { time = "night"; }

</script>

<svelte:head>
	<title>RodFireProductions | A Dead Inside Artist and Their Work</title>
	<meta name="title" content="RodFireProductions | A Dead Inside Artist and Their Work">
</svelte:head>

<svelte:body/>


<Base>
	<h1><img draggable="false" src={title} alt="RodFireProductions"></h1>

	<hr>

	<section id="about">
		<div id="per">
			<img draggable="false" src={pfp} alt="Rodrick's persona" id="persona">
		</div>
		<div id="bio">
			<div>
				<h2><img draggable="false" src={title2} alt="Rodrick" id="rodrick"></h2>

				<p>
					Howdy! I'm your nonbinary demigod.
				</p>

				<p>
					I'm a queer, Afro Mexican artist, web and game developer, and full-time student.
				</p>

				<p>
					I hope you're having a lovely {day} {time}.
				</p>
			</div>
		</div>

	</section>

	<hr>

	<section class="center">
		<h3>My #MeetTheArtist 2023:</h3>
		<br>
		<img draggable="false" src={meettheartist} alt="Rodrick's Meet The Artist alt text: Meet The Artist: Rodrick (they/them) is an Afro Mexican, aquarius, ageosexual, panromantic, nonbinary artist. They love visual novels, mushrooms (not for eating; they just think they're pretty), and coding. They dislike bigots, onions, and drawing hands and feet (though they are trying). They use FireAlpaca and a Wacom Intuos5 tablet to make their art." id="meetrodrick">
		<p>
			View my <a href="https://gallery.deadinsideartist.art/" target="_blank">artwork.</a>
		</p>

	</section>

	<hr>

	<Quote quote="When I die, you stay away from my funeral." person="Squidward Tentacles" media="SpongeBob SquarePants"/>

</Base>

<style>

h1 { line-height: inherit; }

img { width: 100%; }

/* About */
#about {
	display: grid;
	grid-template-columns: 50% 1fr;
	text-align: left;
}
@media only screen and (max-width: 700px) {
    #about {
		grid-template-columns: 1fr;
		text-align: center;
	}
	#about img { display:block; margin: 5px auto; }
	#persona { float: none !important; }
}


#per { padding: 20px; }
#persona {
	border-radius: 50%;
	float: right;
	width: 80%;
}

#rodrick {
	width: 60%;
}

#bio {
	display:flex;
	align-content: center;
	align-items: center;
	justify-content: center;
}

</style>
