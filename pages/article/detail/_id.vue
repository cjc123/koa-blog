<template>
  <div>
    <h2>{{content.title}}</h2>
    <div v-html="content.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return { content: { title: "", content: "" } };
  },
  components: {},
  async asyncData({ app, params }) {
    const { id } = params;
    const {
      data: { code, content }
    } = await app.$axios({
      method: "get",
      url: "/articles/articleDetail",
      params: {
        id
      }
    });
    console.log(code, content);
    if (code === 0) {
      return { content };
    }
  }
};
</script>

<style>
</style>
