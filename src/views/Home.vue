<!-- eslint-disable prettier/prettier -->
<template>
    <!-- <Header /> -->
    <div class="home-background">
        <div class="home container d-flex justify-content-between">
            <div class="col-8 lesson-map">
                <div v-for="item in listTopic" :key="item.id">
                    <Lesson :topic="item" :currentPageUser="currentTopicUser" :currentLessonUser="currentLessonUser" />
                </div>
                <a class="scroll-top" @click="scollToCurrent">
                    <div class="img-up-arrow"></div>
                </a>
            </div>
            <Personal :listUser="listUser" :currentUser="currentUser"/>
        </div>
    </div>
    
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import $ from "jquery";
// import Header from "./layouts/Header.vue";
import Lesson from "../components/Lesson.vue";
import Personal from "../components/Personal.vue";
import baseURL from "../assets/enum";
// import { mapGetters } from "vuex";
// import listLesson from "../assets/js/lessons.js"
// import dataUser from "../assets/js/users.js";

export default {
    name: "Home",
    components: {
        Lesson,
        Personal,
        // Header
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {
            test: "",
            toggleTab: true,
            loginUserId: "",
            currentTopicUser: 1,
            currentLessonUser: 1,
            currentLessonIdUser: 1,
            currentUser: {},
            listTopic: [],
            listUser: [],
            dataStreakNew: [],
        };
    },
    beforeMount() {
        this.loginUserId = this.$store.getters['AUTH/userId'];
        if(this.loginUserId) {
            this.getCurrentUser();
            this.getList();
            this.getListTopic();
        }
        else {
            this.$router.push('/login');
        }
    },
    methods: {
        handleScroll() {
            var currentLesson = document.getElementsByClassName("current")[0];
            currentLesson = currentLesson.parentElement.parentElement.parentElement;
            var imgArrow = document.getElementsByClassName("img-up-arrow")[0];
            if(window.scrollY > currentLesson.offsetTop) {
                imgArrow.style.transform = 'rotate(0deg)';
            } else {
                imgArrow.style.transform = 'rotate(180deg)';
            }
        },
        scollToCurrent() {
            var currentLesson = document.getElementsByClassName("current")[0];
            if(currentLesson) {
                currentLesson = currentLesson.parentElement.parentElement.parentElement;
                currentLesson.scrollIntoView({ behavior: "smooth" });
            }
        },
        getList() {
            let me = this, rank = 0;
            this.axios
                .get(`${baseURL}api/Users/All`)
                .then((response) => {
                    if(response && response.data) {
                        me.listUser = response.data;
                        me.listUser.forEach((user,index) => {
                            if(user.image != "user.jpg" && user.image != null) {
                                user.avatar = require(`../assets/images/AVAS/${user.image}`);
                            }
                            else {
                                user.avatar = require(`../assets/images/user.jpg`);
                            }

                            if(user.user_id == me.loginUserId) {
                                rank = index + 1;
                                this.$store.dispatch('AUTH/setranking', rank);
                            }
                        });
                    }
                    
                });
        },
        getCurrentUser() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/Id?id=${me.loginUserId}`)
                .then((response) => {
                    if(response && response.data) {
                        me.currentUser = response.data;
                        me.currentTopicUser = me.currentUser.current_topic ? me.currentUser.current_topic.id : 1;
                        me.currentLessonUser = me.currentUser.current_topic ? parseInt(me.currentUser.current_topic.list_lesson[0].name) : 1;
                    }
                });
        },
        getListTopic() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/AllTopic`)
                .then((response) => {
                    if(response && response.data) {
                        me.listTopic = response.data;
                        me.listTopic.forEach((topic) => {
                            switch(topic.id) {
                                case 1:
                                    topic.colors = ["#CE82FF", "#6608a5"];
                                    topic.image_L = "s1.svg";
                                    topic.image_R = "s2.svg";
                                    break;
                                case 2:
                                    topic.colors = ["#00CD9C", "#088D6D"];
                                    topic.image_L = "s3.svg";
                                    topic.image_R = "s4.svg";
                                    break;
                                case 3:
                                topic.colors = ["#1CB0F6", "#126C97"];
                                    topic.image_L = "s5.svg";
                                    topic.image_R = "s6.svg";
                                    break;
                                case 4:
                                    topic.colors = ["#FF86D0", "#a92375"];
                                    topic.image_L = "s7.svg";
                                    topic.image_R = "s8.svg";
                                    break;
                                case 5:
                                    topic.colors = ["#FF9600", "#b1700e"];
                                    topic.image_L = "s9.svg";
                                    topic.image_R = "s10.svg";
                                    break;
                            }
                        });
                    }
                });
        },
    },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.home-background {
    width: 100%;
    background: linear-gradient(191.1deg, rgba(255, 192, 67, 0) 14.17%, rgba(67, 249, 255, 0.15) 105.12%);
    /* background-image: url(../assets/images/background/b1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; */
}

.home {
    position: relative;
    padding-top: 20px;
}

.scroll-top {
    border: 2px solid #e6e6e6;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: 40%;
    z-index: 1;
    background-color: #fff;
    cursor: pointer;
    /* display: none; */
}

@media screen and (max-width: 768px) {
    .personal  {
        display: none !important;
    }

    .lesson-map {
        width: 100%;
    }

    .scroll-top {
        right: 15%;
    }
}

</style>
