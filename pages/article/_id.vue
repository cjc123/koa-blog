<template>
  <div>
    <ul class="article-list">
      <li class="article-list-item" v-for="(item,index) in articleList" :key="index">
        <nuxt-link :to="{name:'article-detail-id',params:{id:item._id}}">
          <h2 class="title">
            <span>{{item.title}}</span>
          </h2>
          <div class="desc">{{item.desc}}</div>
        </nuxt-link>
      </li>
    </ul>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="count"
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
  async asyncData({ app, redirect, params }) {
    const { id } = params;
    if (!id) {
      redirect({
        path: "/article/1"
      });
      return;
    }
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
        pageSize: 10
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
.article-list {
  list-style: none;
  padding: 0;
}
.article-list-item {
  padding: 18px 24px;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.title {
  font-size: 26px;
  line-height: 1.5;
  font-weight: 400;
  margin: 15px 0;
  color: #ac3e40;
}
.title span {
  position: relative;
}
.title span::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ac3e40;
  visibility: hidden;
  transform: scaleX(0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.title span:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
.desc {
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
}
.pagination {
  margin-top: 18px;
  text-align: right;
}
</style>
