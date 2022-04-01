<template lang="pug">
div
  .listen
    .listen-voice
      .listen-left
        .left-title
          span.line
          span.listen 倾听
        .left-subTitle
          h5 找到你的医生
          h4 心灵的声音
        .left-content
          .content(v-for="item in listenContent")
            p(v-html="item")
        .btn(@click="appointmentClick") {{ $t('home.listen__btn') }}
      .listen-right
        .backBlue
        img(src="./../../assets/image/listen.gif")
    paymentDialog(
      :appointmentVisible="appointmentVisible",
      :diseaseList="diseaseList",
      :exchangeRate="exchangeRate",
      @handleCloseClick="handleCloseClick",
      :form="form",
      @closeDialog="closeDialog"
    )
  loginDialog(
    :loginDialogVisible="loginDialogVisible",
    @cancelClick="cancelClick",
    @confirmClick="confirmClick"
  )
  logo-dialog(
    :centerDialogVisible="centerDialogVisible",
    @confirmHandleClick="confirmHandleClick",
    @handleCloseClick="handleCloseClick"
  )
</template>

<script>
import { diseaseList } from "@/api/diseaseList.js";
import { getUserInfo } from "@/api/getUserInfo.js";
import { exchangeRate } from "@/api/getExchangeRate.js";
import { login } from "@/api/login.js";
import loginDialog from "./../loginDialog.vue";
import LogoDialog from "./../logoDialog.vue";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      appointmentVisible: false,
      diseaseList: [],
      exchangeRate: 0,
      formInfo: {},
      form: {
        name: "",
        gender: "",
        age: "",
        email: "",
      },
      loginDialogVisible: false, //未登录提示弹框
      centerDialogVisible: false, //登录弹框
      token: "",
      expiretime: "",
      createtime: "",
    };
  },
  computed: {
    listenContent() {
      return [
        "海拉医院为全球的患者提供平等就医的机会。<br /> 在Web3.0+XR技术的医疗服务体系上，所有人都是一个匿名实体，<br /> 所有人都将一视同仁，提供最普惠的医疗帮助。",
        "在预约医生成功后请前往元宇宙海拉医院。<br /> 你可以在元宇宙世界与医生面对面交谈。",
      ];
    },
  },
  components: {
    paymentDialog: () => import("./paymentDialog.vue"),
    loginDialog,
    LogoDialog,
  },
  methods: {
    learnMoreClick() {
      this.$router.push("/xdtx");
    },
    async appointmentClick() {
      if (window.ethereum) {
        window.ethereum.enable().then(async (res) => {
          const db = getFirestore();
          const docRef = doc(db, "user", res[0]);
          const docSnap = await getDoc(docRef);
          if (
            docSnap.data().expiretime < new Date() ||
            docSnap.data().token !== this.$cookie.get("token") ||
            docSnap.data().expiretime != this.$cookie.get("expires")
          ) {
            // alert('请登录')
            this.loginDialogVisible = true;
          } else {
            this.appointmentVisible = true;
            try {
              const result = await diseaseList();
              this.diseaseList = result.data[0].result;
              const address = localStorage.getItem("address");
              const userList = await getUserInfo(address);
              this.formInfo = userList.data[0].result[0];
              this.form.name = this.formInfo.name;
              this.form.age = this.formInfo.age;
              this.form.gender = this.formInfo.gender;
              this.form.email = this.formInfo.email;
              const exchangeResult = await exchangeRate();
              this.exchangeRate =
                parseFloat(exchangeResult.data[0].result, 2) * 0.031;
            } catch (error) {
              this.$message.error(error);
            }
          }
        });
      } else {
        alert("请安装MetaMask钱包");
      }
    },
    closeDialog() {
      this.handleCloseClick();
    },
    handleCloseClick() {
      this.appointmentVisible = false;
      this.centerDialogVisible = false;
    },
    confirmClick() {
      this.loginDialogVisible = false;
      this.centerDialogVisible = true;
    },
    cancelClick() {
      this.loginDialogVisible = false;
    },

    // 登录
    // 点击登录打开弹窗
    loginClick() {
      this.centerDialogVisible = true;
    },
    // 更新数据库
    async updateUserInfo(docRef, token, expiretime) {
      await updateDoc(docRef, {
        token: token,
        expiretime: expiretime,
      });
    },
    // 创建数据库
    async createUserInfo(docRef, address, token, createtime, expiretime) {
      await setDoc(docRef, {
        address: address,
        token: token,
        createtime: createtime,
        expiretime: expiretime,
      });
    },
    // 请求登录接口并赋值
    async loginService(address) {
      var result = await login(address);
      this.token = result.data[0].result.token;
      this.createtime = result.data[0].result.createtime;
      this.expiretime = result.data[0].result.expiretime;
      this.$cookie.set("token", this.token);
      this.$cookie.set("expires", this.expiretime);
    },
    // 登录确定按钮
    confirmHandleClick() {
      this.centerDialogVisible = false;
      if (window.ethereum) {
        window.ethereum.enable().then(async (res) => {
          // alert('当前钱包地址：'+res[0])
          this.loginService(res[0]);
          const db = getFirestore();
          const docRef = doc(db, "user", res[0]);
          const docSnap = await getDoc(docRef);
          if (docSnap.data() == undefined) {
            this.createUserInfo(
              docRef,
              res[0],
              this.token,
              this.createtime,
              this.expiretime
            );
            this.$message.success("登录成功");
          } else {
            if (
              docSnap.data().expiretime < new Date() ||
              docSnap.data().token !== this.$cookie.get("token") ||
              docSnap.data().expiretime !== this.$cookie.get("expires")
            ) {
              this.loginService(res[0]);
              this.updateUserInfo(docRef, this.token, this.expiretime);
              this.$message.success("登录成功");
            } else {
              this.$message.success("登录成功");
            }
          }
        });
      } else {
        alert("请安装MetaMask钱包");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.listen {
  width: 100%;
  height: 759px;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.1501) 0%,
    rgba(226, 226, 226, 0.170673) 7.59%,
    rgba(255, 255, 255, 0.19) 33.14%
  );
  .listen-voice {
    width: 1100px;
    height: 556px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .listen-left {
      .left-title {
        width: 475px;
        // margin-left: 176px;
        margin-top: 150px;
        text-align: left;
        .line {
          display: inline-block;
          width: 224px;
          height: 2px;
          background: #7a7a7a;
        }
        .listen {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 48px;
          line-height: 61px;
          color: #4e9cf8;
          position: relative;
          top: 10px;
          left: 15px;
        }
      }
      .left-subTitle {
        display: flex;
        justify-content: space-between;
        width: 477px;
        margin-top: 20px;
        // margin-left: 176px;
        margin-bottom: 26px;
        h5 {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 18px;
          line-height: 23px;
          color: #393837;
          margin-top: 24px;
        }
        h4 {
          font-family: "Microsoft YaHei UI";
          font-weight: 700;
          font-size: 48px;
          line-height: 61px;
          color: #4e9cf8;
        }
      }
      .left-content {
        width: 475px;
        height: 200px;
        // margin-left: 176px;
        .content {
          font-family: "Microsoft YaHei UI";
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #393837;
          margin-bottom: 30px;
          text-align: left;
        }
      }
      .btn {
        width: 400px;
        height: 37px;
        background: #4e9cf8;
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
        // margin-left: 176px;
      }
    }
    .listen-right {
      width: 472px;
      height: 421px;
      background: url("./../../assets/image/listen__banner__new.jpg");
      background-size: 100% 421px;
      margin-top: 150px;
      position: relative;
      box-shadow: 3px 3px 5px #858383;
      .backBlue {
        width: 153px;
        height: 385px;
        background: #4e9cf8;
        position: absolute;
        bottom: -30px;
        left: -20px;
        z-index: -1;
      }
      img {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>