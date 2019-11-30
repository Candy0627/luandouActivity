<template>
  <section class="login" v-if="isGetRewardLogDialog">
    <i @click="closeGetRewardLogDialog"></i>
    <img src="../../static/images/get_reword_bg.png" alt />
    <form action>
      <ul class="recordList">
        <li v-for="item in options.recordList" :key="item.id">
            <span>{{item.date}}</span>
            <span>{{item.gift}}</span>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeGetrewardlogdialog",
  props: ["options","isGetRewardLogDialog"],
  data () {
    return {
    }
  },
  mounted () {
      
  },
  methods: {
    closeGetRewardLogDialog () {
        this.$emit('closeGetRewardLogDialog');
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
    position: fixed
    z-index: 2
    top: 25%
    i
        display: inline-block
        width: 0.64rem
        height: 0.64rem
        position: absolute
        z-index: 7
        right: 0
        background: url('/static/images/close.png') no-repeat
        background-size: 100% 100%
    ul
        position: absolute;
        top: 1.95rem;
        width: 6rem;
        height: 3rem;
        left: 50%;
        margin-left: -3rem;
        overflow-y: auto;
        
        li
            display: flex
            width: 100%
            height: 0.52rem
            line-height: 0.52rem
            color: #ecbb52
            font-size:.24rem
            border-bottom: 1px solid #eec04e
            &:nth-child(1)
                border-top: 1px solid #eec04e
            span
                &:nth-child(1)
                    flex: .9
                    text-align: center
                &:nth-child(2)
                    flex: 1
                    text-align: center    
</style>
