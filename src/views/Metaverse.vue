<template lang="pug">
div
  banner
  hospitalAdvantage
  contents
  patientsSpeech
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/Metaverse/Banner.vue"),
    hospitalAdvantage: () =>
      import("@/components/Metaverse/hospitalAdvantage.vue"),
    contents: () => import("@/components/Metaverse/Contents.vue"),
    patientsSpeech: () => import("@/components/Metaverse/PatientsSpeech.vue"),
  },
};
</script>

<style>
</style>