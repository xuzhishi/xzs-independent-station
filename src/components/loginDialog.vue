<template lang="pug">
div
  el-dialog(
    title="登录后才可以进行后续操作",
    :visible.sync="loginDialogVisible",
    center,
    :show-close="false"
  )
    span.dialog-footer(slot="footer")
      .cancel(@click="cancelClick") 取 消
      .login(type="primary", @click="confirmClick") 去登录
</template>

<script>
export default {
  props: {
    loginDialogVisible: Boolean,
  },
  methods: {
    cancelClick() {
      this.$emit("cancelClick");
    },
    confirmClick() {
      this.$emit("confirmClick");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 297px;
  height: 105px;
  position: relative;
  .el-dialog__title {
    font-family: "Microsoft YaHei UI";
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #7a7a7a;
    margin-left: 45px;
  }
  .dialog-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 53px;
    border-top: 1px solid rgba(226, 226, 226, 0.898281);
    display: flex;
    .cancel,
    .login {
      width: 149px;
      height: 53px;
      border-left: 1px solid rgba(226, 226, 226, 0.898281);
      font-family: "Microsoft YaHei UI";
      font-weight: 400;
      font-size: 16px;
      line-height: 53px;
      color: #7a7a7a;
      text-align: center;
      cursor: pointer;
    }
    .login {
      color: #4e9cf8;
    }
  }
}
</style>