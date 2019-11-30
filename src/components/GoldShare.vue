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

            <div class="progress">
                <span>{{percent}}%</span>
                <mt-progress :value="percent"></mt-progress>
            </div>

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
            oList: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
        };
    },
    mounted() {
    },
    computed: {
        oListData: function() {
            var cur_timestap = (Date.parse(new Date()))/1000;
            var start_timestap = 1574697600;
            var end_timestap = 1575215999;
            var n = parseInt((cur_timestap - start_timestap) /
                (end_timestap - start_timestap)*100);

            this.percent = n;
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
            if (token) {
                this.$emit("glodFbShare");
            } else {
                this.$layer.msg("請先進行登錄並進行區服選擇!");
            }
        },
        glodGetReward() {
            this.$emit("glodGetReward", this.percent);
        }
    }
};
</script>

<style lang="stylus" scoped>
.glodShare >>> .mt-progress-content {
    width: 6.2rem;
    height: 0.41rem;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -3.1rem;
    .mt-progress-runway {
        background: blue;
        width: 100%;
        height: 0.41rem !important;
        background: url('/static/images/progress_bg.png') no-repeat;
        background-size: 100% 100%;
    }
    .mt-progress-progress {
        position: absolute;
        background: #f5ce79;
        linear-gradient(to right, #fee6b3, #fbdb98, #f6cd78);
        height: 0.35rem !important;
        top: 0.03rem;
        left: 0.04rem;
        border-radius: 0.3rem;
    }
}

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
                top: 0.3rem;
                left: 0.08rem;

                li {
                    width: 33.3333333333333%;
                    background: #000;
                    background-size: 50% 50%;

                    &:nth-of-type(1) {
                        background: radial-gradient(circle at top left, transparent 0.175rem, black 0) top left;
                    }

                    &:nth-of-type(3) {
                        background: radial-gradient(circle at top right, transparent 0.175rem, black 0) top right;
                    }

                    &:nth-of-type(7) {
                        background: radial-gradient(circle at bottom left, transparent 0.175rem, black 0) bottom left;
                    }

                    &:nth-of-type(9) {
                        background: radial-gradient(circle at bottom right, transparent 0.175rem, black 0) bottom right;
                    }
                }

                span {
                    z-index :1;
                    &:nth-child(1) {
                        position: absolute;
                        left: 33%;
                        width: 1px;
                        height: 100%;
                        background: #ffa500;
                    }

                    &:nth-child(2) {
                        position: absolute;
                        right: 33%;
                        width: 1px;
                        height: 100%;
                        background: #ffa500;
                    }

                    &:nth-child(3) {
                        position: absolute;
                        left: 0;
                        top: 33.4%;
                        width: 100%;
                        height: 1px;
                        background: #ffa500;
                    }

                    &:nth-child(4) {
                        position: absolute;
                        left: 0;
                        bottom: 33%;
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
            span{
                position: absolute;
                z-index: 1;
                color: #fff;
                left: 45%;
                font-size: .24rem;
                top: 20%;
            }
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
