<template lang="pug">
div
  .advantage
    h4 Advantages of Hela Central Hospital
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
          title: "Without Geographic Restriction",
          content: "Easy access to the Hospital from anywhere",
        },
        {
          title: "Highly Sense of Immersion",
          content: "Lifelike virtual scenes with highly immersive experience",
        },
        {
          title: "Safety and Comfort",
          content: "Free to sit or lie down, safe and comfortable",
        },
        {
          title: "Doctor Appointment",
          content: "Online counseling by doctors from all over the world",
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
    width: 1100px;
    margin: 100px auto;
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #393837;
    .list{
      width: 200px;
    }
    p {
      font-weight: normal;
      margin-top: 20px;
    }
  }
}
</style>