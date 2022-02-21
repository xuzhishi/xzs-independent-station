<template lang="pug">
div
  .about-wrap
    .about-left
      h2 {{ $t('About.title') }}
      .content {{ $t('About.content') }}
      img.about-img(src="./../../assets/image/about__banner.png", width="635")
    .about-right
      h5 {{ $t('About.doctor_describe_title') }}
      .right-block
        img(src="./../../assets/image/doctor__1.png")
        .right-content
          p.title {{ $t('About.doctor_subTitle_1') }}
          p.content {{ $t('About.doctor_content_1') }}
      .right-block 
        img(src="./../../assets/image/doctor__2.png")
        .right-content
          p.title {{ $t('About.doctor_subTitle_2') }}
          p.content {{ $t('About.doctor_content_2') }}
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-wrap {
  width: 1150px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 95px;
  .about-left {
    h2 {
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 48px;
      line-height: 61px;
      width: 635px;
      color: #393837;
      padding-bottom: 24px;
      border-bottom: 5px solid rgba(0, 0, 0, 0.15);
    }
    .content {
      width: 635px;
      text-align: left;
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      line-height: 20px;
      color: #393837;
      margin-top: 73px;
    }
    .about-img {
      margin-top: 75px;
    }
  }
  .about-right {
    width: 499px;
    height: 613px;
    background: #eeedeb;
    margin-top: 72px;
    h5 {
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #393837;
      margin-top: 15px;
      margin-left: 20px;
      text-align: left;
    }
    .right-block {
      margin-left: 20px;
      margin-top: 12px;
      display: flex;
      .right-content {
        width: 280px;
        margin-left: 12px;
        font-family: Microsoft YaHei UI;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        text-align: left;
        .title {
          margin-bottom: 20px;
        }
      }
    }
    .right-block:nth-of-type(2) {
      margin-top: 25px;
    }
  }
}
</style>