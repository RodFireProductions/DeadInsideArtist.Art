<script context="module">
	export const prerender = true;
</script>

<script>
	//import Base from '$lib/base.svelte';

	import banner from '$lib/assets/banner2.png';
	import title from '$lib/assets/bannertitle.png';

	let now = new Date();
	let day;
    if (now.getDay() == 0 ) { day = "Sunday" };
    if (now.getDay() == 1 ) { day = "Monday" };
    if (now.getDay() == 2 ) { day = "Tuesday" };
    if (now.getDay() == 3 ) { day = "Wednesday" };
    if (now.getDay() == 4 ) { day = "Thursday" };
    if (now.getDay() == 5 ) { day = "Friday" };
    if (now.getDay() == 6 ) { day = "Saturday" };

</script>

<svelte:head>
	<title>RodFireProductions | A Dead Inside Artist and Their Work</title>
</svelte:head>


<div class="banner">
	<img src={banner} alt="Banner" id="banner">
	<img src={title} alt="RodFireProductions" id="title">
</div>

<div class="area">
	Welcome to my domain.
</div>

<!--
<Base>

	Have a nice {day}!<br>

	I should have a page that talks about the history of my website.
	A ethical code page.

</Base>
-->

<style>

.area {
	text-align: center;

	position: relative;
	top: -50px;
	width: 75%;
	margin: 5px auto;

	display: grid;
    grid-auto-flow: row;
    padding: 20px;
    min-height: 20px;

	color: var(--text-color);
    background-color: var(--back-color);

	box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);
	-webkit-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);
	-moz-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);

    -webkit-transition: 0.4s;
    transition: 0.4s;
}

/* Banner */
.banner {
	width: 80%;
	margin: 0px auto;
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
