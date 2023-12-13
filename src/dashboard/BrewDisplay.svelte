<script>
    import BrewCard from "./BrewCard.svelte";
    import NewBrewForm from "./NewBrewForm.svelte";
    import { onMount } from "svelte";
    import { supabase } from "../supabaseClient";

    export let userId;

    let brews = [];
    let currentBrewIndex = 0;
    let showUpdateForm = false;
    let showAddForm = false;
    let brewToUpdate = null;

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
            if (brews.length === 0) {
                showNewBrewForm = true;
            }
        }
    }

    onMount(fetchBrews);

    function handleRefresh() {
        showAddForm = false;
        showUpdateForm = false;
        brewToUpdate = null;
        fetchBrews();
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

    function handleUpdate(event) {
        const { brew_id } = event.detail;
        brewToUpdate = brews.find((b) => b.brew_id === brew_id);
        showUpdateForm = true;
        console.log("Try to update", brew_id, brewToUpdate);
    }

    async function handleRemove(event) {
        const { brew_id } = event.detail;

        const shouldDelete = confirm(
            "Are you sure you want to delete this brew?",
        );

        if (shouldDelete) {
            const { error } = await supabase
                .from("Brews")
                .delete()
                .match({ brew_id });

            if (error) {
                console.error("Error removing brew", error);
            } else {
                // Remove brew from local state
                brews = brews.filter((brew) => brew.brew_id != brew_id);
            }
        }
    }
</script>

<section id="brewDisplay" class="flex bg-primary w-full justify-center">
    <div class="content-container" style="width: 100%">
        {#if showUpdateForm}
            <NewBrewForm {userId} {brewToUpdate} on:refresh={handleRefresh} />
        {:else if showAddForm}
            <NewBrewForm {userId} on:refresh={handleRefresh} />
            <button on:click={() => (showAddForm = !showAddForm)}>
                Cancel
            </button>
        {:else if brews.length > 0}
            <div class="flex items-center justify-center">
                <button on:click={goToPreviousBrew}>Previous</button>
                <BrewCard
                    brew={brews[currentBrewIndex]}
                    on:update={handleUpdate}
                    on:remove={handleRemove}
                />
                <button on:click={goToNextBrew}>Next</button>
            </div>
            <button on:click={() => (showAddForm = !showAddForm)}>
                Add Brew
            </button>
        {:else}
            <p>No brews found. Add your first brew!</p>
            <NewBrewForm {userId} on:refresh={handleRefresh} />
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
