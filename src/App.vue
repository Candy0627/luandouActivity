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

    <router-view
      :options="options"
      @saveBarrageData="saveBarrageData"
      @heroFbShare="heroFbShare"
      @getSharedHero="getSharedHero"
      @getHeroId="getHeroId"
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
    HomeGetmadialog
  },
  data() {
    return {
      options: {
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
        flag: 0,
        heroType: [],
        HeroDataList: [],
        barrageText: "",
        $sdk: "",
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
      isGetMaDialog: false
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
  },
  methods: {
    closeMyAccountInfoDialog() {
      this.isMaskShow = false;
      // this.isMyAccountInfoDialog = false;
      this.options.is_a_true = false;
      this.options.is_a_false = true;
    },
    closeSelectServerDialog() {
      this.isMaskShow = false;
      // this.isSelectServerDialog = false;
      this.options.is_s_true = false;
      this.options.is_s_false = true;
    },
    closeLoginDialog() {
      this.isMaskShow = false;
      // this.isLoginDialog = false;

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
          this.isMaskShow = true;
          this.isSelectServerDialog = true;
          this.options.is_s_false = false;
          this.options.is_s_true = true;
        }
      }
    },
    getRecordList() {
      this.options.uuid = localStorage.getItem("uuid");
      this.options.roleId = localStorage.getItem("roleId");
      axios.defaults.headers.common["Authorization"] = localStorage.token;
      axios
        .get("http://luandou.gamemorefun.net/api/share/getRewardLog", {
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
        axios.defaults.headers.common["Authorization"] = localStorage.token;
        var params = {
          account: this.options.account,
          password: this.options.password,
          type: "MBean"
        };

        var that = this;
        axios
          .post("http://luandou.gamemorefun.net/api/login", params)
          .then(result => {
            if (result.data.success == true) {
              localStorage.token = result.data.data["token"];
              localStorage.uuid = result.data.data["uuid"];

              that.isLoginDialog = false;
              that.isMaskShow = false;
              that.$layer.msg("登錄成功！");
              that.isSelectServerDialog = true;
              that.isMaskShow = true;

              that.options.userName = result.data.data.user_name;
              that.options.roles = result.data.data.role;

              // console.log("用户名：", that.options.userName);

              localStorage.setItem("userName", that.options.userName);
            } else {
              this.$layer.msg("您輸入的信息不正確！");
            }
          });
      }
    },
    confirmSelectServer() {
      // 确认选择区服按钮
      // this.isSelectServerDialog = false;
      this.options.is_s_true = false;
      this.options.is_s_false = true;
      this.isMaskShow = false;
      // 选择区服信息真正表示登陆成功后，改变状态
      this.options.myAccountInfo = "賬號信息";
    },
    cancelSelectServerDialog() {
      this.isSelectServerDialog = false;
      this.isMaskShow = false;
    },
    switchServer() {
      // 我的账号信息跳转到选择伺服器
      this.isMyAccountInfoDialog = false;
      this.isSelectServerDialog = true;
      this.options.is_s_true = true;
      this.options.is_s_false = false;
    },
    accountOut() {
      this.isMaskShow = false;
      // this.isMyAccountInfoDialog = false;

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
        .post("http://luandou.gamemorefun.net/api/barrage/store", params)
        .then(result => {
          this.$layer.msg("彈幕發送成功!");
          that.options.barrageText = "";
        });
    },
    getHeroId(id, active) {
      this.heroId = id;
      if (active == true) {
        this.$layer.msg("您已經點亮過該武將了！");
      } else {
        active = true;
      }
    },
    getSharedHero() {
      var token = localStorage.getItem("token");
      if (token) {
        var uuid = localStorage.getItem("uuid");
        var role_id = localStorage.getItem("roleId");
        var that = this;
        axios.defaults.headers.common["Authorization"] = localStorage.token;
        axios
          .get("http://luandou.gamemorefun.net/api/getSharedHero", {
            params: {
              uuid: uuid,
              role_id: role_id
            }
          })
          .then(result => {
            that.options.HeroDataList = result.data.data;
            var nrr = result.data.data;
            var arr = [];
            var timeArr = [];
            for (var i = 0; i < nrr.length; i++) {
              arr.push(nrr[i].type);
              timeArr.push(nrr[i].date);
            }

            var curTime = String(
              new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate()
            );

            timeArr.forEach((item, i) => {
              if (timeArr.indexOf(curTime) !== -1) {
                this.$layer.msg("您今天已經點亮過一個武將了");
              }
            });

            var currentTime = new Date();
            // console.log('新数组',that.options.HeroList);
            that.options.HeroList.forEach((item, i) => {
              if (arr.indexOf(item.id) !== -1) {
                item.active = true;
              }
            });
          });
      } else {
          this.$layer.msg("請先進行登錄！");
      }
    },
    heroFbShare() {
      // let that = this;
      // FB.ui({
      //     method: 'share',
      //     href:"http://event.hero.gamemorefun.net",
      // },function (response){
      //     if(response) {

      //     }
      // })

      if (this.heroId == "" || this.heroId == null) {
        this.$layer.msg("您還沒有選擇武將！");
      } else {
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
          type: this.heroId
        };

        // var params = {
        //     uuid: this.options.uuid,
        //     role_id: this.options.roleId,
        //     server_id: this.options.serverId,
        //     role_name: this.options.roleName
        // }
        var that = this;
        axios.defaults.headers.common["Authorization"] = localStorage.token;
        axios
          .post("http://luandou.gamemorefun.net/api/share/store", params)
          .then(result => {
            this.$layer.msg(
              "武將分享成功，這個藉口會返回禮包碼",
              result.data.data
            );

            console.log("武將分享成功，這個藉口會返回禮包碼", result.data);
            if (result.data.data) {
              console.log("禮包碼存在");
            }

            setTimeout(() => {
              that.options.isMaskShow = true;
              that.options.isGetMaDialog = true;
              that.options.$sdk = result.data.data;
            }, 1000);

            that.options.flag = 1;
          });
      }
    },
    glodFbShare() {
      let t = this;
      // 金将分享
      FB.ui(
        {
          method: "share",
          href: "http://event.hero.gamemorefun.net"
        },
        function(response) {
          if (response) {
            this.$layer.msg("分享成功！");
          }
        }
      );
    },
    glodGetReward(n) {
      var token = localStorage.getItem("token");
      var n = 100;
      if (token) {
        if (n !== 100) {
          console.log(n, "當前的token", token);
          this.$layer.msg("您的助力人數未達到5000！");
        } else {
          var uuid = localStorage.getItem("uuid");
          var role_id = localStorage.getItem("roleId");

          axios.defaults.headers.common["Authorization"] = localStorage.token;
          axios
            .get("http://luandou.gamemorefun.net/api/share/getGiftCode", {
              params: {
                uuid: uuid,
                role_id: role_id
              }
            })
            .then(result => {
              this.$layer.msg(result.data.msg);
              if (result.data.data) {
                // 此處要彈出獎勵礦
                console.log(result.data.data);
              } else {
              }
            });
        }
      } else {
        this.$layer.msg("請先進行登錄！");
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
