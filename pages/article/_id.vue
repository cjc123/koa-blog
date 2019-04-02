<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name:'article-detail'}">
          <h2 class="title">标题</h2>
          <div class="desc">描述</div>
        </router-link>
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
// 使用axios
// 一般情况下，在组件中，可以这样使用：

// this.$axios.get(url).then( res -> {...});
// 而在asyncData中，不能直接使用this引用。可以这样：

// async asyncData ({ app }) {
//     // 这里data等同于上面的res.data
//     let { data } = await app.$axios.get(url).then( res -> {...});
// }

export default {
  components: {},
  created() {
    this.$axios
      .get("http://localhost:3000/articles/test", { test: "test" })
      .then(res => {});
    // this.$axios
    //   .post("http://localhost:3000/articles/addArticle", {
    //     title: "哈哈哈",
    //     content: "是测试"
    //   })
    //   .then(res => {});
  }
};
</script>

<style>
</style>
