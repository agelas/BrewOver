<script>
  import { onMount } from "svelte";
  let sticky = false;

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
      <button
        class="nav-item border-none"
        on:click={() => scrollToSection("login")}>Login</button
      >
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
</style>
