<template lang="pug">
div
  .message
    .title
      //- {{ $t('Metaverse.speech__title') }}
      .remark
        h4 用户评论
        span.iconfont.icon-xiangshang_jiantou
      .btn 发布话题
    .content(v-for="(item, index) in speechList", :key="index")
      img.content-img(src="./../../assets/image/Metaverse__subTitleIcon.png")
      span {{ item.subTitle }}
      p.content-describe {{ item.content }}
      .remark-number
        p.time {{ item.time }}
        .seek
          span.iconfont.icon-yanjing 3076
          span.iconfont.icon-xiaoxi 7
      .line
    //- .comment {{ $t('Metaverse.comment') }}
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
.message {
  width: 1080px;
  // height: 594px;
  background: #ffffff;
  box-shadow: 5px 4px 10px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 50%;
  top: -70px;
  transform: translateX(-50%);
  padding-bottom: 22px;
  .title {
    display: flex;
    width: 975px;
    justify-content: space-between;
    margin: 0 auto;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #c4c4c4;
    .remark {
      display: flex;
      h4 {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 20px;
        color: #393837;
      }
      .icon-xiangshang_jiantou {
        font-size: 14px;
        font-weight: bold;
        margin-left: 22px;
      }
    }
    .btn {
      width: 122px;
      height: 37px;
      background: #4e9cf8;
      border-radius: 5px;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 16px;
      line-height: 37px;
      text-align: center;
      color: #ffffff;
      margin-top: 13px;
    }
  }
  .content {
    text-align: left;
    width: 975px;
    margin: 0 auto;
    img {
      margin-top: 22px;
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
    }
    .remark-number {
      display: flex;
      justify-content: space-between;
      .time {
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        line-height: 18px;
        color: #393837;
        margin-top: 15px;
      }
      .seek {
        width: 100px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .icon-yanjing,
        .icon-xiaoxi {
          color: #c4c4c4;
        }
      }
    }
    .content-img {
      position: relative;
      top: 5px;
    }
    .line {
      width: 975px;
      height: 1px;
      background-color: #c4c4c4;
      margin-top: 22px;
    }
  }
  .content:nth-of-type(5) .line {
    display: none;
  }
}
.NFT-store {
  width: 100%;
  height: 318px;
  background: url("./../../assets/image/NFT__banner.jpg");
  background-size: 100% 100%;
  margin: 0 auto;
  margin-bottom: 95px;
  position: relative;
  margin-top: 90px;
  .btn {
    width: 230px;
    height: 37px;
    background: #4e9cf8;
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