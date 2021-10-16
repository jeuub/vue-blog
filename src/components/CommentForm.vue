<template>
  <form @submit="addComment" class="comment-form">
    <v-text-field v-model="name" placeholder="Ваше имя"></v-text-field>
    <v-text-field v-model="comment" placeholder="Оставьте свой комментарий"></v-text-field>
    <v-btn depressed type="submit" class="search__submit">
      Добавить
    </v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    addComment(e) {
      e.preventDefault();
      this.$emit('addComment', { name: this.name, comment: this.comment });
      this.name = '';
      this.comment = '';
    },
  },
};
</script>

<style>
.comment-form {
  width: 80%;
  margin: 0 auto;
}
</style>
