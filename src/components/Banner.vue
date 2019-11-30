<template>
  <div class="banner" :class="{active:is_an_true}">
    <img src="/static/images/index_bg.jpg" alt width="100%" height="100%" />
    <em class="a1"></em>
    <em class="a2"></em>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: ["isBanner"],
  data:function () {
    return {
        is_an_true:false,
    }
  },
  mounted() {
      this.is_an_true = true;
  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>
.banner
    &.active
        .a1
            top: 4.7rem
            transition-delay: 0.3s
        .a2
            bottom: 1.9rem
            transition-delay: 0.3s
    em
        display: block
        position: absolute
        &.a1
            top: -7rem
            transition: all .9s
        &.a2
            bottom: -2rem
            transition: all .9s
        &:nth-of-type(1)
            width: 6.67rem
            height: 6.94rem
            left:50%
            margin-left:-3.335rem
            background: url('/static/images/cake.png')
            background-size: 100% 100%
        &:nth-of-type(2)
            width: 6.3rem
            height: 3.2rem
            left:50%
            margin-left:-3.15rem
            background: url('/static/images/solgan.png')
            background-size: 100% 100%

</style>
