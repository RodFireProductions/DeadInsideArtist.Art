<script>
</script>

<div class="body">

    <div class="main_content">
		<slot>
			<div class="em"><em>This page seems to be empty. Not an error 404 but this is peculiar, don't you think?</em></div>
            <img src="https://http.cat/204.jpg">
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

</style>
