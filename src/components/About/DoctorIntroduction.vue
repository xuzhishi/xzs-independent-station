<template lang="pug">
div
  .introduction
    .left
      h2
        span 虚之实特约
        span 治疗医师：周乐博士
      .content
        .paragraph(v-for="item in content")
          p {{ item }}
    .right
      img(src="./../../assets/image/doctor_img.jpg")
</template>

<script>
export default {
  data() {
    return {
      content: [
        "法国巴黎第九大学社会学博士，研究方向：女性组织与社会发展；浙江大学社会学博士后，研究方向：西方性思想史。",
        "巴黎第九大学、浙江大学、北京外国语大学、香港大学SPACE中国商业学院客座讲师。",
        "自媒体“乐乐老师啊”主理人，专注认知、自我成长与人际关系；创心力概念提出者与践行者，创始人心智教练，性别视角下的社会学与商业跨界研究者。",
        "十八年教培行业工作经验，长期负责领导力、幸福力等课程体系搭建及社群运营。曾任微链首席研究员，服务消费领域头部品牌100+，从0到1成就“零兽界”零售品牌加速计划；曾任天下女人教育集团教务长，服务杰出女性1000+，杨澜女士IP生态圈运营，及研发《Big Girl大师班》；曾任创业黑马课程主任，服务成长型创业者（1-10亿规模）500+。",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  display: flex;
  justify-content: space-between;
  width: 1190px;
  margin: 0 auto;
  margin-top: -200px;
//   margin-left: 20%;
  .left {
    margin-top: 240px;
    margin-left: 30px;
    h2 {
      display: flex;
      flex-direction: column;
      text-align: left;
      height: 137px;
      justify-content: space-between;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 48px;
      line-height: 61px;
      color: #393837;
    }
    .content {
      margin-top: 126px;
      width: 663px;
      p {
        text-align: left;
        margin-bottom: 20px;
        font-family: "Microsoft YaHei UI";
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #393837;
      }
    }
  }
  // position: relative;
  // top: -200px;
  // .right{
  //     width: 446px;
  //     height: 807px;
  //     background: pink;
  //     position: relative;
  //     img{
  //         position: absolute;
  //         right: 0;
  //         top: 0;
  //     // z-index: -1;
  //     }
  // }
}
</style>