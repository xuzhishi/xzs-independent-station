<template lang="pug">
div
  .haila-hospital
    h2 Hela Central Hospital
    el-tabs.tabs(
      :tab-position="tabPosition",
      @tab-click="handleClick",
      :style="{ height: height + 'px' }"
    )
      el-tab-pane(label="Hela Central Hospital")
        hospital(
          :title="HailaHospital.title",
          :imgUrl="HailaHospital.imgUrl",
          :content1="HailaHospital.content1",
          :content2="HailaHospital.content2",
          :content3="HailaHospital.content3"
        )
      el-tab-pane(label="Architecture Modeling Design")
        hospital(
          :title="modelingDesign.title",
          :imgUrl="modelingDesign.imgUrl",
          :content1="modelingDesign.content1",
          :content2="modelingDesign.content2",
          :content3="modelingDesign.content3"
        )
      el-tab-pane(label="Vision")
        hospital(
          :title="purposeVision.title",
          :imgUrl="purposeVision.imgUrl",
          :content1="purposeVision.content1",
          :content2="purposeVision.content2",
          :content3="purposeVision.content3",
          :content4="purposeVision.content4"
        )
      el-tab-pane(label="Medical Technology")
        hospital(
          :title="medicalTechnology.title",
          :imgUrl="medicalTechnology.imgUrl",
          :content1="medicalTechnology.content1",
          :content2="medicalTechnology.content2",
          :content3="medicalTechnology.content3"
        )
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      HailaHospital: {
        title: "The Origin of Its Name",
        imgUrl: require("./../../assets/image/Haila-hospital.jpg"),
        content1:
          " Hela cells refer to a cell line adopted in biology and medical research originating from the cervical cancer cells of an African-American mother named Harrietta Lacks. This American woman died of cervical cancer in 1951. For Lacks’ real name to remain unknown in the public, the cell line is said to be named after Helen Lane. Hela cell line is considered as “immortal” (unlike other human cells, this cell line does not age to death and is able to divide unlimitedly) and has been uninterruptedly cultured .",
        content2:
          "Compared to other types of cancer cells, this cell line is of exceptionally rapid proliferation speed. In the medical world, Hela cells have been widely used in tumor research, biological experiments and cell culture. It has already become a vital tool for medical research.",
        content3:
          "We will always bear Ms. Hela in our mind. It is also of great significance in the medical world. We founded Hela Central Hospital in memory of Hela. May her spirit live long.",
      },
      modelingDesign: {
        title: "the Pink Oasis",
        imgUrl: require("./../../assets/image/model-design.jpg"),
        content1:
          "This is a hospital standing alone in a pink 'oasis', floating on the surface of clear water. The warm bright pink desert in the environment makes people feel at ease. The azure sky brings calmness and peace and helps to soothe your anxiety without giving a sense of alienation. Altogether they contribute to the greatest user experience. There is an interplay of reality and fiction between the architecture and landscape, and the distant planets add the imaginary color to there . A big amount of anti-gravity design has been adopted to the overall building project , providing users with perfect Metaverse experience and allowing them to stretch their nerves in the relaxing atmosphere.",
        content2:
          "Counter-intuitive design adds to sense of science and technology and makes it be more futuristic at the same time. There is a reception hall, a medical lecture hall, a medical history museum, a psychiatric room, a spiritual meditation room, a complementary therapy area, a spiritual labyrinth. Users are allowed to visit, experience and interact with people in Metaverse Hela Central Hospital at any time. And an outdoor plaza is great for sightseeing, where the distant pink desert and galaxy come into view, and the limpid lake and chic pavilion somehow feature a special flavor. Facing the hospital, you’ll enjoy a full view of the building. Let’s walk down the red carpet into the hospital.",
        content3: "",
      },
      purposeVision: {
        title: "Globally Inclusive Healthcare",
        imgUrl: require("./../../assets/image/purposeVision.jpg"),
        content1:
          "With the development and empowerment of the Metaverse concept, we have wondered that patients are open to real medical care in a more three-dimensional virtual space. In the future, when seeking many kinds of clinical diagnosis and treatment, especially those for outpatients, patients no longer have to go to a physical hospital, instead, they’ll go through medical services they need at home as possible as they can.",
        content2:
          "In terms of medical treatment, personalized means of clinic diagnosis and treatment will be stressed at first. While introducing a variety of treatment means and realizing personalized treatment, the focus will be on holistic treatment as well. IT support is supposed to put importance on the integration and supporting capability of multimodal data.Secondly, to improve the insufficient communication between doctors and patients. Patients have always found it difficult to fully communicate with doctors in healthcare institutions due to overload of clinical receptions.While both communication and consolation have played vital roles in medical process. Correspondingly, IT support is supposed to work on two main directions. One is to make communication channels more smooth by means of current information technology; the second is to take advantage of the concept and technology of the Metaverse to make communication between doctors and patients more vivid and intuitive in the virtual space mode.",
        content3:
          "Experts work for our hospital will accept patients’ appointments on the official website and enter the Metaverse Hela Central Hospital to see patients according to their appointment order.Nowadays, a global telemedicine network has been formed and professional doctors have been recruited from all over the world. In this way, wherever the patients are, they can be diagnosed and treated by any doctor, and the number of patients transferred to other places has been greatly reduced. Besides, routine check-ups for chronic patients can be carried out at home. ",
        content4:
          "In the future, metaverse technology will break through the existing medical restrictions and fully reflect the clinical value, economic value, social value, and technological innovation value of medical treatment.in addition, it helps to realize the idea of globally inclusive medical care and contribute “life with higher cognitive leve” to the world, and expand human beings’ dimension of beingness.",
      },
      medicalTechnology: {
        title: "Virtual Reality",
        imgUrl: require("./../../assets/image/medical-technology.jpg"),
        content1:
          " Virtual reality is the product of multidisciplinary intersection and penetration. Abstraction, modeling, segmentation, analysis, and combination of multiple types of data are all  indispensable parts of virtual reality. Virtual phenomena are all presented in the form of graphic images. The human anatomy atlas, in particular, calls for the displayed organ shape, position, color, and dynamic effects to be highly precise and realistic. It puts forward higher requirements for graphics and image processing technology, involving a series of technologies such as image segmentation, image registration, image display, and image deformation. In the VR system, in order to modify the state of the virtual environment, it is necessary to use various actuators to simulate various human sensations (mainly visual, auditory and tactile sense), and then use sensors to collect their feedback information which reflects the changes on VR environment.",
        content2:
          " Doctors and nurses can turn to virtual reality to simulate certain diseases to address specific health conditions. Wearing the VR headsets, surgeons are given access by customized software to observe patients’ blood vessels and neurons via combining images from magnetic resonance imaging (MRI), computed tomography (CT) scans and angiography. And they can use virtual reality in undergoing surgeries to lower the risk. Also, virtual reality can be applied to the surgery planning and surgical procedures informing.Moreover, virtual reality technology helps to improve medical school training. In addition to the life-like simulation of human organs and nerves, it works for saving costs and lifting efficiency by giving medical students more access to simulitative operating environment while keeping the number of observers in the classroom under control. For example, Oxford Medical Simulation (OMS) uses Oculus to provide virtual reality and screen-based simulations to train healthcare professionals without exposing patients to life risk.Overall, the impact of virtual reality on the healthcare industry over the next decade could be huge, with global GDP likely to grow by $351 billion by 2030, according to PwC.",
        content3:
          "Virtual reality application aims at the upgrade of traditional hospitals and the Internet hospitals, and the expansion and extension system of hospitals. It empowers the traditional tertiary medical system; it provides comprehensive services in new scenarios; it activates the existing market and provides rich expansion space in pediatrics, cognition, and mental health. It supports the visualization of images and test results and contributes to the promotion of visualized information of serious diseases and standardized preoperative notification. It takes part in the upgrade of medical service system and provides digital preparation scene applications, aiming at cognition, services, and different industries. Digital therapy application scenarios provide online services for medical and pharmaceutical companies service mode.It's brand new for sure, while I still doubt it. How should I put it, the scene is pretty cool.",
      },
      height: 680,
    };
  },
  components: {
    hospital: () => import("./Hospital.vue"),
  },
  methods: {
    handleClick(tab) {
      console.log(tab.index);
      if (tab.index === "0") {
        this.height = 680;
      } else if (tab.index === "1") {
        this.height = 740;
      } else if (tab.index === "2") {
        this.height = 754;
      } else {
        this.height = 850;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .haila-hospital {
  width: 100%;
  height: 1156px;
  background-color: rgba(196, 196, 196, 0.3);
  overflow: hidden;
  h2 {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    color: #393837;
    margin-top: 52px;
    margin-bottom: 79px;
  }
  .tabs {
    width: 1200px;
    margin: 0 auto;
    .el-tabs__nav-wrap::after {
      background-color: #c4c4c4;
    }
    .el-tabs__item {
      height: 66px;
      font-family: "Microsoft YaHei UI";
      font-weight: 700;
      font-size: 24px;
      line-height: 66px;
      color: #393837;
    }
  }
}
</style>