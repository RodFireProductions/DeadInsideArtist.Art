<script>

    export let img;
    export let link;
    export let tech;
    export let desc;
    export let name;
    export let type;
    export let part;

    let technologies = "";

    if (tech) {
        for (let index = 0; index < tech.length; index++) {
            technologies += "<span class='tech'>" + tech[index] + "</span>";
        }
    }

</script>

<article>
    <div class="card_img" style="background: url({img}); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>

    <div class="card_body">
        <a href={link} target="_blank"><span class="card_Title">{@html name}</span></a>
        <br>
        <span class="card_description">{@html desc}</span>
        <br>
        {#if tech != null}
            <span class="card_tech">{@html technologies}</span>
        <br>
        {/if}
        <span class="card_type">{@html type}</span>
        <br>
        {#if part}
            <span class="card_part">{@html part}</span>
        {/if}

    </div>


</article>

<style>

.card_img {
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
}


.card_body {
    width: 100%;
    text-align: center;
}

.card_Title {
    font-size: 1.1em;
    font-weight: 500;
}
.card_description {

}

.card_type, .card_part {
    font-family: monospace;
}

@media only screen and (max-width: 1250px) {
    article {
        width: 90% !important;
    }
}
/*
@media only screen and (max-width: 800px) {
    article {
        width: 275px !important;
    }
}
*/

/**/
article {
    padding: 10px;

    margin: 5px;

    width: 275px;
    height: 320px;

    border: #666 1px dotted;

    box-shadow: 0px 0px 4px -2px var(--text-color);
	-webkit-box-shadow: 0px 0px 4px -2px var(--text-color);
}
</style>
