<script lang="ts">
    import { navigate } from "svelte-routing";
    import { supabase } from "../supabaseClient";
    import { onMount } from "svelte";

    export let userId;
    let username = "";

    async function fetchUsername() {
        const { data, error } = await supabase
            .from("Profiles")
            .select("username")
            .eq("user_id", userId)
            .single();
        if (error) {
            console.error("Error fetching username", error);
        } else {
            username = data.username;
        }
    }

    async function handleLogout() {
        let { error } = await supabase.auth.signOut();
        navigate(`/`);
    }

    onMount(fetchUsername);
</script>

<header class="header bg-primary">
    <div class="text-4xl font-primary">BrewOver</div>
    <div class="user-display">
        <h3>Hi {username}</h3>
        <button
            class="bg-accent hover:bg-accent-hover rounded"
            on:click={handleLogout}>Logout</button
        >
    </div>
</header>

<style>
    .header {
        display: flex;
        padding: 16px;
        justify-content: space-between;
    }

    .user-display {
        display: flex;
        justify-content: space-evenly;
    }

    h3 {
        font-size: 24px;
        margin: 0;
        margin-right: 24px;
    }

    button {
        padding: 4px 16px;
    }
</style>
