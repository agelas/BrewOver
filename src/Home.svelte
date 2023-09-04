<section id="home" class="flex bg-primary w-full">
    <div class="flex-1 text-center p-8"> 
        <h1 class="text-[60px] font-primary">BrewOver</h1>
        <p class="text-xl font-body mt-4">A place for coffee.</p>
    </div>
    <div class="flex-1 flex items-center justify-center">
        <img src="/pourover_image.png" alt="Pourover Coffee Setup" class="coffee-img">
    </div>
</section>

<style>
   .coffee-img {
        width: 35%;
        height: auto;
        border-radius: 5px;
    }

    .coffee-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, transparent, #000 80%); /* Adjust gradient as needed */
    pointer-events: none;
}
</style>