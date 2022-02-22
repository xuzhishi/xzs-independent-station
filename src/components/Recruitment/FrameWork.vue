<template lang="pug">
div
  .wrap
    h4 {{ $t('Recruitment.content_title') }}
    .content
      .content-recruitment(v-for="(item, index) in list", :key="index")
        .content-list
          img(:src="item.img")
        .subTitle
          h5 {{ item.subTitle }}
        .list-content
          p {{ item.content }}
          p(style="margin-top: 20px") {{ item.content1 }}
          p {{ item.content2 }}
          .content3
            .content3-recruitment(
              v-for="(item, index) in item.content3",
              :key="index"
            )
              h5 {{ item.subTitle }}
              p {{ item.content }}
              p {{ item.content1 }}
    //-   h5 {{ item.subTitle }}
    //-   p(style="margin-bottom: 20px") {{ item.content }}
    //-   p {{ item.content1 }}
    //-   p {{ item.content2 }}
  h5.link {{ $t('Recruitment.content_bottom_1') }}<span style="color:#56A4CB;">contact@xdtx.org</span>{{ $t('Recruitment.content_bottom_2') }}
</template>

<script>
export default {
  computed: {
    list() {
      return [
        {
          img: require("./../../assets/image/recruitment0.png"),
          subTitle: this.$t("Recruitment.content_subTitle_1"),
          content: this.$t("Recruitment.content_content_1"),
        },
        {
          img: require("./../../assets/image/recruitment1.png"),
          subTitle: this.$t("Recruitment.content_subTitle_2"),
          content: this.$t("Recruitment.content_content_2"),
        },
        {
          img: require("./../../assets/image/recruitment2.png"),
          subTitle: this.$t("Recruitment.content_subTitle_3"),
          content: this.$t("Recruitment.content_content_3"),
          content1: this.$t("Recruitment.content_content1_3"),
        },
        {
          img: require("./../../assets/image/recruitment3.png"),
          subTitle: this.$t("Recruitment.content_subTitle_4"),
          content: this.$t("Recruitment.content_content_4"),
          content1: this.$t("Recruitment.content_content1_4"),
        },
        {
          img: require("./../../assets/image/recruitment4.png"),
          subTitle: this.$t("Recruitment.content_subTitle_5"),
          content: this.$t("Recruitment.content_content_5"),
        },
        {
          img: require("./../../assets/image/recruitment5.png"),
          subTitle: this.$t("Recruitment.content_subTitle_6"),
          content: this.$t("Recruitment.content_content_6"),
          content1: this.$t("Recruitment.content_content1_6"),
          content2: this.$t("Recruitment.content_content2_1"),
          content3: [
            {
              subTitle: this.$t("Recruitment.content_subTitle_7"),
              content: this.$t("Recruitment.content_content_7"),
            },
            {
              subTitle: this.$t("Recruitment.content_subTitle_8"),
              content: this.$t("Recruitment.content_content_8"),
              content1: this.$t("Recruitment.content_content1_8"),
            },
          ],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 1199px;
  margin: 0 auto;
  text-align: left;
  margin-top: 30px;
  padding-bottom: 30px;
  h4 {
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    line-height: 20px;
    color: #393837;
    margin-top: 82px;
    margin-bottom: 59px;
    text-align: center;
  }
  .content {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 700px;
    .content-recruitment {
      width: 360px;
      height: 224px;
      position: relative;
      .content-list {
        width: 360px;
        height: 224px;
        background: #eeedeb;
        text-align: center;
        cursor: pointer;
        img {
          margin-top: 50px;
        }
      }
      .subTitle {
        h5 {
          color: #393837;
          font-family: Microsoft YaHei UI;
          font-size: 16px;
          margin: 20px 0;
        }
      }

      .list-content {
        width: 400px;
        background: #fff;
        position: absolute;
        top: 290px;
        left: -20px;
        display: none;
        z-index: 30;
        p {
          font-family: Microsoft YaHei UI;
          font-size: 12px;
          line-height: 20px;
          color: #393837;
          width: 360px;
          margin: 0 auto;
          margin-top: 10px;
        }
        .content3 {
          .content3-recruitment {
            h5 {
              margin-left: 20px;
            }
          }
        }
      }
    }
    .content-recruitment:hover .list-content {
      display: block;
    }
  }
  .content:nth-of-type(6),
  .content:nth-of-type(8) {
    p {
      margin-bottom: 0 !important;
    }
  }
}
.link {
  font-size: 16px;
}
</style>