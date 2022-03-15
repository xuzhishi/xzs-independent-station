<template lang="pug">
div
  .latest-developments
    .developments-center
      .developments-left
        h5.title 新闻中心
        .content-1
          p.time 03-01
          p.content 公司举办海拉医院元宇宙发布会
        .content-2
          p 2022年3月1日，公司举办海拉医院元宇宙发布会，在经历四 个月的打磨和等待后，终于呈现在大家眼前。
        img(src="@/assets/image/new__center.jpg")
        .btn 了解更多
      .developments-right
        h2 
          span 最新
          span.dynamic 动态
        .line
        .describe(v-for="item in lastedDevelopents")
          .describe-content
            span.time {{ item.time }}
            span.content {{ item.content }}
          .line-time
  //- .describe
  //-   p {{ $t('home.describe1') }}
  //-   //- p {{ $t('home.describe2') }}
  //- .listen-voice
  //-   .listen-right
  //-     .company-describe
  //-       p.right-time {{ $t('home.company__time__1') }}
  //-       p.right-content {{ $t('home.company__content__1') }}
  //-     .company-describe
  //-       p.right-time {{ $t('home.company__time__2') }}
  //-       p.right-content {{ $t('home.company__content__2') }}
  //-     .company-describe
  //-       p.right-time {{ $t('home.company__time__3') }}
  //-       p.right-content {{ $t('home.company__content__3') }}
  //-     .company-describe
  //-       p.right-time {{ $t('home.company__time__4') }}
  //-       p.right-content {{ $t('home.company__content__4') }}
  //-     .company-describe
  //-       p.right-time {{ $t('home.company__time__5') }}
  //-       p.right-content {{ $t('home.company__content__5') }}
  //-   .listen-left
  //-     .left-content {{ $t('home.compay__title') }}
  //-     //- .btn {{ $t('home.bannerBth') }}
</template>

<script>
export default {
  data() {
    return {
      lastedDevelopents: [
        {
          time: "02-05",
          content: "首席专家许教授在元宇宙与智慧医疗高端峰会上讲话",
        },
        {
          time: "02-01",
          content:
            "超算助力生物医药大数据进入元宇宙时代：内容+超算 大数据/AI/区块链/5G",
        },
        {
          time: "01-12",
          content: "元宇宙海拉医院搭建进入尾声，打开内部测试通道进行 测试阶段",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.latest-developments {
  width: 100%;
  height: 685px;
  background: rgba(196, 196, 196, 0.3);
  position: relative;
  .developments-center {
    width: 1100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    text-align: left;
    .developments-left {
      .title {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #393837;
        margin-bottom: 37px;
      }
      .content-1 {
        .time {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          color: #393837;
        }
        .content {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          color: #393837;
          margin-top: 10px;
        }
      }
      .content-2 {
        margin-top: 27px;
        p {
          width: 374px;
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #393837;
        }
      }
      img {
        margin-top: 21px;
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
        color: #ffffff;
        text-align: center;
        margin-top: 26px;
        cursor: pointer;
      }
    }
    .developments-right {
      width: 570px;
      h2 {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        color: #393837;
        text-align: right;
        .dynamic {
          color: #4e9cf8;
        }
      }
      .line {
        width: 569px;
        height: 1px;
        background-color: #393837;
        margin-top: 30px;
      }
      .describe {
        .describe-content {
          margin-top: 30px;
          .time {
            font-family: "Microsoft YaHei UI";
            font-weight: 700;
            font-size: 48px;
            line-height: 61px;
            color: #4e9cf8;
          }
          .content {
            display: inline-block;
            width: 333px;
            font-family: "Microsoft YaHei UI";
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #393837;
            position: relative;
            top: -10px;
            left: 52px;
          }
        }

        .line-time {
          width: 569px;
          height: 1px;
          background-color: #393837;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>