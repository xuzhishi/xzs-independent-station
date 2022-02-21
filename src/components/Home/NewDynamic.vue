<template lang="pug">
div
  .describe
    p {{ $t('home.describe1') }}
    p {{ $t('home.describe2') }}
  .listen-voice
    .listen-right
      .company-describe
        p.right-time {{ $t('home.company__time__1') }}
        p.right-content {{ $t('home.company__content__1') }}
      .company-describe
        p.right-time {{ $t('home.company__time__2') }}
        p.right-content {{ $t('home.company__content__2') }}
      .company-describe
        p.right-time {{ $t('home.company__time__3') }}
        p.right-content {{ $t('home.company__content__3') }}
      .company-describe
        p.right-time {{ $t('home.company__time__4') }}
        p.right-content {{ $t('home.company__content__4') }}
      .company-describe
        p.right-time {{ $t('home.company__time__5') }}
        p.right-content {{ $t('home.company__content__5') }}
    .listen-left
      .left-content {{ $t('home.compay__title') }}
      .btn {{ $t('home.bannerBth') }}
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.describe {
  margin-top: 20px;
  p {
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #56a4cb;
  }
}
.listen-voice:hover {
  width: 1198px;
  height: 556px;
  background: url("./../../assets/image/company__banner.png") no-repeat;
  background-size: 1198px 556px;
  margin: 95px auto;
  border: 1px solid #7a7a7a;
  display: flex;
  .listen-left {
    width: 409px;
    height: 557px;
    position: relative;
    border-left: 1px solid #7a7a7a;
    .left-content {
      width: 100%;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 48px;
      color: #393837;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 193px;
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
      margin-top: 319px;
      margin-left: 23px;
    }
  }

  .listen-right {
    margin-top: 50px;
    margin-left: 117px;
    width: 791px;
    .company-describe {
      .right-time {
        text-align: left;
        font-family: Microsoft YaHei UI;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        margin-bottom: 10px;
      }
      .right-content {
        text-align: left;
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        margin-bottom: 30px;
      }
    }
  }
}
.listen-voice {
  width: 1198px;
  height: 556px;
  background: url("./../../assets/image/company__banner.png");
  background-size: 1198px 556px;
  margin: 95px auto;
  border: 1px solid #7a7a7a;
  display: flex;
  .listen-left {
    width: 409px;
    height: 557px;
    position: relative;
    border-left: 1px solid #7a7a7a;
    .left-content {
      width: 100%;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 48px;
      color: #393837;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 193px;
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
      margin-top: 319px;
      margin-left: 23px;
    }
  }

  .listen-right {
    margin-top: 50px;
    margin-left: 117px;
    width: 791px;
    .company-describe {
      .right-time {
        text-align: left;
        font-family: Microsoft YaHei UI;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        margin-bottom: 10px;
      }
      .right-content {
        text-align: left;
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        margin-bottom: 30px;
      }
    }
  }
}
</style>