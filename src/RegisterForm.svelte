<script>
  import { supabase } from "./supabaseClient";
  import { navigate } from "svelte-routing";

  let email = "";
  let password = "";

  async function register() {
    let { user, error } = await supabase.auth.signUp({
      email: email,
      passwprd: password,
    });

    if (error) {
      alert("Error creating user:", error.message);
    } else if (user) {
      alert(
        "User registration successful. Please check your email to verify your account."
      );
      navigate(`dashboard/${user.id}`);
    } else {
      // No error and no user object case, shouldn't happen though right?
      alert(
        "Registration successful. Please check your email to verify your account"
      );
    }
  }
</script>

<section
  id="register"
  class="flex bg-primary w-full h-screen items-center justify-center"
>
  <div class="bg-accent p-8 rounded-lg">
    <div class="mb-4">
      <input
        class="p-2 w-full rounded"
        bind:value={email}
        placeholder="email"
      />
    </div>
    <div class="mb-4">
      <input
        class="p-2 w-full rounded"
        type="password"
        bind:value={password}
        placeholder="Password"
      />
    </div>
    <div>
      <button
        class="bg-accent hover:bg-accent-hover p-2 w-full rounded"
        on:click={register}>Register</button
      >
    </div>
  </div>
</section>
