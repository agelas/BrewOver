<script lang="ts">
    import { onMount } from "svelte";
    import UserHeader from "./UserHeader.svelte";
    import NewBrewForm from "./NewBrewForm.svelte";
    import { supabase } from "../supabaseClient";

    export let userId; // Expose the prop to get it from the route

    let username = "tester";
</script>

<div>
    <UserHeader {username} />
    <NewBrewForm {userId} />
</div>
