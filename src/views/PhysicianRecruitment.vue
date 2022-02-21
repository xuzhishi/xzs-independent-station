<template lang="pug">
div
  banner
  frameWork
  qualifications
  bottom
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/Recruitment/banner.vue"),
    frameWork: () => import("@/components/Recruitment/FrameWork.vue"),
    qualifications: () => import("@/components/Recruitment/Qualifications.vue"),
    bottom: () => import("@/components/Bottom.vue"),
  },
};
</script>

<style>
</style>