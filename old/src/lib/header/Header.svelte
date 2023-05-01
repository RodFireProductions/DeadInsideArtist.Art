<script>
	import { page } from '$app/stores';

	import home from '$lib/assets/eye.png';

	/*
	function theme() {
		let x = document.getElementById("theme");
		if (x.checked == true) {
			// dark
			document.documentElement.style.setProperty("--back-color", "#1f0d23");
			document.documentElement.style.setProperty("--text-color", "#F8FFFF");
			document.documentElement.style.setProperty("--a", "lightblue");
			document.documentElement.style.setProperty("--t", "var(--grad-color2)");

		} else {
			// light
			document.documentElement.style.setProperty("--back-color", "#F8FFFF");
			document.documentElement.style.setProperty("--text-color", "#1f0d23");
			document.documentElement.style.setProperty("--a", "darkblue");
			document.documentElement.style.setProperty("--t", "#ddd");

		}
	}
	*/

</script>

<header>

	<!--
	<div id="toggle" class="noselect header">
				<input id="theme" name="theme" type="checkbox" on:click={theme} aria-label="Dark/Light Mode Switch" hidden>
				<label for="theme" class="switch theme" aria-label="Dark/Light Mode Switch">Dark/Light Mode Switch</label>
	</div>
	-->

	<nav class="header">

		<a aria-label="Home button" sveltekit:prefetch href="/"><img draggable="false" id="homebutton" alt="Home button" class="noselect" src={home}></a>

		<div class="navbuttons">
			<div class:active={$page.url.pathname === '/portfolio'}>
				<a sveltekit:prefetch href="/portfolio">Portfolio</a>
			</div>
			<!--
			<div class:active={$page.url.pathname === '/commissions'}>
				<a sveltekit:prefetch href="/commissions">Commissions</a>
			</div>
			-->
			<div class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</div>
		</div>
	</nav>
</header>

<style>

.header { z-index: 5; }

a {
    color: var(--text-color);
    text-decoration: none;
}
a:hover {
    color: white;
}

nav {
	position: fixed;
	top: 10px;
	left: 10px;
	display: block;

	display: grid;
	grid-template-columns: 50px 1fr;
}

/* Buttons */

.navbuttons {
	background: var(--back-color);
	display: grid;
	grid-auto-flow: column;

	/*border-radius: 15px;*/
	position: relative;
	top: 10px;
	height: 20px;
	padding: 7px;
	padding-top: 3px;

	box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.5);
	-webkit-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.5);
}

.navbuttons div {
	padding-left: 3px;
	padding-right: 3px;
	text-align: center;
}

/* Home button */

#homebutton {
    z-index: 3;
    width: 50px;
    height: 50px;

    align-self: center;
    transition: 0.4s;
}
#homebutton:hover {
    transition: 0.4s;
    filter: invert(100%);
}


/* Toggle */

/*
label:hover { cursor: pointer; }
label {
	color: #ffffff00;
}

.theme { top: 20px }

.switch {
    background-color: var(--back-color);
    width: 40px;
    height: 18px;

    border-radius: 50px;
    padding: 2px;

    position: fixed;
    right: .5em;
    z-index: 2;

	box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.5);
	-webkit-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.5);
}

.switch::before {
    content: '';
    width: 18px;
    height: 18px;
    background-color: var(--text-color);
    position: absolute;
    border-radius: 50px;
    transition: all 350ms cubic-bezier(0, 0.95, 0.38, 0.98), background 150ms ease;
    transform-origin: right center;
}

input:checked + .switch:before {
    transform: translateX(120%);
}
*/
</style>
