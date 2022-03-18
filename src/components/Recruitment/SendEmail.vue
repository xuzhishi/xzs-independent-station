<template lang="pug">
div
  .email
    h5 请给我们发送电子邮件
    .banner
      .address
        img(src="./../../assets/image/email.png")
        span contact@xdtx.org
      p 其中应写明您想申请的职务类别和个人介绍，并附上您的职业许可及专业证书
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