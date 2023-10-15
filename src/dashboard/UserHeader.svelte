<script lang="ts">
    import { navigate } from "svelte-routing/src/history";
    export let username: string;
</script>

<header class="header bg-primary">
    <h3>Hi {username}</h3>
</header>

<style>
    .header {
        padding: 16px 0;
        text-align: center;
    }

    h3 {
        font-size: 24px;
        margin: 0;
    }
</style>