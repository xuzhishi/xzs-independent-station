<template lang='pug'>
div
  banner
  listenVoice
  newDynamic
</template>

<script>
export default {
  name: "Home",
  components: {
    banner: () => import("@/components/Home/Banner.vue"),
    newDynamic: () => import("@/components/Home/NewDynamic.vue"),
    listenVoice: () => import("@/components/Home/ListenVoice.vue"),
  },
};
</script>
