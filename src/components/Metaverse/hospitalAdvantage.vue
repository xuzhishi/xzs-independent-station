<template lang="pug">
div
  .advantage
    h4 医院优势
    .advantage-advantageList
      .list(v-for="item in advantageList")
        h5 {{ item.title }}
        p {{ item.content }}
</template>

<script>
export default {
  data() {
    return {
      advantageList: [
        {
          title: "地点不限",
          content: "无论身在何地都可以轻松来到海拉医院",
        },
        {
          title: "沉浸度高",
          content: "虚拟场景逼真，沉浸度高",
        },
        {
          title: "安全舒适 ",
          content: "可坐可躺，安全舒适",
        },
        {
          title: "医生预约",
          content: "全球范围内医师进行线上坐诊",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advantage {
  width: 100%;
  height: 445px;
  background-color: #fff;
  overflow: hidden;
  h4 {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    color: #393837;
    margin-top: 62px;
  }
  .advantage-advantageList {
    display: flex;
    justify-content: space-between;
    width: 1038px;
    margin: 100px auto;
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #393837;
    p{
        font-weight: normal;
        margin-top: 20px;
    }
  }
}
</style>