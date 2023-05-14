<template>
  <header class="header">
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

    <button class="btn-mobile-nav">
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
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf2e9;
  height: 9.6rem;
  padding: 0 4.8rem;
}

.logo {
  height: 2.2rem;
}

.main-nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.2rem;
}

.main-nav-link:visited,
.main-nav-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;
  cursor: pointer;
}

.main-nav-link.nav-cta,
.main-nav-link.nav-cta:visited {
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #e67e22;
}

.main-nav-link:hover,
.main-nav-link:active {
  color: #cf711f;
}

.main-nav-link.nav-cta:hover,
.main-nav-link.nav-cta:active {
  background-color: #cf711f;
}
</style>