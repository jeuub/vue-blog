<template>
  <div>
    <img :src="'../assets/logo.png'" alt="asdasdasd" />
    <img v-for="(item, i) in items" :key="i" :src="'images/' + item.preview_image" />
    <v-carousel show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="'images/' + item.preview_image"
      ></v-carousel-item>
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
  async mounted() {
    await apiCall('get', 'articles.json').then((response) => {
      this.items = response;
      console.log(this.items);
    });
  },
};
</script>
