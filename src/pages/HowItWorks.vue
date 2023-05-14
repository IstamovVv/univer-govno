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
             src="/src/assets/app/app-screen-1.png"/>
      </div>

      <!-- STEP 2 -->
      <div class="section-how-imgblock">
        <img class="section-how-img" alt="app-screen"
             src="/src/assets/app/app-screen-2.png"/>
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
             src="/src/assets/app/app-screen-3.png"/>
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
