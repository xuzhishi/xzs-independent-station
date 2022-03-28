<template lang="pug">
div
  //- h2 XDTX Metaverse
  .banner
    .banner__title
      h4 XDTX Metaverse
      h4 实现全球普惠医疗
      h4 ss帮助人类拓展生命的维度
    .mask
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 430px;
  background: url("./../../assets/image/Metaverse__banner.jpg");
  margin: 0 auto;
  background-size: 100% 430px;
  overflow: hidden;
  position: relative;
  .banner__title {
    font-family: "Arial";
    font-weight: 700;
    font-size: 48px;
    line-height: 55px;
    color: #ffffff;
    text-align: left;
    position: absolute;
    top: 97px;
    left: 25%;
    z-index: 2;
    h4 {
      margin-bottom: 24px;
    }
  }
  .mask {
    width: 100%;
    height: 430px;
    background: rgba(57, 56, 55, 0.29);
    position: absolute;
    top: 0;
  }
}
</style>