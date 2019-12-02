<template>
  <section
    class="login animatedA"
    :class="{zoomIn:options.is_l_true,zoomOut:options.is_l_false}"
    v-if="isLoginDialog"
  >
    <i @click="closeLoginDialog"></i>
    <img src="../../static/images/login_bg.png" alt />
    <form action>
      <ul>
        <li>
          <input type="text" v-model="options.account" />
        </li>
        <li>
          <input type="password" v-model="options.password" />
        </li>
        <li>
          <a href="javascript:;">忘記密碼</a>
        </li>
      </ul>
      <a href="javascript:;" class="btn_login" @click="morefunLogin">登入</a>
      <a href="javascript:;" class="btn_fb" @click="facebookLogin">fb</a>
      <a href="javascript:;" class="btn_gp" @click="googleLogin">gp</a>
    </form>
  </section>
</template>

<script>
import hello from "hellojs/dist/hello.all";
export default {
  name: "HomeLogindialog",
  props: ["isLoginDialog", "options"],
  data: function() {
    return {
        uuid:'',
        token:'',
        RoleName:'',
        serverId:'',
        RoleId:'',
    };
  },
  mounted() {
    hello.init(
      {
        facebook: "2189015318014723",
        google:
          "200655537487-ujbtlg3t26q3t4dodj0negkq7ehaj49i.apps.googleusercontent.com"
      },
      { redirect_uri: "event.hero.gamemorefun.net" }
    );
    this.init_alert();
  },
  methods: {
    init_alert() {},
    morefunLogin() {
      // 父组件传过来的是对象，在子组件可以修改值
      this.$emit("morefunLogin");
    },
    facebookLogin() {
      let t = this;
      hello("facebook")
        .login()
        .then(
          function(e) {
            console.log(e);
            let datas = {
              account: e.authResponse.client_id,
              password: "",
              type: "FaceBook"
            };
            t.postHttp(t, datas, "/login", function(obj, data) {
              if (data.success) {
                // obj.step1 = false;
                // obj.step2 = true;
                let res = data.data;
                localStorage.token = res.token;
                localStorage.uuid = res.uuid;
                obj.uuid = res.uuid;
                // obj.region_list = res.role;
                // obj.region = res.role[0].ServerId;
                obj.RoleName = res.role[0].RoleName;
                obj.serverId = res.role[0].ServerId;
                obj.RoleId = res.role[0].RoleId;
              } else {
                obj.init_code(data.code);
              }
            });
          },
          function(e) {
            t.$layer.msg("登陸失敗，請稍後重試");
          }
        );
    },
    init_code(e) {
      if (e == 20001) {
        this.$layer.msg("賬號名或密碼格式錯誤");
      }
      if (e == 20002) {
        this.$layer.msg("賬號名或密碼錯誤");
      }
      if (e == 20003) {
        this.$layer.msg("該用戶不存在");
      }
      if (e == 20004) {
        this.$layer.msg("該用戶被禁用");
      }
      if (e == 20010) {
        this.$layer.msg("服務器異常~請稍後重試");
      }
      if (e == 20011) {
        this.$layer.msg("服務器異常~請稍後重試");
      }
      if (e == 20012) {
        this.$layer.msg("服務器異常~請稍後重試");
      }
      if (e == 20013) {
        this.$layer.msg("該用戶還未登陸過遊戲");
      }
      if (e == 20014) {
        this.$layer.msg("該用戶下不存在角色信息");
      }
    },
    googleLogin() {
      let t = this;
      hello("google")
        .login()
        .then(
          function(e) {
            console.log(e);
            let datas = {
              account: e.authResponse.client_id,
              password: "",
              type: "Google"
            };
            t.postHttp(t, datas, "/login", function(obj, data) {
              if (data.success) {
                // obj.step1 = false;
                // obj.step2 = true;
                let res = data.data;
                localStorage.token = res.token;
                localStorage.uuid = res.uuid;
                // obj.uuid = res.uuid;
                // obj.region_list = res.role;
                // obj.region = res.role[0].ServerId;
                obj.RoleName = res.role[0].RoleName;
                obj.serverId = res.role[0].ServerId;
                obj.RoleId = res.role[0].RoleId;
              } else {
                obj.init_code(data.code);
              }
            });
          },
          function(e) {
            t.$$layer.msg("登陸失敗，請稍後重試");
          }
        );
    },
    closeLoginDialog() {
      this.$emit("closeLoginDialog");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login {
  position: fixed;
  z-index: 2;
  top: 25%;
}

i {
  display: inline-block;
  width: 0.64rem;
  height: 0.64rem;
  position: absolute;
  z-index: 7;
  right: 0;
  background: url('/static/images/close.png') no-repeat;
  background-size: 100% 100%;
}

form {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  a {
    width: 1.3rem;
    height: 0.4rem;
    display: block;
    text-indent: -9999px;
    position: absolute;
    left: 3.5rem;
    top: 4.9rem;

    &.btn_login {
      width: 2.8rem;
      height: 0.8rem;
      top: 3.63rem;
      left: 50%;
      margin-left: -1.4rem;
    }

    &.btn_fb {
      width: 0.8rem;
      height: 0.8rem;
      left: 2.45rem;
      top: 4.9rem;
    }

    &.btn_gp {
      width: 0.8rem;
      height: 0.8rem;
      left: 4.3rem;
      top: 4.9rem;
    }
  }

  ul {
    position: absolute;
    width: 3.6rem;
    height: 1.3rem;
    left: 50%;
    margin-left: -1.3rem;
    top: 1.7rem;

    li {
      display: flex;

      &:nth-child(1) {
        margin-top: 0.05rem;
      }

      &:nth-child(2) {
        margin-top: 0.3rem;
      }

      &:nth-child(3) {
        float: right;
        text-indent: -9999px;
      }

      label {
        display: block;
        text-indent: -9999px;
        width: 1rem;
        height: 0.47rem;
      }

      input {
        width: 100%;
        height: 0.45rem;
        border: none;
        text-align: center;
      }

      a {
        display: inline-block;
        width: 1.3rem;
        height: 0.4rem;
        display: block;
        text-indent: -9999px;
        margin-top: 0.05rem;
        right: 0;
      }
    }
  }
}
</style>
