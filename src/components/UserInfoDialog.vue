<template lang="pug">
div
  el-dialog.dialog(:visible.sync="dialogVisible", :before-close="handleClose")
    .border
      img.userImg(:src="avatar")
    el-tabs(
      :tab-position="tabPosition",
      style="height: 500px; margin-top: 50px"
    )
      el-tab-pane(label="医生预约")
        .table
          el-table(
            :data="tableData",
            style="width: 100%",
            :header-row-class-name="tableHead",
            v-loading="loading"
          )
            el-table-column(
              prop="reserveDate",
              label="预约日期",
              width="110",
              align="center"
            )
            el-table-column(
              prop="reserveTime",
              label="预约时间",
              width="190",
              align="center"
            )
              template(slot-scope="scope")
                span {{ scope.row.reserveTime.slice(6, 8) < 12 ? `上午 ${scope.row.reserveTime}` : `下午 ${scope.row.reserveTime}` }}
            el-table-column(
              prop="status",
              label="状态",
              width="110",
              align="center"
            )
              template(slot-scope="scope")
                span {{ scope.row.status === 1 ? '预约成功' : '预约失败' }}
            el-table-column(prop="", label="备注", width="280", align="center")
              template(slot-scope="scope")
                span 请准时前往海拉医院心理咨询室
      el-tab-pane(label="交易订单")
        .table
          el-table(
            :data="tableData",
            style="width: 100%",
            :header-row-class-name="tableHead",
            v-loading="loading"
          )
            el-table-column(
              prop="txhash",
              label="TXN HASH",
              width="150",
              align="center",
              :show-overflow-tooltip="true"
            )
            el-table-column(
              prop="value",
              label="VALUE",
              width="130",
              align="center"
            )
              template(slot-scope="scope")
                span {{ scope.row.status + ' Ether' + ' ($0.00)' }}
            el-table-column(
              prop="fee",
              label="TXN FEE",
              width="160",
              align="center",
              :show-overflow-tooltip="true"
            )
              template(slot-scope="scope")
                span {{ scope.row.fee + ' Ether' }}
            el-table-column(
              prop="reserveDate",
              label="下单时间",
              width="120",
              align="center"
            )
            el-table-column(
              prop="status",
              label="状态",
              width="130",
              align="center"
            )
              template(slot-scope="scope")
                span {{ scope.row.status === 1 ? '付款成功' : '等待确认' }}
</template>

<script>
export default {
  props: {
    dialogVisible: Boolean,
    tableData: Array,
    loading: Boolean,
    avatar:String
  },
  data() {
    return {
      tabPosition: "left",
    };
  },
  methods: {
    handleClose() {
      this.$emit("handleCloseClick");
    },
    tableHead({ row, rowIndex }) {
      return "thColor";
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 917px;
  height: 680px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  .table {
    margin-left: 15px;
    background: pink;
    position: absolute;
    top: 40px;
  }
  .el-dialog__close {
    font-size: 25px;
    color: #545454;
    font-weight: bold;
  }
  .el-tabs {
    .el-tabs__content {
      position: initial;
    }
  }
  .border {
    width: 110px;
    height: 70px;
    position: absolute;
    left: 20px;
    top: 40px;
    border-right: 2px solid #e4e7ed;
  }
  .userImg {
    width: 46px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
::v-deep .el-tabs__item {
  font-family: "Microsoft YaHei UI";
  font-weight: 700;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
}

::v-deep .el-table .thColor th {
  background-color: #eeedeb;
}
</style>