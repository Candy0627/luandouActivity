<template>
    <div class="glodShare">
        <img src="/static/images/goldshare_bg.jpg" alt width="100%" height="100%" />
        <router-link to="/" class="backIndex">首页</router-link>
        <div class="glod_share">
            <div class="picShow">
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
                </ul>
            </div>
            <div class="progress">
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
            number
        };
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        glodFbShare() {
            this.$emit('glodFbShare');
        },
        glodGetReward() {
            if(this.number !== 5000){
                this.$layer.msg("您的助理人數未達到5000！");
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.glodShare
    position: relative
    .glod_share
        position: absolute;
        top: 2.36rem;
        width: 6.5rem;
        left:50%;
        margin-left:-3.25rem;
        .picShow
            width: 6.5rem;
            height: 5.36rem;
            background: url('/static/images/gold_share_bot.png') no-repeat
            background-size:100% 100%
            ul
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
                margin-left: .01rem;
                li
                    width: 33%;
                    border-bottom: 1px solid #ffa500;
                    border-left: 1px solid #ffa500;
                    background-color: rgba(0,0,0,.6);
                    &:nth-child(1){
                        border-top-left-radius :.5rem;
                    }
                    &:nth-child(3){
                       border-top-right-radius :.5rem
                    }
                    &:nth-child(7){
                        border-bottom-left-radius :.5rem
                    }
                    &:nth-child(9){
                        border-bottom-right-radius :.5rem
                    }
        .progress
            width: 6.2rem;
            height: .41rem;
            position: absolute
            top: 5.55rem;
            left: 50%;
            margin-left: -3.1rem;
            background: url('/static/images/progress_bg.png') no-repeat
            background-size:100% 100% 
        a
            width: 2.74rem
            height: .72rem
            position: absolute
            top: 6.2rem
            &.fbShare
                left:.35rem
            &.getReward
                right:.35rem
</style>
