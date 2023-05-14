<template>
  <header class="header" :class="{ 'nav-open': isNavOpen }">
    <a href="#">
      <img class="logo" alt="Logo" src="/src/assets/omnifood-logo.png" @click="goTo.home()"/>
    </a>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" @click="goTo.how()">How it works</a></li>
        <li><a class="main-nav-link" @click="goTo.meals()">Meals</a></li>
        <li>
          <a class="main-nav-link" @click="goTo.testimonials()">Testimonials</a>
        </li>
        <li><a class="main-nav-link" @click="goTo.pricing()">Pricing</a></li>
        <li><a class="main-nav-link nav-cta" @click="goTo.contacts()">Try for free</a></li>
      </ul>
    </nav>

    <button class="btn-mobile-nav" @click="toggleNav">
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
    </button>
  </header>
</template>

<script>
export default {
  name: "TheNavBar"
}
</script>

<script setup>
import { useRouter } from "vue-router";
import { ref }       from "vue";

const router = useRouter();

const push = (name) => {
  router.push({ name })
}
const goTo = {
  home: push.bind(null, 'Home'),
  how: push.bind(null, 'How'),
  meals: push.bind(null, 'Meals'),
  testimonials: push.bind(null, 'Testimonials'),
  pricing: push.bind(null, 'Pricing'),
  contacts: push.bind(null, 'Contacts'),
}

const isNavOpen = ref(false)
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
}

</script>
