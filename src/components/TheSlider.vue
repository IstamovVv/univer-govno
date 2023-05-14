<template>
  <section class="section-slideshow-2">
    <div class="mySlides2" :class="currentClass">
      <img src="/src/assets/lunch1.jpg" alt="" class="img" />
      <img src="/src/assets/lunch2.jpg" alt="" class="img" />
      <img src="/src/assets/lunch3.jpg" alt="" class="img" />
    </div>
    <a class="prev prev_2" ref="btnPrev">&lt</a>
    <a class="next next_2" ref="btnNext">&gt</a>
  </section>
</template>

<script setup>
// const button = document.querySelector(".btn-slider");
import { onMounted, ref } from "vue";

const currentClass = ref('slide1');

const slides = ["slide1", "slide2", "slide3"];

let currentIndex = 0;

const getNext = () => {
  if (currentIndex === 2) {
    currentIndex = 0;
    return slides[currentIndex];
  }
  currentIndex = currentIndex + Number(currentIndex < slides.length - 1);
  return slides[currentIndex];
};

const getPrev = () => {
  if (currentIndex === 0) {
    currentIndex = 2;
    return slides[currentIndex];
  }
  currentIndex = currentIndex - Number(currentIndex > 0);
  return slides[currentIndex];
};

const btnPrev = ref(null);
const btnNext = ref(null);

onMounted(() => {
  btnPrev.value.addEventListener("click", function () {
    currentClass.value = `${getPrev()}`;
  });

  btnNext.value.addEventListener("click", function () {
    currentClass.value = `${getNext()}`;
  });
})

</script>