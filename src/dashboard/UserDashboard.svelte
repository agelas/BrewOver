<script lang="ts">
    import { onMount } from "svelte";
    import UserHeader from "./UserHeader.svelte";
    import { supabase } from "../supabaseClient";

    export let username; // Expose the prop to get it from the route

    onMount(async () => {
        const { data, error } = await supabase.from('Users').select('*').eq('username', username);

        if (error) {
            console.error('Error fetching user: ', error.message, error.details);
        } else {
            username = data[0].username;
        }

    });
</script>

<div>
    <UserHeader {username} />
    /* Content for later */
</div>