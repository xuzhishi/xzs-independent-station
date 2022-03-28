<template lang="pug">
div
  .digital-medical
    h2 数字医疗
    p 虚之实是面向全球的数字医疗公司，我们深信各类脑疾病将在XR+AI领域通过认知训练、精准用药、行为扫描、深度重建等技术得到更好的治疗。
    h3 我们已经拥有了什么？
    .block
      .small-block(v-for="item in medicalList")
        .line
        p.content {{ item }}
</template>

<script>
export default {
  data() {
    return {
      medicalList: [
        "拥有中国唯一一家VR类由国家颁发二类医疗器械证书",
        "已经执行医保名录",
        "目前唯一拥有完整商业模式“数字疗法公司”",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.digital-medical {
  width: 100%;
  height: 968px;
  background-color: #ededed;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 22%;
  h2 {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 144px;
    color: #4e9cf8;
    text-align: left;
    margin-top: 156px;
  }
  p {
    width: 785px;
    margin-top: 103px;
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #393837;
  }
  h3 {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 48px;
    color: #4e9cf8;
    text-align: left;
    margin-top: 103px;
  }
  .block {
    width: 980px;
    display: flex;
    justify-content: space-between;
    margin-top: 27px;
    .small-block {
      width: 267px;
      .line {
        width: 267px;
        height: 1px;
        background-color: #000000;
      }
      .content {
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #393837;
        text-align: left;
        width: 212px;
        margin-top: 27px;
      }
    }
  }
}
</style>