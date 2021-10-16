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
    await apiCall('get', 'comments.json').then((response) => {
      this.comments = response;
    });
  },
  methods: {
    addComment(data) {
      this.comments.push({ id: this.comments.length + 1, name: data.name, comment: data.comment });
      console.log(this.comments);
    },
  },
};
</script>
