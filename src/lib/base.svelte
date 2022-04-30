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

</style>
