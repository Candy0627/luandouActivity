<template>
  <div class="celebration">
    <img src="/static/images/celebration_bg.png" alt width="100%" height="100%" />
    <router-link to="/" class="backIndex">首页</router-link>
    <div class="heroShare">
        <ul>
            <li v-for="(item, index) in options.HeroList" :key="item.id" @click="getHeroID(item.id,item.active)">
                <em></em>
                
                <img :src="item.imgSrc" alt="" v-show="!item.active" :class="item.active">
                <img :src="item.imgSrcSelected" alt="" v-show="item.active" :class="item.active">
            </li>
        </ul>
        <a href="javascript:;" class="fb_share" @click="heroFbShare()"></a>
        <a href="javascript:;" class="get_reward" @click="openGetRewardlogDialog()"></a>
    </div>
    <div class="signIn">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <a href="javascript:;" class="get_sign"></a>
    </div>
  </div>
</template>

<script>
// import HomeGetmadialog from '/src/components/GetMaDialog'
export default {
  name: "HomeCelebration",
//   components:{
//       HomeGetmadialog
//   },
  props: ["options", "isCelebration"],
  data () {
    return {
       
    }
  },
  mounted () {
    this.$emit("getSharedHero");
  },
  methods: {
    heroFbShare () {
        var token = localStorage.getItem("token");
        if(token){
            this.$emit("heroFbShare");
        } else {
             this.$layer.msg("請先進行登錄！");
        }
    },
    getHeroID (id,active) {
         this.$emit("getHeroId",id,active);
        // if(active == true){
        //     this.$layer.msg("武將已經被分享過了");
        // } else {
        //     // 判断武将
        //     active = true;

        //     this.$layer.msg("该武將还没有被分享");
        //     this.$emit("getHeroId",id,active);
        // }
        // console.log('flag-active',this.options.flag,active);
        // if(this.options.flag == 0){
        //     this.$emit("getHeroId",id,active);
        // } else {
        //     this.$layer.msg("武将您已经点过一个了");
        // }
    },
    openGetRewardlogDialog() {
        var token = localStorage.getItem("token");
        if(token){
            this.$emit('openGetRewardlogDialog');
        } else {
             this.$layer.msg("請先進行登錄！");
        }
        
    }
  }
};
</script>

<style lang="stylus" scoped>
.celebration
    position relative;
    .signIn
        width: 6rem;
        height: 9.05rem;
        position: absolute;
        top: 15.9rem;
        left: 50%;
        margin-left: -3rem;
        ul
            display flex
            flex-wrap wrap
            justify-content space-between
            li
                width 1.6rem
                height 1.6rem
                border-radius:100%
                margin-bottom: .13rem;
        a
            display: inline-block;
            position: absolute;
            width: 3.68rem;
            height: 0.72rem;
            bottom: .8rem;
            left: 50%;
            margin-left: -1.84rem;
            cursor: pointer
    .heroShare
        width: 6rem;
        height: 9.05rem;
        position: absolute;
        top: 3.17rem;
        left: 50%;
        margin-left: -3rem;
        a
            display: inline-block;
            position: absolute;
            width :2.76rem;
            height :.72rem;
            bottom: 0;
            &.fb_share
                left: 0
                background:url('/static/images/btn_share.png') no-repeat
                background-size:100% 100%
                cursor: pointer
            &.get_reward
                right: 0
                background:url('/static/images/btn_get_record.png') no-repeat
                background-size:100% 100%
                cursor: pointer
        ul
            li
                position absolute
                width :.96rem;
                height :.96rem;
                cursor: pointer;
                em
                    position absolute
                    width :1.06rem
                    height :1.07rem
                    top: -.06rem
                    left: 0rem
                    background:url('/static/images/border.png') no-repeat
                    background-size:100% 100%
                &:nth-child(1){
                    left:2.5rem
                    top:.01rem
                }
                &:nth-child(2){
                    left:.33rem
                    top:1.15rem
                }
                &:nth-child(3){
                    left:1.4rem
                    top:1.15rem
                }
                &:nth-child(4){
                    left:2.47rem
                    top:1.15rem
                }
                &:nth-child(5){
                    left:2.47rem
                    top:2.36rem
                }
                &:nth-child(6){
                    left:2.47rem
                    top:3.53rem
                }
                &:nth-child(7){
                    left:2.47rem
                    top:4.7rem
                }
                &:nth-child(8){
                    left:.33rem
                    top:5.85rem
                }
                &:nth-child(9){
                    left:1.4rem
                    top:5.85rem
                }
                &:nth-child(10){
                    left:2.47rem
                    top:5.85rem
                }
                &:nth-child(11){
                    left:3.64rem
                    top:5.85rem
                }
                &:nth-child(12){
                    left:4.77rem
                    top:5.85rem
                }
                img
                    width :100%
                    
            
</style>
