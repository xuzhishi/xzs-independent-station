<template lang="pug">
div
  .personInfo
    span.login(@click="loginClick", v-show="show") Login
    .person-logo.demo-basic--circle(v-show="userShow", @click="userInfoClick")
      .block
        el-avatar(:size="50", :src="avatar")
  logo-dialog(
    :centerDialogVisible="centerDialogVisible",
    @confirmHandleClick="confirmHandleClick",
    @handleCloseClick="handleCloseClick"
  )
  UserInfoDialog(
    :dialogVisible="dialogVisible",
    @handleCloseClick="handleCloseClick",
    :tableData="tableData",
    :loading="loading",
    :avatar="avatar"
  )
  loginDialog(
    :loginDialogVisible="loginDialogVisible",
    @cancelClick="cancelClick",
    @confirmClick="confirmClick"
  )
</template>

<script>
import VueMetamask from "vue-metamask";
import LogoDialog from "./logoDialog.vue";
import UserInfoDialog from "./UserInfoDialog.vue";
import loginDialog from "./loginDialog.vue";
import { login } from "@/api/login.js";
import { getOrderList } from "@/api/getOrderList.js";
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
    UserInfoDialog,
    loginDialog,
  },
  data() {
    return {
      msg: "This is demo net work",
      centerDialogVisible: false, //登录弹框
      token: "",
      expiretime: "",
      createtime: "",
      // identity: 1,
      show: true,
      accountImg: require("@/assets/image/avatar.jpg"),
      dialogVisible: false, //个人信息弹框
      tableData: [],
      loading: true,
      loginDialogVisible: false, //未登录提示弹框
      userShow: false,
      avatarList: [
        require("@/assets/image/avatar.jpg"),
        require("@/assets/image/avatar1.jpg"),
        require("@/assets/image/avatar2.jpg"),
        require("@/assets/image/avatar3.jpg"),
        require("@/assets/image/avatar4.jpg"),
        require("@/assets/image/avatar4.jpg"),
      ],
      avatar: "",
      avatarIdx: 0,
    };
  },
  mounted() {
    this.avatar = this.avatarList[this.avatarIdx];
    if (window.ethereum) {
      window.ethereum.enable().then(async (res) => {
        localStorage.setItem("address", res[0]);
        const db = getFirestore();
        const docRef = doc(db, "user", res[0]);
        const docSnap = await getDoc(docRef);
        if (
          docSnap.data().expiretime < new Date().getTime() ||
          docSnap.data().token !== this.$cookie.get("token") ||
          docSnap.data().expiretime != this.$cookie.get("expires")
        ) {
          this.show = true;
          this.userShow = false;
        } else {
          this.show = false;
          this.userShow = true;
        }
      });
    } else {
      alert("Please install metamask Wallet");
      this.show = true;
    }
  },
  methods: {
    // 点击登录打开弹窗
    loginClick() {
      this.centerDialogVisible = true;
    },
    // 登录确定按钮
    async confirmHandleClick() {
      let len = this.avatarList.length;
      this.avatarIdx = parseInt(Math.random(0, len - 1) * 7);
      this.avatar = this.avatarList[this.avatarIdx];
      this.centerDialogVisible = false;
      if (window.ethereum) {
        window.ethereum.enable().then(async (res) => {
          var result = await login(res[0]);
          if (result.status === 200) {
            this.token = result.data[0].result.token;
            this.createtime = result.data[0].result.createtime;
            this.expiretime = result.data[0].result.expiretime;
            this.$cookie.set("token", this.token);
            this.$cookie.set("expires", this.expiretime);

            const db = getFirestore();
            const docRef = doc(db, "user", res[0]);
            const docSnap = await getDoc(docRef);
            if (
              docSnap.data().expiretime < new Date().getTime() ||
              docSnap.data().token !== this.$cookie.get("token") ||
              docSnap.data().expiretime !== this.$cookie.get("expires")
            ) {
              var result = await login(res[0]);
              if (result.status === 200) {
                this.$message.success("Login successful");
                this.show = false;
                this.userShow = true;
              }
            } else {
              this.$message.success("Login successful");
              this.show = false;
              this.userShow = true;
            }
          }
        });
      } else {
        alert("Please install metamask Wallet");
        this.show = true;
      }
    },
    // 点击头像查看个人信息
    async userInfoClick() {
      if (window.ethereum) {
        window.ethereum.enable().then(async (res) => {
          const db = getFirestore();
          const docRef = doc(db, "user", res[0]);
          const docSnap = await getDoc(docRef);
          if (
            docSnap.data().expiretime < new Date().getTime() ||
            docSnap.data().token !== this.$cookie.get("token") ||
            docSnap.data().expiretime != this.$cookie.get("expires")
          ) {
            // alert('请登录')
            this.loginDialogVisible = true;
          } else {
            this.dialogVisible = true;
            const token = this.$cookie.get("token");
            const result = await getOrderList(token);
            this.tableData = result.data[0].result.data;
            this.loading = false;
          }
        });
      } else {
        alert("Please install metamask Wallet");
      }
    },
    handleCloseClick() {
      this.dialogVisible = false;
      this.centerDialogVisible = false;
    },
    confirmClick() {
      this.loginDialogVisible = false;
      this.centerDialogVisible = true;
    },
    cancelClick() {
      this.loginDialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.personInfo {
  margin-top: 20px;
  width: 200px;
  display: flex;
  justify-content: flex-end;
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
    margin-left: 100px;
    margin-top: 10px;
  }
  .person-logo {
    margin-left: 100px;
    margin-top: 10px;
    cursor: pointer;
  }
}
</style>