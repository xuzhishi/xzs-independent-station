<template lang="pug">
<div id="app">
  Header
  keep-alive
    router-view
  //- router-view v-if="!keepAlive" 
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    Header: () => import("./components/Header.vue"),
  },
  computed: {
    // 页面缓存 路由中未配置  默认未不缓存
    keepAlive() {
      const {
        meta: { keepAlive = false },
      } = this.$route;
      return keepAlive;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
