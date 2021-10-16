<template>
  <div>
    <Hello />
    <div class="carousel__wrapper">
      <h2 class="carousel__title">Последние статьи:</h2>
      <Carousel />
    </div>
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Home',

  components: {
    Hello,
    Carousel,
  },
};
</script>

<style>
.carousel__wrapper {
  height: 100vh;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
