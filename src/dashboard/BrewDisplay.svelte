<script>
    import BrewCard from "./BrewCard.svelte";
    import NewBrewForm from "./NewBrewForm.svelte";
    import { onMount } from "svelte";
    import { supabase } from "../supabaseClient";

    export let userId;

    let brews = [];
    let currentBrewIndex = 0;

    async function fetchBrews() {
        // Fetch brews
        const { data, error } = await supabase
            .from("Brews")
            .select("*")
            .eq("user_id", userId);
        if (error) {
            console.error("Error fetching brews", error);
        } else {
            brews = data;
        }
    }

    onMount(fetchBrews);

    function handleAddBrew() {
        // Dispatch an event to open NewBrewForm, deal with this later
    }

    function goToNextBrew() {
        // Increment current brew on click
        if (currentBrewIndex < brews.length - 1) {
            currentBrewIndex++;
        }
    }

    function goToPreviousBrew() {
        // Decrement current brew on click
        if (currentBrewIndex > 0) {
            currentBrewIndex--;
        }
    }
</script>

<section id="brewDisplay" class="flex bg-primary w-full justify-center">
    <div class="content-container" style="width: 100%">
        {#if brews.length > 0}
            <div class="flex items-center justify-center">
                <button on:click={goToPreviousBrew}>Previous</button>
                <BrewCard brew={brews[currentBrewIndex]} />
                <button on:click={goToNextBrew}>Next</button>
            </div>
        {:else}
            <p>No brews found. Add your first brew!</p>
            <NewBrewForm {userId} />
        {/if}
    </div>
</section>

<style>
    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
    }
</style>
