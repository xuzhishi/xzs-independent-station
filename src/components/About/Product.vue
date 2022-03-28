<template lang="pug">
div
  .product
    h2.title 虚之实主要产品
    h4.subTitle 海拉元宇宙医院、数字疗法VR医疗器械-认知功能康复系统YKVR-1、XDTX行业底层软件
    .block
      .small-block(v-for="item in productList")
        h5 {{ item.title }}
        p {{ item.content }}
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          title: "数字疗法",
          content:
            "通过其产品“认知功能康复系统”论证了数字疗法底层技术，支持引导行业数字疗法改造，提升全球药物、医疗器械数字疗法水平；主要任务是通过行业教育、宣传和跨行业合作，给医药和医疗企业提供底层计划、开发环境，安全环境。以XR技术和人工智能为底层，以空间算力、交互评测、自然语言处理、患者生命体征数据分析、医学知识图谱以及医学本体推理引擎，形成基于患者个体的医疗干预模型，让医疗从简单的医患连接走向数字自驱的全病程管理数字疗法模式，并通过真实世界数据研究，论证数字疗法的有效性。",
        },
        {
          title: "元宇宙医院建设",
          content:
            "黑珍珠数字疗法XDTX行业底层软件，以空间计算、去中心化、人机接口和基础设施这技术为基础架构，在边缘计算技术、VR技术、区块链技术、交互技术、电子游戏技术、人工智能技术、网络及运算技术和物联网技术这八大支撑技术结合现代医学，以此为基石，来覆盖元宇宙价值链中的元宇宙医院建设的功能。",
        },
        {
          title: "全球首家跨境医疗",
          content:
            "全球首家跨境医疗元宇宙医院开设住院、机器人、诊断、慢性病、认知、心理科室，集合人工智能、实时语音、智能检测、远程设备、算力系统、模拟中心、隐私计算、手术模拟、疗法临床等服务平台；具备身份、朋友、沉浸感、低延迟、多元化、随地、经济系统和文明特征；全球协作医疗以及紧急医疗服务目前在美国已经开始试点。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 1148px;
  height: 700px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 5px 4px 10px 5px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  position: relative;
  top: -100px;
  .title {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 48px;
    color: #4e9cf8;
    margin-top: 107px;
  }
  .subTitle {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 24px;
    color: #393837;
    margin-top: 43px;
    margin-bottom: 44px;
  }
  .block {
    width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 142px;
    .small-block {
      width: 336px;
      height: 369px;
      background: #ffffff;
      box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      box-sizing: border-box;
      padding: 0 15px;
      h5 {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 18px;
        color: #393837;
        text-align: left;
        margin-top: 29px;
        margin-bottom: 22px;
      }
      p {
        font-family: "Microsoft YaHei UI";
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #393837;
        text-align: left;
      }
    }
  }
}
</style>