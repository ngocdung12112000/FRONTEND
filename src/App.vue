<!-- eslint-disable prettier/prettier -->
<template>
    <Header v-if="isShowHeader"/>
    <router-view />

</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Header from "./views/layouts/Header.vue";
export default {
    name: "App",
    components: {
        Header,
    },
    data() {
        return {
            // isShowHeader: false,
        };
    },
    computed: {
        isShowHeader() {
            if(this.$route.name === "Login" || this.$route.name === "Register") {
                return false;
            }
            return true;
        },
    },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
@import "./assets/bootstrap-5.0.2-dist/css/bootstrap.min.css";
@import "./assets/css/img.css";

body {
    font-family: 'GoogleSans-Regular', sans-serif;
    position: relative;
    overflow: auto;
}

@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('assets/font/GoogleSans-Regular.otf') format('opentype');
}
</style>
