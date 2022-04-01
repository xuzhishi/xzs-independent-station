<template lang="pug">
div
  el-dialog(
    title="付款信息",
    :visible.sync="appointmentVisible",
    width="60%",
    center,
    :before-close="handleDialogClose"
  )
    div
      .personalInformation
        .title 个人信息
        el-form.form(:model="form", ref="ruleForm", label-width="100px")
          el-form-item(label="", :label-width="formLabelWidth", prop="name")
            el-input.input(
              v-model="form.name",
              placeholder="请输入姓名",
              :class="{ borderColor: inputNameShow }",
              @blur="nameLeave"
            )
              span.name(slot="prefix") 姓名：
          el-form-item(label="", :label-width="formLabelWidth", prop="name")
            el-select.select(
              v-model="form.gender",
              placeholder="请选择",
              :class="{ borderColor: inputGenderShow }",
              @blur="genderLeave"
            )
              span.name(slot="prefix") 性别
              el-option(
                v-for="item in options",
                :key="item.value",
                :label="item.label",
                :value="item.value"
              )

          el-form-item(label="", :label-width="formLabelWidth", prop="name")
            el-input(
              v-model="form.age",
              placeholder="请输入年龄",
              :class="{ borderColor: inputAgeShow }",
              @blur="ageLeave"
            )
              span.name(slot="prefix") 年龄：
          el-form-item(label="", :label-width="formLabelWidth", prop="name")
            el-input(
              v-model="form.email",
              placeholder="请输入邮箱",
              :class="{ borderColor: inputEmailShow }",
              @blur="emailLeave"
            )
              span.name(slot="prefix") 邮箱：
      .select-disease
        .title 选择疾病
        ul
          li.line1
            span(
              v-for="(item, index) in diseaseList.slice(0, 7)",
              :key="index"
            )
              span.item(
                @click="selectColor(index, item.name)",
                :class="{ currentBack: currentIndex === index }"
              ) {{ item.name }}
          li.line2(v-show="dropDownShow")
            span(v-for="(item, index) in diseaseList.slice(7)", :key="index")
              span.item(
                @click="selectLine2Color(index, item.name)",
                :class="{ currentBack: line2Index === index }"
              ) {{ item.name }}
          li.iconfont.icon-xiajiantou(
            @click="expandClick",
            v-show="!dropDownShow"
          )
          li.iconfont.icon-xialajiantou1(
            v-show="dropDownShow",
            @click="putAwayClick"
          )
        el-input.textarea(
          type="textarea",
          :rows="4",
          placeholder="请描述你的症状及就诊经历，医生将竭诚为你治疗，并保证你的隐私安全",
          v-model="textarea",
          maxlength="400",
          show-word-limit
        )
          span.name(slot="prefix") 备注：
      .select-time
        .title 选择时间段
        el-form.time(:model="form", ref="ruleForm", label-width="100px")
          el-form-item(label="", :label-width="formLabelWidth", prop="time")
            el-date-picker(
              v-model="date",
              type="date",
              placeholder="Please select a date",
              :picker-options="pickerOptions",
              :class="{ borderColor: inputTimeShow }",
              @blur="timeLeave"
            )
          el-form-item.appointment(
            label="预约时间：",
            :label-width="formLabelWidth"
          )
            el-time-select(
              placeholder="起始时间",
              v-model="startTime",
              :picker-options={ start: '08:30', step: '01:00', end: '18:30' },
              :class="{ borderColor: inputStartTimeShow }",
              @blur="startTimeLeave"
            )
            span(style="margin-left: 10px") —
            el-time-select(
              placeholder="结束时间",
              v-model="endTime",
              :picker-options={ start: '08:30', step: '01:00', end: '18:30', minTime: startTime },
              style="margin-left: 10px",
              :class="{ borderColor: inputEndTimeShow }",
              @blur="endTimeLeave"
            )
    span.dialog-footer(slot="footer")
      .reservationFee
        .footer-name 预约费用
        .footer-price
          span.fee 0.031 Ether
          span.price {{ `($${exchangeRate.toFixed(5)})` }}
      .payment(@click="paymentClick") 确认支付
