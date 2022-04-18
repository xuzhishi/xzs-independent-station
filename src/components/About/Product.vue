<template lang="pug">
div
  .product
    h2.title Main Products of XDTX
    h4.subTitle Metaverse Hela Central Hospital, Digital Therapy VR Medical Equipment - Cognitive Function Rehabilitation System YKVR-1, XDTX Industry Underlying Software
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
          title: "Digital therapy",
          content:
            "Illustrating on the underlying technology of digital therapy through its product “Cognitive Function Rehabilitation System”, supporting and guiding the transformation of digital therapy in the industry, and improving the level of digital therapy for global medicine and medical equipment; main task is to provide the underlying plan, development environment and security environment for pharmaceutical and medical enterprises. With XR technology and artificial intelligence as very foundation, along with spatial computing power, interactive evaluation, natural language processing, patient vital sign data analysis, medical knowledge graph and medical ontology reasoning engine, a medical intervention model based on each individual patient is formed. It has changed health care from the simple connection between doctors and patients towards a digital self-driven digital therapy model for the whole course management, and also demonstrates the effectiveness of digital therapy through data research based on the real world.",
        },
        {
          title: "Construction of the Metaverse Hospital",
          content:
            "With the Black Pearl Digital Therapy XDTX as the underlying industry software, based on technologies of spatial computing, decentralization, human-computer interface and infrastructure. Eight supporting technologies, that is, edge computer technology, VR technology, interactive technology, video game technology, artificial intelligence technology, block chain technology, network and computing technology, and Internet of Things technology, combined with modern medicine to cover the functions of the Metaverse Hospital construction in the Metaverse value chain.",
        },
        {
          title: "The world's first cross-border health care institute",
          content:
            "The world's first cross-border medical Metaverse Hospital sets up service platform for inpatient, robotics, diagnosis, chronic disease, cognition, and psychology departments, integrating artificial intelligence, real-time voice, intelligent detection, remote equipment, computing power system, and simulation center, privacy computing, surgical simulation, clinical therapy and so on; with identity, friends, sense of immersion, low latency, diversity, physically unlimitedness, economic system and civilization characteristics. Global collaborative health care and emergency medical services are currently being piloted in the United States",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 1148px;
  height: 1050px;
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
    margin-top: 50px;
  }
  .subTitle {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 24px;
    color: #393837;
    line-height: 50px;
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
      background: #ffffff;
      box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      box-sizing: border-box;
      padding: 0 15px;
      padding-bottom:30px;
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