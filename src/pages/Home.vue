<template>
  <section class="section-hero">
    <div class="hero">
      <div class="hero-text-box">
        <h1 class="heading-primary">
          A healthy meal delivered to your door, every single day
        </h1>
        <p class="hero-description">
          The smart 365-days-per-year food subscription that will make you
          eat healthy again. Tailored to your personal tastes and
          nutritional needs.
        </p>
        <a href="#cta" class="btn btn--full margin-right-sm"
        >Start eating well</a
        >
        <a href="#how" class="btn btn--outline">Learn more &darr;</a>
        <div class="delivered-meals">
          <div class="delivered-imgs">
            <img src="/src/assets/customers/customer-1.jpg" alt="customers photo" />
            <img src="/src/assets/customers/customer-2.jpg" alt="customers photo" />
            <img src="/src/assets/customers/customer-3.jpg" alt="customers photo" />
            <img src="/src/assets/customers/customer-4.jpg" alt="customers photo" />
            <img src="/src/assets/customers/customer-5.jpg" alt="customers photo" />
            <img src="/src/assets/customers/customer-6.jpg" alt="customers photo" />
          </div>
          <p class="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>
      <div class="hero-image-box">
        <picture>
          <source srcset="/src/assets/hero.webp" type="image/webp" />
          <img
              src="/src/assets/hero.webp"
              class="hero-img"
              alt="woman enjoying food"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>