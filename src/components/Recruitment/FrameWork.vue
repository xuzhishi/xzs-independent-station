<template lang="pug">
div
  .recruitment
    h2 Recruitment Structure
    .block
      img(src="./../../assets/image/member.jpg")
      .block-right
        .small-block(
          v-for="(item, index) in memberList",
          @click="goDetail(index)",
          :class="backIndex == index ? 'back' : ''"
        )
          h4 {{ item.title }}
          p {{ item.subTitle }}
          .arrow
          img(src="./../../assets/image/member-right.png")
    //- :style="{display: activeIndex==idx ? 'none':''}"
    .expandBlock(
      v-for="(item, idx) in expandList",
      :class="[currentIndex == idx ? 'current' : '', activeIndex == idx ? 'active' : '']",
      @click="goBack(idx)"
    )
      h4 {{ item.title }}
      p {{ item.content1 }}
      p {{ item.content2 }}
      p {{ item.content3 }}
      p.iconfont.icon-xiangzuojiantou
</template>

<script>
export default {
  data() {
    return {
      expandList: [
        {
          title: "International Professionals",
          content1:
            "Our internationally recruited staff serve in health technical, operational, managerial and leadership roles, across the world. They are committed to mobility and are employed to work according to their expertise and the programmatic needs of Metaverse Hospital.",
        },
        {
          title: "General Service Staff ",
          content1:
            "Our programs and professional staff are supported by local residents or nationals, employed in the general service staff category. Supposed to have a wide range of skills, they are essential for our success, and are valued by teams across our organization.",
        },
        {
          title: "Consultants and Other Contractual Arrangements ",
          content1:
            "Metaverse Hospital Organization contracts subject matter experts to provide time-limited, project-focused professional level support to attain specific program deliverables. These are not employment contracts and remain outside the scope of our Staff Rules and Regulations.",
          content2:
            "Metaverse Hospital Organization staff can apply to fixed term or temporary appointments and successful candidates will receive an attractive salary and benefits package. Some staff are part of our agile workforce mobility program and all staff are employed under Metaverse Hospital Organization’s Rules and Regulations,Depending on your duty station, you may benefit from different health and well-being programs and services.Metaverse Hospital Organization has opportunities at different levels of responsibility and experience. We seek motivated individuals in all categories of work that meet our educational and work experience requirements.Metaverse Hospital Organization also advertises other contractual arrangements for specific program needs and offers competitive rates.",
        },
        {
          title: "Junior Professional Officer Program ",
          content1:
            "The Junior Professional Officer (JPO) Program provides young professionals an exceptional opportunity to acquire hands-on experience in MTC at an early stage of their careers. Metaverse Hospital Organization welcomes JPOs to participate in the field of health technology and administration in regional and country offices, and at headquarters.workforce that serves vulnerable populations and contributes to the promotion of world health and the maintenance of world security in order to achieve our goal of ”three billion“. As a JPO, you will embark on an exciting career with the Metaverse Hospital Organization. We will fully support your growth and development along the way.",
          content2:
            "The JPO program is sponsored by donor governments. Usually, these governments only sponsor citizens of their countries, but in some cases, a few countries sponsor nationals from developing countries. To be eligible, you must be a national of a donor country (except for developing country candidates), be under the age of 32, have an advanced university degree, and have at least two years of relevant work experience. Information on the JPO Program application process and other aspects can be found on the website of the Metaverse Medical Industry Organization UNDP JPO Service Center.",
        },
        {
          title: "Application to become a Junior Professional Officer",
          content1:
            "Metaverse Hospital Organization Internship Program is geared toward future public health leaders. To advance global health goals, a competent and dynamic health workforce at the heart of each health system is essential. Countries need a pool of health professionals trained and exposed to the systems and processes in the health sector and who understand how stakeholders interact within the international health arena.Metaverse Hospital Organization, as the leader in global public health issues, is committed to building a diverse pool of future leaders in public health. Our Internship Program offers a wide range of opportunities for students and recent graduates to gain insight into the technical and administrative program of Metaverse Hospital Organization and enrich their knowledge and experience in various areas, thereby contributing to the advancement of public health.",
        },
        {
          title: "Global physician recruitment requirements",
          content1:
            "1. Those who have received systematic training in medical education in the United States, have an international medical education degree and are licensed to practice in each state. ( including those who have passed the United States Medical Licensing Examination (USMLE)).",
          content2:
            "2. Those who have physician status from the Society of Internal Medicine, or with a medical degree (M.D.), or with a Bachelor of Osteopathic Medicine (D.O.). ",
          content3: "3. Those who have done residency.",
        },
      ],
      memberList: [
        {
          title: "International Professionals",
          subTitle:
            "Our internationally recruited staff serve in health technical, operational, managerial and leadership roles, across the world. They...",
        },
        {
          title: "General Service Staff ",
          subTitle:
            "Our programs and professional staff are supported by local residents or nationals, employed in the general service staff category. Supposed to have...",
        },
        {
          title: "Consultants and Other Contractual Arrangements ",
          subTitle:
            "Metaverse Hospital Organization contracts subject matter experts to provide time-limited, project-focused...",
        },
        {
          title: "Junior Professional Officer Program ",
          subTitle:
            "The Junior Professional Officer (JPO) Program provides young professionals an exceptional opportunity to acquire hands-on...",
        },
        {
          title: "Application to become a Junior Professional Officer",
          subTitle:
            "Metaverse Hospital Organization Internship Program is geared toward future public health leaders. To advance...",
        },
        {
          title: "Global physician recruitment requirements",
          subTitle:
            "1. Those who have received systematic training in medical education in the United States, have an international...",
        },
      ],
      currentIndex: -1,
      activeIndex: -1,
      backIndex: 0,
    };
  },
  methods: {
    goDetail(idx) {
      this.activeIndex = -1;
      this.backIndex = 0;
      this.currentIndex = idx;
    },
    goBack(index) {
      this.activeIndex = index;
      this.backIndex = index;
      this.currentIndex = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.recruitment {
  width: 100%;
  height: 963px;
  background-color: rgba(196, 196, 196, 0.3);
  overflow: hidden;
  position: relative;
  h2 {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    color: #393837;
    margin-top: 52px;
  }
  .expandBlock {
    height: 459px;
    width: 695px;
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 20px;
    display: none;
    margin-left: 822px;
    position: absolute;
    z-index: 999;
    top: 224px;
    h4 {
      margin-top: 30px;
      margin-bottom: 20px;
    }
    p {
      text-align: left;
      font-family: "Microsoft YaHei UI";
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #393837;
      margin-bottom: 20px;
    }
  }
  .iconfont {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
  .icon-xiangzuojiantou {
    font-size: 15px;
    font-weight: bold;
    color: #4e9cf8 !important;
  }
  .current {
    display: block;
  }
  .active {
    display: none;
  }
  .block {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    margin-top: 112px;
    .block-right {
      height: 456px;
      width: 692px;
      margin-left: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .small-block:nth-of-type(1) {
        margin-bottom: 10px;
      }
      // .small-block:nth-of-type(1) {

      //   background-color: #4e9cf8;
      //   position: relative;
      //   h4,
      //   p {
      //     color: #fff;
      //   }
      //   img {
      //     display: none;
      //   }
      //   .arrow {
      //     width: 9px;
      //     height: 15px;
      //     background: url("./../../assets/image/member-right-last.png");
      //     position: absolute;
      //     bottom: 10px;
      //     right: 21px;
      //     cursor: pointer;
      //   }
      // }
      .small-block {
        width: 224px;
        height: 224px;
        background: #fff;
        border-radius: 15px;
        text-align: left;
        box-sizing: border-box;
        padding: 0 21px;
        position: relative;
        cursor: pointer;
        h4 {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 16px;
          color: #393837;
          margin: 27px 0 15px 0;
        }
        p {
          font-family: "Microsoft YaHei UI";
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #393837;
        }
        img {
          position: absolute;
          bottom: 10px;
          right: 21px;
          cursor: pointer;
        }
      }
      .back {
        background-color: #4e9cf8 !important;
        position: relative;
        h4,
        p {
          color: #fff;
        }
        img {
          display: none;
        }
        .arrow {
          width: 9px;
          height: 15px;
          background: url("./../../assets/image/member-right-last.png");
          position: absolute;
          bottom: 10px;
          right: 21px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>