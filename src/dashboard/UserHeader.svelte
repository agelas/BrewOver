<script>
    import { navigate } from "svelte-routing/src/history";
</script>

<section id="user-header" class="user-header">
    <div class="header-items">
        /* Display username here */
        <button on:click={() => navigate('/')}>Logout</button>
    </div>
</section>

<style>
    .user-header {
        padding: 20px;
        justify-content: flex-end; /* should hopefully smush everything right */
    }

    .user-header .header-items {
        display: flex;
        justify-content: space-between;
    }
</style>