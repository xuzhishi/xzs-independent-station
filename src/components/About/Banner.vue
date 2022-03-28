<template lang="pug">
div
  .banner 
    h2 虚之实科技公司创立的意义
    .block
      h3.block-title 为全球创造“认知高质量生命”！
    p 我们将以元宇宙为依托，以数据为燃料，持续为医生提供更好的解决方案，减负增效，为10亿人提供“认知高质量生命”，帮助人类拓展生命的数字维度。
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 968px;
  background-color: #fff;
  overflow: hidden;
  h2 {
    width: 1212px;
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 48px;
    color: #393837;
    margin: 0 auto;
    margin-top: 160px;
    text-align: left;
    box-sizing: border-box;
    padding-left: 87px;
  }
  .block {
    width: 1212px;
    height: 363px;
    background: url("./../../assets/image/XDTX.jpg") no-repeat;
    margin: 0 auto;
    overflow: hidden;
    .block-title {
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 48px;
      color: #393837;
      text-align: left;
      margin-left: 87px;
      margin-top: 10px;
    }
  }
  p {
    width: 1036px;
    height: 193px;
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #393837;
    margin: 0 auto;
    margin-top: 84px;
  }
}
</style>