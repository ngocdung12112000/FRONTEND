<!-- eslint-disable prettier/prettier -->
<template>
    <!-- <Header /> -->
    <div class="home-background">
        <div class="home container d-flex justify-content-between">
            <div class="col-8 lesson-map">
                <div v-for="item in list" :key="item.id">
                    <Lesson :lesson="item" :currentPageUser="currentPageUser" :currentLessonUser="currentLessonUser" />
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
import listLesson from "../assets/js/lessons.js"
import dataUser from "../assets/js/users.js"

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
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {
            toggleTab: true,
            currentPageUser: 3,
            currentLessonUser: 3,
            currentUser: dataUser.currentUser,
            list: listLesson,
            listUser: dataUser.listUser,
            dataStreakNew: []
        };
    },
    beforeMount() {
        this.getList();
        // this.getUserStreak();
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
            currentLesson = currentLesson.parentElement.parentElement.parentElement;
            console.log(currentLesson.offsetTop);
            currentLesson.scrollIntoView({ behavior: "smooth" });
        },
        getList() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/v1/Users")
                .then((response) => {
                    me.listUser = response.data;
                    me.listUser.forEach((user) => {
                        user.name = user.user_name;
                        user.avatar = require(`../assets/images/${user.image}`);
                        user.score = Math.floor(Math.random() * 100);
                    });
                });
        },
        // getUserStreak() {
        //     let me = this;
        //     this.axios
        //         .get("https://localhost:44366/api/v1/Users/UserId?UserId=4760d71f-6e2f-5b32-19cb-66948daf6128")
        //         .then((response) => {
        //             const res = response.data;
        //             res.forEach(function(item) {
        //                 me.dataStreakNew.push({
        //                     name: item.week_day,
        //                     pl: item.score
        //                 })
        //             });
        //         });
        // }
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
