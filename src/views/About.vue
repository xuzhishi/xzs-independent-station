<template lang="pug">
div
  banner
  digitalMedical
  product
  doctorIntroduction
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/About/Banner.vue"),
    digitalMedical: () => import("@/components/About/DigitalMedical.vue"),
    product: () => import("@/components/About/Product.vue"),
    doctorIntroduction:()=>import("@/components/About/DoctorIntroduction.vue")
  },
};
</script>

<style>
</style>
