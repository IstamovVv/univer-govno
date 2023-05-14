<template>
  <section class="section-cta" id="cta">
    <div class="container">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="section-how-header">Get your first meal for free!</h2>
          <p class="cta-text">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the
            first meal is on us!
          </p>

          <form class="cta-form" name="sign-up" netlify>
            <div>
              <label for="full-name">Full Name</label>
              <the-input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
              />
            </div>

            <div>
              <label for="email">Email Address</label>
              <the-input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
              />
            </div>

            <div>
              <the-select
                  required
                  v-model:value="selectValue"
                  label="Where did you hear from us?"
                  :options="options"
              />
            </div>

            <button class="btn btn--form">Sign up now</button>
          </form>
        </div>
        <div
            class="cta-img-box"
            role="img"
            aria-label="woman enjoying food"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "Contacts"
}
</script>

<script setup>
import TheInput  from "@/components/common/TheInput.vue";
import TheSelect from "@/components/common/TheSelect.vue";
import { ref }   from "vue";

const options = ref([
  { value: '', text: 'Please choose one option' },
  { value: 'friends', text: 'Friends and family' },
  { value: 'youtube', text: 'Youtube' },
  { value: 'facebook', text: 'Facebook' },
  { value: 'others', text: 'Others' },
])

const selectValue = ref('');
</script>