<template>
  <div class="celebration">
    <img src="/static/images/celebration_bg.png" alt width="100%" height="100%" />
    <router-link to="/" class="backIndex">首页</router-link>
    <div class="heroShare">
      <ul>
        <li v-for="(item, index) in options.HeroList" :key="item.id">
          <em></em>

          <!-- <img :src="item.imgSrc" v-show="!item.active" />
          <img :src="item.imgSrcSelected" v-show="item.active" />-->

          <img :src="item.imgSrcSelected" v-if="hList[item.id]" />
          <img :src="item.imgSrc" v-else @click="choose_hero(item.id)" />
        </li>
      </ul>
      <a href="javascript:;" class="fb_share" @click="heroFbShareClick()"></a>
      <a href="javascript:;" class="get_reward" @click="openGetRewardlogDialog()"></a>
    </div>
    <div class="signIn">
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
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href="javascript:;" class="get_sign"></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeCelebration",
  props: ["options", "isCelebration"],
  data() {
    return {
      selectIn: 0, //已经选择的人物
      have_select: false, //当天是否选过了
      hList: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  mounted() {
    this.init_share();
  },
  computed: {
    HeroList() {}
  },
  methods: {
    init_share() {
      if (localStorage.token) {
        let datas = {
          uuid: localStorage.uuid,
          role_id: localStorage.roleId
        };
        let _arr = [];
        let date = new Date();
        let day = date.getDate();
        if (day < 10) {
          day = "0" + day;
        }

        let today =
          date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + day;
        console.log(today);
        this.$axios.defaults.headers.common["Authorization"] =
          localStorage.token;
        this.getHttp(this, datas, "/getSharedHero", function(obj, data) {
          let lists = data.data;
          lists.map(function(item) {
            obj.hList.splice(item.type, 1, 1);
            if (item.date == today) {
              obj.have_select = true;
            }
          });
        });
      }
    },
    choose_hero(id) {
      if (localStorage.token) {
        if (this.have_select) {
          this.$layer.msg("今日已成功點亮一名武將，請主公明日再來吧~");
        } else {
          if (this.selectIn != 0) {
            this.hList.splice(this.selectIn, 1, 0);
          }
          this.selectIn = id;

          this.hList.splice(id, 1, 1);
        }
      } else {
        this.$layer.msg("請先進行登錄並進行區服選擇");
      }
    },
    heroFbShareClick() {
      let token = localStorage.getItem("token");
      let _this = this;

      FB.init({
        appId: "2189015318014723",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v2.12"
      });

      if (token) {
        //已登录
        console.log("yi1this.selectIn", this.selectIn, this.have_select);
        if (this.have_select) {
            // 已登錄已點亮
          FB.ui(
            {
              method: "share",
              href: "event.hero.gamemorefun.net"
            },
            function(response) {
              //不做任何提示
            }
          );
        } else {
            // 已登錄未點亮
          if (this.selectIn == 0) {
            // 殺都沒點，直接點擊分享按鈕
            this.$layer.msg("你還沒有選擇武將!");
          } else {
            FB.ui(
              {
                method: "share",
                href: "https://event.hero.gamemorefun.net/#/celebration"
              },
              function(response) {
                let datas = {
                  uuid: localStorage.uuid,
                  role_id: localStorage.roleId,
                  server_id: localStorage.serverId,
                  role_name: localStorage.roleName,
                  type: this.selectIn
                };
                _this.postHttp(this, datas, "/share/store", function(
                  obj,
                  data
                ) {
                  if (data.success) {
                    // 分享成功弹窗
                    localStorage.$cdk = data.data;
                    obj.have_select = true;

                    obj.options.isGetMaDialog = true;
                    obj.options.is_wj_true = true;
                    obj.options.is_wj_false = false;

                    obj.$store.commit("newCdk", true);
                  } else {
                    obj.$layer.msg(data.msg);
                  }
                });
              }
            );
          }
        }
      } else {
        this.$layer.msg("請先進行登錄並進行區服選擇!");
      }
    },
    openGetRewardlogDialog() {
      if (localStorage.token) {
        let datas = {
          uuid: localStorage.uuid,
          role_id: localStorage.roleId
        };
        this.$axios.defaults.headers.common["Authorization"] =
          localStorage.token;
        this.getHttp(this, datas, "/share/getRewardLog", function(obj, data) {
          if (data.data.length == 0) {
            obj.$layer.msg("該角色尚無禮包碼");
          } else {
            obj.options.recordList = data.data;
            obj.options.isMaskShow = true;
            obj.options.isGetRewardLogDialog = true;
            obj.options.is_re_true = true;
            obj.options.is_re_false = false;
            // obj.$store.commit("newCdks", true);
          }
        });
      } else {
        this.$layer.msg("請先進行登錄並進行區服選擇!");
      }
      //   var token = localStorage.getItem("token");
      //   if (token) {
      //     this.$emit("openGetRewardlogDialog");
      //   } else {
      //     console.log("wo已經登錄了咋還讓登錄", token);
      //     this.$layer.msg("請先進行登錄並進行區服選擇!");
      //   }
    }
  }
};
</script>

<style lang="stylus" scoped>
.block {
  display: block;
}

.celebration {
  position: relative;

  .signIn {
    width: 6rem;
    height: 9.05rem;
    position: absolute;
    top: 15.9rem;
    left: 50%;
    margin-left: -3rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100%;
        margin-bottom: 0.13rem;
      }
    }

    a {
      display: inline-block;
      position: absolute;
      width: 3.68rem;
      height: 0.72rem;
      bottom: 0.8rem;
      left: 50%;
      margin-left: -1.84rem;
      cursor: pointer;
    }
  }

  .heroShare {
    width: 6rem;
    height: 9.05rem;
    position: absolute;
    z-index: 0;
    top: 3.17rem;
    left: 50%;
    margin-left: -3rem;

    a {
      display: inline-block;
      position: absolute;
      width: 2.76rem;
      height: 0.72rem;
      bottom: 0;

      &.fb_share {
        left: 0;
        background: url('/static/images/btn_share.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }

      &.get_reward {
        right: 0;
        background: url('/static/images/btn_get_record.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
    }

    ul {
      li {
        position: absolute;
        width: 0.96rem;
        height: 0.96rem;
        cursor: pointer;

        em {
          position: absolute;
          width: 1.06rem;
          height: 1.07rem;
          top: -0.06rem;
          left: 0rem;
          background: url('/static/images/border.png') no-repeat;
          background-size: 100% 100%;
        }

        &:nth-child(1) {
          left: 2.5rem;
          top: 0.01rem;
        }

        &:nth-child(2) {
          left: 0.33rem;
          top: 1.15rem;
        }

        &:nth-child(3) {
          left: 1.4rem;
          top: 1.15rem;
        }

        &:nth-child(4) {
          left: 2.47rem;
          top: 1.15rem;
        }

        &:nth-child(5) {
          left: 2.47rem;
          top: 2.36rem;
        }

        &:nth-child(6) {
          left: 2.47rem;
          top: 3.53rem;
        }

        &:nth-child(7) {
          left: 2.47rem;
          top: 4.7rem;
        }

        &:nth-child(8) {
          left: 0.33rem;
          top: 5.85rem;
        }

        &:nth-child(9) {
          left: 1.4rem;
          top: 5.85rem;
        }

        &:nth-child(10) {
          left: 2.47rem;
          top: 5.85rem;
        }

        &:nth-child(11) {
          left: 3.64rem;
          top: 5.85rem;
        }

        &:nth-child(12) {
          left: 4.77rem;
          top: 5.85rem;
        }

        img {
          width: 100%;
          position: relative;
          z-index: 1;
          top: 0.018rem;
        }
      }
    }
  }
}
</style>
