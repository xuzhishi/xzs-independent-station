<template lang="pug">
div
  .message
    .title
      //- {{ $t('Metaverse.speech__title') }}
      .remark
        h4 User comments
        span.iconfont.icon-xiangshang_jiantou
      .btn Release topic
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
  .NFT-store
    .btn(@click="storeClick") Enter Haila hospital
    .block
      p For the first time, please note:
      p PC experience: 1 Download steam, 2 Download vrchat and search for room name - Haila hospital
      p Quest end experience: Download vrchat from quest and search the room name - Haila hospital (Quest head display is required)
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
  methods: {
    storeClick() {
      // window.location.href="https://hello.vrchat.com/"
      window.open("https://hello.vrchat.com/", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  width: 1080px;
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
  height: 261px;
  background: url("./../../assets/image/NFT.jpg");
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  margin-top: 90px;
  overflow: hidden;
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
    top: 60px;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .block {
    text-align: left;
    width: 938px;
    margin: 0 auto;
    margin-top: 130px;
    p {
      margin-bottom: 20px;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 14px;
      color: #7a7a7a;
    }
  }
}
</style>