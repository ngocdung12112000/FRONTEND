<!-- eslint-disable prettier/prettier -->
<template>
    <div class="header sticky-top">
        <div class="container d-flex justify-content-center">
            <div class="col-9 col-md-9 left-section d-flex justify-content-evenly">
                <router-link to="/home">
                    <div @click="sectionClick('learn')" class="learn section-item selected d-flex align-items-center">
                        <div class="learn-img section-item-img"></div>
                        <div class="section-item-text">Học</div>
                    </div>
                </router-link>
                <router-link to="/shop">
                    <div @click="sectionClick('shop')" class="shop section-item d-flex align-items-center">
                        <div class="shop-img section-item-img"></div>
                        <div class="section-item-text">Cửa hàng</div>
                    </div>
                </router-link>
                <router-link to="/courses">
                    <div @click="sectionClick('courses')" class="courses section-item d-flex align-items-center">
                        <div class="courses-img section-item-img"></div>
                        <div class="section-item-text">Khóa học</div>
                    </div>
                </router-link>
                <router-link to="/words">
                    <div @click="sectionClick('vocab')" class="vocab section-item d-flex align-items-center">
                        <div class="vocab-img section-item-img"></div>
                        <div class="section-item-text">Từ vựng</div>
                    </div>
                </router-link>
                <!-- <router-link to="/home">
                    <div @click="sectionClick('story')" class="story section-item d-flex align-items-center">
                        <div class="story-img section-item-img"></div>
                        <div class="section-item-text">Kho truyện</div>
                    </div>
                </router-link> -->
            </div>
            <div class="col-3 col-md-3 right-section d-flex justify-content-center">
                <div class="streak section-item d-flex align-items-center">
                    <div class="streak-img"></div>
                    <div v-if="userLogin" class="section-item-text" style="color: #FF9600;">{{userLogin.target}}</div>
                </div>
                <div class="gem section-item d-flex align-items-center">
                    <div class="gem-img"></div>
                    <div v-if="userLogin" class="section-item-text" style="color: #1dd1a1;">{{userLogin.gem}}</div>
                </div>
                <div class="user  d-flex align-items-center" @mouseover="isHoverUserImg = true"
                    @mouseleave="isHoverUserImg = false">
                    <div class="user-img section-item-img">
                        <img v-if="userImg != 'user.jpg'" :src="require(`../../assets/images/AVAS/${userImg}`)" alt="">
                        <img v-else :src="require(`../../assets/images/${userImg}`)" alt="">
                    </div>
                    <div v-show="isHoverUserImg" class="user-info">
                        <div class="user-account text-start">Tài khoản</div>
                        <div @click="goToProfile" class="user-profile text-start">Hồ sơ</div>
                        <router-link to="/my-courses">
                            <div @click="clearSelected" class="help user-profile text-start">Khóa học của tôi</div>
                        </router-link>
                        <router-link to="/cart">
                            <div @click="clearSelected" class="help user-profile text-start">Giỏ hàng</div>
                        </router-link>
                        <!-- <div class="help text-start">Giỏ hàng</div> -->
                        <div class="logout text-start" @click="logoutClick">Đăng xuất</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
export default {
    beforeMount() {
        this.userId = this.$store.getters['AUTH/userId'];
        this.userImg = this.$store.getters['AUTH/userImg'];
        this.userLogin = this.$store.getters['AUTH/userLogin'];
    },
    data() {
        return {
            isHoverUserImg: false,
            userId: "",
            userImg: "user.jpg",
            userLogin: {}
        };
    },
    methods: {
        logoutClick() {
            this.$store.dispatch("AUTH/logout");
            this.$router.push("/");
        },
        sectionClick(name) {
            $(".section-item").removeClass("selected");
            $(`.${name}`).addClass("selected");
        },
        clearSelected() {
            $('.section-item').removeClass("selected");
        },
        goToProfile(){
            this.loginUserId = this.$store.getters['AUTH/userId'];
            this.$router.push(`/profile/${this.loginUserId}`, {params: {id: this.loginUserId}});
        },
    },

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.header {
    /* position: sticky;
    top: 0; */
    background-color: #fff;
    border-bottom: 2px solid #e6e6e6;
    padding: 10px;
}

.header a {
    text-decoration: none;
}

.section-item {
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px;
    font-weight: bold;
    font-size: 19px;
    color: #a3a3a3;
    height: 50px;
    cursor: pointer;
    border: 2px solid transparent;
}

.section-item:hover {
    color: #000;
}

.section-item.selected {
    border: 2px solid #49bcf1;
    background-color: #ddf4ff;
    color: #49bcf1;
}

.section-item-img {
    display: flex;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.learn-img {
    background-image: url(../../assets/images/learn.svg);
    background-position: 0px -2px;
}

.shop-img {
    background-image: url(../../assets/images/shop.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

.courses-img {
    background-image: url(../../assets/images/courses-icon-27.jpg);
    background-size: contain;
    background-repeat: no-repeat;
}

.vocab-img {
    background-image: url(../../assets/images/vocab.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 3px 4px;
    transform: scale(1.2);
}

.story-img {
    background-image: url(../../assets/images/book-cartoon.png);
    background-size: cover;
    transform: scale(1.3);
    border-radius: 50%;
}

.user {
    position: relative;
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px;
    font-weight: bold;
    font-size: 19px;
    color: #a3a3a3;
    height: 50px;
    cursor: pointer;
}

.user-img {
    transform: scale(1.3);
    border-radius: 50%;
    overflow: hidden;
}

.user-info {
    position: absolute;
    top: 50px;
    left: -240px;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #e5e5e5;
}

.user-info > div {
    padding: 8px 12px;
    color: #49bcf1;
}

.user-info a > div {
    padding: 8px 12px;
    color: #49bcf1;
}

.user-info > div:hover {
    background-color: #ececec;
}

.user-info a > div:hover {
    background-color: #ececec;
}

.user-account {
    font-weight: bold;
    color: rgb(20, 20, 20) !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #e5e5e5;
}

.logout, .help{
    border-top: 1px solid #e5e5e5;
}

.logout {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

@media screen and (max-width: 1200px) {
    .section-item {
        padding: 10px 3px;
    }

    .section-item-text {
        font-size: 15px;
    }
}

@media screen and (max-width: 993px) {
    .left-section .section-item-text {
        display: none;
    }

    .left-section .section-item {
        padding: 10px;
    }

    .left-section .section-item-img {
        margin-right: 0;
    }
}

@media screen and (max-width: 768px) {
    .left-section {
        width: 100%;
    }

    .right-section {
        width: 50px;
    }

    .right-section .gem, .streak{
        display: none !important;
    }

    .user {
        margin: 0 10px 0 0;
        padding-right: 0px;
    }
}


</style>