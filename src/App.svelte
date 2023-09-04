<script lang="ts">
	import Header from "./Header.svelte";
	import Home from "./Home.svelte";
</script>

<main>
	<Header />
	<Home />
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>