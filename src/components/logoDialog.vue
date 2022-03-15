<template lang="pug">
div
  el-dialog(
    title="Connect Your Wallet",
    :visible.sync="centerDialogVisible",
    width="30%",
    center
    :close-on-click-modal="false"
  )
    img(src="./../assets/image/logo-dialog.png", width="195")
    //- el-radio-group(v-model="identity")
      el-radio(label='2') 医师
      el-radio(label='1') 患者
    span Connect to fully enjoy XDTX experiences
    span.dialog-footer(slot="footer")
      el-button(type="primary", @click="confirmClick") Login with Your Wallet
</form>
</template>

<script>
export default {
  props: {
    centerDialogVisible:{
      type:Boolean
    }
  },
  data() {
    return {
      // identity:'1',
    };
  },
  methods: {
    confirmClick() {
      this.$emit("confirmHandleClick");
      // console.log(this.identity)
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 25% !important;
  height: 470px;
  background: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  .el-dialog__header {
    padding-top: 44px;
  }
  .el-dialog__title {
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: #7a7a7a;
    margin-top: 10px;
  }
  .el-dialog__headerbtn .el-dialog__close {
    display: none;
  }
  .el-dialog__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: 27px;
    }
  }
  .el-button {
    width: 296px;
    height: 44px;
    background: #56a4cb;
    border-radius: 5px;
  }
}
</style>