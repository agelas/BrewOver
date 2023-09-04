<section id="home" class="flex bg-primary w-full">
    <div class="flex-1 text-center p-8"> 
        <h1 class="text-[60px] font-primary">BrewOver</h1>
        <p class="text-xl font-body mt-4">A place for coffee.</p>
    </div>
    <div class="coffee-img-container">
        <img src="/pourover_image.png" alt="Pourover Coffee Setup" class="coffee-img">
    </div>
</section>

<style>
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