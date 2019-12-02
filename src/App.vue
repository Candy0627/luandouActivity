<template>
  <div id="app">
    <home-topnav @openTopMenu="openTopMenu"></home-topnav>
    <home-topmenu :isTopMenu="isTopMenu" :options="options" @openLoginDialog="openLoginDialog"></home-topmenu>
    <home-botnav :isBotNav="isBotNav"></home-botnav>
    <home-mask :options="options"></home-mask>

    <home-logindialog
      :isLoginDialog="isLoginDialog"
      :options="options"
      @morefunLogin="morefunLogin"
      @closeLoginDialog="closeLoginDialog"
    ></home-logindialog>

    <home-selectserverdialog
      :options="options"
      @cancelSelectServerDialog="cancelSelectServerDialog"
      @choseServer="choseServer"
      @closeSelectServerDialog="closeSelectServerDialog"
    ></home-selectserverdialog>

    <home-myaccountdialog :options="options" @closeMyAccountInfoDialog="closeMyAccountInfoDialog"></home-myaccountdialog>

    <home-getrewardlogdialog
      :isGetRewardLogDialog="isGetRewardLogDialog"
      :options="options"
      @closeGetRewardLogDialog="closeGetRewardLogDialog"
      @getRecordList="getRecordList"
    ></home-getrewardlogdialog>

    <Home-getmadialog :options="options" @closeGetMaDialog="closeGetMaDialog"></Home-getmadialog>

    <Home-getjinjiangdialog :options="options" @closeGetJinjiangDialog="closeGetJinjiangDialog"></Home-getjinjiangdialog>

    <router-view :options="options" @saveBarrageData="saveBarrageData" v-if="options.isRouterAlive"></router-view>
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
  provide() {
    return {
      reload: this.reload
    };
  },
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
        isRouterAlive: true,
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
        is_re_true: true,
        is_re_flase: false,
        rest: "",
        total: "",
        barwidth: "",
        flag: 0,
        current: "",
        selectIn: 0, //已经选择的人物
        have_select: false, //武将当天是否已经选过了
        isGetJinjangDialog: false,
        isMaskShow: false,
        isGetMaDialog: false,
        isGetRewardLogDialog: false,
        isSelectServerDialog: false,
        isMyAccountInfoDialog: false,
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
      isBanner: true,
      isBotNav: true,
      isTopMenu: false,
      isLoginDialog: false,
      isConfessionWall: false,
      isGetRewardLogDialog: false
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
    // console.log("Hello world");
  },
  methods: {
    reload() {
        this.options.isRouterAlive = false;
        this.$nextTick(function() {
            this.options.isRouterAlive = true;
        });
    },
    closeMyAccountInfoDialog() {
      this.options.isMaskShow = false;
      this.options.isMyAccountInfoDialog = false;
      this.options.is_a_true = false;
      this.options.is_a_false = true;
    },
    closeSelectServerDialog() {
      this.options.isMaskShow = false;
      this.options.isSelectServerDialog = false;
      this.options.is_s_true = false;
      this.options.is_s_false = true;
    },
    closeLoginDialog() {
      this.options.isMaskShow = false;
      this.isLoginDialog = false;
      this.options.is_l_false = true;
      this.options.is_l_true = false;

      // setTimeout(function() {

      //     this.options.is_l_false = false;
      //     this.options.is_l_true = true;

      // },500)
    },
    closeGetRewardLogDialog() {},
    closeGetMaDialog() {
      this.options.isMaskShow = false;
      this.options.isGetMaDialog = false;
      this.options.is_wj_false = true;
      this.options.is_wj_true = false;
    },
    closeGetJinjiangDialog() {
      this.options.isMaskShow = false;
      this.options.isGetJinjangDialog = false;
      this.options.is_jj_false = true;
      this.options.is_jj_true = false;
    },
    openTopMenu() {
      this.isTopMenu = true;
      this.options.isTrue = true;
      this.options.isFalse = false;
    },
    openLoginDialog() {
      this.isTopMenu = false;
      var myAccountInfo = this.options.myAccountInfo;
      var token = localStorage.getItem("token");
      if (myAccountInfo == "賬號信息") {
        // 已登录状态———弹出我的账号信息弹出框
        this.options.isMaskShow = true;
        this.options.isMyAccountInfoDialog = true;
        this.options.is_a_false = false;
        this.options.is_a_true = true;
      } else if (myAccountInfo == "登錄賬號") {
        // 未登录状态{1.未登陆直接弹出登录框 2.已登录未选择区服}
        if (token == "" || token == null) {
          // console.log("请您先进行登陆");
          this.options.isMaskShow = true;
          this.isLoginDialog = true;

          this.options.is_l_false = false;
          this.options.is_l_true = true;
        } else {
          this.$layer.msg("您已經登陸過了，請選擇區服！");

          setTimeout(function() {
            this.options.isMaskShow = true;
            this.options.isSelectServerDialog = true;
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
        axios.defaults.headers.common["Authorization"] = localStorage.token;
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
              that.options.isMaskShow = false;
              that.$layer.msg("登錄成功,請選擇區服！");

              // that.isSelectServerDialog = true;
              // that.options.isMaskShow = true;
              setTimeout(function() {
                that.options.isMaskShow = true;
                that.options.isSelectServerDialog = true;
                that.options.is_s_true = true;
                that.options.is_s_false = false;
              }, 1000);

              that.options.userName = result.data.data.user_name;
              that.options.roles = result.data.data.role;
            } else {
              this.$layer.msg("您輸入的信息不正確！");
            }
          });
      }
    },
    cancelSelectServerDialog() {
      this.options.isSelectServerDialog = false;
      this.options.isMaskShow = false;
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
        .post("https://luandou.gamemorefun.net/api/barrage/store", params)
        .then(result => {
          this.$layer.msg("彈幕發送成功!");
          that.options.barrageText = "";
        });
    }
  }
};
</script>

<style>
/* .vl-notify-content-div {
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
} */
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
