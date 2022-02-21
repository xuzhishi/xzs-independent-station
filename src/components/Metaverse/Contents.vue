<template lang="pug">
div
  .contents(v-for="(item, index) in contents", :key="index")
    p {{ item }}
  p.content-bottom {{ $t('Metaverse.link') }}
    span.content-link https://hello.vrchat.com/
    span {{ $t('Metaverse.content_bottom_1') }}
    span.content-link {{ $t('Metaverse.content_bottom_2') }}
    span {{ $t('Metaverse.content_bottom_3') }}
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    contents() {
      return [
        this.$t("Metaverse.content__1"),
        this.$t("Metaverse.content__2"),
        this.$t("Metaverse.content__3"),
        this.$t("Metaverse.content__4"),
        this.$t("Metaverse.content__5"),
      ];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.contents {
  width: 1159px;
  text-align: left;
  margin: 0 auto;
  margin-top: 18px;
  p {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    line-height: 20px;
    color: #393837;
  }
}
.content-bottom {
  width: 1159px;
  text-align: left;
  margin: 50px auto;
  .content-link {
    color: #56a4cb;
  }
}
</style>