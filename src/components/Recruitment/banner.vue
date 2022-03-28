<template lang="pug">
div
  .banner
    .block
      img(src="./../../assets/image/recruitment_banner.jpg")
      .right
        p.line1 全球范围医师招募
        p(style="margin-bottom:15px;") 医疗模式转型
        p 科技力量助医疗无界
</template>

<script>
export default {
  computed: {
    contents() {
      return [
        this.$t("Recruitment.content__1"),
        this.$t("Recruitment.content__2"),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 430px;
  background: linear-gradient(355.84deg, #85B7F8 1.89%, #90BEF8 95.14%);
  .block {
    width: 1100px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    .right {
      width: 432px;
      text-align: right;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 48px;
      color: #ffffff;
      .line1{
        margin-top: 109px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>