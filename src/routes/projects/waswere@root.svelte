<script context="module">
	export const prerender = true;
</script>

<script>
    import Header from '$lib/header/Header.svelte';

    import './src/waswere.css';
    import banner from './src/waswere2.png';
    import w1 from './src/waswere3.gif';
    import w2 from './src/waswere4.png';
    import w3 from './src/waswere5.png';
    import w4 from './src/waswere6.gif';

    let year = 2022;
</script>

<svelte:head>
	<title>WAS/WERE | A Dead Inside Artist and Their Work</title>
</svelte:head>

<Header />

<div class="main_content">
    <img alt="WAS/WERE banner" src={banner}>

    <div>
        <p>Are you tired? Scared? Anguished? Do you feel weak? Sad? Pathetic? Do you wish you could stand up for yourself? Against the one that hurt you?</p>
        <p>Are you filled with pent up rage?</p>
        <p>Do you want to brutally murder someone and get off while doing it???</p>
        <p>Well this is the place for you!</p>
        <details>
        <summary>Content Warnings 18+</summary>
        transphobia, use of transphobic and homophobic slurs, sadism, descriptions of gore and violence, and suggestive themes.
        </details>

        <marquee>
            <img alt="WAS/WERE screenshot" src={w1}>
            <img alt="WAS/WERE screenshot" src={w2}>
            <img alt="WAS/WERE screenshot" src={w3}>
            <img alt="WAS/WERE screenshot" src={w4}>
        </marquee>


        <hr>
        <p>Includes:
        </p>
        <ul><li>A interactive fiction game played in a browser;</li><li>A pdf version of the game's story;</li><li>And an "Afterthought" pdf/zine discussing some of my thoughts and some stuff about the game.</li></ul>
        <p></p>
        <p>Official playlist:</p>
        <iframe title="Spotify playlist for WAS/WERE" src="https://open.spotify.com/embed/playlist/4mygM52DgP17PU0rE0njbJ?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" width="100%" height="410" frameborder="0"></iframe>
        <hr>
        <p>This was developed for the <a href="https://itch.io/jam/transrage" target="_blank">TRANS FUCKING RAGE JAM</a>.</p>
        <p><a href="https://itch.io/jam/transrage" target="_blank"><img src="https://img.itch.zone/aW1nLzg2MTg5NDAucG5n/original/3qWztR.png" alt="TRANS FUCKING RAGE JAM"></a><br></p>
    </div>

    <iframe title="Itch Widget" style="margin: 0 auto;" frameborder="0" src="https://itch.io/embed/1448604?bg_color=000000&amp;fg_color=c6bce1&amp;link_color=FF78FB&amp;border_color=453232" width="552" height="167"><a href="https://rodfireproductions.itch.io/waswere">WAS/WERE by RodFireProductions</a></iframe>
    <center>Free Community Copies are also avaliable.</center>


</div>

<footer>
    <div>
        <a href='https://ko-fi.com/R6R34PDMQ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
	&#169; 2021-{year} RodFireProductions - All Rights Reserved
	<br>
	Powered by <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and blood.
</footer>

<style>

</style>
