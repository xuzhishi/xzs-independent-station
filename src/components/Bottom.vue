<template lang="pug">
div
  p.line
  .bottom-content
    .bottom-center
      ul.line1
        li 
          img(src="./../assets/image/logo.png", width="106")
        //- li 497 Evergreen Rd. Roseville, CA
        //- li 95673 +44 345 678 903
        li contact@xdtx.org
      //- ul.line2
      //-   li About Us
      //-   li Contact
      //-   li Terms & Conditions
      //- ul.line2
      //-   li
      //-     span.iconfont.icon-facebook(style="margin-right: 27px")
      //-     span Facebook
      //-   li 
      //-     span.iconfont.icon-Twitter(style="margin-right: 27px")
      //-     span Twitter
      //-   li 
      //-     span.iconfont.icon-Twitter(style="margin-right: 27px")
      //-     span Instagram
      ul
        li Subscribe to our newsletter
        li 
          div(style="margin-top: 60px")
            el-input(placeholder="Email Address", v-model="input2")
              template(slot="append") OK
</div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
    };
  },
};
</script>

<style lang="scss" scoped>
// .line {
//   width: 100%;
//   height: 2px;
//   background-color: #7a7a7a;
//   margin: 0 auto;
// }
.bottom-content {
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 319px;
  background: #888f9b;
  justify-content: space-between;
  box-sizing: border-box;
  .bottom-center {
    display: flex;
    width: 60%;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 50px auto;
  }
  ul {
    text-align: left;
    margin-top: 57px;
  }
  li {
    list-style: none;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    ::v-deep .el-input__inner {
      border: 2px solid #56a4cb !important;
    }
    ::v-deep .el-input-group__append,
    .el-input-group__prepend {
      background-color: #56a4cb;
      color: #fff;
      border: 2px solid #56a4cb;
    }
  }
  .line1 li:nth-of-type(2) {
    margin-top: 24px;
  }
  .line2 {
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //   li{
    //       margin-bottom: ;
    //   }
  }
}
</style>