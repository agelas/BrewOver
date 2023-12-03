<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { supabase } from "./supabaseClient";

  let sticky = false;
  let showLoginForm = false;
  let username = "";
  let password = "";

  onMount(() => {
    // Make header sticky
    const header = document.getElementById("header");
    const stickyPoint = header.offsetTop;

    window.onscroll = function () {
      sticky = window.scrollY > stickyPoint;
    };
  });

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  function toggleLoginForm() {
    showLoginForm = !showLoginForm;
  }

  async function handleLogin(event) {
    event.preventDefault();
    let login, error;
    // Check if input is email
    if (username.includes("@")) {
      ({ data: login, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      }));
    } else {
      // User entered a username
      const { data: profile, error: profileError } = await supabase
        .from("Profiles")
        .select("user_id, user_email")
        .eq("username", username)
        .single();

      if (profileError) {
        alert("Error fetching user: ", profileError.message);
        return;
      }

      if (profile) {
        ({ data: login, error } = await supabase.auth.signInWithPassword({
          email: profile.user_email,
          password: password,
        }));
      } else {
        alert("Username not found");
        return;
      }
    }

    if (error) {
      alert("Error logging in: ", error.message);
    } else if (login) {
      navigate(`/dashboard/${login.user.id}`);
    } else {
      // No error and no login object, should be unlikely.
      alert("An unknown error occurred during login");
    }
  }
</script>

<div id="header" class="header bg-primary text-paragraph" class:sticky>
  <div class="navigation">
    <div class="text-4xl font-primary">BrewOver</div>
    <div class="nav-item space-x-4 text-xl font-body flex">
      <button
        class="nav-item border-none"
        on:click={() => scrollToSection("home")}>Home</button
      >
      <button
        class="nav-item border-none"
        on:click={() => scrollToSection("about")}>About</button
      >
      <button class="nav-item border-none" on:click={toggleLoginForm}
        >Login</button
      >

      <div class="relative">
        {#if showLoginForm}
          <div class="login-dropdown">
            <input
              class="p-2 w-full rounded"
              type="text"
              bind:value={username}
              placeholder="Email/Username"
            />
            <input
              class="p-2 rounded"
              bind:value={password}
              type="password"
              placeholder="Password"
            />
            <button
              class="bg-accent hover:bg-accent-hover p-2 w-full rounded"
              on:click={handleLogin}>Login</button
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .header {
    padding: 20px;
    text-align: center;
    z-index: 1000; /* Added this line to ensure the header remains on top */
  }

  :global(.header.sticky) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .header .navigation {
    display: flex;
    justify-content: space-between;
  }

  .header .navigation .nav-item {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  .relative {
    position: relative;
  }

  .login-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    background: #ac6b34;
    padding: 12px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    z-index: 2000;
  }

  .login-dropdown input,
  .login-dropdown button {
    margin-bottom: 8px;
  }
</style>
