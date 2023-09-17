<section id="about" class="flex bg-primary w-full">
    <div class="coffee-bags-container flex-1">
        <img src="/coffee_assortment.png" alt="Bags of Artisinal Coffee" class="coffee-bags-img">
    </div>
    <div class="text-container flex-2 text-center p-8">
        <p class="text-xl font-body mt-4">A place for coffee.</p>
    </div>
</section>

<style>
    .coffee-bags-container {
        position: relative;
        width: 50%;
        overflow: hidden;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .coffee-bags-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle, transparent, #050402 45%);
        pointer-events: none;
    }

    .coffee-bags-img {
        width: 50%;
        height: auto;
        border-radius: 5px;
    }

    .text-container {
        padding-right: 300px; /* Shove the coffee-img-container div over*/
        padding-top: 90px;
        margin-left: 60px;
    }
</style>