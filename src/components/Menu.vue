<template>
  <el-menu
    :default-active="activeIndex"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="#C4C4C4"
    active-text-color="#56A4CB"
  >
    <el-menu-item index="/" @click="routeToClick('/')">
      <img
        src="@/assets/image/logo.png"
        alt=""
        width="200"
        class="logo-image"
      />
    </el-menu-item>
    <el-menu-item index="/xdtx" @click="routeToClick('/xdtx')"
      >XDTX Metaverse</el-menu-item
    >
    <el-menu-item index="/recruitment" @click="routeToClick('/recruitment')"
      >全球医师招募注册</el-menu-item
    >
    <el-menu-item index="/about" @click="routeToClick('/about')"
      >关于我们</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  mounted() {
    this.activeIndex = window.location.pathname;
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      this.activeIndex = key;
    },
    routeToClick(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang='scss' scoped>
::v-deep.el-menu.el-menu--horizontal {
  border-bottom: none;
  margin-top: 20px;
}
::v-deep.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
::v-deep.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  font-family: Microsoft YaHei UI;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}
.logo-image {
  margin-top: -15px;
}
</style>

