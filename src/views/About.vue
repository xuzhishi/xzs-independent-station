<template lang="pug">
div
  about
  bottom
</template>

<script>
export default {
  components: {
    about: () => import("@/components/About/About.vue"),
    bottom: () => import("@/components/Bottom.vue"),
  },
};
</script>

<style>
</style>
