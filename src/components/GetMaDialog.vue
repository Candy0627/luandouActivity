<template>
    <section class="virtual_code_dialog animatedA" :class="{zoomIn:options.is_wj_true,zoomOut:options.is_wj_false}" v-if="isGetMaDialog">
        <i @click="closeGetMaDialog"></i>
        <img src="/static/images/get_ma_bg.png" alt />
        <span class="text">
            {{options.$sdk}}
        </span>
        <a href="javascript:;" class="btn_getvirtualcode" @click="get_virtual_code">领取虚宝码</a>
        
    </section>
</template>

<script>
export default {
    name: "HomeGetmadialog",
    props: ["options","isGetMaDialog"],
    data: function() {
        return {};
    },
    mounted() {
    },
    methods: {
        closeGetMaDialog () {
            this.$emit("closeGetMaDialog");
        },
        get_virtual_code () {
            this.$layer.msg("領取成功!");
        }
    }
};
</script>

<style lang="stylus" scoped>
.virtual_code_dialog
    position: fixed;
    z-index: 2;
    top: 25%;
    i
        display: inline-block;
        width: 0.64rem;
        height: 0.64rem;
        position: absolute;
        z-index: 7;
        right: 0;
        background: url('/static/images/close.png') no-repeat;
        background-size: 100% 100%;
    .text
        position: absolute;
        top: 2.5rem;
        width: 5.8rem;
        height: .66rem;
        left: 50%;
        margin-left: -2.9rem;
        text-align: center;
        line-height: .66rem;
        color:#ef3a2e
    .btn_getvirtualcode
        position: absolute;
        top: 3.88rem;
        width: 2.8rem;
        height: 0.66rem;
        left: 50%;
        margin-left: -1.4rem;
        text-align: center;
        line-height: 0.66rem;
        text-indent :-9999px

</style>
