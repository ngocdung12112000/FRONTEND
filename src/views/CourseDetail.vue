<!-- eslint-disable prettier/prettier -->
<template>
    <div class="course-detail-wrapper">
        <div class="course-header">
            <div class="header-circle">
            </div>
            <img src="../assets/images/background/course-detail-bg.png" alt="">
            <div class="header-text">
                <div v-if="dataCourseDetail.name" class="header-title fw-bolder py-3 fs-2 mt-5">
                    {{dataCourseDetail.name}}
                </div>
                <div v-if="dataCourseDetail.description" class="header-description mb-3">
                    {{dataCourseDetail.description}}
                </div>
            </div>
        </div>
        <div class="course-overview-wrapper">
            <div class="course-overview">
                <div class="course-content">
                    <div class="course-navbar">
                        <div class="course-detail-tabs">
                            <button @click="() => tabClick('course-benefit')">
                                <span>Lợi ích</span>
                            </button>
                            <button  @click="() => tabClick('course-roadmap')">
                                <span>Giáo trình</span>
                            </button>
                            <button  @click="() => tabClick('course-teacher')">
                                <span>Giảng viên</span>
                            </button>
                        </div>
                        <span class="indicator"></span>
                    </div>
                    <div class="course-benefit">
                        <div class="benefit-title my-3">
                            <h2>Lợi ích từ khóa học</h2>
                        </div>
                        <div class="benefit-list">
                            <div class="benefit-item my-2">
                                <i class="far fa-check-circle me-3"></i>
                                Luyện phát âm chuẩn toàn bộ 44 âm trong Bảng phiên âm quốc tế (Bảng IPA)
                            </div>
                            <div class="benefit-item my-2">
                                <i class="far fa-check-circle me-3"></i>
                                Hệ thống hóa lại toàn bộ kiến thức từ vựng, ngữ pháp và ứng dụng chúng dễ dàng trong giao tiếp
                            </div>
                            <div class="benefit-item my-2">
                                <i class="far fa-check-circle me-3"></i>
                                Học giao tiếp, phản xạ qua các chủ điểm thông dụng, nối âm, biến âm, ngữ điệu lên xuống một cách tự nhiên nhất như người bản ngữ
                            </div>
                            <div class="benefit-item">
                                <i class="far fa-check-circle me-3"></i>
                                Những cách hay mẹo nhỏ giúp bắt chuyện, gợi mở câu chuyện với người nước ngoài một cách tự nhiên và đầy hứng thú
                            </div>
                        </div>
                    </div>
                    <div class="course-roadmap">
                        <div class="roadmap-title my-3">
                            <h2>Lộ trình khoá học</h2>
                        </div>
                        <div class="roadmap-list ps-5 pe-3">
                            <div v-for="(item,index) in dataVideos" :key="item.id" class="roadmap-item">
                                <div class="roadmap-item-title d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="roadmap-item-number" style="margin-left: -25px;"> {{index + 1}} </div>
                                        <div class="roadmap-item-text ms-3 fs-5 fw-bolder" style="color: #C89F65">{{ item.title }}</div>
                                    </div>
                                    <div class="roadmap-item-time" style="color: #C89F65">{{ item.totalTime }}</div>
                                </div>
                                <div class="roadmap-item-content ">
                                    <div class="total-video py-2">
                                        <div class="d-flex justify-content-between align-items-center" @click="expandVideos" style="cursor: pointer;">
                                            <div class="d-flex">
                                                <i class="fas fa-play-circle me-2" style="margin-top: 3px;"></i>
                                                <div>{{ item.listVideos.length }} videos</div>
                                                <i class="fas fa-caret-down ms-2 mt-1"></i>
                                            </div>
                                            <div>{{ item.totalTime }}</div>
                                        </div>
                                    </div>
                                    <div style="margin-left: 12px;" class="d-none">
                                        <div v-for="video in item.listVideos" :key="video.id" 
                                            class="d-flex justify-content-between align-items-center py-2" 
                                        >
                                            <div class="d-flex">
                                                <i class="fas fa-play-circle me-2" style="margin-top: 3px;"></i>
                                                <div>{{ video.title }}</div>
                                            </div>
                                            <div >{{ video.time }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="course-teacher">
                        <div class="my-3">
                            <h2>Giảng viên</h2>
                        </div>
                        <div>
                            <div class="teacher-item d-flex align-items-center">
                                <div class="teacher-avatar ">
                                    <img class="rounded-circle" style="width: 100px; height: 100px;" src="../assets/images/user.jpg" alt="">
                                </div>
                                <div class="teacher-info ms-5">
                                    <div v-if="dataCourseDetail.teacher" class="teacher-name fs-5 fw-bolder">{{dataCourseDetail.teacher.name}}</div>
                                    <div class="teacher-job">Giảng viên</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="course-card-wrapper">
                    <div class="course-card">
                        <div class="course-card-content">
                            <div class="courseImg">
                                <div>
                                    <img :src="dataCourseDetail.image" alt="">
                                </div>
                            </div>
                            <div class="courseDetails">
                                <div class="priceInfo">
                                    <div v-if="dataCourseDetail.price && dataCourseDetail.is_bought == false" class="actualPrice">{{formatPrice(dataCourseDetail.price)}} đ</div>
                                    <div v-if="dataCourseDetail.discount && dataCourseDetail.is_bought == false" class="sellingPrice">{{ formatPrice(dataCourseDetail.price*(1 - (dataCourseDetail.discount/100))) }} đ</div>
                                </div>
                                <div v-if="dataCourseDetail.is_bought == true" class="buy-now my-2" @click="() => startLearning()">
                                    <div class="label">
                                        Học ngay
                                    </div>
                                </div>
                                <div v-if="dataCourseDetail.is_bought == false" class="add-to-cart my-2" @click="addToCart">
                                    <div class="label">
                                        <i class="fas fa-cart-plus"></i>
                                        Thêm vào giỏ hàng
                                    </div>
                                </div>
                                <div v-if="dataCourseDetail.is_bought == false" class="buy-now my-2" @click="buyNowClick">
                                    <div class="label">
                                        Mua ngay
                                    </div>
                                </div>
                                <div class="courseAdAction">
                                    <div class="wishlistAction">
                                        <i class="far fa-heart me-2"></i>
                                        <span>Lưu vào Yêu thích</span>
                                    </div>
                                    <div class="shareAction">
                                        <i class="fas fa-share-alt me-2"></i>
                                        <span>Chia sẻ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="course-detail-footer">
                <div class="courseDetails">
                    <div class="priceInfo">
                        <div v-if="dataCourseDetail.price" class="actualPrice">{{formatPrice(dataCourseDetail.price)}} đ</div>
                        <div v-if="dataCourseDetail.discount" class="sellingPrice">{{ formatPrice(dataCourseDetail.price*(1 - (dataCourseDetail.discount/100))) }} đ</div>
                    </div>
                    <div v-if="dataCourseDetail.is_bought == false"  class="add-to-cart my-2" @click="addToCart">
                        <div class="label">
                            <i class="fas fa-cart-plus"></i>
                            Thêm vào giỏ hàng
                        </div>
                    </div>
                    <div v-if="dataCourseDetail.is_bought == false"  class="buy-now my-2">
                        <div class="label">
                            Mua ngay
                        </div>
                    </div>
                    <div v-if="dataCourseDetail.is_bought == true"  class="buy-now my-2" @click="() => startLearning()">
                        <div class="label">
                            Học ngay
                        </div>
                    </div>
                    <div class="courseAdAction">
                        <div class="wishlistAction">
                            <i class="far fa-heart me-2"></i>
                            <span>Lưu vào Yêu thích</span>
                        </div>
                        <div class="shareAction">
                            <i class="fas fa-share-alt me-2"></i>
                            <span>Chia sẻ</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <ToastMessage :isShow="isShowToast" :message="toastContent" @closeToast="isShowToast = false"/>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
import ToastMessage from "./ADMIN/Components/ToastMessage.vue";
export default {
    beforeMount() {
        console.log(this.$route.params.id);
        this.getDataDetailCourse();
    },
    components: {
        ToastMessage
    },
    data() {
        return {
            dataCourseDetail: {},
            id: this.$route.params.id,
            slug: this.$route.params.slug,
            isShowToast: false,
            toastContent: 'Hello',
            dataVideos: [
                {
                    id: 1,
                    title: "Giới thiệu",
                    listVideos: [
                        {
                            id: 1,
                            title: "Giới thiệu",
                            time: "00:04:05",
                        },
                        {
                            id: 2,
                            title: "Nhập môn",
                            time: "00:05:49",
                        },
                        {
                            id: 3,
                            title: "Tài liệu học tập",
                            time: "00:00:22",
                        }
                    ],
                    totalTime: "00:10:42",
                },
                {
                    id: 2,
                    title: "Ngữ âm cơ bản",
                    listVideos: [
                        {
                            id: 1,
                            title: "Giới thiệu",
                            time: "00:04:05",
                        },
                        {
                            id: 2,
                            title: "Nhập môn",
                            time: "00:05:49",
                        },
                        {
                            id: 3,
                            title: "Tài liệu học tập",
                            time: "00:00:22",
                        }
                    ],
                    totalTime: "00:10:42",
                }
            ]
        }
    },
    methods: {
        clickHeader() {
            console.log(this.$route.params);
        },
        tabClick(tab) {
            console.log(tab);
            $('html,body').animate({
                scrollTop: $(`.${tab}`).offset().top},
                'slow');
        },
        expandVideos(e) {
            const $this = $(e.currentTarget);
            $($this).parent().next().toggleClass('d-none');
        },
        startLearning() {
            this.$router.push({
                name: 'LearnCourse',
                params: {
                    id: this.id,
                    slug: this.slug
                }
            });
        },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        getDataDetailCourse() {
            let me = this,
                userId = this.$store.getters['AUTH/userId'];
            this.axios
                .get(`https://localhost:44366/api/Course/Id?courseId=${this.$route.params.id}&userId=${userId}`)
                .then((response) => {
                    if(response.data != null) {
                        me.dataCourseDetail = response.data;
                    }
                });
        },
        addToCart() {
            let me = this,
                userId = this.$store.getters['AUTH/userId'];
            this.axios
                .post(`https://localhost:44366/api/Course/AddToCart?userId=${userId}&courseId=${me.dataCourseDetail.id}`)
                .then((response) => {
                    if(response && response.data) {
                        if(response.data != 999999) {
                            me.toastContent = 'Thêm vào giỏ hàng thành công';
                        }
                        else {
                            me.toastContent = 'Khóa học đã có trong giỏ hàng';
                        }
                        me.isShowToast = true;
                    }
                    else {
                        me.isShowToast = true;
                        me.toastContent = 'Thêm vào giỏ hàng thất bại';
                    }
                    setTimeout(() => {
                        me.isShowToast = false;
                    }, 2000);
                });
        },
        buyNowClick() {
            this.addToCart();
            this.$router.push('/cart');
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.course-detail-wrapper {
    overflow-x: hidden;
    background: linear-gradient(191.1deg, rgba(255, 192, 67, 0) 14.17%, rgba(255, 192, 67, 0.28) 105.12%);
}

.header-circle {
    top: 18px;
    right: 390px;
    width: 244px;
    height: 237px;
    z-index: 0;
    position: absolute;
    background: linear-gradient(180deg, rgba(201, 144, 30, 0) 0%, rgba(255, 192, 67, 0.108) 100%);
    border-radius: 50%;
}

.course-header {
    width: 100vw;
    height: max-content;
    padding: 16px 0px 32px 112px;
    position: relative;
    background: linear-gradient(191deg, rgba(255, 192, 67, 0) 5.02%, rgba(255, 192, 67, 0.5) 94.1%);
    margin-top: -7px;
    min-height: 385px;
}

.header-description {
    max-width: 60%;
}

.course-header img {
    left: 0;
    width: 100%;
    bottom: 0;
    height: auto;
    opacity: 0.5;
    z-index: 0;
    position: absolute;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    object-fit: cover;
}

.course-overview,
.course-overview-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: center;
}

.course-overview {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
}


.course-content {
    position: relative;
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
    background-color: #fff;
}

.course-navbar {
    position: sticky;
    top: 70px;
    z-index: 900;
    color: rgba(0, 0, 0, 0.87);
    left: auto;
    right: 0;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.course-detail-tabs {
    border-bottom: 3px solid #EEEEEE;
}

.course-detail-tabs button {
    text-transform: none;
    opacity: 0.7;
    padding: 6px 12px;
    overflow: hidden;
    position: relative;
    font-size: 0.875rem;
    max-width: 264px;
    min-width: 72px;
    box-sizing: border-box;
    min-height: 48px;
    text-align: center;
    flex-shrink: 0;
    font-weight: 500;
    line-height: 1.75;
    white-space: normal;
    background-color: #fff;
}

.course-detail-tabs button span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.indicator {
    left: 0px;
    width: 62.0312px;
    height: 3px;
    bottom: 0;
    position: absolute;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #C89F65;
}

.course-card-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -335px;
    z-index: 1000;
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%
}

.course-card {
    height: fit-content;
    z-index: 11;
    position: fixed;
    border-radius: 20px;
}

.course-card-content {
    width: 350px;
    background: #ffffff;
    box-shadow: 15px 15px 28px 10px rgb(159 141 91 / 20%);
    border-radius: 30px;
}

.courseImg {
    width: 100%;
    position: relative;
}

.courseImg>div {
    display: flex;
    opacity: 0.7;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.courseImg div img {
    width: 100%;
    cursor: pointer;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    object-fit: cover;
    max-height: 480px;
}

.courseDetails {
    max-height: 50vh;
    overflow-y: auto;
    padding: 0px 28px 28px 28px;
}

.courseDetails .priceInfo {
    display: flex;
    margin-top: 11px;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.courseDetails .priceInfo .actualPrice {
    color: #000000;
    text-decoration: line-through;
}

.courseDetails .priceInfo .sellingPrice {
    color: #C89F65;
    font-size: 32px;
    font-weight: bold;
    margin-left: 5px;
}

.add-to-cart {
    color: #000000;
    border: 1px solid #000000;
    font-size: 16px;
    font-weight: 700;
    border-radius: 100px;
    width: 100%;
    padding: 5px 15px;
    cursor: pointer;
}

.label {
    width: 100%;
    text-align: center;
    line-height: 30px;
}

.buy-now {
    color: #000000;
    padding: 5px 15px;
    font-size: 16px;
    background: #FCCF00;
    font-weight: 700;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.courseAdAction {
    display: flex;
    margin-top: 15px;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 15px;
    justify-content: space-between;
}
.courseAdAction .wishlistAction, .courseAdAction .shareAction {
    color: #C89F65;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.course-roadmap,
.course-teacher,
.course-benefit {
    margin-top: 15px;
    padding: 0px 28px 28px 28px;
    width: 100%;
    border: 1px solid #000;
}

.roadmap-item-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(201, 144, 30, 0) 0%, rgba(255, 192, 67, 0.508) 100%);
    color: #C89F65;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
}

.roadmap-item-content {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 30px;
    border-left: 1px solid #C89F65;
}

.course-detail-footer {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #fff;
    display: none;
    z-index: 999;
}

@media screen and (max-width: 768px) {
    .course-overview {
        margin-bottom: 200px;

    }
    .course-header {
        width: 100%;
        padding: 0px 15px;
        text-align: center;
    }
    .course-card-wrapper {
        display: none;
    }

    .course-content {
        max-width: 95%;
        flex-basis: 95%;
    }

    .course-detail-footer {
        display: block;
    }

    .courseDetails {
        padding: 0px 20px;
        border-top: 1px solid #bbbbbb;
    }

    .courseDetails .priceInfo {
        margin-top: 5px;
    }

    .courseDetails .priceInfo .sellingPrice {
        font-size: 25px;
    }
}
</style>