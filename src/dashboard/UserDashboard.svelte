<script lang="ts">
    import UserHeader from "./UserHeader.svelte";
    import BrewDisplay from "./BrewDisplay.svelte";

    export let userId; // Expose the prop to get it from the route

    let username = "tester";
</script>

<div>
    <UserHeader {username} />
    <BrewDisplay {userId} />
</div>
