<template>
  <div class="comment-form__wrapper">
    <div v-if="error" class="validation-error">Заполните форму полностью</div>
    <form @submit="addComment" class="comment-form">
      <v-text-field v-model="name" placeholder="Ваше имя"></v-text-field>
      <v-text-field v-model="comment" placeholder="Оставьте свой комментарий"></v-text-field>
      <v-btn depressed type="submit" class="search__submit">
        Добавить
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
      error: false,
    };
  },
  methods: {
    addComment(e) {
      e.preventDefault();
      if (this.name !== '' && this.comment !== '') {
        this.$emit('addComment', { name: this.name, comment: this.comment });
        this.name = '';
        this.comment = '';
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
  },
};
</script>

<style>
.comment-form__wrapper {
  width: 80%;
  margin: 0 auto;
}
.comment-form {
  max-width: 500px;
}
.validation-error {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background: rgb(183, 28, 28);
  padding: 5px 8px;
  border-radius: 8px;
  color: white;
}
</style>
