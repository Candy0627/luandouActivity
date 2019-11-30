<template>
    <div id="app">
        <home-topnav @openTopMenu="openTopMenu"></home-topnav>
        <home-topmenu :isTopMenu="isTopMenu" :options="options" @openLoginDialog="openLoginDialog"></home-topmenu>
        <home-botnav :isBotNav="isBotNav"></home-botnav>
        <home-mask :isMaskShow="isMaskShow"></home-mask>

        <home-logindialog
            :isLoginDialog="isLoginDialog"
            :options="options"
            @morefunLogin="morefunLogin"
            @closeLoginDialog="closeLoginDialog"
        ></home-logindialog>

        <home-selectserverdialog
            :isSelectServerDialog="isSelectServerDialog"
            :options="options"
            @confirmSelectServer="confirmSelectServer"
            @cancelSelectServerDialog="cancelSelectServerDialog"
            @choseServer="choseServer"
            @closeSelectServerDialog="closeSelectServerDialog"
        ></home-selectserverdialog>

        <home-myaccountdialog
            :isMyAccountInfoDialog="isMyAccountInfoDialog"
            :options="options"
            @switchServer="switchServer"
            @accountOut="accountOut"
            @closeMyAccountInfoDialog="closeMyAccountInfoDialog"
        ></home-myaccountdialog>

        <home-getrewardlogdialog
            :isGetRewardLogDialog="isGetRewardLogDialog"
            :options="options"
            @closeGetRewardLogDialog="closeGetRewardLogDialog"
            @getRecordList="getRecordList"
        ></home-getrewardlogdialog>

        <Home-getmadialog
            :options="options"
            :isGetMaDialog="isGetMaDialog"
            @closeGetMaDialog="closeGetMaDialog"
        ></Home-getmadialog>

        <Home-getjinjiangdialog
            :options="options"
            :isGetJinjangDialog="isGetJinjangDialog"
            @closeGetJinjiangDialog="closeGetJinjiangDialog"
        ></Home-getjinjiangdialog>

        <router-view
            :options="options"
            @saveBarrageData="saveBarrageData"
            @heroFbShareClick="heroFbShareClick"
            @getSharedHeroInfo="getSharedHeroInfo"
            @getHeroIDClick="getHeroIDClick"
            @openGetRewardlogDialog="openGetRewardlogDialog"
            @glodFbShare="glodFbShare"
            @glodGetReward="glodGetReward"
        ></router-view>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import axios from "axios";
import "../static/js/date.format";
import HomeBanner from "./components/Banner";
import HomeTopnav from "./components/Topnav";
import HomeBotnav from "./components/Botnav";
import HomeTopmenu from "./components/Topmenu";
import HomeMask from "./components/Mask";
import HomeLogindialog from "./components/LoginDialog";
import HomeSelectserverdialog from "./components/SelectServer";
import HomeMyaccountdialog from "./components/Myaccountinfo";
import HomeConfessionWall from "./components/ConfessionWall";
import HomeGetrewardlogdialog from "./components/GetRewardlogDialog";
import HomeGetmadialog from "./components/GetMaDialog";
import HomeGetjinjiangdialog from "./components/GetJinJangDialog";

