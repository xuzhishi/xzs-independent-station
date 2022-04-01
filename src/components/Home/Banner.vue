<template lang="pug">
div
  .banner
    .block
      span.demonstration 
        el-carousel(
          trigger="click",
          height="150px",
          arrow="always",
          :autoplay="false"
        )
          el-carousel-item(v-for="item in 2", :key="item")
            .banner-left
              .title XDTX Metaverse
              .subTitle {{ $t('home.bannerTitle') }}
              .btn(@click="learnMoreClick") {{ $t('home.bannerBth') }}
    .technical-introduction
      dl(v-for="item in bannerContent")
        //- dt
        //-   img(:src="item.imgUrl")
        dd
          h5 {{ item.title }}
          p {{ item.content }}
</template>

<script>
export default {
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
  },
};
</script>

<style lang="scss" scoped>
::v-deep .banner {
  width: 100%;
  height: 828px;
  background: url("./../../assets/image/home__banner__new.jpg") no-repeat;
  background-size: 100% 968px;
  overflow: hidden;
  margin-top: -80px;
  .el-carousel--horizontal {
    width: 1108px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 310px;
    margin-left: 359px;
    .el-carousel__indicators--horizontal {
      display: none;
    }
    .el-carousel__arrow--left,
    .el-carousel__arrow--right {
      margin-top: 36px;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: rgba(0, 0, 0, 0);
      height: 200px;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: rgba(0, 0, 0, 0);
      height: 200px;
    }
    .el-carousel__item {
      .banner-left {
        text-align: left;
        // margin-top: 260px;
        margin-left: 100px;
        .title {
          font-family: Arial;
          font-weight: bold;
          font-size: 48px;
          line-height: 55px;
          color: #393837;
        }
        .subTitle {
          font-family: Microsoft YaHei UI;
          font-weight: bold;
          font-size: 20px;
          line-height: 25px;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          color: #393837;
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
        }
      }
    }
  }
  .technical-introduction {
    width: 1198px;
    height: 305px;
    background: #ffffff;
    margin-top: 13px;
    display: flex;
    box-sizing: border-box;
    padding-left: 420px;
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
}
</style>