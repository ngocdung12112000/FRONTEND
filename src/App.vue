<!-- eslint-disable prettier/prettier -->
<template>
    <Header v-if="isShowHeader" />
    <HeaderAdmin v-if="isShowAdmin" @onCollapse="onCollapse"/>
    <Navigation v-if="isShowAdmin" :isCollapse="isCollapse"/>
    <div :class="{adminContent : isShowAdmin}">
        <router-view />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Header from "./views/layouts/Header.vue";
import HeaderAdmin from "./views/ADMIN/Header.vue";
import Navigation from "./views/ADMIN/Navigation.vue";
export default {
    name: "App",
    components: {
        Header,
        HeaderAdmin,
        Navigation
    },
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        onCollapse(dataCollapse) {
            this.isCollapse = dataCollapse;
        }
    },
    computed: {
        isShowHeader() {
            if(!this.$route.fullPath.startsWith("/admin")) {
                if((this.$route.name === "Login" || this.$route.name === "Register" 
                    || this.$route.name === "GamePlay" || this.$route.name === "Introduce" 
                    || this.$route.name === "Admin")) {
                    return false;
                }
                return true;
            }
            return false;
        },
        isShowAdmin() {
            if(this.$route.fullPath.startsWith("/admin")) {
                return true;
            }
            return false;
        },
    },
    watch: {
        isCollapse(value) {
            if(value === true) {
                document.querySelector(".adminContent").style.left = "70px";
                document.querySelector(".adminContent").style.width = "calc(100% - 70px)";
            } else {
                document.querySelector(".adminContent").style.left = "275px";
                document.querySelector(".adminContent").style.width = "calc(100% - 275px)";
            }
        }
    }
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
@import "./assets/bootstrap-5.0.2-dist/css/bootstrap.min.css";
@import "./assets/css/img.css";
@import "./assets/css/icons.css";
@import "./assets/css/buttons.css";
@import "./assets/font/fontawesome-5.15.1/css/all.min.css";

body {
    font-family: 'GoogleSans-Regular', sans-serif;
    position: relative;
    overflow: auto;
}

@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('./assets/font/GoogleSans-Regular.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Bold';
    src: url('./assets/font/GoogleSans-Bold.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Italic';
    src: url('./assets/font/GoogleSans-Italic.otf') format('opentype');
}

button {
    border: none;
    outline: none;
}

a {
    text-decoration: none;
}

.adminContent {
    position: absolute;
    top: 80px;
    left: 275px;
    width: calc(100% - 275px);
    height: 100vh;
    background: #f1f1f1;
}

@media screen and (max-width: 768px) {
    .adminContent {
        left: 70px;
        width: calc(100% - 70px);
    }
}
</style>
