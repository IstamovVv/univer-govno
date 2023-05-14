<template>
  <the-slider/>
  <section class="section-meals" id="meals">
    <div class="container">
      <span class="subheading center-text"> Meals </span>
      <h2 class="section-how-header center-text">
        Omnifood AI choose s from 5,000+ recipes
      </h2>
    </div>

    <div class="container grid grid--3-cols margin-bottom-md">
      <div class="meal">
        <img
            class="meal-img"
            src="/src/assets/meals/meal-1.jpg"
            alt="japanese gyozas"
        />
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag">Vegeterian</span>
          </div>
          <p class="meal-title">Japanese Gyozas</p>
          <ul class="meal-atributes">
            <li class="meal-atribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon
              >650 calories
            </li>
            <li class="meal-atribute">
              <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
              ></ion-icon
              >NutriScore &reg; 74
            </li>
            <li class="meal-atribute">
              <ion-icon class="meal-icon" name="star-outline"></ion-icon>4.9
              rating (537)
            </li>
          </ul>
        </div>
      </div>

      <div class="meal">
        <img
            class="meal-img"
            src="/src/assets/meals/meal-2.jpg"
            alt="japanese gyozas"
        />
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag vegan">Vegan</span>
            <span class="tag paleo">Paleo</span>
          </div>
          <p class="meal-title">Avocado Salad</p>
          <ul class="meal-atributes">
            <li class="meal-atribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon
              >400 calories
            </li>
            <li class="meal-atribute">
              <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
              ></ion-icon
              >NutriScore &reg; 92
            </li>
            <li class="meal-atribute">
              <ion-icon class="meal-icon" name="star-outline"></ion-icon
              ><strong>4.9</strong> rating (537)
            </li>
          </ul>
        </div>
      </div>

      <div class="diets">
        <h3 class="heading-tertiary">Works with any diet:</h3>
        <ul class="list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegetarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegan</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Pescatarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Gluten-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Lactose-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Keto</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Paleo</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Low FODMAP</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Kid-friendly</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container all-recipes">
      <a href="#" class="link">See all recipes &rarr;</a>
    </div>
  </section>
</template>

<script>
import TheSlider from "@/components/TheSlider.vue";

export default {
  name: "Meals",
  components: { TheSlider }
}
</script>

<style scoped>
.section-featured {
  padding: 4.8rem 0 8rem 0;
}

.section-featured-text {
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
}

.logos img {
  height: 3.2rem;
  filter: brightness(0);
  opacity: 50%;
}

.logos {
  display: flex;
  justify-content: space-around;
}

/* ***************** */
/* SECTION MEALS */
/* **************** */

.meal-img {
  width: 100%;
}

.meal-title {
  font-size: 2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 3.2rem;
}

.meal-atributes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.meal-atribute {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  background-color: #51cf66;
  color: #333;
  border-radius: 100px;
}

.meal-tags {
  margin-bottom: 1.2rem;
}

.meal {
  box-shadow: 0 2.4px 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;
}

.meal-icon {
  color: #e67e22;
  height: 2.4rem;
  width: 2.4rem;
}

.meal-content {
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;
}

.vegan {
  background-color: #51cf66;
}

.paleo {
  background-color: yellow;
}

.diet {
  padding-left: 4.5rem;
}

.all-recipes {
  text-align: center;
  font-size: 1.8rem;
}

.meal:hover {
  transform: translateY(-1.2rem);
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
}

.section-meals {
  padding: 9.6rem 0;
}



</style>