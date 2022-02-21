<template lang="pug">
.personInfo
  span.login 登录
  img.person-logo(src="@/assets/image/person.png")
  .language
    el-select(v-model="value", placeholder="请选择", @change="tab")
      el-option(
        v-for="item in options",
        :key="item.value",
        :label="item.label",
        :value="item.value",
        size="mini"
      )
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "zh-CN",
          label: "中文",
        },
        {
          value: "en-US",
          label: "英文",
        },
      ],
      value: "zh-CN",
    };
  },
  mounted() {
    this.value = localStorage.getItem("locale");
    localStorage.setItem("locale", this.value);
    this.$i18n.locale = this.value;
  },
  methods: {
    tab(value) {
      localStorage.setItem("locale", value);
      this.$i18n.locale = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.personInfo {
  margin-top: 20px;
  width: 500px;
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
  }
  .person-logo {
    position: relative;
    top: 6px;
    width: 25px;
    height: 25px;
  }
}
</style>