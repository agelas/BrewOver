<script>
    export let brew;
</script>

<div
    class="bg-accent p-4"
    style="width: 33%; min-width: 0; max-width: 1024px; margin: auto; border-radius: 0.5rem"
>
    <div class="form-container">
        <div class="full-width">
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Name of Brew</label
            >
            <div class="brew-detail">{brew.name}</div>
        </div>

        <div>
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Grind Size</label
            >
            <div class="brew-detail">{brew.grindSize}</div>
        </div>

        <div>
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Pre-Infusion Time</label
            >
            <div class="brew-detail">{brew.preInfusionTime} seconds</div>
        </div>

        <div>
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Brew Time</label
            >
            <div class="brew-detail">{brew.brewTime} seconds</div>
        </div>

        <div>
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Coffee to Water Ratio</label
            >
            <div class="brew-detail">{brew.coffeeWaterRatio}</div>
        </div>

        <div>
            <label for="brew card" class="block text-sm font-medium text-gray-700"
                >Number of Pours</label
            >
            <div class="brew-detail">{brew.pours}</div>
        </div>
    </div>
</div>

<style>
    .brew-detail {
        padding: 1rem;
        border-radius: 0.25rem;
        background: gray; 
    }

    .form-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
    }

    .full-width {
        grid-column: 1 / -1; 
    }
</style>
