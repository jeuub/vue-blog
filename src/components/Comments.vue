<template>
  <div>
    <CommentList v-bind:comments="this.comments" />
    <CommentForm v-on:addComment="addComment" />
  </div>
</template>
<script>
import CommentList from '@/components/CommentList.vue';
import CommentForm from '@/components/CommentForm.vue';

import { apiCall } from '../services/api';

export default {
  data() {
    return { comments: null };
  },
  components: {
    CommentList,
    CommentForm,
  },
  async mounted() {
    await apiCall('get', `articles/${this.$route.params.id}/comments`).then((response) => {
      this.comments = response;
    });
  },
  methods: {
    async addComment(data) {
      this.comments.push({
        id: this.comments.length + 1,
        user_name: data.name,
        comment: data.comment,
      });

      await apiCall('post', `articles/${this.$route.params.id}/comments`, {
        user_name: data.name,
        comment: data.comment,
      });
    },
  },
};
</script>
