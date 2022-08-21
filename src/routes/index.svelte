<script context="module">
	export const prerender = true;
</script>

<script>
	import Base from '$lib/base.svelte';
	import Quote from '$lib/quote.svelte';

	import banner from '$lib/assets/banner2.png';
	import title from '$lib/assets/bannertitle.png';
	import title2 from '$lib/assets/rodricktitle.png';
	import pfp from '$lib/assets/pfp.png';

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

	//let m = { x: 0, y: 0 };

	//function handleMousemove(event) {
	//	m.x = event.clientX;
	//	m.y = event.clientY;
	//}

</script>

<svelte:head>
	<title>RodFireProductions | A Dead Inside Artist and Their Work</title>
	<meta name="title" content="RodFireProductions | A Dead Inside Artist and Their Work">
</svelte:head>

<!--<svelte:body on:mousemove={handleMousemove}/>-->
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
					I'm a queer, Afro Mexican artist, developer, and full-time student.
				</p>

				<p>
					I hope you're having a lovely {day} {time}.
				</p>
			</div>
		</div>

	</section>

	<hr>

	<section id="contact" class="center">
		<h2>Stalk me</h2>
		<div>
			<a href="https://ko-fi.com/rodfireproductions" target="_blank">Ko-fi</a>
			|
			<a href="https://www.artstation.com/RodFireProductions" target="_blank">ArtStation</a>
			|
			<a href="https://RodFireProductions.itch.io" target="_blank">Itch.io</a>
			|
			<a href="https://twitter.com/RodFire8181" target="_blank">Twitter</a>
			|
			<a href="https://github.com/RodFireProductions" target="_blank">GitHub</a>
			|
			<a href="https://mastodon.art/@rodfire8181" target="_blank">Mastodon.art</a>
			|
			<!--<a href="https://en.pronouns.page/@RodFire8181" target="_blank">Pronouns</a>
			|-->
			<a href="https://www.youtube.com/channel/UC9x1ux5Qw09CmKCngIFy7kw" target="_blank">YouTube</a>
		</div>

		<p>
			<a href="https://linktr.ee/rodfireproductions" target="_blank">Full list of links.</a>
		</p>

		<h2>Contact me</h2>

		<p>
			You can email me for <b>business and/or collaborations</b> inquiries at
			<code>howdy [at] deadinsideartist [dot] art</code> or DM me on Twitter.
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
