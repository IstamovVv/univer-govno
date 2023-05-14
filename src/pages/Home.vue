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
            <img src="src/assets/customers/customer-1.jpg" alt="customers photo" />
            <img src="src/assets/customers/customer-2.jpg" alt="customers photo" />
            <img src="src/assets/customers/customer-3.jpg" alt="customers photo" />
            <img src="src/assets/customers/customer-4.jpg" alt="customers photo" />
            <img src="src/assets/customers/customer-5.jpg" alt="customers photo" />
            <img src="src/assets/customers/customer-6.jpg" alt="customers photo" />
          </div>
          <p class="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>
      <div class="hero-image-box">
        <picture>
          <source srcset="src/assets/hero.webp" type="image/webp" />
          <source srcset="src/assets/hero-min.png" type="image/png" />
          <img
              src="src/assets/hero.webp"
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

<style scoped>
.hero {
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;
}

.section-hero {
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;
  height: 100vh;
}

.sticky .section-hero {
  margin-top: 9.6rem;
}

.sticky .header {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 8rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: rgba(255, 255, 255, 0.97);
  z-index: 999;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
}
.hero-description {
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
}

.hero-img {
  width: 100%;
}

.delivered-meals {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
}

.delivered-imgs {
  display: flex;
}

.delivered-imgs img {
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;
}

.delivered-imgs img:last-child {
  margin: 0;
}

.delivered-text {
  font-size: 1.8rem;
  font-weight: 600;
  display: block;
}

.delivered-text span {
  color: #e67e33;
  font-weight: 700;
}
</style>