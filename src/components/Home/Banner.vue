<template lang="pug">
div
  .banner
    .banner-wrap
      .banner-left
        .title XDTX Metaverse
        .subTitle {{ $t('home.bannerTitle') }}
        .btn {{ $t('home.bannerBth') }}
      .banner-right
        img.right-img(src="./../../assets/image/banner__img.png")
  .listen-voice
    .listen-left
      .left-content {{ $t('home.listenTitle') }}
      .left-image 
        img(src="./../../assets/image/listen.gif")
    .listen-right
      p.right-content {{ $t('home.listen__content1') }}
      p.right-content {{ $t('home.listen__content2') }}
      p.right-content {{ $t('home.listen__content3') }}
      p.right-content {{ $t('home.listen__content4') }}
      p.right-content {{ $t('home.listen__content5') }}
      .btn {{ $t('home.listen__btn') }}
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 828px;
  background: url("./../../assets/image/banner.png");
  background-size: 100% 908px;
  overflow: hidden;
  display: flex;
  .banner-wrap {
    width: 1200px;
    margin: 0 auto;
    // background: pink;
    position: relative;
    .banner-left {
      text-align: left;
      margin-top: 260px;
      margin-left: 100px;
      .title {
        font-family: Arial;
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
        color: #393837;
      }
      .subTitle {
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #393837;
      }
      .btn {
        width: 122px;
        height: 37px;
        background: #56a4cb;
        border-radius: 5px;
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 37px;
        margin-top: 37px;
      }
    }
    .banner-right {
      position: absolute;
      top: 111px;
      left: 171px;
      z-index: 2;
      // background: #56a4cb;
      .right-img {
        text-align: left;
        width: 1029px;
      }
    }
  }
}
.listen-voice {
  width: 1198px;
  height: 556px;
  background: url("./../../assets/image/listen__banner.png");
  background-size: 1198px 556px;
  margin: 60px auto;
  border: 1px solid #7a7a7a;
  display: flex;
  .listen-left {
    width: 409px;
    height: 557px;
    position: relative;
    border-right: 1px solid #7a7a7a;
    .left-content {
      width: 100%;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 48px;
      color: #393837;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    .left-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .listen-right {
    margin-top: 162px;
    margin-left: 117px;
    .right-content {
      text-align: left;
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      line-height: 30px;
      color: #393837;
    }
    .btn {
      width: 122px;
      height: 37px;
      background: #56a4cb;
      border-radius: 5px;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 37px;
      margin-top: 37px;
    }
  }
}
</style>