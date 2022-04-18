<template lang="pug">
div
  .banner
    .block
      img(src="./../../assets/image/recruitment_banner.jpg")
      .right
        p.line1 Worldwide Physician Recruitment
        p.line2(style="margin-bottom: 15px;position:relative;top:100px") Transformation of Medical Model
        p.line3(style="position:relative;top:100px") Power of Science and Technology Contributes to Unlimited Medical Care
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
  background: linear-gradient(355.84deg, #85b7f8 1.89%, #90bef8 95.14%);
  .block {
    width: 1500px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    .right {
      width: 1032px;
      text-align: right;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 48px;
      color: #ffffff;
      position: relative;
      top: -50px;
      .line1 {
        margin-top: 109px;
        margin-bottom: 15px;
        position: relative;
        left: -362px;
      }
      .line2,
      .line3 {
        font-size: 40px;
        position: relative;
        left: -362px;
      }
      .line3 {
        width: 918px;
        left: -350px;
      }
    }
  }
}
</style>