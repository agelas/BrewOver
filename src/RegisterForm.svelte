<script>
  import { supabase } from "./supabaseClient";
  import { navigate } from "svelte-routing";

  let email = "";
  let password = "";
  let username = "";

  async function register() {
    let { data, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (signUpError) {
      alert("Error creating user:", error.message);
      return;
    }

    if (data.session) {
      let { error: profileError } = await supabase
        .from("Profiles")
        .insert([
          {
            user_id: data.session.user.id,
            username: username,
            user_email: email,
          },
        ]);
      if (profileError) {
        alert("Error creating profile:", profileError.message);
      } else {
        alert(
          "User registration successful. Please check your email to verify account.",
        );
        navigate(`/dashboard/${data.session.user.id}`);
      }
    } else {
      alert(
        "Registration successful. Please check your email to verify account.",
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
        bind:value={username}
        placeholder="username"
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
