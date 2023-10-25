<script>
    import { supabase } from "./supabaseClient";
    import { navigate } from "svelte-routing";

    let username = "";
    let password = "";

    async function login() {
        // Check if user with given username and password exists
        let { data: user, error } = await supabase
            .from("Users")
            .select("username")
            .eq("username", username)
            .eq("password", password);

        if (error) {
            alert("Error logging in: ", error.message, error.details);
            return;
        }

        if (user && user.length) {
            navigate(`/dashboard/${username}`);
        } else {
            alert("Incorrect username or password");
        }
    }
</script>
