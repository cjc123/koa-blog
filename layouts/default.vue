<template>
  <div class="content-body">
    <div class="nav">
      <nuxt-link class="nav-item" :to="{name:'index'}">首页</nuxt-link>
      <nuxt-link class="nav-item" :to="{name:'article-id',params:{id:1}}">文章</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f4f5f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 960px;
  margin: 0 auto;
  background: #fff;
}
.nav {
  padding: 20px 20px 0 20px;
}
.nav-item {
  position: relative;
  font-size: 26px;
  font-weight: bold;
  color: #ac3e40 !important;
  margin-right: 20px;
}

.nav-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #ac3e40;
  visibility: hidden;
  transform: scaleX(0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.nav-item:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
