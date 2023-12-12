<script>
    import { supabase } from "../supabaseClient";

    export let userId;
    export let brewToUpdate = null;

    let name = "";
    let grindSize = "";
    let preInfusionTime = 0;
    let brewTime = 0;
    let coffeeWaterRatio = "";
    let pours = 0;

    // Reactive statement to update form values when brewToUpdate changes
    $: if (brewToUpdate) {
        name = brewToUpdate.name;
        grindSize = brewToUpdate.grind_size;
        preInfusionTime = brewToUpdate.pre_infusion_time;
        brewTime = brewToUpdate.brew_time;
        coffeeWaterRatio = brewToUpdate.coffee_water_ratio;
        pours = brewToUpdate.pours;
    }

    async function upsertBrew(event) {
        event.preventDefault();

        const brewData = {
            user_id: userId,
            name,
            grind_size: grindSize,
            pre_infusion_time: preInfusionTime,
            brew_time: brewTime,
            coffee_water_ratio: coffeeWaterRatio,
            pours,
        };

        if (brewToUpdate) {
            const { error } = await supabase
                .from("Brews")
                .update(brewData)
                .match({ brew_id: brewToUpdate.brew_id });
            if (error) {
                console.error("Error updating brew", error);
            }
        } else {
            const { error } = await supabase.from("Brews").insert([brewData]);
            if (error) {
                console.error("Error inserting brew", error);
            }
        }
    }
</script>

<div
    class="bg-accent p-4"
    style="width: 33%; min-width: 0; max-width: 1024px; margin: auto; border-radius: 0.5rem"
>
    <div class="form-container">
        <div class="full-width">
            <label
                for="brewName"
                class="block text-sm font-medium text-gray-700"
                >Name of Brew</label
            >
            <input
                id="brewName"
                type="text"
                bind:value={name}
                placeholder="Enter brew name"
                style="width: 33%; justify-content: center"
            />
        </div>

        <div>
            <label
                for="grindSize"
                class="block text-sm font-medium text-gray-700"
                >Grind Size</label
            >
            <input
                id="grindSize"
                type="text"
                placeholder="Enter grind size"
                bind:value={grindSize}
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label
                for="preInfusionTime"
                class="block text-sm font-medium text-gray-700"
                >Pre-Infusion Time</label
            >
            <input
                id="preInfusionTime"
                type="number"
                placeholder="0"
                bind:value={preInfusionTime}
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label
                for="brewTime"
                class="block text-sm font-medium text-gray-700">Brew Time</label
            >
            <input
                id="brewTime"
                type="number"
                placeholder="0"
                bind:value={brewTime}
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label
                for="coffeeWaterRatio"
                class="block text-sm font-medium text-gray-700"
                >Coffee to Water Ratio</label
            >
            <input
                id="coffeeWaterRatio"
                type="text"
                placeholder="1:15"
                bind:value={coffeeWaterRatio}
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label for="pours" class="block text-sm font-medium text-gray-700"
                >Number of Pours</label
            >
            <input
                id="pours"
                type="number"
                placeholder="0"
                bind:value={pours}
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div class="full-width">
            <button
                style="width: 25%; justify-content: center"
                on:click={upsertBrew}>Add Brew</button
            >
        </div>
    </div>
</div>

<style>
    .form-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
    }

    .full-width {
        grid-column: 1 / -1; /* Span full width */
    }

    input,
    button {
        padding: 1rem;
        border-radius: 0.25rem;
    }
</style>
