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
              <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
              />
            </div>

            <div>
              <label for="email">Email Adress</label>
              <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
              />
            </div>

            <div>
              <label for="select-where">Where did you hear from us?</label>
              <select id="select-where" name="select-where" required>
                <option value="">Please choose one option</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">Youtube</option>
                <option value="facebook">Facebook</option>
                <option value="others">Others</option>
              </select>
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

<style scoped>
.section-cta {
  padding: 9.6rem 0 12.8rem 0;
}

.cta {
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  overflow: hidden;
}

.cta-text-box {
  color: #45260a;
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
}

.cta .section-how-header {
  color: inherit;
  margin-bottom: 3.2rem;
}

.cta-text {
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 4.8rem;
}

.cta-img-box {
  background-image: linear-gradient(to right bottom, #eb974e45, #e67d2253),
  url("../img/eating.jpg");
  background-size: cover;
  background-position: center;
}

.cta-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;
}

.cta-form label {
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
}

.cta-form input::placeholder {
  color: #aaa;
}

.cta-form input,
.cta-form select {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.cta *:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
}
</style>