<template lang="pug">
div
  .latest-developments
    .developments-center
      .developments-left
        h5.title 新闻中心
        .content-1
          p.time 03-24
          p.content 国家精准医学产业创新中心揭牌
        .content-2
          p 3月 23日，国家精准医学产业创新中心揭牌仪式在成都天府国 际生物城举行，这标志着四川省首个国家级产业创新中......
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
</template>

<script>
export default {
  data() {
    return {
      lastedDevelopents: [
        {
          time: "04-05",
          content: "我国医疗器械产业发展现状及思考",
        },
        {
          time: "03-21",
          content: "华兴资本医疗与生命科技行业周报",
        },
        {
          time: "02-26",
          content: "数字医生推动医疗高质量发展 数坤科技引领全球AI医疗创新",
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
    width: 60%;
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
            width: 326px;
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