<script>
  import { supabase } from "./supabaseClient";

  let username = "";
  let password = "";

  async function register() {
    // Check if user exists
    let { data: user } = await supabase
      .from("Users")
      .select("username")
      .eq("username", username);

    if (user && user.length) {
      alert("Username already exists");
      return;
    }

    const { error } = await supabase
      .from("Users")
      .insert([{ username: username, password: password }]);

    if (error) {
      alert("Error creating user:", error.message, error.details);
    } else {
      alert("User registration successful");
    }
  }
</script>

<section id="about" class="flex bg-primary w-full">
  <div>
    <input bind:value={username} placeholder="Username" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={register}>Register</button>
  </div>
</section>
