<template lang="pug">
div
  .haila-hospital
    h2 海拉医院
    el-tabs.tabs(:tab-position="tabPosition")
      el-tab-pane(label="海拉医院")
        hospital(
          :title="HailaHospital.title",
          :imgUrl="HailaHospital.imgUrl",
          :content1="HailaHospital.content1",
          :content2="HailaHospital.content2",
          :content3="HailaHospital.content3"
        )
      el-tab-pane(label="造型设计")
        hospital(
          :title="modelingDesign.title",
          :imgUrl="modelingDesign.imgUrl",
          :content1="modelingDesign.content1",
          :content2="modelingDesign.content2",
          :content3="modelingDesign.content3"
        )
      el-tab-pane(label="目的愿景")
        hospital(
          :title="purposeVision.title",
          :imgUrl="purposeVision.imgUrl",
          :content1="purposeVision.content1",
          :content2="purposeVision.content2",
          :content3="purposeVision.content3",
          :content4="purposeVision.content4"
        )
      el-tab-pane(label="医疗技术")
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
        title: "名字由来",
        imgUrl: require("./../../assets/image/Haila-hospital.jpg"),
        content1:
          " 海拉细胞（英语：Hela Cells）是生物学与医学研究中使用的一种细胞，源自一位非裔美国母亲海莉耶塔·拉克斯的子宫颈癌细胞的细胞系。这名美国妇女在1951年死于子宫颈癌。为了让拉克斯保持匿名，此细胞株原宣称是依“Helen Lane”命名。HeLa细胞系被视为是“不死的”（即不同于其他一般的人类细胞，此细胞株不会衰老致死，并可以无限分裂下去），至今都被不间断地培养。",
        content2:
          "此细胞系跟其他癌细胞相比，增殖异常迅速。在医学界，海拉细胞被广泛应用于肿瘤研究、生物实验或者细胞培养，已经成为医学研究中非常重要的工具。",
        content3:
          "我们会永远铭记海拉女士，这在医学界也有重大意义，因此为纪念永远的海拉而有了我们的海拉医院，愿海拉生生不息。",
      },
      modelingDesign: {
        title: "粉色“绿洲”",
        imgUrl: require("./../../assets/image/model-design.jpg"),
        content1:
          "这是一座建立在粉色“绿洲”之中的独立医院，它就浮在清透的水面上。整个环境中有温馨明快的粉色沙漠，带来放松情绪的效果又不失温馨；天空蓝色带来的宁静与安定，能够安抚焦虑情绪又能避免过度清冷，两者搭配可以让用户有最舒适的体验。建筑与景物之间虚实交错，远处的星球也更增加幻想色彩。整个建筑设计上运用了大量的反重力设计，让用户拥有完美的元宇宙体验，在舒缓的氛围中尽情的舒展紧绷的神经。",
        content2:
          "反直觉的设计提升科技感及未来感，建筑里有接待大厅、医疗讲堂、医疗历史博物馆、心理诊疗室、心灵禅室、辅助治疗区、心灵迷宫，用户可以随时在海拉医院参观、体验和互动海拉医院的室外广场，这是观赏风景的绝佳位置，站在这里映入眼帘的不仅有远处粉红的沙漠和星系，近处清澈的湖水与别致的亭子也别有一番风味。面向医院，你会看到医院建筑的全貌，顺着红地毯走进医院吧。",
        content3: "",
      },
      purposeVision: {
        title: "全球普惠医疗",
        imgUrl: require("./../../assets/image/purposeVision.jpg"),
        content1:
          "我们有过畅想，在元宇宙（Metaverse）概念的发展与赋能下，患者是不是能够在更加立体的虚拟空间中接受真实诊疗服务。未来，很多临床诊治，尤其是门诊，患者不再需要到实体医院，而是尽可能居家完成各项所需医疗服务。",
        content2:
          "医疗方面，其一，更加注重个性化，将各种诊疗手段引入并实现个性化诊疗的同时，也注重整体治疗，个性化而又不专科化。这对信息工作的要求是，更加注重多模态数据的融合和支撑能力。其二，改变医患间缺乏有效沟通的现状。一直以来，医疗机构由于接诊压力大，患者感觉难以获得良好沟通。而沟通和安慰恰是医疗过程中非常重要的一环。对应的信息工作两大方向，一是借助现有信息化手段让沟通途径更畅通；二是如何利用元宇宙概念和技术，在虚拟空间模式下使医患沟通更形象、更直观。",
        content3:
          "我们的医院专家会在网站接受患者预约，并按照预约进入海拉医院元宇宙为病人看病。现在我们已形成遍及全球的远程医疗网络，并招募全球专业医生让任何地方的病人都可得到任一医师的诊治，异地转诊病人因此大为减少。慢性病人的常规检查也可在家里进行。",
        content4:
          "未来通过元宇宙技术手段突破现有医疗限制，充分体现医疗的临床价值、经济价值、社会价值、技术创新价值。实现全球普惠医疗，为全球提供“认知高质量生命”，帮助人类拓展生命的维度。",
      },
      medicalTechnology: {
        title: "虚拟现实",
        imgUrl: require("./../../assets/image/medical-technology.jpg"),
        content1:
          " 虚拟现实是多学科交叉和渗透的产物。多种类型数据的抽象、建模、分割、分析和组合是虚拟现实中必不可少的。所有的虚拟现象效果都是以图形图像的形式表现出来。尤其是人体解剖图谱，要求所显示的器官形状、位置、颜色、动态效果非常精确和逼真。这就对图形图像处理技术提出了更高的要求，要涉及到图像分割、图像配准、图像显示、图像形变等一系列技术。在VR系统中，为了修改虚拟环境的状态，需要使用各种激励器模拟产生人的各种感觉(主要是视觉、听觉和触觉)，再用传感器收集它们的反馈信息，这些信息反映了VR环境的变化。",
        content2:
          " 基于虚拟的或真实的传感器和激励器的仪器设备在VR的临床应用上起着重要的作用。基于多模式动态的传感器是最基本的元素，可以用它们的位置(绝对的或相对的)、方向以及物理特征和相应的参数进行描述。医生和护士可以通过虚拟现实模拟某些疾病 来解决特定的健康状况。戴上VR头盔后，定制的软件可以使外科医生通过结合磁共振成像(MRI) 、计算机断层扫描(CT)扫描和血管造影的图像来看到患者的血管和神经元。他们还可以使用虚拟现实进行手术，以降低操作风险。外科医生可以利用虚拟现实来计划即将到来的手术，并教育患者有关手术程序。 同时，虚拟现实技术也可以改善医学院的培训。除了对人体器官和神经的真实模拟外，它还可以让医学生更多地进入手术室，并在教室的观察者数量限制不同的环境，从而节省成本，提高效率 。例如，牛津医学模拟(OMS)使用Oculus提供虚拟现实和基于屏幕的模拟来培训医疗保健专业人 员，而不危及患者的生命。总的来说，根据普华永道的数据，未来十年虚拟现实对医疗保健行业的影响可能是巨大的，到2030年，全球GDP可能将增长3510亿美元。",
        content3:
          "针对传统医院以及互联网医院升级，医院扩容扩建系统；赋能传统三甲医疗体系，在新场景下综合服务、激活存量的市场、在儿科、认知、精神卫生上提供丰富的扩展空间。支持影像、化验结果可视化，推动大病可视化告知推广、标准化的术前告知，医疗服务体系升级；提供数字制剂场景应用，针对认知、服务、行业的数字疗法应用场景，为医疗、药械企提供在线服务模式。",
      },
    };
  },
  components: {
    hospital: () => import("./Hospital.vue"),
  },
};
</script>

<style lang="scss" scoped>
::v-deep .haila-hospital {
  width: 100%;
  height: 963px;
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
    height: 650px;
    width: 952px;
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