</template>

<script>
import { saveReservation } from "@/api/saveReservation.js";
import { getFirestore, addDoc, collection } from "firebase/firestore";
export default {
  props: {
    appointmentVisible: Boolean,
    diseaseList: Array,
    exchangeRate: Number,
    form: Object,
  },
  data() {
    return {
      textarea: "",
      date: "",
      startTime: "",
      endTime: "",
      options: [
        {
          value: "0",
          label: "男",
        },
        {
          value: "1",
          label: "女",
        },
      ],
      formLabelWidth: "100px",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
      activeNames: ["1"],
      dropDownShow: false,
      currentIndex: 0,
      line2Index: -1,
      inputNameShow: false,
      inputGenderShow: false,
      inputAgeShow: false,
      inputEmailShow: false,
      inputTimeShow: false,
      inputDateTimeShow: false,
      inputStartTimeShow: false,
      inputEndTimeShow: false,
      sick: "儿童心理问题",
    };
  },
  methods: {
    expandClick() {
      this.dropDownShow = true;
    },
    putAwayClick() {
      this.dropDownShow = false;
    },
    selectColor(index, name) {
      this.currentIndex = index;
      this.line2Index = -1;
      this.sick = name;
    },
    selectLine2Color(index, name) {
      this.line2Index = index;
      this.currentIndex = -1;
      this.sick = name;
    },
    // 失去焦点边框变红
    nameLeave() {
      if (this.form.name === "") {
        this.inputNameShow = true;
      } else {
        this.inputNameShow = false;
      }
    },
    genderLeave() {
      if (this.form.gender === "") {
        this.inputGenderShow = true;
      } else {
        this.inputGenderShow = false;
      }
    },
    ageLeave() {
      if (this.form.age === "") {
        this.inputAgeShow = true;
      } else {
        this.inputAgeShow = false;
      }
    },
    emailLeave() {
      if (this.form.email === "") {
        this.inputEmailShow = true;
      } else {
        var regEmail =
          /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (this.form.email != "" && !regEmail.test(this.form.email)) {
          this.$message({
            message: "邮箱格式不正确",
            type: "error",
          });
          this.form.email = "";
          this.inputEmailShow = true;
        } else {
          this.inputEmailShow = false;
        }
      }
    },
    timeLeave() {
      if (this.date === "") {
        this.inputTimeShow = true;
      } else {
        this.inputTimeShow = false;
      }
    },
    // dateTimeLeave() {
    //   if (this.date === "") {
    //     this.inputDateTimeShow = true;
    //   } else {
    //     this.inputDateTimeShow = false;
    //   }
    // },
    startTimeLeave() {
      if (this.startTime === "") {
        this.inputStartTimeShow = true;
      } else {
        this.inputStartTimeShow = false;
      }
    },
    endTimeLeave() {
      if (this.endTime === "") {
        this.inputEndTimeShow = true;
      } else {
        this.inputEndTimeShow = false;
      }
    },
    handleDialogClose() {
      this.$emit("handleCloseClick");
    },
    async paymentClick() {
      if (this.date !== "" && this.startTime !== "" && this.endTime !== "") {
        var y = this.date.getFullYear();
        var m = this.date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = this.date.getDate();
        d = d < 10 ? "0" + d : d;
        const date = y + "-" + m + "-" + d;
        this.date = date;
        const time = this.startTime + "-" + this.endTime;
        this.time = time;
      }
      if (
        this.form.name === "" ||
        this.form.gender === "" ||
        this.form.age === "" ||
        this.form.email === "" ||
        this.startTime === "" ||
        this.endTime === "" ||
        this.date === ""
      ) {
        this.nameLeave();
        this.genderLeave();
        this.ageLeave();
        this.emailLeave();
        this.timeLeave();
        this.startTimeLeave();
        this.endTimeLeave();
      } else {
        try {
          const transactionParameters = {
            to: "0x99b11f351d4361c6DaB6f70668295251fB624753",
            from: ethereum.selectedAddress,
            value: "0x6e2255f4098000",
          };
          const txHash = await ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
          const arr = {
            address: localStorage.getItem("address"),
            info: JSON.stringify({ info: { ...this.form } }),
            sick: this.sick,
            date: date,
            time: time,
            txhash: txHash,
            remarks: this.textarea,
          };
          const result = await saveReservation(arr);
          if (result.status === 200) {
            const patientName = this.form.name;
            const patientEmail = this.form.email;
            const patientGender = this.form.gender === "1" ? "女" : "男";
            const patientAge = this.form.age;
            const patientSick = this.sick;
            const appointmentDate = this.date;
            const appointmentTime = this.time;
            const patientConcern = this.textarea;
            const db = getFirestore();
            await addDoc(collection(db, "mail"), {
              to: patientEmail,
              cc: "xdtxorg@gmail.com",
              message: {
                subject: "Your Appointment",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"><style>.body { background-color:#F9F9F9; } a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff; } .large-6, .large-4{ box-sizing:border-box; } p {margin-top: 16px; margin-bottom: 16px;} @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div, .dscr strong{ font-size:18px!important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden; } table.body img { width:auto; height:auto; } table.body center { min-width:0 !important; } table.body .container { width:95% !important; } table.body .column, table.body .columns { height:auto !important; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important; } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important; } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important; } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important; } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block !important; margin:5px 0; } }</style></head><body class="body" style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important"><img src="https://publicate.it/open/email/274458/pic.gif?1645522230" width="1" height="1" style="width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;"><table class="body" id="publicateemailcontainer" style="background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><td dir="auto" class="float-center" align="center" valign="top" style="border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;"><table width="640" align="center" class="container float-center" style="background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:640px"><tbody><tr style="padding:0;vertical-align:top"><td dir="auto" style="padding:0"><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;"><tr><td> <table border="0" cellspacing="0" cellpadding="0" align="center"><tr><td align="center" style="padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;" bgcolor="transparent"><h2 dir="auto" style="padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;"><span>Your Appointment</span></h2></td> </tr></table></td> </tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:17.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: center;"><strong><span style="font-size: 16px;">Dear ${patientName}</span></strong></p><p style="margin-block-start: 14px;margin-block-end: 14px;">&nbsp;</p><p style="text-align: center;">Thank you very much for making appointment with us on xdtx.org.</p><p style="text-align: center;">Your appointment detail is listed below</p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:17.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:50px;padding-right:50px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="text-align: auto;"><ul><li><strong>Name</strong>: ${patientName}</li><li><strong>Contact</strong>: ${patientEmail}</li><li><strong>Gender</strong>：${patientGender}</li><li><strong>Age</strong>：${patientAge}</li><li><strong>Sick</strong>：${patientSick}</li><li><strong>Date</strong>: ${appointmentDate}</li><li><strong>Time</strong>: ${appointmentTime}</li><li><strong>Concern</strong>: ${patientConcern}</li></ul><p style="display:none;"></p><div style="text-align: auto;">&nbsp;</div></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:2.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: center;">We will let you know as soon as our next expert become available.</p><p style="text-align: center;">Also, please feel free to contact us by directly replying to this email.</p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: right;"><em><span style="color: #555555;">We wish you thrive!</span></em></p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" style="padding: 0; text-align:right"><img alt="" border="0" width="84" height="22" style="vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:84px; margin:0; max-width:84px;" src="https://img.pblc.it/i/950x306x9.f.S3/075b1/xdtxlogo-2267367-1.png" class="small-12 img84x22"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;">&nbsp;</td></tr></tbody></table><p align="center" style="text-align: center"><a target="_blank" style="text-decoration:none!important;outline:0!important;border:none!important;" href="https://publicate.it/?e=274458"><img width="150" height="21" style="border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;" alt="created in Publicate" src="https://publicate.it/imgs/created_in_publicate.gif"></a></p><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;">&nbsp;</td></tr></tbody></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--></td></tr></tbody></table><table width="100%"><tr><td width="100%" height="40"><p style="margin-block-start: 14px;margin-block-end: 14px;">&nbsp;</p></td></tr></table></td></tr></tbody></table></body></html>`,
              },
            });
            this.$message({
              message: "Appointment succeeded, please check spam box",
              type: "success",
            });
            this.$emit("closeDialog");
          }
        } catch (error) {
          this.$message.error("Error adding document: ", e);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.personalInformation {
  width: 1085px;
  height: 132px;
  border: 1px solid #e5e5e5;
  background: #fafafa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 19px 27px 24px;
}
.form {
  width: 1032px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 52px;
  margin-top: 21px;
}
.name {
  display: inline-block;
  width: 60px;
}
::v-deep .el-dialog {
  width: 32%;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  .el-dialog__title {
    font-family: "Microsoft YaHei UI";
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #7a7a7a;
  }
  .el-dialog__close {
    font-size: 25px;
    color: #545454;
    font-weight: bold;
  }
  .el-input__inner {
    width: 100%;
  }
  .el-textarea__inner {
    width: 94%;
  }
  .borderColor {
    border: 1px solid #ff0000;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
    // margin-left: 29px;
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 55px;
  }
}

::v-deep .select-disease {
  width: 1085px;
  height: 318px;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 19px;
  padding: 22px 24px;
  .textarea {
    width: 1033px;
    height: 145px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 110px;
    .el-textarea__inner {
      width: 1033px;
      height: 145px;
      background: #fafafa;
    }
  }
  ul {
    width: 1033px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 20px 20px 20px 20px;
    position: relative;
    margin-top: 22px;
    position: absolute;
    z-index: 2;
    .line1,
    .line2 {
      width: 900px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item,
      .currentBack {
        display: inline-block;
        width: 112px;
        height: 26px;
        background: #eeedeb;
        border-radius: 4px;
        font-family: "Microsoft YaHei UI";
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #7a7a7a;
        text-align: center;
        cursor: pointer;
      }
      .currentBack {
        background: #4e9cf8;
        color: #fff;
      }
    }
    .line2 {
      justify-content: flex-start;
      margin-top: 22px;
    }
    .line2 .item:nth-of-type(1) {
      margin-right: 19px;
    }
    .icon-xiajiantou,
    .icon-xialajiantou1 {
      position: absolute;
      top: 25px;
      left: 960px;
      cursor: pointer;
      list-style: none;
    }
  }
}

::v-deep .select-time {
  width: 1085px;
  height: 133px;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 20px;
  padding: 22px 24px;

  .time {
    margin-top: 20px;
    // width: 500px;
    display: flex;
    .date {
      width: 260px;
      margin-left: 40px;
    }
  }
  .appointment {
    display: flex;
    margin-left: 30px;
    .el-form-item__content {
      display: flex;
    }
  }
}
.dialog-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  .reservationFee {
    width: 346px;
    height: 44px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer-name {
      font-family: "Microsoft YaHei UI";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #7a7a7a;
    }
    .footer-price {
      font-family: "Microsoft YaHei UI";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #ff7a00;
      .price {
        color: #7a7a7a;
        margin-left: 5px;
      }
    }
  }
  .payment {
    width: 346px;
    height: 44px;
    background: #4e9cf8;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    font-family: "Microsoft Yi Baiti";
    font-weight: 400;
    font-size: 16px;
    line-height: 44px;
    color: #ffffff;
  }
}
</style>