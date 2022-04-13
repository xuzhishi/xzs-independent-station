<template lang="pug">
div
  .email
    h5 Please send us an email
    .banner
      .address
        img(src="./../../assets/image/email.png")
        span contact@xdtx.org
      p It should indicate the job category and personal introduction you want to apply for, and attach your professional license and professional certificate
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.email {
  width: 1200px;
  height: 262px;
  background: #c4c4c4;
  position: relative;
  left: 50%;
  top: -60px;
  transform: translateX(-50%);
  overflow: hidden;
  h5 {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
  }
  .banner {
    width: 564px;
    height: 165px;
    background-image: url("./../../assets/image/email__banner.png");
    margin: 0 auto;
    .address {
      margin-top: 50px;
      img {
        margin-left: -63px;
      }
      span {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        text-decoration: underline;
        position: relative;
        margin-left: 30px;
        top: -8px;
      }
    }
    p {
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
      margin-top: 50px;
    }
  }
}
</style>