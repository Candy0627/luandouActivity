<template>
  <section class="login animatedA"
  :class="{zoomIn:options.is_re_true,zoomOut:options.is_re_false}"
  v-if="options.isGetRewardLogDialog">
    <i @click="closeGetRewardLogDialog"></i>
    <img src="../../static/images/get_reword_bg.png" alt />
    <form action>
      <ul class="recordList">
        <li v-for="(item,index) in options.recordList" :key="item.id">
          <span>{{item.date}}</span>
          <span>{{item.gift}}</span>
          <button
            class="btn_get_r"
            type="button"
            v-clipboard:copy="item.gift"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          ></button>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeGetrewardlogdialog",
  props: ["options"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    closeGetRewardLogDialog() {
      this.options.isMaskShow = false;
      this.options.isGetRewardLogDialog = false;
      this.options.is_re_true = false;
      this.options.is_re_false = true;
    },
    onCopy(e) {
      this.$layer.msg("複製成功！");
    },
    onError(e) {
      this.$layer.msg("複製失敗！");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login {
  position: fixed;
  z-index: 2;
  top: 25%;

  i {
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    position: absolute;
    z-index: 7;
    right: 0;
    background: url('/static/images/close.png') no-repeat;
    background-size: 100% 100%;
  }

  ul {
    position: absolute;
    top: 1.95rem;
    width: 6rem;
    height: 3rem;
    left: 50%;
    margin-left: -3rem;
    overflow-y: auto;

    li {
      display: flex;
      width: 100%;
      height: 0.54rem;
      line-height: 0.54rem;
      color: #ecbb52;
      font-size: 0.24rem;
      border-bottom: 1px dashed #eec04e;
      .btn_get_r{
          width: 1.2rem;
          height: .44rem;
          margin-top: .025rem;
          background: url('/static/images/copy.png') no-repeat;
          background-size: 100% 100%;
      }
      &:nth-child(1) {
        border-top: 1px dashed #eec04e;
      }

      span {
        &:nth-child(1) {
          flex: 0.9;
          text-align: center;
        }

        &:nth-child(2) {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>
