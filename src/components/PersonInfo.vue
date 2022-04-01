<template lang="pug">
div
  .personInfo
    //-  v-show="show"
    span.login(@click="loginClick", v-show="show") 登录
    img.person-logo(:src="accountImg", @click="userInfoClick" v-show="userShow")
  logo-dialog(
    :centerDialogVisible="centerDialogVisible",
    @confirmHandleClick="confirmHandleClick",
    @handleCloseClick="handleCloseClick"
  )
  UserInfoDialog(
    :dialogVisible="dialogVisible",
    @handleCloseClick="handleCloseClick",
    :tableData="tableData",
    :loading="loading"
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
      accountImg: require("@/assets/image/person.png"),
      dialogVisible: false, //个人信息弹框
      tableData: [],
      loading: true,
      loginDialogVisible: false, //未登录提示弹框
      userShow:false,
    };
  },
  mounted() {
    if (window.ethereum) {
      window.ethereum.enable().then(async (res) => {
        console.log(res[0])
        const db = getFirestore();
        const docRef = doc(db, "user", res[0]);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().expiretime + '-----------' + new Date())
        if (docSnap.data() == undefined) {
          this.createUserInfo(
            docRef,
            res[0],
            this.token,
            this.createtime,
            this.expiretime
          );
          this.show = false;
          this.userShow = true;
        } else {
          if (
            docSnap.data().expiretime < new Date() ||
            docSnap.data().token !== this.$cookie.get("token") ||
            docSnap.data().expiretime != this.$cookie.get("expires")
          ) {
            console.log(docSnap.data().expiretime + '-----------' + new Date())
            console.log(docSnap.data().token + '-----------' + this.$cookie.get("token"))
            console.log(docSnap.data().expiretime + '-----------' + this.$cookie.get("expires"))
            this.show = true;
            this.userShow = false;
          } else {
            this.show = false;
            this.userShow = true;
          }
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
          // alert('当前钱包地址：'+res[0])
          this.loginService(res[0]);
          const db = getFirestore();
          const docRef = doc(db, "user", res[0]);
          const docSnap = await getDoc(docRef);
          // console.log(docSnap)
          if (docSnap.data() == undefined) {
            this.createUserInfo(
              docRef,
              res[0],
              this.token,
              this.createtime,
              this.expiretime
            );
            console.log(docSnap.data().expiretime + '-----------' + new Date())
            console.log(docSnap.data().token + '-----------' + this.$cookie.get("token"))
            console.log(docSnap.data().expiretime + '-----------' + this.$cookie.get("expires"))
            this.$message.success("登录成功");
            this.show = false;
            this.userShow = true;
          } else {
            if (
              docSnap.data().expiretime < new Date() ||
              docSnap.data().token !== this.$cookie.get("token") ||
              docSnap.data().expiretime !== this.$cookie.get("expires")
            ) {
              this.loginService(res[0]);
              this.updateUserInfo(docRef, this.token, this.expiretime);
              console.log(docSnap.data().expiretime + '-----------' + new Date())
            console.log(docSnap.data().token + '-----------' + this.$cookie.get("token"))
            console.log(docSnap.data().expiretime + '-----------' + this.$cookie.get("expires"))
              this.$message.success("登录成功");
              this.show = false;
              this.userShow = true;
              // this.$watch("expiretime", (newVal, oldVal) => {
              //   // newVal !== "" && oldVal !== ""
              //   console.log(newVal + '----------'+oldVal)
              //   if (newVal !== oldVal) {

              //   }
              // });
            } else {
              this.$message.success("登录成功");
              this.show = false;
              this.userShow = true;
            }
          }
        });
      } else {
        alert("请安装MetaMask钱包");
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
            docSnap.data().expiretime < new Date() ||
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
        alert("请安装MetaMask钱包");
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
    margin-left: 100px;
    margin-top: 10px;
  }
  .person-logo {
    position: relative;
    top: 15px;
    left: 40px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
}
</style>