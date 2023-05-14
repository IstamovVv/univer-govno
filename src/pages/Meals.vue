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
