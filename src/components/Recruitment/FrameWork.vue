<template lang="pug">
div
  .wrap
    h4 {{ $t('Recruitment.content_title') }}
    .content(v-for="(item, index) in list", :key="index")
      h5 {{ item.subTitle }}
      p(style="margin-bottom: 20px") {{ item.content }}
      p {{ item.content1 }}
      p {{ item.content2 }}
  h5 {{ $t('Recruitment.content_bottom_1') }}<span style="color:#56A4CB;">kangcheng@xuzhishi.com</span>{{ $t('Recruitment.content_bottom_2') }}
</template>

<script>
export default {
  computed: {
    list() {
      return [
        {
          subTitle: this.$t("Recruitment.content_subTitle_1"),
          content: this.$t("Recruitment.content_content_1"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_2"),
          content: this.$t("Recruitment.content_content_2"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_3"),
          content: this.$t("Recruitment.content_content_3"),
          content1: this.$t("Recruitment.content_content1_3"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_4"),
          content: this.$t("Recruitment.content_content_4"),
          content1: this.$t("Recruitment.content_content1_4"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_5"),
          content: this.$t("Recruitment.content_content_5"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_6"),
          content: this.$t("Recruitment.content_content_6"),
          content1: this.$t("Recruitment.content_content1_6"),
          content2: this.$t("Recruitment.content_content2_1"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_7"),
          content: this.$t("Recruitment.content_content_7"),
        },
        {
          subTitle: this.$t("Recruitment.content_subTitle_8"),
          content: this.$t("Recruitment.content_content_8"),
          content1: this.$t("Recruitment.content_content1_8"),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
h5 {
  color: #393837;
  font-family: Microsoft YaHei UI;
  font-size: 16px;
  margin-left: 20px;
  width: 1199px;
  margin: 0 auto;
  text-align: left;
  margin-top: 20px;
}
.wrap {
  width: 1199px;
  background: #eeedeb;
  margin: 0 auto;
  text-align: left;
  margin-top: 30px;
  overflow: hidden;
  padding-bottom: 30px;
  h4 {
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    line-height: 20px;
    color: #393837;
    margin: 20px 0 0 20px;
  }
  .content {
    margin-left: 20px;
    h5 {
      color: #393837;
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      margin: 20px 0;
    }
    p {
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      line-height: 20px;
      color: #393837;
    }
  }
  .content:nth-of-type(6),
  .content:nth-of-type(8) {
    p {
      margin-bottom: 0 !important;
    }
  }
}
</style>