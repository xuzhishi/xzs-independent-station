<template lang="pug">
div
  .recruitment
    .left-1(v-for="(item, index) in qualifications", :key="index")
      h5 {{ item.title }}
      p {{ item.content1 }}
      p {{ item.content2 }}
      p {{ item.content3 }}
      p {{ item.content4 }}
      p {{ item.content5 }}

    .recruitment-right
</template>

<script>
export default {
  computed: {
    qualifications() {
      return [
        {
          title: this.$t("Recruitment.qualifications_title_1"),
          content1: this.$t("Recruitment.qualifications_content1_1"),
          content2: this.$t("Recruitment.qualifications_content2_1"),
          content3: this.$t("Recruitment.qualifications_content3_1"),
          content4: "",
          content5: "",
        },
        {
          title: this.$t("Recruitment.qualifications_title_2"),
          content1: this.$t("Recruitment.qualifications_content1_2"),
        },
        {
          title: this.$t("Recruitment.qualifications_title_3"),
          content1: this.$t("Recruitment.qualifications_content1_3"),
          content2: this.$t("Recruitment.qualifications_content2_2"),
          content3: this.$t("Recruitment.qualifications_content3_2"),
          content4: this.$t("Recruitment.qualifications_content4_1"),
          content5: this.$t("Recruitment.qualifications_content5_1"),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.recruitment {
  width: 1000px;
  text-align: left;
  margin: 0 auto;
  margin-top: 170px;
  position: relative;
  margin-bottom: 95px;
  .left-1 {
    width: 413px;
    h5 {
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #393837;
      margin-bottom: 15px;
    }
    p {
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      line-height: 20px;
      color: #393837;
      margin-bottom: 15px;
    }
  }
  .left-1:nth-of-type(2) {
    h5 {
      margin-top: 65px;
    }
  }
  .left-1:nth-of-type(3) {
    width: 540px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>