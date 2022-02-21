<template lang="pug">
div
  h2 {{ $t('Recruitment.title') }}
  .banner
  .content(v-for="(item, index) in contents", :key="index")
    p {{ item }}
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
h2 {
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  font-size: 48px;
  color: #393837;
  margin-top: 30px;
}
.banner {
  width: 1199px;
  height: 518px;
  background: url("./../../assets/image/recruitment__banner.png");
  background-size: 1199px 518px;
  margin: 30px auto;
}
.content {
  width: 1158px;
  margin: 0 auto;
  text-align: left;
  margin-top: 18px;
  p {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    line-height: 20px;
    color: #393837;
  }
}
</style>