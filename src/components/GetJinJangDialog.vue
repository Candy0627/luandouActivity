<template>
    <section
        class="virtual_code_dialog animatedA"
        :class="{zoomIn:options.is_jj_true,zoomOut:options.is_jj_false}"
        v-if="isGetJinjangDialog"
    >
        <i @click="closeGetJinjiangDialog"></i>
        <img src="/static/images/get_ma_bg.png" alt />

        <span class="text" id="text">{{options.$sdk_jj}}</span>

        <a href="javascript:;" class="btn_getvirtualcode" @click="copyText()">點擊複製</a>
    </section>
</template>

<script>
export default {
    name: "HomeGetjinjiangdialog",
    props: ["options", "isGetJinjangDialog"],
    data: function() {
        return {};
    },
    mounted() {},
    methods: {
        closeGetJinjiangDialog() {
            this.$emit("closeGetJinjiangDialog");
        },
        copyText() {
            var text = document.getElementById("text").innerText;
            // var input = document.getElementById("input");
            // input.value = text; // 修改文本框的内容
            // input.select(); // 选中文本
            document.execCommand("copy"); // 执行浏览器复制命令
            this.$layer.msg("复制成功");
        },
        // onCopy(e) {
        //     console.log('success', e);
        //     this.$message({
        //         message: "复制成功！",
        //         type: "success"
        //     });
        // },
        // onError(e) {
        //     console.log('success', e);
        //     this.$message({
        //         message: "复制失败！",
        //         type: "error"
        //     });
        // }
    }
};
</script>

<style lang="stylus" scoped>
.virtual_code_dialog {
    position: fixed;
    z-index: 999999;
    top: 25%;

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

    .text {
        position: absolute;
        top: 2.5rem;
        width: 5.8rem;
        height: 0.66rem;
        left: 50%;
        margin-left: -2.9rem;
        text-align: center;
        line-height: 0.66rem;
        color:#ef3a2e
    }

    .btn_getvirtualcode {
        position: absolute;
        top: 3.88rem;
        width: 2.8rem;
        height: 0.66rem;
        left: 50%;
        margin-left: -1.4rem;
        text-align: center;
        line-height: 0.66rem;
        text-indent: -9999px;
    }
}
</style>
