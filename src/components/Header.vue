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
};
</script>

<style lang="scss" scoped>
.isc-header {
  display: flex;
  justify-content: space-around;
}
</style>