<template>
  <div>
    <ul>
      <li v-for="(item,index) in articleList" :key="index">
        <nuxt-link :to="{name:'article-detail-id',params:{id:item._id}}">
          <h2 class="title">{{item.title}}</h2>
          <div class="desc">{{item.desc}}</div>
        </nuxt-link>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="1"
      :current-page.sync="currentPage"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>

export default {
  data() {
    return { currentPage: 1, count: 0, articleList: [] };
  },
  components: {},
  async asyncData({ app, params }) {
    const { id } = params;
    const {
      data: {
        code,
        content: { count, list }
      }
    } = await app.$axios({
      method: "get",
      url: "/articles/articleList",
      params: {
        page: id,
        pageSize: 1
      }
    });
    if (code === 0) {
      return { currentPage: +id, count, articleList: list };
    }
  },
  methods: {
    currentChange(value) {
      this.$router.push({
        name: "article-id",
        params: { id: value }
      });
    }
  }
};
</script>

<style>
</style>
