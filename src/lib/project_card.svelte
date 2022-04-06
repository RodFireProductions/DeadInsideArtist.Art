<script>

    export let img;
    export let link;
    export let tech;

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
        <span class="card_Title"><slot name="title">Untitled</slot></span>
        <br>
        <span class="card_description"><slot name="description">No description.</slot></span>
        <br>
        {#if tech}
            <span class="card_tech">{@html technologies}</span>
        <br>
        {/if}
        {#if link}
            <a class="card_link" href={link} target="_blank"><slot name="link"></slot></a>
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

@media only screen and (max-width: 1250px) {
    article {
        width: 90% !important;
    }
}
@media only screen and (max-width: 800px) {
    article {
        width: 275px !important;
    }
}


/**/
article {
    padding: 10px;

    margin: 5px;

    width: 275px;
    height: 320px;

    border: #666 1px dotted;

    box-shadow: 0px 0px 8px -2px rgba(31,13,35,0.5);
	-webkit-box-shadow: 0px 0px 8px -2px rgba(31,13,35,0.5);
	-moz-box-shadow: 0px 0px 8px -2px rgba(31,13,35,0.5);
}
</style>
