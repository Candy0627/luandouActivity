<template>
    <div class="billboard">
        <img src="/static/images/billboard_bg.png" alt width="100%" height="100%" />
        <router-link to="/" class="backIndex">首页</router-link>
        <div class="singleRank">
            <div class="tips">{{tipsText}}</div>
            <input type="text" placeholder="輸入暱稱查詢戰力" v-model="searchText" />
            <div class="list" v-for="(item,index) in filterList" :key="index">
                <span>{{indexSelf}}</span>
                <span>{{item.sname}}</span>
                <span>{{item.uname}}</span>
                <span>{{item.power | valueComputed}}</span>
            </div>
        </div>
        <dl>
            <dt>排名</dt>
            <dt>區服</dt>
            <dt>暱稱</dt>
            <dt>戰力</dt>
        </dl>
        <ul class="moreRank">
            <li v-for="(item,index) in rankData" :key="index">
                <span>
                    <img src="/static/images/one.png" alt v-show="index==0" />
                    <img src="/static/images/two.png" alt v-show="index==1" />
                    <img src="/static/images/three.png" alt v-show="index==2" />
                    <span class="number">{{index+1}}</span>
                </span>
                <span>{{item.sname}}</span>
                <span>{{item.uname}}</span>
                <span>{{item.power | valueComputed}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "HomeBillboard",
    props: ["options", "isBillboard"],
    data() {
        return {
            power: "",
            isTipsShow: false,
            rankData: [],
            searchText: "",
            tipsText: "請輸入暱稱查詢！",
            username: "",
            power: "",
            indexSelf:"",
            list: []
        };
    },
    mounted() {
        this.rankListData();
    },
    computed: {
        filterList() {
            this.isTipsShow = false;
            if (!this.searchText) {
                this.isTipsShow = true;
                this.tipsText = "";
            } else {
                // 模糊查詢
                // let data = this.rankData.filter(
                //     value => value["uname"].includes(this.searchText) !== -1
                // );
                var data = [];
                // 精確查詢
                this.rankData.map((item, i, a) => {
                    if (item.uname == this.searchText) {
                        this.indexSelf = i+1;
                        data.push(item);
                    }
                });
                
                if (data === undefined || data.length === 0) {
                    this.isTipsShow = true;
                    this.tipsText = "未上榜，請再接再厲!";
                } else {
                    this.tipsText = "";
                }

                return data;
            }
        }
    },
    filters: {
        valueComputed: function(value) {
            if (!value) {
                return "";
            } else if (value >= 10000) {
                return parseInt(Math.round(value / 10000)) + "萬";
            }
        }
    },
    methods: {
        rankListData() {
            let t = this;

            fetch(
                "https://tj.gamemorefun.com/api/server/trans/heros/rank"
            )
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    t.rankData = data;
                });
        }
    }
};
</script>

<style lang="stylus" scoped>
.billboard {
    position: relative;
    dl{
        display flex
        dt{
            flex 1
        }
    }
    .moreRank {
        width: 5.8rem;
        height: 5.58rem;
        position: absolute;
        top: 6.08rem;
        left: 50%;
        margin-left: -2.9rem;
        overflow-y: auto;

        li {
            display: flex;
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.3rem;
            color: #ab2a2a;
            border-bottom: 0.01rem solid rgba(106, 19, 19, 0.3);

            &:nth-child(1) {
                height: 0.7rem;
                line-height: 0.7rem;
                background: url('/static/images/one_bg.png') no-repeat;
                background-size: 100% 100%;

                .number {
                    color: transparent;
                }
            }

            &:nth-child(2) {
                height: 0.7rem;
                line-height: 0.7rem;
                background: url('/static/images/two_bg.png') no-repeat;
                background-size: 100% 100%;

                .number {
                    color: transparent;
                }
            }

            &:nth-child(3) {
                height: 0.7rem;
                line-height: 0.7rem;
                background: url('/static/images/three_bg.png') no-repeat;
                background-size: 100% 100%;

                .number {
                    color: transparent;
                }
            }

            span {
                text-align: center;
                background: none;

                img {
                    width: 0.47rem;
                    height: 0.67rem;
                    margin-left: 0.2rem;
                }

                &:nth-child(1) {
                    flex: 0.4;
                }

                &:nth-child(2) {
                    flex: 1.1;
                }

                &:nth-child(3) {
                    flex: 1;
                }

                &:nth-child(4) {
                    flex: 0.7;
                }
            }
        }
    }

    .singleRank {
        width: 4.64rem;
        height: 1.36rem;
        position: absolute;
        top: 2.73rem;
        left: 50%;
        margin-left: -2.32rem;

        .tips {
            position: absolute;
            top: 1.02rem;
            font-size: 0.25rem;
            color: #ecbc53;
            text-align: center;
            width: 100%;
            text-shadow: #fdfbe3 1px 0 0, #fdfbe3 0 1px 0, #fdfbe3 -1px 0 0, #fdfbe3 0 -1px 0;
        }

        input {
            width: 100%;
            height: 0.4rem;
            line-height 0.4rem;
            font-weight: 700;
            font-size: 0.24rem;
            color: #444444;
            background: none;
            border: none;
            text-align: center;
            padding: 0 .2rem;
        }

        .list {
            display: flex;
            width: 100%;
            position: absolute;
            top: 0.95rem;
            height: 0.45rem;
            line-height: 0.45rem;

            span {
                flex: 1;
                text-align: center;
                font-size: 0.25rem;
                color: #ecbc53;
                text-shadow: #fdfbe3 1px 0 0, #fdfbe3 0 1px 0, #fdfbe3 -1px 0 0, #fdfbe3 0 -1px 0;
                &:nth-child(1){
                    flex: .63
                }
            }
        }
    }
}
</style>
