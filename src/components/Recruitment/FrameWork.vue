<template lang="pug">
div
  .recruitment
    h2 招募成员架构
    .block
      img(src="./../../assets/image/member.jpg")
      .block-right
        .small-block(v-for="item in memberList")
          h4 {{ item.title }}
          p {{ item.subTitle }}
          .arrow
          img(src="./../../assets/image/member-right.png")
</template>

<script>
export default {
  data() {
    return {
      memberList: [
        {
          title: "国际专业类人员",
          subTitle:
            "我们在国际上招聘的工作人员在世界各地担任卫生技术、业务、管理和领导职务。他们具有流动性，并根据他们的专长和元宇宙医院的规划需要受雇开展工作。",
        },
        {
          title: "一般事务类人员",
          subTitle:
            "我们的规划和专业人员由当地居民或国民提供支持，这些人受雇形成一般事务类人员类别。他们对于我们的成功至关重要，具有范围广泛的技能，并且受到我们整个组织各个团队的重视。",
        },
        {
          title: "顾问及其它合同安排",
          subTitle:
            "元宇宙医院与主题事项专家签订合同，由他们提供时间有限、针对特定项目的专业水平支持，以实现具体规划的可交付成果。这些合同不是雇用合同，不属于元宇宙医院《职员细则》和《人事条例》的...",
        },
        {
          title: "初级专业干事规划",
          subTitle:
            "初级专业干事（JPO）规划使年轻专业人员能够在职业生涯的早期阶段获得多边技术合作的实践经验。元宇宙医院组织欢迎初级专业干事参加国家办事处、区域办事处和总部卫生技术和行政领域的工作。",
        },
        {
          title: "申请成为初级专业干事",
          subTitle:
            "元宇宙医院组织实习生规划，面向未来的公共卫生领导者。为了推进全球卫生目标，每个卫生系统必须有一支有能力和活力的卫生人力队伍作为其核心。各国需要一批训练有素、熟悉卫生部门各系统和流...",
        },
        {
          title: "全球的医师招募条件",
          subTitle:
            "1、接受过Medical education in the United States系统训练，拥有国际医学教育学位而且取得在各州执业许可的人员（包括经过美国医师执照考试（USMLE）合格者）...",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recruitment {
  width: 100%;
  height: 963px;
  background-color: rgba(196, 196, 196, 0.3);
  overflow: hidden;
  h2 {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    color: #393837;
    margin-top: 52px;
  }
  .block {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    margin-top: 112px;
    .block-right {
      height: 456px;
      width: 692px;
      margin-left: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .small-block:nth-of-type(1) {
        margin-bottom: 10px;
      }
      .small-block:nth-of-type(6) {
        background-color: #4e9cf8;
        position: relative;
        h4,
        p {
          color: #fff;
        }
        img {
          display: none;
        }
        .arrow {
          width: 9px;
          height: 15px;
          background: url("./../../assets/image/member-right-last.png");
          position: absolute;
          bottom: 10px;
          right: 21px;
          cursor: pointer;
        }
      }
      .small-block {
        width: 224px;
        height: 224px;
        background: #fff;
        border-radius: 15px;
        text-align: left;
        box-sizing: border-box;
        padding: 0 21px;
        position: relative;
        h4 {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 16px;
          color: #393837;
          margin: 27px 0 15px 0;
        }
        p {
          font-family: "Microsoft YaHei UI";
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #393837;
        }
        img {
          position: absolute;
          bottom: 10px;
          right: 21px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>