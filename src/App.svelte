<script lang="ts">
	import { Route, Router } from "svelte-routing";
	import Header from "./Header.svelte";
	import Home from "./Home.svelte";
	import About from "./About.svelte";
	import RegisterForm from "./RegisterForm.svelte";
    import UserDashboard from "./dashboard/UserDashboard.svelte";
</script>

<Router>
	<main>
		<Route path="/">
			<Header />
			<Home />
			<About />
			<RegisterForm />
		</Route>
		<Route path="/dashboard/:userId" let:params>
			<UserDashboard userId={params.userId} />
		</Route>
	</main>
</Router>

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