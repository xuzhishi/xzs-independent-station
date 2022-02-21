<template lang="pug">
div
  .title
    h4 {{ $t('Metaverse.speech__title') }}
    img(src="./../../assets/image/Mateverse__arrow.png")
  .content(v-for="(item, index) in speechList", :key="index")
    img.content-img(src="./../../assets/image/Metaverse__subTitleIcon.png")
    span {{ item.subTitle }}
    p.content-describe {{ item.content }}
    p.time {{ item.time }}
  .comment {{ $t('Metaverse.comment') }}
  .NFT-store
    .btn {{ $t('Metaverse.NFTStore') }}
</template>

<script>
export default {
  computed: {
    speechList() {
      return [
        {
          subTitle: this.$t("Metaverse.speech_subTitle_1"),
          content: this.$t("Metaverse.speech_content_1"),
          time: this.$t("Metaverse.speech_time_1"),
        },
        {
          subTitle: this.$t("Metaverse.speech_subTitle_2"),
          content: this.$t("Metaverse.speech_content_2"),
          time: this.$t("Metaverse.speech_time_2"),
        },
        {
          subTitle: this.$t("Metaverse.speech_subTitle_3"),
          content: this.$t("Metaverse.speech_content_3"),
          time: this.$t("Metaverse.speech_time_3"),
        },
        {
          subTitle: this.$t("Metaverse.speech_subTitle_4"),
          content: this.$t("Metaverse.speech_content_4"),
          time: this.$t("Metaverse.speech_time_4"),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
  display: flex;
  width: 1159px;
  margin: 0 auto;
  margin-top: 120px;
  h4 {
    margin-right: 39px;
  }
}
.content {
  text-align: left;
  width: 1159px;
  margin: 0 auto;
  img {
    margin-top: 34px;
    margin-right: 13px;
  }
  span {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    line-height: 20px;
    color: #393837;
  }
  .content-describe {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    line-height: 20px;
    color: #393837;
    margin-top: 15px;
    width: 576px;
  }
  .time {
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    line-height: 18px;
    color: #393837;
    margin-top: 15px;
  }
  .content-img {
    position: relative;
    top: 5px;
  }
}
.comment {
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #56a4cb;
  width: 1159px;
  margin: 32px auto;
  text-align: left;
  cursor: pointer;
  margin-bottom: 100px;
}
.NFT-store {
  width: 1200px;
  height: 198px;
  background: url("./../../assets/image/NFT__banner.png");
  background-size: 1200px 198px;
  margin: 0 auto;
  margin-bottom: 95px;
  position: relative;
  .btn {
    width: 195px;
    height: 37px;
    background: #56a4cb;
    border-radius: 5px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    font-size: 16px;
    line-height: 37px;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>