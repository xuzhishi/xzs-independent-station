<template lang="pug">
div
  .personInfo
    span.login(@click="loginClick") 登录
    img.person-logo(src="@/assets/image/person.png")
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

export default {
  components: {
    VueMetamask,
    LogoDialog,
  },
  data() {
    return {
      msg: "This is demo net work",
      centerDialogVisible: false,
    };
  },
  methods: {
    onComplete(data) {
      console.log("data:", data);
    },
    loginClick() {
      this.centerDialogVisible = true;
    },
    confirmHandleClick() {
      this.centerDialogVisible = false;
      if (window.ethereum) {
        window.ethereum.enable().then(async (res) => {
          var i = await login('https://us-central1-xdtx-6abd1.cloudfunctions.net/getToken',res[0])
          console.log(i)
          alert("当前钱包地址:" + res[0]);
        });
      } else {
        alert("请安装MetaMask钱包");
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