<template lang="pug">
div
  banner
  digitalMedical
  product
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/About/Banner.vue"),
    digitalMedical: () => import("@/components/About/DigitalMedical.vue"),
    product: () => import("@/components/About/Product.vue"),
  },
};
</script>

<style>
</style>
