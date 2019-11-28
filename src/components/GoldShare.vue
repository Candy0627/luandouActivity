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
            console.log(n);
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
            this.$emit("glodFbShare");
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
                width: 6.4rem;
                height: 5rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -ms-flex-pack: distribute;
                justify-content: space-around;
                border-radius: 100%;
                padding-top: 0.3rem;
                margin-left: 0.01rem;
                li {
                    width: 33%;
                    background: #000;

                    &:nth-child(1) {
                        border-top-left-radius: 0.5rem;
                    }

                    &:nth-child(3) {
                        border-top-right-radius: 0.5rem;
                    }

                    &:nth-child(7) {
                        border-bottom-left-radius: 0.5rem;
                    }

                    &:nth-child(9) {
                        border-bottom-right-radius: 0.5rem;
                    }
                }
                span{
                    &:nth-child(1){
                        position :absolute;
                        left:33%;
                        z-index :11;
                        width: 1px;
                        height: 93%;
                        background: #ffa500;
                    }
                    &:nth-child(2){
                        position :absolute;
                        right:34%;
                        z-index :11;
                        width: 1px;
                        height: 93%;
                        background: #ffa500;
                    }
                    &:nth-child(3){
                        position: absolute;
                        left: 1.6%;
                        top: 36.4%;
                        z-index: 11;
                        width: 96.78%;
                        height: 1px;
                        background: #ffa500;
                    }
                    &:nth-child(4){
                        position: absolute;
                        left: 1.6%;
                        bottom: 32%;
                        z-index: 11;
                        width: 96.78%;
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
