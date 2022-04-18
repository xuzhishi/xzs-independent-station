<template lang="pug">
div
  .digital-medical
    h2 Digital Healthcare
    p XDTX is a global digital medical company. We are convinced that various brain diseases will be better treated in the field of XR+AI through technologies such as cognitive training, precise pharmacy, behavioral scanning, and depth reconstruction.
    h3 What do we already have?
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
        "The first domestic registration certificate for Class II medical devices in the field of VR psychological disease treatment",
        "Included in the medical insurance list",
        "The only “digital therapy company” with an integrated business model up to now",
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
    font-size: 70px;
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
    text-align: left;
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