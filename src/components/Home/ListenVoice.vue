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
        .btn(@click="dialogFormVisible = true") {{ $t('home.listen__btn') }}
      .listen-right
        img(src="./../../assets/image/listen.gif")
    el-dialog(title="Make an appointment", :visible.sync="dialogFormVisible")
      el-form(:model="form", :rules="rules", ref="form")
        el-form-item(label="Name", :label-width="formLabelWidth", prop="name")
          el-input(
            v-model="form.name",
            autocomplete="off",
            placeholder="Please enter your name"
          )
        el-form-item(
          label="Email",
          :label-width="formLabelWidth",
          prop="email"
        )
          el-input(
            v-model="form.email",
            autocomplete="off",
            placeholder="Please enter your email address",
            @blur="sendEmail"
          )
        el-form-item(label="Time", :label-width="formLabelWidth", prop="time")
          el-date-picker(
            v-model="form.time",
            type="date",
            placeholder="Please select a date",
            :picker-options="pickerOptions"
          )
        el-form-item(
          label="Concern",
          :label-width="formLabelWidth",
          prop="textarea"
        )
          el-input(
            type="textarea",
            :rows="2",
            placeholder="Please briefly describe your concern",
            v-model="form.textarea"
          )
        el-form-item(label="Detail", :label-width="formLabelWidth") 
          el-input(
            type="textarea",
            :rows="2",
            placeholder="Please describe your concern in detail",
            v-model="form.textarea1"
          )
        .dialog-footer(slot="footer")
        el-button(@click="dialogFormVisible = false") Cancel
        el-button(type="primary", @click="submitForm('form')") Confirm
</template>

<script>
import { getFirestore, addDoc, collection } from "firebase/firestore";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        email: "",
        time: "",
        textarea: "",
        textarea1: "",
      },
      formLabelWidth: "100px",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter your name",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email address",
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: "Please select intended appointment time",
            trigger: "change",
          },
        ],
        textarea: [
          {
            required: true,
            message: "Please write about your concerns in detail",
            trigger: "blur",
          },
        ],
      },
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
  methods: {
    sendEmail() {
      var regEmail =
        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.form.email != "" && !regEmail.test(this.form.email)) {
        this.$message({
          message: "邮箱格式不正确",
          type: "error",
        });
        this.form.email = "";
      }
    },
    learnMoreClick() {
      this.$router.push("/xdtx");
    },
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      const patientName = this.form.name;
      const patientEmail = this.form.email;
      const appointmentTime = this.form.time;
      const patientConcern = this.form.textarea;
      const patientConcernDetail = this.form.textarea1;

      // send email to patient after making appointment
      try {
        const db = getFirestore();
        await addDoc(collection(db, "mail"), {
          to: patientEmail,
          cc: "xdtxorg@gmail.com",
          message: {
            subject: "Your Appointment",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"><style>.body { background-color:#F9F9F9; } a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff; } .large-6, .large-4{ box-sizing:border-box; } p {margin-top: 16px; margin-bottom: 16px;} @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div, .dscr strong{ font-size:18px!important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden; } table.body img { width:auto; height:auto; } table.body center { min-width:0 !important; } table.body .container { width:95% !important; } table.body .column, table.body .columns { height:auto !important; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important; } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important; } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important; } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important; } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block !important; margin:5px 0; } }</style></head><body class="body" style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important"><img src="https://publicate.it/open/email/274458/pic.gif?1645522230" width="1" height="1" style="width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;"><table class="body" id="publicateemailcontainer" style="background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><td dir="auto" class="float-center" align="center" valign="top" style="border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;"><table width="640" align="center" class="container float-center" style="background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:640px"><tbody><tr style="padding:0;vertical-align:top"><td dir="auto" style="padding:0"><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;"><tr><td> <table border="0" cellspacing="0" cellpadding="0" align="center"><tr><td align="center" style="padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;" bgcolor="transparent"><h2 dir="auto" style="padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;"><span>Your Appointment</span></h2></td> </tr></table></td> </tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:17.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: center;"><strong><span style="font-size: 16px;">Dear ${patientName}</span></strong></p><p style="margin-block-start: 14px;margin-block-end: 14px;">&nbsp;</p><p style="text-align: center;">Thank you very much for making appointment with us on xdtx.org.</p><p style="text-align: center;">Your appointment detail is listed below</p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:17.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:50px;padding-right:50px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="text-align: auto;"><ul><li><strong>Name</strong>: ${patientName}</li><li><strong>Contact</strong>: ${patientEmail}</li><li><strong>Time</strong>: ${appointmentTime}</li><li><strong>Concern</strong>: ${patientConcern}</li><li><strong>Detail</strong><br>${patientConcernDetail}</li></ul><p style="display:none;"></p><div style="text-align: auto;">&nbsp;</div></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%" width="100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;"><tr><td align="center"><hr size="1" width="66%" style="color:#bbbbbb; width: 66%; border-color:#bbbbbb; background-color:#bbbbbb; margin:0; margin-top:2.5px; margin-bottom:17.5px;"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: center;">We will let you know as soon as our next expert become available.</p><p style="text-align: center;">Also, please feel free to contact us by directly replying to this email.</p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" height="5" style="font-size:1px; line-height:5px;height:5px;">&nbsp;</td></tr><tr><td style="padding:0 8px 0 8px;padding-left:8px;padding-right:8px;" dir="auto"><div class="dscr" style="color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; overflow:auto;" dir="auto"><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><p style="text-align: right;"><em><span style="color: #555555;">We wish you thrive!</span></em></p></div></span></div></td></tr><tr><td style="font-size:1px; height:10px" height="10"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table bgcolor="transparent" style="background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%" width="100%" dir="auto"><tr><td width="100%" style="padding: 0; text-align:right"><img alt="" border="0" width="84" height="22" style="vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:84px; margin:0; max-width:84px;" src="https://img.pblc.it/i/950x306x9.f.S3/075b1/xdtxlogo-2267367-1.png" class="small-12 img84x22"></td></tr></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--><table class="row" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:transparent; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;"><tbody><tr style="padding:0;vertical-align:top" valign="top"><th valign="top" dir="auto" class="small-12 large-12 columns" style="margin:0 auto;padding:0;width:640px"><table style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%"><tbody><tr style="padding:0;vertical-align:top"><th dir="auto" align="left" style="padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;"><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;">&nbsp;</td></tr></tbody></table><p align="center" style="text-align: center"><a target="_blank" style="text-decoration:none!important;outline:0!important;border:none!important;" href="https://publicate.it/?e=274458"><img width="150" height="21" style="border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;" alt="created in Publicate" src="https://publicate.it/imgs/created_in_publicate.gif"></a></p><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;">&nbsp;</td></tr></tbody></table></th></tr></tbody></table></th></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'><![endif]--></td></tr></tbody></table><table width="100%"><tr><td width="100%" height="40"><p style="margin-block-start: 14px;margin-block-end: 14px;">&nbsp;</p></td></tr></table></td></tr></tbody></table></body></html>`,
          },
        });
        this.$message({
          message: "Appointment succeeded, please check spam box",
          type: "success",
        });
      } catch (e) {
        this.$message.error("Error adding document: ", e);
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
</style>