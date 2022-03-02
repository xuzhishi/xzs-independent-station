<template lang="pug">
div
  banner
  frameWork
  qualifications
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/Recruitment/banner.vue"),
    frameWork: () => import("@/components/Recruitment/FrameWork.vue"),
    qualifications: () => import("@/components/Recruitment/Qualifications.vue"),
  },
};
</script>

<style>
</style>