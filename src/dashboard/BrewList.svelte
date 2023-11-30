<script>
    import BrewItem from "./BrewItem.svelte";
    import { onMount } from "svelte";
    import { supabase } from "../supabaseClient";

    export let userId;
    export let on:addBrew; // Dispatch an event

    let brews = [];
    
    async function fetchBrews() {
        // Fetch brews
    }

    onMount(fetchBrews);

    function handleAddBrew() {
        // Dispatch an event to open NewBrewForm
    }

    function goToNextBrew() {
        // Increment current brew
    }

    function goToPreviousBrew() {
        // Decrement current brew
    }
</script>