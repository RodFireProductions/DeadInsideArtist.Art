<script>
</script>

<div class="body">

    <div class="main_content">
		<slot>
            <h1 class="center">This page seems to be empty.</h1>
			<div class="em"><em>Not an error 404 but this is peculiar, don't you think?</em></div>
            <img src="https://http.cat/204.jpg" draggable="false" alt="Error 204">
            <div class="em">Image provided by <a target="_blank" href="https://http.cat/">Http.cat</a></div>
		</slot>
	</div>

</div>

<style>

.em {
    text-align: center;
}

img {
	width: 40%;
	display: block;
	margin: 25px auto;
}

@media only screen and (max-width: 625px) {
	img { width: 90%; }
}
@media only screen and (max-width: 400px) {
	img { width: 400px !important; }
}

/* Main */

.main_content {
    color: var(--text-color);
    /*background: linear-gradient(360deg, rgba(17,7,22,0.5) 0%, rgba(64,62,64,0) 100%)*/
    background-color: var(--back-color);
    width: 65%;

    display: grid;
    grid-auto-flow: row;
    margin: 5px auto;
    margin-top: 60px;
    padding: 25px;
    min-height: 20px;

	box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);
	-webkit-box-shadow: 0px 0px 12px -2px rgba(31,13,35,0.75);

    -webkit-transition: 0.4s;
    transition: 0.4s;
}

@media only screen and (max-width: 625px) {
	.main_content { width: 85% !important; }
}
@media only screen and (max-width: 300px) {
	.main_content {
		width: 100% !important;
		margin: 0px;
		margin-top: 60px;
	}
}

</style>
