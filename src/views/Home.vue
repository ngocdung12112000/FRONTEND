<!-- eslint-disable prettier/prettier -->
<template>
    <!-- <Header /> -->
    <div class="home container d-flex justify-content-between">
        <div class="col-8 lesson-wrapper">
            <div v-for="item in list" :key="item.id">
                <Lesson :lesson="item" :currentPageUser="currentPageUser" :currentLessonUser="currentLessonUser" />
            </div>
            <a href="#" class="scroll-top">
                <div class="img-up-arrow"></div>
            </a>
        </div>
        <Personal :listUser="listUser" :currentUser="currentUser" />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import $ from "jquery";
// import Header from "./layouts/Header.vue";
import Lesson from "../components/Lesson.vue";
import Personal from "../components/Personal.vue";

export default {
    name: "Home",
    components: {
        Lesson,
        Personal,
        // Header
    },
    data() {
        return {
            toggleTab: true,
            currentPageUser: 3,
            currentLessonUser: 3,
            currentUser: {
                id: 4,
                name: "Nguyễn Văn D",
                avatar: require("../assets/images/user.jpg"),
                score: 80,
            },
            list: [
                {
                    id: 1,
                    title: "Bài 1",
                    content: "Chào hỏi, giới thiệu bản thân",
                    colors: ["#CE82FF", "#6608a5"]
                },
                {
                    id: 2,
                    title: "Bài 2",
                    content: "Mua quần áo",
                    colors: ["#00CD9C", "#088D6D"]
                },
                {
                    id: 3,
                    title: "Bài 3",
                    content: "Tả người, giao tiếp ở nhà hàng",
                    colors: ["#1CB0F6", "#126C97"]
                }, 
                {
                    id: 4,
                    title: "Bài 4",
                    content: "Nhận biết đồ vật, hỏi han mọi người",
                    colors: ["#FF86D0", "#a92375"]
                },
                {
                    id: 5,
                    title: "Bài 5",
                    content: "Nhận biết đồ vật, hỏi han mọi người",
                    colors: ["#FF9600", "#b1700e"]
                }
            ],
            listUser: [
                {
                    id: 1,
                    name: "Nguyễn Văn A",
                    score: 100,
                    avatar: "user.jpg"
                },
                {
                    id: 2,
                    name: "Nguyễn Văn B",
                    score: 90,
                    avatar: "user.jpg"
                },
                {
                    id: 3,
                    name: "Nguyễn Văn C",
                    score: 85,
                    avatar: "user.jpg"
                },
                {
                    id: 4,
                    name: "Nguyễn Văn D",
                    score: 80,
                    avatar: "user.jpg"
                },
                {
                    id: 5,
                    name: "Nguyễn Văn E",
                    score: 70,
                    avatar: "user.jpg"
                },
                {
                    id: 6,
                    name: "Nguyễn Văn F",
                    score: 70,
                    avatar: "user.jpg"
                }
            ]
        };
    },
    beforeMount() {
        this.listUser.forEach((user) => {
            user.avatar = require(`../assets/images/${user.avatar}`);
        });
    },
    methods: {
        getList() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/v1/Users")
                .then((response) => {
                    me.list = response.data;
                    console.log(me.list[0].user_name);
                });
        },
    },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.home {
    position: relative;
    margin-top: 20px;
}

.scroll-top {
    border: 2px solid #e6e6e6;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: calc(40%);
    z-index: 1;
    /* display: none; */
}

</style>
