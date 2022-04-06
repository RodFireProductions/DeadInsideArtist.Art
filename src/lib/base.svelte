<script>
</script>

<div class="body">

    <div class="main_content">
		<slot>
			<div class="em"><em>This page seems to be empty. Not an error 404 but this is peculiar, don't you think?</em></div>
            <img src="https://http.cat/204.jpg" draggable="false">
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
