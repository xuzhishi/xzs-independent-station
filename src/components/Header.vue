<template lang="pug">
.isc-header
  //- Logo
  Menu
  PersonInfo
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    // Logo: () => import("./Logo"),
    Menu: () => import("./Menu"),
    PersonInfo: () => import("./PersonInfo.vue"),
  },
  mounted() {
    localStorage.setItem("locale", "en-US");
    this.$i18n.locale = "en-US";
  },
};
</script>

<style lang="scss" scoped>
.isc-header {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  background: rgba(0,0,0,0);
  position: absolute;
  // z-index: 999;
  left: 50%;
  top:0;
  transform: translateX(-50%);
}
</style>