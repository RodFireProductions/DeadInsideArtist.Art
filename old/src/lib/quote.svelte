<script>

    export let quote;
    export let person;
    export let media;

</script>



<figure>
    <blockquote>{quote}</blockquote>
    <figcaption>- {person}, <cite>{media}.</cite></figcaption>
</figure>


<style>

figure {
	background: var(--q);
	color: #F8FFFF;
	text-align: center;
	border-radius: 5px;
	line-height: 10px;
	padding: 5px;
	padding-top: 0px;
	margin: 5px auto;

    width: 50%;
}
@media all and (max-width: 625px) {
    figure { width: 100%; }
}

figcaption {
	position: relative;
	top: -15px;
	font-size: .8em;
}

blockquote:before {
    content: "\201C";
	font-size: 1.8em;
	padding: 2px;
	font-family: serif;
}

blockquote {
    position: relative;
    top: -10px;
	padding: 5px;
	font-family: serif;
	font-size: 1.1em;
	line-height: normal;
}
</style>
