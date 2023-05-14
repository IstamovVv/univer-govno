<template>
  <section class="section-how" id="how">
    <div class="container">
      <span class="subheading"> How it works </span>
      <h2 class="section-how-header">
        Your daily dose of health in 3 simple steps
      </h2>
    </div>

    <div class="container grid grid--2-cols grid--center-v">
      <!-- <-- STEP 1 -->
      <div class="section-how-textblock">
        <span class="section-how-number">01</span>
        <h3 class="section-how-step">
          Tell us what you like (and what not)
        </h3>
        <p class="section-how-description">
          Never again waste time thinking about what to eat! Omnifood AI
          will create a 100% personalized weekly meal plan just for you. It
          makes sure you get all the nutrients and vitamins you need, no
          matter what diet you follow!
        </p>
      </div>
      <div class="section-how-imgblock">
        <img class="section-how-img" alt="app-screen"
             src="src/assets/app/app-screen-1.png"/>
      </div>

      <!-- STEP 2 -->
      <div class="section-how-imgblock">
        <img class="section-how-img" alt="app-screen"
             src="src/assets/app/app-screen-2.png"/>
      </div>
      <div class="section-how-textblock">
        <span class="section-how-number">02</span>
        <h3 class="section-how-step">Approve your weekly meal plan</h3>
        <p class="section-how-description">
          Once per week, approve the meal plan generated for you by Omnifood
          AI. You can change ingredients, swap entire meals, or even add
          your own recipes.
        </p>
      </div>

      <!-- STEP 3 -->
      <div class="section-how-textblock">
        <span class="section-how-number">03</span>
        <h3 class="section-how-step">Receive meals at convenient time</h3>
        <p class="section-how-description">
          Best chefs in town will cook your selected meal every day, and we
          will deliver it to your door whenever works best for you. You can
          change delivery schedule and address daily!
        </p>
      </div>
      <div class="section-how-imgblock">
        <img class="section-how-img" alt="app-screen"
             src="src/assets/app/app-screen-3.png"/>
      </div>
    </div>
    <!-- <div class="container grid grid--2-cols"></div> -->
  </section>
</template>

<script>
export default {
  name: "HowItWorks"
}
</script>

<style scoped>
.section-how {
  padding: 9.6rem 0;
}

.grid:last-child {
  margin-bottom: 0;
}

.section-how-number {
  font-size: 8.6rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1.2rem;
}

.section-how-step {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}

.section-how-description {
  font-size: 1.8rem;
  line-height: 1.8;
}

.section-how-imgblock {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.section-how-imgblock::after,
.section-how-imgblock::before {
  content: "";
  display: block;
  background-color: #fdf2e9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.section-how-img {
  width: 35%;
}

.section-how-imgblock::before {
  width: 60%;
  padding-bottom: 60%;
  background-color: #fdf2e9;
  z-index: -2;
}

.section-how-imgblock::after {
  width: 45%;
  padding-bottom: 45%;
  background-color: #fae5d3;
  z-index: -1;
}
</style>