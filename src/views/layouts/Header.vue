<!-- eslint-disable prettier/prettier -->
<template>
    <div class="header sticky-top">
        <div class="container d-flex justify-content-center">
            <div class="col-9 col-md-9 left-section d-flex justify-content-evenly">
                <router-link to="/">
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
                <router-link to="/">
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
                <router-link to="/">
                    <div @click="sectionClick('story')" class="story section-item d-flex align-items-center">
                        <div class="story-img section-item-img"></div>
                        <div class="section-item-text">Kho truyện</div>
                    </div>
                </router-link>
            </div>
            <div class="col-3 col-md-3 right-section d-flex justify-content-center">
                <div class="streak section-item d-flex align-items-center">
                    <div class="streak-img"></div>
                    <div class="section-item-text" style="color: #FF9600;">2</div>
                </div>
                <div class="gem section-item d-flex align-items-center">
                    <div class="gem-img"></div>
                    <div class="section-item-text" style="color: #1dd1a1;">10</div>
                </div>
                <div class="user  d-flex align-items-center" @mouseover="isHoverUserImg = true"
                    @mouseleave="isHoverUserImg = false">
                    <div class="user-img section-item-img"></div>
                    <div v-show="isHoverUserImg" class="user-info">
                        <div class="user-account text-start">Tài khoản</div>
                        <router-link to="/profile/1">
                            <div @click="toProfile" class="user-profile text-start">Hồ sơ</div>
                        </router-link>
                        <div class="help text-start">Trợ giúp</div>
                        <div class="logout text-start">Đăng xuất</div>
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
    data() {
        return {
            isHoverUserImg: false,
        };
    },
    methods: {
        sectionClick(name) {
            $(".section-item").removeClass("selected");
            $(`.${name}`).addClass("selected");
        },
        toProfile() {
            $('.section-item').removeClass("selected");
        }
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
}

.courses-img {
    background-image: url(../../assets/images/courses-icon-27.jpg);
    background-size: contain;
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
    background-image: url(../../assets/images/user.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.3);
    border-radius: 50%;
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


</style>