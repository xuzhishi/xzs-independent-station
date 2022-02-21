<template lang="pug">
div
  banner
  contents
  patientsSpeech
  bottom
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/Metaverse/Banner.vue"),
    contents: () => import("@/components/Metaverse/Contents.vue"),
    patientsSpeech: () => import("@/components/Metaverse/PatientsSpeech.vue"),
    bottom: () => import("@/components/Bottom.vue"),
  },
};
</script>

<style>
</style>