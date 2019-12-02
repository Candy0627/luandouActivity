<template>
  <section
    class="login selectServer animatedA"
    :class="{zoomIn:options.is_s_true,zoomOut:options.is_s_false}"
    v-if="options.isSelectServerDialog"
  >
    <i @click="closeSelectServerDialog"></i>
    <img src="/static/images/select_qufu.png" alt />
    <form action>
      <select name="server" @change="choose($event)" class="server">
        <option>请选择区服</option>
        <template v-for="(item,key) in options.roles">
          <option
            :value="item.ServerId"
            :key="item.ServerId"
            :selected="options.serverId == item.ServerId"
          >{{item.ServerName}}</option>
        </template>
      </select>
      <select name="role" class="role">
        <!-- <option>请选择角色</option> -->
        <option v-if="options.selected" selected disabled="disabled">{{options.selected.RoleName}}</option>
      </select>

      <a href="javascript:;" class="btn_confirm" @click="confirm()"></a>
      <a href="javascript:;" class="btn_cancel" @click="cancel()">fb</a>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeSelectserverdialog",
  props:["options"],
  inject: ['reload'],
  data: function() {
    return {
      server_id: "",
      status_s: false
    };
  },
  methods: {
    confirm() {
      // this.$emit("confirmSelectServer");
      if (localStorage.serverId) {
        // 确认选择区服按钮
        this.$layer.msg("區服選擇成功!");
        this.options.isMaskShow = false;
        this.options.isSelectServerDialog = false;
        this.options.is_s_true = false;
        this.options.is_s_false = true;

        // 选择区服信息真正表示登陆成功后，改变状态,並且存入token/uuid,等信息
        this.options.myAccountInfo = "賬號信息";

        localStorage.token = this.options.token;
        localStorage.uuid = this.options.uuid;
        localStorage.userName = this.options.userName;
        localStorage.status_s = true;

        this.reload();
      } else {
        this.$layer.msg("請選擇區服！");
      }
    },
    cancel() {
      this.$emit("cancelSelectServerDialog");
      this.options.is_s_true = false;
      this.options.is_s_false = true;
    },
    closeSelectServerDialog() {
      this.$emit("closeSelectServerDialog");
    },
    choose(e) {
      var server_id = e.target.value;
      this.server_id = server_id;

      //根据server_id循环查找到用户选择的项
      this.options.selected = this.options.roles.find(item => {
        return item.ServerId == server_id ? item : false;
      });

      if (!this.options.selected) {
      } else {
        var serverInfo = JSON.stringify(this.options.roles);
        localStorage.setItem("serverInfo", serverInfo);

        var serverInfoSelected = JSON.stringify(this.options.selected);
        localStorage.setItem("serverInfoSelected", serverInfoSelected);
      }

      this.options.roleName = this.options.selected.RoleName;
      this.options.roleId = this.options.selected.RoleId;
      this.$emit("choseServer", this.server_id, this.options.roleName);

      localStorage.setItem("serverId", this.server_id);
      localStorage.setItem("roleId", this.options.roleId);
      localStorage.setItem("roleName", this.options.roleName);
    }
  }
};
</script>

<style lang="stylus" scoped>
.selectServer {
  position: fixed;
  top: 25%;
  z-index: 2;

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

    .server {
      position: absolute;
      top: 1.98rem;
      left: 1.5rem;
      height: 0.55rem;
      width: 4.6rem;
      background: none;
    }

    .role {
      position: absolute;
      top: 3.62rem;
      left: 1.5rem;
      height: 0.55rem;
      width: 4.6rem;
      background: none;
      border: none;
      pointer-events: none;
      -webkit-appearance: none;
      outline: none;
      appearance: none;
    }
  }

  a {
    width: 1.3rem;
    height: 0.4rem;
    display: block;
    text-indent: -9999px;
    position: absolute;
    left: 3.5rem;
    top: 4.9rem;

    &.btn_confirm {
      width: 2.1rem;
      height: 0.6rem;
      top: 4.8rem;
      left: 50%;
      margin-left: -2.4rem;
    }

    &.btn_cancel {
      width: 2.1rem;
      height: 0.6rem;
      top: 4.8rem;
      margin-left: 0.54rem;
    }
  }

  ul {
    position: absolute;
    width: 4.8rem;
    height: 2.2rem;
    left: 50%;
    margin-left: -2.4rem;
    top: 1.98rem;

    li {
      &.nth-child(2) {
        margin-top: 1rem !important;
      }

      span {
        position: absolute;
        left: 0.2rem;
        top: 0.6rem;
        font-size: 0.3rem;
      }

      select {
        width: 100%;
        height: 0.55rem;
        background: none;
        border: none;
        padding-left: 0.2rem;
        text-align: center;
        font-size: 0.3rem;
        font-family: '微软雅黑';
      }

      input {
        position: absolute;
        top: 1.65rem;
        height: 0.56rem;
        padding-left: 0.3rem;
        width: 85%;
        background: none;
        border: none;
      }
    }
  }
}
</style>
