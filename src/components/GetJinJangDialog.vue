<template>
    <section
        class="virtual_code_dialog animatedA"
        :class="{zoomIn:options.is_jj_true,zoomOut:options.is_jj_false}"
        v-if="isGetJinjangDialog"
    >
        <i @click="closeGetJinjiangDialog"></i>
        <img src="/static/images/jj_getma_dialog.png" alt />

        <input type="text" class="text" v-model="options.$sdk_jj" readonly>
        <button class="btn_getvirtualcode" type="button"
            v-clipboard:copy="options.$sdk_jj"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">Copy!</button>
       
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
        onCopy(e) {
            this.$layer.msg("複製成功！");
        },
        onError(e) {
            this.$layer.msg("複製失敗！");
        }
    }
};
</script>

<style lang="stylus" scoped>
.virtual_code_dialog {
    position: fixed;
    z-index: 2;
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
        top: 2.8rem;
        width: 5.8rem;
        height: 0.66rem;
        left: 50%;
        margin-left: -2.9rem;
        text-align: center;
        line-height: 0.66rem;
        color:#ef3a2e;
        background: none;
    }

    .btn_getvirtualcode {
        position: absolute;
        top: 3.98rem;
        width: 2.8rem;
        height: 0.78rem;
        left: 50%;
        margin-left: -1.4rem;
        text-align: center;
        line-height: 0.66rem;
        text-indent: -9999px;
    }
}
</style>
