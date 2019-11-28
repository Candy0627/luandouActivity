<template>
    <div class="glodShare">
        <img src="/static/images/goldshare_bg.jpg" alt width="100%" height="100%" />
        <router-link to="/" class="backIndex">首页</router-link>
        <div class="glod_share">
            <div class="picShow">
                <ul>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li v-for="(item,index) in oListData" :key="index" :style="{opacity:item}"></li>
                </ul>
            </div>
            <div class="progress"></div>
            <a href="javascript:;" class="fbShare" @click="glodFbShare"></a>
            <a href="javascript:;" class="getReward" @click="glodGetReward"></a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "HomeGlodshare",
    props: ["options"],
    data() {
        return {
            percent: "",
            oList:[0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6],
        };
    },
    mounted() {
        this.glodInit();
    },
    computed:{
        oListData : function () {
            var cur_timestap = Date.parse(new Date());
            var start_timestap = Date.parse("2019-11-26");
            var end_timestap = Date.parse("2019-12-1");
            var process =
                (cur_timestap - start_timestap) /
                (end_timestap - start_timestap);
            this.percent = process * 100;
            var n = this.percent;
            if (n > 11) {
                this.oList[0] = 0;
            }
            if (n > 22) {
                this.oList[1] = 0;
            }
            if (n > 33) {
                this.oList[2] = 0;
            }
            if (n > 44) {
                this.oList[3] = 0;
            }
            if (n > 55) {
                this.oList[4] = 0;
            }
            if (n > 66) {
                this.oList[5] = 0;
            }
            if (n > 77) {
                this.oList[6] = 0;
            }
            if (n > 88) {
                this.oList[7] = 0;
            }
            if (n > 99) {
                this.oList[8] = 0;
            }
            return this.oList;
        }
    },
    methods: {
        glodFbShare() {
            var token = localStorage.getItem("token");
            if(token){
                this.$emit("glodFbShare");
            } else {
                this.$layer.msg("請先進行登錄！");
            }
        },
        glodGetReward() {
           this.$emit('glodGetReward',this.percent);
        },
        glodInit() {
            
        }

    }
};
</script>

<style lang="stylus" scoped>
.glodShare {
    position: relative;

    .glod_share {
        position: absolute;
        top: 2.36rem;
        width: 6.5rem;
        left: 50%;
        margin-left: -3.25rem;

        .picShow {
            width: 6.5rem;
            height: 5.36rem;
            background: url('/static/images/gold_share_bot.png') no-repeat;
            background-size: 100% 100%;

            ul {
                width: 6.33rem;
                height: 4.95rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -ms-flex-pack: distribute;
                justify-content: space-around;
                border-radius: 100%;
                position: absolute;
                top: .3rem;
                left: .08rem;
                li {
                    width: 33.3333333333333%;
                    background: #000;
                    background-size:50% 50%;
                    &:nth-of-type(1) {
                        background: radial-gradient(circle at top left,transparent .175rem,black 0) top left;
                    }
                    &:nth-of-type(3) {
                        background: radial-gradient(circle at top right,transparent .175rem,black 0) top right;
                    }
                    &:nth-of-type(7) {
                        background:radial-gradient(circle at bottom left,transparent .175rem,black 0) bottom left;
                    }
                    &:nth-of-type(9) {
                        background:radial-gradient(circle at bottom right,transparent .175rem,black 0) bottom right;
                    }
                }
                span{
                    &:nth-child(1){
                        position :absolute;
                        left:33%;
                        z-index :11;
                        width: 1px;
                        height: 100%;
                        background: #ffa500;
                    }
                    &:nth-child(2){
                        position :absolute;
                        right:33%;
                        z-index :11;
                        width: 1px;
                        height: 100%;
                        background: #ffa500;
                    }
                    &:nth-child(3){
                        position: absolute;
                        left:0;
                        top: 33.4%;
                        z-index: 11;
                        width: 100%;
                        height: 1px;
                        background: #ffa500;
                    }
                    &:nth-child(4){
                        position: absolute;
                        left: 0;
                        bottom: 33%;
                        z-index: 11;
                        width: 100%;
                        height: 1px;
                        background: #ffa500;
                    }
                }
            }
        }

        .progress {
            width: 6.2rem;
            height: 0.41rem;
            position: absolute;
            top: 5.55rem;
            left: 50%;
            margin-left: -3.1rem;
            background: url('/static/images/progress_bg.png') no-repeat;
            background-size: 100% 100%;
        }

        a {
            width: 2.74rem;
            height: 0.72rem;
            position: absolute;
            top: 6.2rem;

            &.fbShare {
                left: 0.35rem;
            }

            &.getReward {
                right: 0.35rem;
            }
        }
    }
}
</style>
