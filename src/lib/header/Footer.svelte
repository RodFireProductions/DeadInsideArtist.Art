<script>
    let year = 2022;
</script>

<footer>
	<p>&#169; 2021-{year} RodFireProductions. All Rights Reserved.</p>
    <img src="https://deadinsideartist.art/DeadInsideArtist.Art.gif">
	<p>Powered by <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and blood.</p>
</footer>
<p></p>
<style>

footer {
    color: var(--text-color);
    position: relative;
    text-align: center;
    align-self: start;
    font-size: 0.8em;

    margin: auto;
    width: 300px;
    padding: 10px;
    background-color: var(--back-color);
}

p {
    margin: 5px;
}

img {
    display: block;
    margin: 0px auto;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}

</style>
