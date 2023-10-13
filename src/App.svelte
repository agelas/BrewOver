<script lang="ts">
	import { Route, Router, Link } from "svelte-routing";
	import Header from "./Header.svelte";
	import Home from "./Home.svelte";
	import About from "./About.svelte";
	import RegisterForm from "./RegisterForm.svelte";
</script>

<Router>
	<Route path="/" component={Home} />
</Router>

<main>
	<Header />
	<Home />
	<About />
	<RegisterForm />
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