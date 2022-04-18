<template lang="pug">
div
  banner
  introduce
  frameWork
  sendEmail
  qualifications
</template>

<script>
export default {
  components: {
    banner: () => import("@/components/Recruitment/banner.vue"),
    introduce: () => import("@/components/Recruitment/Introduce.vue"),
    frameWork: () => import("@/components/Recruitment/FrameWork.vue"),
    sendEmail: () => import("@/components/Recruitment/SendEmail.vue"),
    qualifications: () => import("@/components/Recruitment/Qualifications.vue"),
  },
};
</script>

<style>
</style>