export default {
    name: "App",
    components: {
        HomeBanner,
        HomeTopnav,
        HomeTopmenu,
        HomeBotnav,
        HomeMask,
        HomeLogindialog,
        HomeSelectserverdialog,
        HomeMyaccountdialog,
        HomeConfessionWall,
        HomeGetrewardlogdialog,
        HomeGetmadialog,
        HomeGetjinjiangdialog
    },
    data() {
        return {
            options: {
                token: "",
                uuid: "",
                account: "",
                password: "",
                myAccountInfo: "登錄賬號",
                roles: [],
                selected: "",
                serverId: "",
                uuid: "",
                userName: "",
                roleName: "",
                roleId: "",
                serverInfo: "",
                serverInfoSelected: "",
                ServerName: "",
                recordList: [],
                isHeroBright: false,
                heroId: "",
                heroType: [],
                HeroDataList: [],
                barrageText: "",
                $sdk: "",
                $sdk_jj: "",
                isTrue: true,
                isFalse: false,
                isATrue: true,
                isAFalse: false,
                is_a_true: true,
                is_a_flase: false,
                is_l_true: true,
                is_l_flase: false,
                is_s_true: true,
                is_s_flase: false,
                is_wj_true: true,
                is_wj_flase: false,
                is_jj_true: true,
                is_jj_flase: false,
                rest: "",
                total: "",
                barwidth: "",
                flag: 0,
                current:"",
                HeroList: [
                    {
                        id: "1",
                        name: "xishi",
                        imgSrc: "/static/images/hero/xishi.png",
                        imgSrcSelected: "/static/images/hero/xishi_.png",
                        active: false
                    },
                    {
                        id: "2",
                        name: "xishi",
                        imgSrc: "/static/images/hero/xiangyu.png",
                        imgSrcSelected: "/static/images/hero/xiangyu_.png",
                        active: false
                    },
                    {
                        id: "3",
                        name: "xishi",
                        imgSrc: "/static/images/hero/houyi.png",
                        imgSrcSelected: "/static/images/hero/houyi_.png",
                        active: false
                    },
                    {
                        id: "4",
                        name: "xishi",
                        imgSrc: "/static/images/hero/lvbu.png",
                        imgSrcSelected: "/static/images/hero/lvbu_.png",
                        active: false
                    },
                    {
                        id: "5",
                        name: "xishi",
                        imgSrc: "/static/images/hero/yuji.png",
                        imgSrcSelected: "/static/images/hero/yuji_.png",
                        active: false
                    },
                    {
                        id: "6",
                        name: "xishi",
                        imgSrc: "/static/images/hero/zhaoyun.png",
                        imgSrcSelected: "/static/images/hero/zhaoyun_.png",
                        active: false
                    },
                    {
                        id: "7",
                        name: "xishi",
                        imgSrc: "/static/images/hero/liyuanba.png",
                        imgSrcSelected: "/static/images/hero/liyuanba_.png",
                        active: false
                    },
                    {
                        id: "8",
                        name: "xishi",
                        imgSrc: "/static/images/hero/yuwenchengdu.png",
                        imgSrcSelected: "/static/images/hero/yuwenchengdu_.png",
                        active: false
                    },
                    {
                        id: "9",
                        name: "xishi",
                        imgSrc: "/static/images/hero/peiyuanqing.png",
                        imgSrcSelected: "/static/images/hero/peiyuanqing_.png",
                        active: false
                    },
                    {
                        id: "10",
                        name: "xishi",
                        imgSrc: "/static/images/hero/qinxiong.png",
                        imgSrcSelected: "/static/images/hero/qinxiong_.png",
                        active: false
                    },
                    {
                        id: "11",
                        name: "xishi",
                        imgSrc: "/static/images/hero/wangzhaojun.png",
                        imgSrcSelected: "/static/images/hero/wangzhaojun_.png",
                        active: false
                    },
                    {
                        id: "12",
                        name: "xishi",
                        imgSrc: "/static/images/hero/guanyu.png",
                        imgSrcSelected: "/static/images/hero/guanyu_.png",
                        active: false
                    }
                ]
            },
            isMaskShow: false,
            isBanner: true,
            isBotNav: true,
            isTopMenu: false,
            isLoginDialog: false,
            isSelectServerDialog: false,
            isMyAccountInfoDialog: false,
            isConfessionWall: false,
            isGetRewardLogDialog: false,
            isGetMaDialog: false,
            isGetJinjangDialog: false
        };
    },
    mounted() {
        var token = localStorage.getItem("token");
        var user_name = localStorage.getItem("userName");
        var role_name = localStorage.getItem("roleName");
        var server_id = localStorage.getItem("serverId");
        // console.log("刚开始的状态token", token);
        if (token == "" || token == null) {
            this.options.myAccountInfo = "登錄賬號";
        } else {
            this.options.myAccountInfo = "賬號信息";
            this.options.userName = user_name;
            this.options.roleName = role_name;
            this.options.serverId = server_id;

            this.options.serverInfo = localStorage.getItem("serverInfo");
            this.options.serverInfoSelected = localStorage.getItem(
                "serverInfoSelected"
            );
            this.options.roles = JSON.parse(this.options.serverInfo);
            this.options.selected = JSON.parse(this.options.serverInfoSelected);

            // this.options.roles.ServerName = this.options.selected.ServerName;
            // this.options.roles.ServerId = this.options.selected.ServerId;
        }
        // var vConsole = new VConsole();
        console.log("Hello world");
    },
    methods: {
        closeMyAccountInfoDialog() {
            this.isMaskShow = false;
            this.isMyAccountInfoDialog = false;
            this.options.is_a_true = false;
            this.options.is_a_false = true;
        },
        closeSelectServerDialog() {
            this.isMaskShow = false;
            this.isSelectServerDialog = false;
            this.options.is_s_true = false;
            this.options.is_s_false = true;
        },
        closeLoginDialog() {
            this.isMaskShow = false;
            this.isLoginDialog = false;
            this.options.is_l_false = true;
            this.options.is_l_true = false;

            // setTimeout(function() {

            //     this.options.is_l_false = false;
            //     this.options.is_l_true = true;

            // },500)
        },
        closeGetRewardLogDialog() {
            this.isMaskShow = false;
            this.isGetRewardLogDialog = false;
        },
        closeGetMaDialog() {
            this.isMaskShow = false;
            this.isGetMaDialog = false;
            this.options.is_wj_false = true;
            this.options.is_wj_true = false;
        },
        closeGetJinjiangDialog() {
            this.isMaskShow = false;
            this.isGetJinjangDialog = false;
            this.options.is_jj_false = true;
            this.options.is_jj_true = false;
        },
        openTopMenu() {
            this.isTopMenu = true;
            this.options.isTrue = true;
            this.options.isFalse = false;
        },
        openGetRewardlogDialog() {
            this.getRecordList();
            this.isTopMenu = false;
            this.isMaskShow = true;
            this.isGetRewardLogDialog = true;
        },
        openLoginDialog() {
            this.isTopMenu = false;
            var myAccountInfo = this.options.myAccountInfo;
            var token = localStorage.getItem("token");
            if (myAccountInfo == "賬號信息") {
                // 已登录状态———弹出我的账号信息弹出框
                this.isMaskShow = true;
                this.isMyAccountInfoDialog = true;
                this.options.is_a_false = false;
                this.options.is_a_true = true;
            } else if (myAccountInfo == "登錄賬號") {
                // 未登录状态{1.未登陆直接弹出登录框 2.已登录未选择区服}
                if (token == "" || token == null) {
                    // console.log("请您先进行登陆");
                    this.isMaskShow = true;
                    this.isLoginDialog = true;

                    this.options.is_l_false = false;
                    this.options.is_l_true = true;
                } else {
                    this.$layer.msg("您已經登陸過了，請選擇區服！");

                    setTimeout(function() {
                        this.isMaskShow = true;
                        this.isSelectServerDialog = true;
                        this.options.is_s_false = false;
                        this.options.is_s_true = true;
                    }, 1000);
                }
            }
        },
        getRecordList() {
            this.options.uuid = localStorage.getItem("uuid");
            this.options.roleId = localStorage.getItem("roleId");
            axios.defaults.headers.common["Authorization"] = localStorage.token;
            axios
                .get("https://luandou.gamemorefun.net/api/share/getRewardLog", {
                    params: {
                        uuid: this.options.uuid,
                        role_id: this.options.roleId
                    }
                })
                .then(result => {
                    this.options.recordList = result.data.data;
                });
        },
        morefunLogin() {
            if (!this.options.account) {
                this.$layer.msg("賬號不能為空!");
            } else if (!this.options.password) {
                this.$layer.msg("密碼不能為空!");
            } else {
                axios.defaults.headers.common["Authorization"] =
                    localStorage.token;
                var params = {
                    account: this.options.account,
                    password: this.options.password,
                    type: "MBean"
                };

                var that = this;
                axios
                    .post("https://luandou.gamemorefun.net/api/login", params)
                    .then(result => {
                        if (result.data.success == true) {
                            that.options.token = result.data.data["token"];
                            that.options.uuid = result.data.data["uuid"];
                            console.log(that.options.token, that.options.uuid);

                            that.isLoginDialog = false;
                            that.isMaskShow = false;
                            that.$layer.msg("登錄成功,請選擇區服！");

                            that.isSelectServerDialog = true;
                            that.isMaskShow = true;
                            // setTimeout(function() {
                            //     that.isSelectServerDialog = true;
                            //     that.isMaskShow = true;
                            // }, 1000);

                            that.options.userName = result.data.data.user_name;
                            that.options.roles = result.data.data.role;
                        } else {
                            this.$layer.msg("您輸入的信息不正確！");
                        }
                    });
            }
        },
        confirmSelectServer() {
            if (localStorage.serverId) {
                console.log("存在嗎");
                // 确认选择区服按钮
                this.$layer.msg("區服選擇成功!");
                this.isSelectServerDialog = false;
                this.options.is_s_true = false;
                this.options.is_s_false = true;
                this.isMaskShow = false;
                // 选择区服信息真正表示登陆成功后，改变状态,並且存入token/uuid,等信息
                this.options.myAccountInfo = "賬號信息";

                localStorage.token = this.options.token;
                localStorage.uuid = this.options.uuid;
                localStorage.userName = this.options.userName;
            } else {
                this.$layer.msg("請選擇區服！");
            }
        },
        cancelSelectServerDialog() {
            this.isSelectServerDialog = false;
            this.isMaskShow = false;
        },
        switchServer() {
            this.isMyAccountInfoDialog = false;
            this.isSelectServerDialog = true;
            this.options.is_s_true = true;
            this.options.is_s_false = false;
        },
        accountOut() {
            this.$layer.msg('已登出');
            this.isMaskShow = false;
            this.isMyAccountInfoDialog = false;
            this.options.is_a_true = false;
            this.options.is_a_false = true;
            this.options.myAccountInfo = "登錄賬號";
            localStorage.clear();
        },
        choseServer(server_id, role_name) {
            this.options.serverId = server_id;
            this.options.roleName = role_name;
        },
        saveBarrageData(barrageText) {
            var that = this;
            var uuid = localStorage.getItem("uuid");
            var role_id = localStorage.getItem("roleId");
            var server_id = localStorage.getItem("serverId");
            var role_name = localStorage.getItem("roleName");

            var params = {
                uuid: uuid,
                role_id: role_id,
                server_id: server_id,
                role_name: role_name,
                msg: barrageText
            };

            axios.defaults.headers.common["Authorization"] = localStorage.token;
            axios
                .post(
                    "https://luandou.gamemorefun.net/api/barrage/store",
                    params
                )
                .then(result => {
                    this.$layer.msg("彈幕發送成功!");
                    that.options.barrageText = "";
                });
        },
        getHeroIDClick(id, active, index) {

            console.log("當前點亮的圖標信息", id, active,index);
            
            this.heroId = id;
            var token = localStorage.getItem("token");
            console.log("token",token);
            // if (token) {
                if (this.options.flag == 1) {
                    this.$layer.msg("今日已成功點亮一名武將,請主公明日再來吧~");
                } else {
                    if (active == false) {
                        // 當前的和數組中的點亮,其他的不亮
                        // this.options.HeroList[id - 1].active = true;
                        this.options.current = index;
                    }
                }
            // } else {
            //     this.$layer.msg("請先進行登錄並進行區服選擇!");
            // }

            // if (active == true) {
            //     //點擊了已點亮的圖標
            //     this.$layer.msg("您已經點亮過武將了！");
            // } else {
            //     //真正判断是否点亮
            //     if (this.flag == 1) {
            //         this.$layer.msg("您已經點亮過該武將了！");
            //     } else {
            //         active = true;
            //     }
            // }
        },
        getSharedHeroInfo() {
            var token = localStorage.getItem("token");
            if (token) {
                var uuid = localStorage.getItem("uuid");
                var role_id = localStorage.getItem("roleId");
                let t = this;
                axios.defaults.headers.common["Authorization"] =
                    localStorage.token;
                axios
                    .get("https://luandou.gamemorefun.net/api/getSharedHero", {
                        params: {
                            uuid: uuid,
                            role_id: role_id
                        }
                    })
                    .then(result => {
                        if (result.data.data) {
                            t.options.HeroDataList = result.data.data;
                            var nrr = result.data.data;
                            var arr = [];
                            var timeArr = [];
                            for (var i = 0; i < nrr.length; i++) {
                                arr.push(nrr[i].type);
                                timeArr.push(nrr[i].date);
                            }
                            // 顯示武將
                            t.options.HeroList.forEach((item, i) => {
                                if (arr.indexOf(item.id) !== -1) {
                                    item.active = true;
                                }
                            });

                            // 判斷今天是否點過武將
                            var curTime = String(
                                new Date().getFullYear() +
                                    "-" +
                                    (new Date().getMonth() + 1) +
                                    "-" +
                                    new Date().getDate()
                            );
                            timeArr.forEach((item, i) => {
                                if (timeArr.indexOf(curTime) !== -1) {
                                    // t.$layer.msg(
                                    //     "今日已成功點亮一名武將,請主公明日再來吧~"
                                    // );
                                    t.options.flag = 1;
                                    console.log("tt", t.options.flag);
                                } else {
                                    t.options.flag = 0;
                                }
                            });
                        }
                    });
            } else {
                // this.$layer.msg("請先進行登錄並進行區服選擇!");
            }
        },
        heroFbShareClick() {
            let t = this;
            // 直接請求接口記錄返回數據，然後彈出框
            if (t.heroId == "" || t.heroId == null) {
                t.$layer.msg("您還沒有選擇武將！");
            } else {
                FB.ui({
                        method: "share",
                        href: "https://event.hero.gamemorefun.net"
                    },
                    function(response) {
                        if (!response) {
                            // 每天只记录一次当天的武将分享
                            var uuid = localStorage.getItem("uuid");
                            var role_id = localStorage.getItem("roleId");
                            var server_id = localStorage.getItem("serverId");
                            var role_name = localStorage.getItem("roleName");

                            var params = {
                                uuid: uuid,
                                role_id: role_id,
                                server_id: server_id,
                                role_name: role_name,
                                type: t.heroId
                            };

                            axios.defaults.headers.common["Authorization"] =
                                localStorage.token;
                            axios
                                .post(
                                    "https://luandou.gamemorefun.net/api/share/store",
                                    params
                                )
                                .then(result => {
                                    // this.$layer.msg(
                                    //   "武將分享成功，這個藉口會返回禮包碼",
                                    //   result.data.data
                                    // );

                                    if (result.data.data) {
                                        console.log("禮包碼存在，彈出虛寶碼框");
                                        t.isMaskShow = true;
                                        t.isGetMaDialog = true;
                                        t.is_wj_true = true;
                                        t.is_wj_false = false;
                                        t.$sdk = result.data.data;
                                    }

                                    setTimeout(() => {
                                        t.options.isMaskShow = true;
                                        t.options.isGetMaDialog = true;
                                        t.options.$sdk = result.data.data;
                                    }, 1000);

                                    t.options.flag = 1;
                                });
                        }
                    }
                );
            }
        },
        glodFbShare() {
            let t = this;
            // 金将分享
            FB.ui(
                {
                    method: "share",
                    href: "https://event.hero.gamemorefun.net"
                },
                function(response) {
                    if (response) {
                        var params = {
                            uuid: localStorage.uuid,
                            role_id: localStorage.roleIdd,
                            server_id: localStorage.serverId,
                            role_name: localStorage.roleName
                        };
                        console.log(
                            "金獎分享成功記錄接口傳入的參數",
                            uuid,
                            role_id,
                            server_id,
                            role_name
                        );
                        axios.defaults.headers.common["Authorization"] =
                            localStorage.token;
                        axios
                            .post(
                                "https://luandou.gamemorefun.net/api/share/sharePage",
                                params
                            )
                            .then(result => {
                                this.$layer.msg("分享成功！");
                                console.log(result.data);
                            });
                    }
                }
            );
        },
        glodGetReward(n) {
            var token = localStorage.getItem("token");
            if (token) {
                if (n !== 100) {
                    console.log(n, "當前的token", token);
                    this.$layer.msg("您的助力人數未達到5000！");
                } else {
                    var uuid = localStorage.getItem("uuid");
                    var role_id = localStorage.getItem("roleId");
                    let t = this;
                    axios.defaults.headers.common["Authorization"] =
                        localStorage.token;
                    axios
                        .get(
                            "https://luandou.gamemorefun.net/api/share/getGiftCode",
                            {
                                params: {
                                    uuid: uuid,
                                    role_id: role_id
                                }
                            }
                        )
                        .then(result => {
                            // t.$layer.msg(result.data.msg);
                            if (result.data.data) {
                                // 此處要彈出獎勵礦
                                console.log(result.data.data);
                                t.options.$sdk_jj = result.data.data;
                                t.isGetJinjangDialog = true;
                                t.options.is_jj_true = true;
                                t.options.is_jj_false = false;
                            } else {
                            }
                        });
                }
            } else {
                this.$layer.msg("請先進行登錄並進行區服選擇!");
            }
        }
    }
};
</script>

<style>
.vl-notify-content-div {
    text-align: center;
}
.vl-notify-msg {
    position: fixed;
    z-index: 99999999;
    top: 50%;
    left: 50%;
    width: 50%;
    margin-left: -25%;
    padding: 0.1rem;
    border-radius: 0.05rem;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
}
.backIndex {
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 0.6rem;
    top: 1.56rem;
    right: 0;
    text-indent: -9999px;
}
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    z-index: 0;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
}
</style>
