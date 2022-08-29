<!-- eslint-disable prettier/prettier -->
<template>
    <Header />
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
