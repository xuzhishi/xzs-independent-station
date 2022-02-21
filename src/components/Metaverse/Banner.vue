<template lang="pug">
div
  h2 XDTX Metaverse
  .banner
    .link {{ $t('Metaverse.banner__link') }}
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-family: Arial;
  font-size: 48px;
  line-height: 55px;
  color: #393837;
  margin-top: 30px;
}
.banner {
  width: 1199px;
  height: 518px;
  background: url("./../../assets/image/Mateverse__banner.jpg");
  margin: 0 auto;
  margin-top: 30px;
  background-size: 1199px 518px;
  position: relative;
  .link {
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #393837;
    position: absolute;
    left: 6px;
    bottom: 10px;
  }
}
</style>