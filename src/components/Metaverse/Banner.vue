<template lang="pug">
div
  .banner
    .banner__title
      h4 XDTX Metaverse
      h4 Fulfill Globally Inclusive Healthcare
      h4 Help Human Beings to Expand Dimension of Life
      p.link To start your experience, please click <a href="https://hello.vrchat.com/" target="_blank" style="color:#fff;">https://hello.vrchat.com/</a> to enter the room and search for HeLa Central Hospital.
    .mask
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 426px;
  background: url("./../../assets/image/Metaverse__banner.jpg") no-repeat;
  margin: 0 auto;
  background-size: 100% 100%;
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
    .link {
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 18px;
      line-height: 15px;
      color: #ffffff;
      position: relative;
      top: 68px;
    }
  }
  .mask {
    width: 100%;
    height: 426px;
    background: rgba(57, 56, 55, 0.29);
    position: absolute;
    top: 0;
  }
}
</style>