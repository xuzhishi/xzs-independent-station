<template lang="pug">
div
  .personInfo
    //-  v-show="show"
    span.login(@click="loginClick", v-show="show") 登录
    img.person-logo(:src="accountImg")
  logo-dialog(
    :centerDialogVisible="centerDialogVisible",
    @confirmHandleClick="confirmHandleClick"
  )
  //- #demo 11
    vue-metamask(userMessage="msg", @onComplete="onComplete") 
</template>

<script>
import VueMetamask from "vue-metamask";
import LogoDialog from "./logoDialog.vue";
import { login } from "@/api/login.js";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

export default {
  components: {
    VueMetamask,
    LogoDialog,
  },
  data() {
    return {
      msg: "This is demo net work",
      centerDialogVisible: false,
      token: "",
      expiretime: "",
      createtime: "",
      // identity: 1,
      show: true,
      accountImg: require("@/assets/image/person.png"),
    };
  },
  created() {
    if (window.ethereum) {
      window.ethereum.enable().then(async (res) => {
        // this.loginService(res[0])
        const db = getFirestore();
        const docRef = doc(db, "user", res[0]);
        const docSnap = await getDoc(docRef);
        if (
          docSnap.data().expiretime < new Date() ||
          docSnap.data().token !== this.$cookie.get("token") ||
          docSnap.data().expiretime != this.$cookie.get("expires")
        ) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
    } else {
      alert("请安装MetaMask钱包");
      this.show = true;
    }
  },
  methods: {
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
          this.loginService(res[0]);
          const db = getFirestore();
          const docRef = doc(db, "user", res[0]);
          const docSnap = await getDoc(docRef);
          if (docSnap.data() == undefined) {
            createUserInfo(
              docRef,
              res[0],
              this.token,
              this.createtime,
              this.expiretime
            );
            this.$message.success("登录成功");
            this.show = false;
          } else {
            if (
              docSnap.data().expiretime < new Date() ||
              docSnap.data().token !== this.$cookie.get("token") ||
              docSnap.data().expiretime != this.$cookie.get("expires")
            ) {
              this.loginService(res[0]);
              this.$watch("expiretime", (newVal, oldVal) => {
                if (newVal !== "" && oldVal !== "") {
                  this.updateUserInfo(docRef, this.token, this.expiretime);
                  this.$message.success("登录成功");
                  this.show = false;
                }
              });
            } else {
              this.$message.success("登录成功");
              this.show = false;
            }
          }
        });
      } else {
        alert("请安装MetaMask钱包");
        this.show = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.personInfo {
  margin-top: 20px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  .login {
    display: inline-block;
    width: 122px;
    height: 37px;
    border: 1px solid #393837;
    border-radius: 5px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    font-size: 16px;
    line-height: 37px;
    align-items: center;
    color: #393837;
    cursor: pointer;
  }
  .person-logo {
    position: relative;
    top: 6px;
    width: 25px;
    height: 25px;
  }
}
</style>