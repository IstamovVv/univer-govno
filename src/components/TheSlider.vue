<template>
  <section class="section-slideshow-2">
    <div class="mySlides2" :class="currentClass">
      <img src="src/assets/lunch1.jpg" alt="" class="img" />
      <img src="src/assets/lunch2.jpg" alt="" class="img" />
      <img src="src/assets/lunch3.jpg" alt="" class="img" />
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

<style scoped>
.mySlides2 {
  width: 100%;
}

.section-slideshow {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: gray;
  font-weight: bold;
  font-size: 25px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  background-color: white;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.slider-text {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dots {
  text-align: center;
  padding: 3rem;
}

.dot {
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 4;
  }
  to {
    opacity: 1;
  }
}

/* ***************** */
/* SLIDER TEST */
/* **************** */

.section-slideshow-2 {
  width: 1000px;
  height: 600px;
  overflow: hidden;
  position: relative;
  /* outline: 1px dotted red; */
  margin: auto;
}

.mySlides2 {
  width: 1000px;
  height: 500px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  /* left: 0%; */
  transition: 500ms;
  justify-content: start;
}

.img {
  width: 1000px;
  height: 500px;
  /* object-fit: cover;
  object-position: 0; */
}

.slide1 {
  left: 0;
}

.slide2 {
  left: -100%;
}

.slide3 {
  left: -200%;
}
</style>