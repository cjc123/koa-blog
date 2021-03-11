<template>
  <div class="detail-body">
    <h1 class="detail-title">{{content.title}}</h1>
    <div v-html="markdown2html(content.content)"></div>
  </div>
</template>

<script>
import marked from "marked";

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
    if (code === 0) {
      return { content };
    }
  },
  methods: {
    markdown2html(data) {
      return marked(data);
    }
  }
};
</script>

<style>
.detail-body {
  padding: 18px 24px;
}
.detail-title {
  font-size: 26px;
  line-height: 1.5;
  color: #ac3e40;
}
</style>
