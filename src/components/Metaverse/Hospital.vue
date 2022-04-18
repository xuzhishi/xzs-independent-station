<template lang="pug">
div
  .hospital-right
    .title {{ title }}
    .line
    img(:src="imgUrl")
    .content
      p {{ content1 }}
      p {{ content2 }}
      p {{ content3 }}
      p {{ content4 }}
</template>

<script>
export default {
  props: ["title", "imgUrl", "content1", "content2", "content3", "content4"],
};
</script>

<style lang="scss" scoped>
.hospital-right {
  width: 744px;
  text-align: left;
  margin-left: 58px;
  .title {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #393837;
    margin-bottom: 20px;
  }
  .line {
    width: 744px;
    height: 1px;
    background-color: #c4c4c4;
    margin-bottom: 20px;
  }
  .content {
    margin-top: 34px;
    p {
      font-family: "Microsoft YaHei UI";
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #393837;
      text-indent: 2rem;
      margin-bottom: 10px;
    }
  }
}
</style>