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
  width: 59%;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0);
  margin: 0 auto;
  position: relative;
  z-index: 5;
  // position: absolute;
  // z-index: 9999;
}
</style>