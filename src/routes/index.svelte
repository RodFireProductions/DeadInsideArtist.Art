<script context="module">
	export const prerender = true;
</script>

<script>
	//import Base from '$lib/base.svelte';

	import banner from '$lib/assets/banner2.png';
	import title from '$lib/assets/bannertitle.png';

	let now = new Date();
	let day; let time; let ye = now.getFullYear();
    if (now.getDay() == 0 ) { day = "Sunday" };
    if (now.getDay() == 1 ) { day = "Monday" };
    if (now.getDay() == 2 ) { day = "Tuesday" };
    if (now.getDay() == 3 ) { day = "Wednesday" };
    if (now.getDay() == 4 ) { day = "Thursday" };
    if (now.getDay() == 5 ) { day = "Friday" };
    if (now.getDay() == 6 ) { day = "Saturday" };

	if ( now.getHours() < 11 && now.getHours() > 4 ) { time = "morning"; }
	else if ( now.getHours() < 19 && now.getHours() > 12 ) { time = "afternoon"; }
	else { time = "night"; }

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

</script>

<svelte:head>
	<title>RodFireProductions | A Dead Inside Artist and Their Work</title>
</svelte:head>

<svelte:body on:mousemove={handleMousemove}/>


<div class="banner">
	<img src={banner} alt="Banner" id="banner" draggable="false">
	<img src={title} alt="RodFireProductions" id="title" draggable="false">
</div>

<div class="area">
	<h1 class="smaller">Welcome to my domain.</h1>
	<div>I'm an artist and game/web developer.</div>
	<a sveltekit:prefetch href="/about">Learn</a> more about me or look at my <a sveltekit:prefetch href="/portfolio">work</a>.
	<br>—☆—
	<div >
		What a fine {day} {time} it is. How's {ye} going? Treating you well??<br>
		<div>
			Anyways, I can see you:<br>
			<div style="display:grid; grid-auto-flow: column;"><code>{m.x} ☆ {m.y}</code></div>
		</div>
	</div>
</div>

<!--
<Base>

	Have a nice {day}!<br>

	I should have a page that talks about the history of my website.
	A ethical code page.

</Base>
-->

<style>
/*@media only screen and (max-width: 625px) {}*/
@media only screen and (max-width: 625px) {
	.area {
		width: 90% !important;
	}
	.banner { width: 90% !important; top: 50px; }
}
@media only screen and (max-width: 420px) {
	#banner { display: none !important; }
	#title { top: 10px !important; }
	.area {
		margin-top: 110px !important;
	}
}
@media only screen and (max-width: 300px) {
	.area { width: 100% !important; }
	.banner { width: 100% !important; }
}

.smaller { font-size: 1.2em; }

.area {
	text-align: center;

	position: relative;
	top: -50px;
	width: 75%;
	margin: 5px auto;
	margin-bottom: -40px;

    padding: 20px;
    min-height: 20px;

	color: var(--text-color);
    background-color: var(--back-color);

	box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);
	-webkit-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);

    -webkit-transition: 0.4s;
    transition: 0.4s;
}

/* Banner */
.banner {
	width: 80%;
	margin: 0px auto;
	position: relative;
}

#banner {
	display: block;
	width: 75%;
	margin: auto;
}

#title {
	display: block;
	z-index: 2;
	width: 100%;
	position: relative;
	top: -100px;
	margin: auto;
}

</style>
