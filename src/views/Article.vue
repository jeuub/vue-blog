<template>
  <div class="article__wrapper">
    <article class="article-page" v-if="article">
      <h1 class="article-page__title">{{ article.name }}</h1>
      <div class="article-page__date"><b> Date: </b>{{ article.date }}</div>
      <p class="article-page__text"><b> Description: </b> {{ article.desc }}</p>
      <img :src="'/images/' + article.full_image" :alt="article.name + 'card image'" />
      <router-link class="article-page__link" to="/articles">Ко всем новостям</router-link>
    </article>
    <div class="not_found" v-if="!loaded">Статья не найдена</div>
    <Comments />
  </div>
</template>
<script>
import { apiCall } from '../services/api';
import Comments from '@/components/Comments.vue';

export default {
  data() {
    return { article: null, loaded: false };
  },
  components: {
    Comments,
  },
  async mounted() {
    await apiCall('get', 'articles.json').then((response) => {
      this.article = response.find((item) => String(item.id) === this.$route.params.id);
      this.loaded = !!this.article;
    });
  },
};
</script>

<style>
.article-page {
  width: 80%;
  margin: 0 auto;
}
.article-page__title {
  text-align: center;
}
.article-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
.article-page img {
  width: 100%;
}
</style>
