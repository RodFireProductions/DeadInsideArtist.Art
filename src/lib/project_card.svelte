<script>

 export let img;

</script>

<article>
    <div class="card_img" style="background: url({img}); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>

    <div class="card_body">
        <span class="card_Title"><slot name="title">Untitled</slot></span>
        <br>
        <span class="card_description"><slot name="description">No description.</slot></span>
    </div>


</article>

<style>

.card_body {
    width: 100%;
}

.card_img {
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
}

.card_Title { text-align: center; }
.card_description { text-align: center; }


/**/
article {
    border-radius: 2px;
    padding: 10px;

    width: 275px;
    height: 300px;

    box-shadow: 0px 0px 5px -2px rgba(31,13,35,0.75);
	-webkit-box-shadow: 0px 0px 5px -2px rgba(31,13,35,0.75);
	-moz-box-shadow: 0px 0px 5px -2px rgba(31,13,35,0.75);
}
</style>
