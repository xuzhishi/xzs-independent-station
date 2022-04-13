<template lang="pug">
div
  .introduction
    .left
      h2
        span The XDTX specially invited
        span treatment physician: Dr. Zhou Le
      .content
        .paragraph(v-for="item in content")
          p {{ item }}

    img(src="./../../assets/image/doctor_img.jpg")
</template>

<script>
export default {
  data() {
    return {
      content: [
        "Ph.D. in sociology from Paris Dauphine University. Research direction: women's organization and social development; post-doctoral researcher in sociology at Zhejiang University, research direction: history of Western sexuality.",
        "Guest lecturer at Paris Dauphine University, Zhejiang University, Beijing Foreign Studies University, and SPACE China Business School of the University of Hong Kong.",
        "The leader of the self-media “Ms. Lele”, focusing on cognition, self-growth and interpersonal relationships; the proponent and practitioner of the Creative Mind™ concept, the founder's mental coach, and a cross-disciplinary researcher of sociology and business from a gender perspective.",
        "Eighteen years of work experience in the education and training industry, and has been responsible for the construction of leadership, happiness and other curriculum systems and community operations for a long time. The chief researcher of WeChain, serving 100+ leading brands in the consumer field, and achieving the “Zero Beast World” retail brand acceleration plan from 0 to 1; The provost of Tianxia Women's Education Group, serving 1000+ outstanding women, and Ms. Yang Lan's IP ecosystem operation, and developed the “Big Girl Master Class”; Served as the director of the dark horse course for entrepreneurship, serving 500+ growth entrepreneurs (scale of 1-1 billion).",
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
  margin-top: -250px;
  .left {
    margin-top: 240px;
    margin-left: 30px;
    padding-bottom: 30px;
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
  img {
    margin-top: 60px;
    vertical-align: bottom;
  }
}
</style>