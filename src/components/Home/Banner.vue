<template lang="pug">
div
  .banner
    .banner-wrap
      .banner-left
        .title XDTX Metaverse
        .subTitle {{ $t('home.bannerTitle') }}
        .btn(@click="learnMoreClick") {{ $t('home.bannerBth') }}
      .banner-right
        img.right-img(src="./../../assets/image/banner__img.png")
  .listen-voice
    .listen-left
      .left-content {{ $t('home.listenTitle') }}
      .left-image 
        img(src="./../../assets/image/listen.gif")
    .listen-right
      p.right-content {{ $t('home.listen__content1') }}
      p.right-content {{ $t('home.listen__content2') }}
      p.right-content {{ $t('home.listen__content3') }}
      p.right-content {{ $t('home.listen__content4') }}
      p.right-content {{ $t('home.listen__content5') }}
      .btn(@click="dialogFormVisible = true") {{ $t('home.listen__btn') }}
  el-dialog(title="预约医生", :visible.sync="dialogFormVisible")
    el-form(:model="form", :rules="rules", ref="form")
      el-form-item(label="联系方式", :label-width="formLabelWidth", prop="phone")
        el-input(
          v-model="form.phone",
          autocomplete="off",
          placeholder="请输入手机号"
        )
      el-form-item(label="预约时间", :label-width="formLabelWidth", prop="time")
        el-date-picker(v-model="form.time", type="date", placeholder="请选择日期")
      el-form-item(
        label="科室疾病",
        :label-width="formLabelWidth",
        prop="textarea"
      )
        el-input(
          type="textarea",
          :rows="2",
          placeholder="请填写您想预约的科室疾病",
          v-model="form.textarea"
        )
      el-form-item(label="备注", :label-width="formLabelWidth") 
        el-input(
          type="textarea",
          :rows="2",
          placeholder="可留下您的问题或需求",
          v-model="form.textarea1"
        )
    .dialog-footer(slot="footer")
      el-button(@click="dialogFormVisible = false") 取 消
      el-button(type="primary", @click="submitForm('form')") 确 定
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        phone: "",
        time: "",
        textarea: "",
        textarea1: "",
      },
      formLabelWidth: "100px",
      rules: {
        phone: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          { min: 11, max: 11, message: "长度在11个字符", trigger: "blur" },
        ],
        time: [
          { required: true, message: "请选择预约时间", trigger: "change" },
        ],
        textarea: [
          {
            required: true,
            message: "请填写您想预约的科室疾病",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    learnMoreClick() {
      this.$router.push("/xdtx");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 32%;
  .el-input__inner {
    width: 94%;
    margin-left: -29px;
  }
  .el-textarea__inner {
    width: 94%;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
    margin-left: 29px;
  }
  .el-input__icon {
    margin-left: -29px;
  }
}
.banner {
  width: 100%;
  height: 828px;
  background: url("./../../assets/image/banner.png");
  background-size: 100% 908px;
  overflow: hidden;
  display: flex;
  .banner-wrap {
    width: 1200px;
    margin: 0 auto;
    // background: pink;
    position: relative;
    .banner-left {
      text-align: left;
      margin-top: 260px;
      margin-left: 100px;
      .title {
        font-family: Arial;
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
        color: #393837;
      }
      .subTitle {
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #393837;
      }
      .btn {
        width: 122px;
        height: 37px;
        background: #56a4cb;
        border-radius: 5px;
        font-family: Microsoft YaHei UI;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 37px;
        margin-top: 37px;
        cursor: pointer;
      }
    }
    .banner-right {
      position: absolute;
      top: 111px;
      left: 171px;
      z-index: 2;
      // background: #56a4cb;
      .right-img {
        text-align: left;
        width: 1029px;
      }
    }
  }
}
.listen-voice {
  width: 1198px;
  height: 556px;
  background: url("./../../assets/image/listen__banner.png");
  background-size: 1198px 556px;
  margin: 60px auto;
  border: 1px solid #7a7a7a;
  display: flex;
  .listen-left {
    width: 409px;
    height: 557px;
    position: relative;
    border-right: 1px solid #7a7a7a;
    .left-content {
      width: 100%;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 30px;
      color: #393837;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    .left-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .listen-right {
    margin-top: 162px;
    margin-left: 117px;
    .right-content {
      text-align: left;
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      line-height: 30px;
      color: #393837;
    }
    .btn {
      width: 400px;
      height: 37px;
      background: #56a4cb;
      border-radius: 5px;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 37px;
      margin-top: 37px;
      cursor: pointer;
    }
  }
}
</style>