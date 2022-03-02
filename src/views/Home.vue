<template lang='pug'>
div
  banner
  newDynamic
</template>

<script>
export default {
  name: "Home",
  components: {
    banner: () => import("@/components/Home/Banner.vue"),
    newDynamic: () => import("@/components/Home/NewDynamic.vue"),
  },
};
</script>
