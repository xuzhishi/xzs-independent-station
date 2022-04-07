<template lang="pug">
div
  .home-banner
    el-carousel(
      trigger="click",
      height="1195px",
      arrow="always",
      :autoplay="false",
      @change="imgCut",
      ref="img"
    )
      el-carousel-item
        .banner
          .banner-left
            .title XDTX Metaverse
            .subTitle 元宇宙世界的精神心理医疗
            .btn(@click="learnMoreClick") {{ $t('home.bannerBth') }}
          .technical-introduction
            dl(v-for="item in bannerContent")
              dd
                h5 {{ item.title }}
                p {{ item.content }}
      el-carousel-item
        video.video(
          src="./../../assets/image/banner.mp4",
          width="100%",
          preload,
          ref="vedio"
        )
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      playTime: "",
    };
  },
  computed: {
    bannerContent() {
      return [
        {
          imgUrl: "",
          title: "WEB3.0",
          content: "为患者线上就诊涉及到的 隐私安全提供了强力保障",
        },
        {
          imgUrl: "",
          title: "XR技术",
          content:
            "突破次元壁，将医院的空间容量无限扩容 每位患者居家即可完成分诊、候诊和治疗",
        },
        {
          imgUrl: "",
          title: "远程在线",
          content: "我们将在全球范围内招募 有从医资格的医师进行线上坐诊",
        },
      ];
    },
  },
  methods: {
    learnMoreClick() {
      this.$router.push("/xdtx");
    },
    imgCut(value) {
      if (value === 1) {
        this.time = 19000;
        this.$refs.vedio.currentTime = 0;
        this.$refs.vedio.play();
        this.playTime = setTimeout(() => {
          this.$refs.img.prev();
        }, this.time);
      }
      if (value === 0) {
        clearTimeout(this.playTime);
        this.$refs.vedio.pause();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__arrow {
  background-color: rgba(31, 45, 61, 0);
  color: #393837;
  font-size: 32px;
}
::v-deep .el-carousel--horizontal {
  width: 100%;
  height: 1195px;
  // background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
  margin-top: -80px;
  position: relative;
  background: #f0f0f0;
  // background: pink;
  overflow: hidden;
  .el-carousel__indicators--horizontal {
    display: none;
  }
  .el-carousel__arrow--left {
    // margin-top: 36px;
    margin-left: 359px;
  }
  .el-carousel__arrow--right {
    margin-right: 359px;
  }
  .el-carousel__item:nth-child(2n) {
    // background-color: rgba(0, 0, 0, 0);
    height: 1195px;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.1501) 0%,
      rgba(226, 226, 226, 0.170673) 7.59%,
      rgba(255, 255, 255, 0.19) 33.14%
    );
    background-color: #f7f4f4;
  }
  .el-carousel__item:nth-child(2n + 1) {
    // background-color: rgba(0, 0, 0, 0);
    height: 1195px;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.1501) 0%,
      rgba(226, 226, 226, 0.170673) 7.59%,
      rgba(255, 255, 255, 0.19) 33.14%
    );
  }
  .el-carousel__item {
    .banner {
      width: 100%;
      height: 107%;
      background: url("./../../assets/image/home__banner__new.jpg") no-repeat;
      background-size: cover;
      overflow: hidden;
      margin-top: -80px;
      box-sizing: border-box;
      .technical-introduction {
        width: 1198px;
        height: 305px;
        background: #ffffff;
        margin-top: 425px;
        display: flex;
        box-sizing: border-box;
        padding-left: 420px;
        position: absolute;
        z-index: 55;
        // bottom: 0;
        dl {
          width: 216px;
          height: 200px;
          background-color: #fff;
          margin-right: 20px;
          margin-top: 50px;
          dt {
            width: 97px;
            height: 72px;
            background: #c4c4c4;
            margin: 0 auto;
          }
          dd {
            margin-top: 27px;
            text-align: center;
            h5 {
              font-family: "Microsoft YaHei UI";
              font-weight: 700;
              font-size: 14px;
              line-height: 18px;
              text-align: center;
              color: #393837;
              margin-bottom: 30px;
            }
            p {
              font-family: "Microsoft YaHei UI";
              font-size: 12px;
              line-height: 18px;
              text-align: center;
              color: #393837;
              margin: 0 auto;
            }
          }
        }
        dl:nth-of-type(1) p {
          width: 140px;
        }
        dl:nth-of-type(3) p {
          width: 158px;
        }
      }
      // padding-bottom: 22%;
      // position: relative;
    }
    // .video{
    //   height: 9899px !important;
    // }
    .banner-left {
      width: 1200px;
      text-align: left;

      // margin: 0 auto;
      margin-top: 434px;
      margin-left: 581px;
      // margin-left: 100px;
      .title {
        font-family: Arial;
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
        color: #393837;
      }
      .subTitle {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: #393837;
        margin-top: 10px;
      }
      .btn {
        width: 122px;
        height: 37px;
        background: #4e9cf8;
        border-radius: 5px;
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 37px;
        margin-top: 65px;
        cursor: pointer;
        position: absolute;
        z-index: 20;
      }
    }
  }
}
</style>