<script>
    export let img;
    export let link;
    export let social;
    export let at;


</script>


<!--
<article>
    <img src={img} alt="">
    <div class="text">
        <div>{social}</div>
        <a href={link} target="_blank" alt="{social}">{at}</a>
    </div>
</article>
-->

<article>
    <a href={link} target="_blank" title="{at}'s {social}"><img src={img} alt=""></a>
</article>

<style>

article {
    aspect-ratio: 1 / 1;
    width: 100%;
    /*
    display: grid;
    grid-template-columns: 30% 70%;
    */

    margin: 2px;

    display:flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    background: var(--t);

    border: #666 1px dotted;

    box-shadow: 0px 0px 8px -2px rgba(31,13,35,0.5);
	-webkit-box-shadow: 0px 0px 8px -2px rgba(31,13,35,0.5);
}

/*

@media only screen and (max-width: 850px) {
    article{ grid-template-columns: 20% 1fr; }
}
@media only screen and (max-width: 400px) {
    article {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
    .text { text-align: center; }
    article img { max-width: 50% !important; }
}
*/

article img {
    display: block;
    max-width: 95%;
    max-height: 95%;

    align-self: center;

    margin: auto;
}

.text {
    padding: 10px;
    overflow-wrap: break-word;
}

</style>
