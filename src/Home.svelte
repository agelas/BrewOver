<section id="home" class="flex bg-primary w-full">
    <div class="text-container flex-2 text-center p-8"> 
        <h1 class="text-6xl font-primary">BrewOver</h1>
        <p class="text-xl font-body mt-4">A place for coffee.</p>
    </div>
    <div class="coffee-img-container flex-1">
        <img src="/pourover_image.png" alt="Pourover Coffee Setup" class="coffee-img">
    </div>
</section>

<style>
    .text-container {
        padding-left: 300px; /* Shove the coffee-img-container div over*/
        padding-top: 90px;
        margin-right: 60px;
    }
    h1 {
        font-size: 90px;
    }
    .coffee-img-container {
        position: relative;
        width: 50%; /* Set the width here */
        overflow: hidden;
        border-radius: 20px;
        display: flex; /* Convert to flex container */
        align-items: center; /* Center vertically */
        justify-content: center; /* Center horizontally */
    }

   .coffee-img {
        width: 50%;
        height: auto;
        border-radius: 5px;
    }

     .coffee-img-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle, transparent, #050402 45%);
        pointer-events: none;
    }
</style>