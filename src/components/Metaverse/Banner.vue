<template lang="pug">
div
  //- h2 XDTX Metaverse
  .banner
    .banner__title
      h4 XDTX Metaverse
      h4 实现全球普惠医疗
      h4 ss帮助人类拓展生命的维度
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 430px;
  background: url("./../../assets/image/Mateverse__banner.png");
  margin: 0 auto;
  background-size: 100% 430px;
  overflow: hidden;
  .banner__title {
    font-family: "Arial";
    font-weight: 700;
    font-size: 48px;
    line-height: 55px;
    color: #ffffff;
    margin-top: 97px;
    margin-left: 443px;
    text-align: left;
    h4{
      margin-bottom: 24px;
    }
  }
}
</style>