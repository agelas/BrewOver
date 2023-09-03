<script>
    import { onMount } from "svelte";

    onMount(() => {
        // Make header sticky
        const header = document.getElementById("header");
        const sticky = header.offsetTop;

        window.onscroll = function() {
            if (window.scrollY > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };
    });

    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView( { behavior: 'smooth' });
    }
</script>

<style>
    .header {
        padding: 20px;
        text-align: center;
    }

    :global(.header.sticky) {
        position: fixed;
        top: 0;
        width: 100%;
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

<div id="header" class="header bg-primary text-paragraph">
    <div class="navigation">
        <div class="text-4xl font-primary">BrewOver</div>
        <div class="nav-item space-x-4 text-xl font-body flex">
            <button class="nav-item border-none" on:click={() => scrollToSection('home')}>Home</button>
            <button class="nav-item border-none" on:click={() => scrollToSection('about')}>About</button>
            <button class="nav-item border-none" on:click={() => scrollToSection('login')}>Login</button>
        </div>
    </div>
</div>