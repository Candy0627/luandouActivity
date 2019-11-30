<template>
    <div class="confessionWall">
        <img src="/static/images/wall.jpg" alt />
        <router-link to="/" class="backIndex">首页</router-link>
        <div class="wall">
            <!-- 弹幕 -->
            <div id="container">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <em @click="openVideo" v-if="isBtnVideo"></em>
                <video
                    id="video"
                    poster="/static/images/postVideo.jpg"
                    playsinline="true" webkit-playsinline="true"
                    @click="videoActive"
                >
                    <source src="/static/videos/video.mp4" />
                </video>
            </div>

            <div class="danmaku-editor">
                <div id="avatar-selector"></div>
                <input
                    type="text"
                    id="danmaku_input"
                    placeholder="輸入內容發送評論彈幕"
                    v-model="options.barrageText"
                />
                <button id="danmaku_submit">發送</button>
            </div>
            <p id="msg_box"></p>

            <ul class="winnerList">
                <li v-for="item in winnerList" :key="item.id">
                    <span>{{item.create_at | dateStr('YYYY-MM-DD') }}</span>
                    <span>{{item.role_name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Barrage from "barrage-ui";
import moment from "moment";
// import example from "barrage-ui/example.json";

export default {
    name: "HomeConfessionWall",
    props: ["options", "isConfessionWall"],
    data() {
        return {
            barrageData: [],
            winnerList: [],
            isBtnVideo: true
        };
    },
    mounted() {
        this.winnersList();
        this.set_barrage();
    },
    filters: {
        //自定义时间过滤器
        dateStr: function(value, format) {
            return moment().format("MMM Do");
        }
    },
    methods: {
        confessionWall() {
            this.$emit("openConfessionWall");
        },
        openVideo() {
            var v = document.getElementById("video");
            if (v.paused) {
                this.isBtnVideo = false;
                v.play();
            } else {
                this.isBtnVideo = true;
                v.pause();
            }
        },
        videoActive() {
            var v = document.getElementById("video");
            if (v.paused) {
                this.isBtnVideo = false;
                v.play();
            } else {
                this.isBtnVideo = true;
                v.pause();
            }
        },
        set_barrage() {
            var that = this;
            const container = document.getElementById("container");

            const barrage = new Barrage({
                container: container,
                config: {
                    duration: -1,
                    duration: 20000,
                    fontFamily: "Microsoft Yahei",
                    defaultColor: "#fff",
                    fontSize: 11
                }
            });

            axios.defaults.headers.common["Authorization"] = localStorage.token;
            axios
                .get("https://luandou.gamemorefun.net/api/barrage/get")
                .then(function(res) {
                    var data = res.data;
                    var newData = data.map((item, i) => {
                        return {
                            key: item.id,
                            time: 300 * (i + Math.random()),
                            text: item.msg,
                            fontSize: 11,
                            color: "#fff"
                        };
                    });
                    that.barrageData = newData;
                    barrage.setData(that.barrageData);
                    //barrage.canvas.height = container.clientHeight - 110;
                });

            // 绑定播放事件
            video.addEventListener(
                "click",
                () => {
                    barrage.play();
                },
                false
            );

            // 绑定播放事件
            video.addEventListener(
                "play",
                () => {
                    barrage.play();
                },
                false
            );

            // 绑定暂停事件
            video.addEventListener(
                "pause",
                () => {
                    barrage.pause();
                },
                false
            );

            // 播放进度事件
            video.addEventListener(
                "seeked",
                () => {
                    barrage.goto(video.currentTime * 1000);
                },
                false
            );

            var button = document.getElementById("danmaku_submit");
            var that = this;
            button.addEventListener("click", () => {
                if (that.options.barrageText == "") {
                    this.$layer.msg("您發送的彈幕爲空!");
                } else {
                    if (video.paused) {
                        this.$layer.msg("視頻未開始播放,您不能發送彈幕哦!");
                    } else {
                        if (that.options.barrageText.trim()) {
                            const result = barrage.add({
                                time: video.currentTime * 1000 + 550,
                                text: that.options.barrageText,
                                avatar: 1
                            });
                            if (result) {
                                //调取接口数据
                                console.log("彈幕發送狀態", result);
                                this.$emit(
                                    "saveBarrageData",
                                    that.options.barrageText
                                );
                            } else {
                                console.log("彈幕發送狀態", result);
                                this.$layer.msg(
                                    "當前進度過於飽和，請擇機再試~(o_o)~"
                                );
                            }
                        }
                    }
                }
            });
        },
        winnersList() {
            let that = this;
            axios
                .get("https://luandou.gamemorefun.net/api/winners")
                .then(result => {
                    // console.log(result.data.data);
                    that.winnerList = result.data.data;
                });
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../assets/style.css';

.confessionWall {
    position: relative;
    z-index: -1;

    .wall {
        width: 6.4rem;
        position: absolute;
        top: 2.4rem;
        left: 50%;
        margin-left: -3.2rem;

        .danmaku-editor {
            position: absolute;
            top: 3.98rem;

            #danmaku_input {
                position: absolute;
                top: -0.14rem;
                padding-left: 0.1rem;
                width: 68%;
                height: 0.5rem;
                border: none;
                background: none;
                font-size: 0.3rem;
            }

            #danmaku_submit {
                position: absolute;
                right: -0.06rem;
                width: 1.6rem;
                height: 0.6rem;
                top: -0.15rem;
            }
        }

        #container {
            position: initial !important;
        }

        #container, .video {
            i {
                display: block;
                position: absolute;
                z-index: 1;

                &:nth-child(1) {
                    width: 6.5rem;
                    height: 0.4rem;
                    top: -0.25rem;
                    left: -0.06rem;
                    background: url('/static/images/v_t.png') no-repeat;
                    background-size: 100% 100%;
                }

                &:nth-child(2) {
                    width: 6.48rem;
                    height: 0.23rem;
                    bottom: 0.28rem;
                    left: -0.05rem;
                    background: url('/static/images/v_b.png') no-repeat;
                    background-size: 100% 100%;
                }

                &:nth-child(3) {
                    width: 0.15rem;
                    height: 3.25rem;
                    top: 0.15rem;
                    left: -0.05rem;
                    background: url('/static/images/v_l.png') no-repeat;
                    background-size: 100% 100%;
                }

                &:nth-child(4) {
                    width: 0.15rem;
                    height: 3.25rem;
                    top: 0.15rem;
                    right: -0.03rem;
                    background: url('/static/images/v_r.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            em {
                width: 0.63rem;
                height: 0.63rem;
                position: absolute;
                z-index: 2;
                left: 50%;
                margin-left: -0.315rem;
                top: 50%;
                margin-top: -0.315rem;
                background: url('/static/images/btn_video.png') no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }

            video {
                width: 98.2%;
                margin-left: 0.05rem;
                border-bottom-right-radius: 0.2rem;
                border-bottom-left-radius: 0.2rem;
                border-top-right-radius: 0.2rem;
                border-top-left-radius: 0.2rem;
            }
        }

        img {
            width: 6.5rem;
            height: 3.89rem;
            margin: 0 auto;
        }

        .sendMessage {
            width: 100%;
            height: 0.51rem;
            position: absolute;
            top: 4rem;

            input {
                font-size: 0.24rem;
                color: #444444;
                width: 4.589rem;
                height: 0.38rem;
                padding-left: 0.2rem;

                &.send {
                    width: 1.58rem;
                    height: 0.51rem;
                    background: none;
                    border: none;
                    text-indent: -9999px;
                }
            }
        }

        .winnerList {
            width: 4.52rem;
            height: 1.54rem;
            position: absolute;
            top: 6.82rem;
            left: 50%;
            margin-left: -2.26rem;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 0.39rem;
                line-height: 0.39rem;
                border-bottom: 1px dashed #ecbb52;

                &:nth-child(1) {
                    border-top: 1px dashed #ecbb52;
                }

                span {
                    font-size: 0.25rem;
                    color: #ecbc53;
                    flex: 1;
                    display: inline-block;
                    text-shadow: #fdfbe3 1px 0 0, #fdfbe3 0 1px 0, #fdfbe3 -1px 0 0, #fdfbe3 0 -1px 0;

                    &:nth-child(1) {
                        padding-left: 0.3rem;
                        flex: 0.96;
                    }
                }
            }
        }
    }
}
</style>
