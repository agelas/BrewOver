<script>
    export let brew;
</script>

<div
    class="bg-accent p-4"
    style="width: 33%; min-width: 0; max-width: 1024px; margin: auto; border-radius: 0.5rem"
>
    <div class="form-container">
        <div class="full-width">
            <div class="brew-detail font-primary text-4xl">{brew.name}</div>
        </div>

        <div>
            <label
                for="brew card"
                class="font-primary"
                >Grind Size</label
            >
            <div class="brew-detail">{brew.grind_size}</div>
        </div>

        <div>
            <label
                for="brew card"
                class="font-primary"
                >Pre-Infusion Time</label
            >
            <div class="brew-detail">{brew.pre_infusion_time} seconds</div>
        </div>

        <div>
            <label
                for="brew card"
                class="font-primary">Brew Time</label
            >
            <div class="brew-detail">{brew.brew_time} seconds</div>
        </div>

        <div>
            <label
                for="brew card"
                class="font-primary"
                >Coffee to Water Ratio</label
            >
            <div class="brew-detail">{brew.coffee_water_ratio}</div>
        </div>

        <div>
            <label
                for="brew card"
                class="font-primary"
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
