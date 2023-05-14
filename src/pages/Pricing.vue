<template>
  <section class="section-pricing" id="pricing">
    <div class="container">
      <span class="subheading">PRICING</span>
      <h2 class="section-how-header">
        Eating well without breaking the bank
      </h2>
    </div>

    <div class="container grid grid--2-cols">
      <div class="pricing-plan pricing-plan--starter">
        <header class="plan-header">
          <p class="plan-name">STARTER</p>
          <p class="plan-price"><span>$</span>399</p>
          <p class="plan-text">per month. That's just $13 per meal!</p>
        </header>
        <ul class="plan-list">
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            ><strong>1</strong>meal per day
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >Order from 11am to 9pm
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >Delivery is free
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >*
          </li>
        </ul>
        <div class="plan-sign-up">
          <a href="#cta" class="btn btn--full margin-right-sm"
          >Start eating well</a
          >
        </div>
      </div>

      <div class="pricing-plan pricing-plan--complete">
        <header class="plan-header">
          <p class="plan-name">Complete</p>
          <p class="plan-price"><span>$</span>649</p>
          <p class="plan-text">per month. That's just $11 per meal!</p>
        </header>
        <ul class="plan-list">
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            ><strong>2 meals</strong>per day
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >Order<strong>24/7</strong>
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >Delivery is free
          </li>
          <li class="plan-list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon
            >Get access to latest all-recipes
          </li>
        </ul>
        <div class="plan-sign-up">
          <a href="#cta" class="btn btn--full margin-right-sm"
          >Start eating well</a
          >
        </div>
      </div>
    </div>

    <div class="container margin-bottom-md">
      <aside class="plan-details">
        Prices include all applicable taxes. You can cancel at any time.
        Both plans include the following:
      </aside>
    </div>

    <div class="container grid grid--4-cols">
      <div class="feature">
        <p class="feature-title">Never cook again!</p>
        <p class="feature-text">
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>

      <div class="feature">
        <p class="feature-title">Local and organic</p>
        <p class="feature-text">
          Our cooks only use local, fresh, and organic products to prepare
          your meals.
        </p>
      </div>
      <div class="feature">
        <p class="feature-title">No waste</p>
        <p class="feature-text">
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>

      <div class="feature">
        <p class="feature-title">Pause anytime</p>
        <p class="feature-text">
          Going on vacation? Just pause your subscription, and we refund
          unused days.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing"
}
</script>

<style scoped>
.section-pricing {
  padding: 9.6rem 0;
}

.plan-list-item {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.plan-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.plan-header {
  text-align: center;
  margin-bottom: 4.8rem;
}

.pricing-plan {
  border-radius: 11px;
  padding: 4.8rem;
  width: 75%;
  margin-bottom: 4rem;
}

.pricing-plan--starter {
  justify-self: end;
  border: 2px solid #fdf2e9;
  padding: 4.6rem;
}

.pricing-plan--complete {
  background-color: #fdf2e9;
  padding: 4.8rem;
  position: relative;
  overflow: hidden;
}

.pricing-plan--complete:after {
  content: "Best value";
  position: absolute;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  top: 7%;
  right: -10%;
  background-color: #ffd43b;
  padding: 0.8rem 5rem;
  color: #333;
  transform: rotate(45deg);
}

.plan-name {
  color: #cf711f;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
}

.plan-price {
  font-size: 6.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.6rem;
}

.plan-price span {
  color: #555;
}

.plan-text {
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6f6f6f;
}

.plan-price span {
  font-size: 3rem;
  font-weight: 500;
  margin-right: 0.8rem;
}

.plan-sign-up {
  text-align: center;
  margin-top: 4.8rem;
}

.feature-text {
  font-size: 1.8rem;
  line-height: 1.8;
}

.feature-title {
  font-size: 2.4rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 1.6rem;
}

.plan-details {
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4.8rem;
}
</style>