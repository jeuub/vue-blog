<template>
  <div class="article__wrapper-one">
    <article class="article-one" v-if="article">
      <h1 class="article__title-one">{{ article.name }}</h1>
      <div class="article__date-one"><b> Date: </b>{{ article.date }}</div>
      <p class="article__text-one"><b> Description: </b> {{ article.desc }}</p>
      <img :src="'/images/' + article.full_image" :alt="article.name + 'card image'" />
      <router-link class="article__link-one" to="/articles">Ко всем новостям</router-link>
    </article>
    <div class="not_found" v-if="!loaded">Статья не найдена</div>
  </div>
</template>
<script>
import { apiCall } from '../services/api';

export default {
  data() {
    return { article: null, loaded: false };
  },
  async mounted() {
    await apiCall('get', 'articles.json').then((response) => {
      this.article = response.find((item) => String(item.id) === this.$route.params.id);
      this.loaded = !!this.article;
      console.log(this.article);
    });
  },
};
</script>

<style scoped>
.article-one {
  width: 80%;
  margin: 0 auto;
}
.article__title-one {
  text-align: center;
}
.article__wrapper-one {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
.article-one img {
  width: 100%;
}
</style>
