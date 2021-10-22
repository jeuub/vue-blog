<template>
  <div class="comments">
    <h2>Коментарии:</h2>
    <div v-for="(comment, idx) in comments" :key="idx">
      <h3>{{ comment.user_name }}</h3>
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: { comments: Array },

  mounted() {
  },
};
</script>

<style>
.comments {
  width: 80%;
  margin: 0 auto;
}
</style>
