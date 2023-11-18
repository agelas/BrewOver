<script lang="ts">
    import { onMount } from "svelte";
    import UserHeader from "./UserHeader.svelte";
    import NewBrewForm from "./NewBrewForm.svelte";
    import { supabase } from "../supabaseClient";

    export let username; // Expose the prop to get it from the route
    let userId;

    onMount(async () => {
        const { data, error } = await supabase
            .from("Users")
            .select("*")
            .eq("username", username);

        if (error) {
            console.error(
                "Error fetching user: ",
                error.message,
                error.details
            );
        } else if (data) {
            username = data[0].username;
            userId = data[0].user_id;
        }
    });
</script>

<div>
    <UserHeader {username} />
    <NewBrewForm {userId} />
</div>
