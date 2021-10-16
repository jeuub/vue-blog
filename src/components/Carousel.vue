<template>
  <div v-if="items">
    <v-carousel show-arrows-on-hover hide-delimiters class="carousel">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="returnSource(item.preview_image)">
        <div class="carousel__text">
          <h2>{{ item.shortDesc }}...</h2>
          <router-link :to="'articles/' + item.id">читать далее</router-link>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { apiCall } from '../services/api';

export default {
  data() {
    return {
      items: null,
    };
  },
  methods: {
    returnSource(src) {
      return `/images/${src}`;
    },
  },
  async mounted() {
    await apiCall('get', 'articles.json').then((response) => {
      this.items = response;
    });
  },
};
</script>

<style>
.v-responsive__content {
  width: 600px !important;
}
.carousel__text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.carousel__text h2 {
  background: rgba(255, 255, 255, 0.6);
  padding: 5px 10px;
  display: inline;
  width: 100%;
}
.carousel__text a {
  width: 100%;
  background: black;
  padding: 5px 10px;
  text-align: center;
  color: white !important;
}
</style>
