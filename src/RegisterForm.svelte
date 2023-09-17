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

<section id="login" class="flex bg-primary w-full h-screen items-center justify-center">
  <div class="bg-accent p-8 rounded-lg">
    <div class="mb-4">
        <input class="p-2 w-full rounded" bind:value={username} placeholder="Username" />
    </div>
    <div class="mb-4">
        <input class="p-2 w-full rounded" type="password" bind:value={password} placeholder="Password" />
    </div>
    <div>
        <button class="bg-accent hover:bg-accent-hover p-2 w-full rounded" on:click={register}>Register</button>
    </div>
  </div>
</section>
