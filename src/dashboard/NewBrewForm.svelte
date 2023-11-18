<script>
    import { supabase } from "../supabaseClient";
    import { onMount } from "svelte";

    export let userId;

    let name = "";
    let grindSize = "";
    let preInfusionTime = 0;
    let brewTime = 0;
    let coffeeWaterRatio = "";
    let pours = 0;

    async function addBrew() {
        const { data, error } = await supabase.from("Brews").insert([
            {
                user_id: userId,
                name,
                grind_size: grindSize,
                pre_infusion_time: preInfusionTime,
                brew_time: brewTime,
                coffee_water_ratio: coffeeWaterRatio,
                pours,
                // timestamp should be done by supabase hopefully
            },
        ]);

        if (error) {
            console.error("Error inserting brew", error);
        }
    }
</script>

<form on:submit|preventDefault={addBrew}>
    <input type="text" bind:value={name} placeholder="Name of Brew" required />
    <input
        type="text"
        bind:value={grindSize}
        placeholder="Grind Size"
        required
    />
    <input
        type="number"
        bind:value={preInfusionTime}
        placeholder="Pre-Infusion Time"
        min="0"
        required
    />
    <input
        type="number"
        bind:value={brewTime}
        placeholder="Brew Time"
        min="0"
        required
    />
    <input
        type="text"
        bind:value={coffeeWaterRatio}
        placeholder="Coffee to Water Ratio"
        required
    />
    <input
        type="number"
        bind:value={pours}
        placeholder="Number of Pours"
        min="0"
        required
    />
    <button type="submit">Add Brew</button>
</form>
