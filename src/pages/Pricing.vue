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
          <a @click="goTo.contacts" class="btn btn--full margin-right-sm"
          >Start eating well</a>
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
          <a @click="goTo.pricing" class="btn btn--full margin-right-sm">Start eating well</a>
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

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const push = (name) => {
  router.push({ name })
}

const goTo = {
  contacts: push.bind(null, 'Contacts'),
  pricing: push.bind(null, 'Pricing'),
}
</script>

