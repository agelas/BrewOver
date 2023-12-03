<script lang="ts">
    import UserHeader from "./UserHeader.svelte";
    import BrewDisplay from "./BrewDisplay.svelte";

    export let userId; // Expose the prop to get it from the route
</script>

<div>
    <UserHeader {userId} />
    <BrewDisplay {userId} />
</div>
