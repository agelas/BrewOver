<script lang="ts">
	import Header from "./Header.svelte";
	export let name: string;
</script>

<main>
	<Header />
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