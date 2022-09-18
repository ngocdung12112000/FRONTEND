<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container profile">
        <div class="profile-info">
            <div class="info-section">
                <div class="profile-avatar">
                    {{ userId }}
                    <div class="icon-edit d-flex align-items-center justify-content-center">
                        <div class="img-icon-edit"></div>
                    </div>
                </div>
                <div class="profile-detail">
                    <div class="profile-name fw-bold fs-2 text-dark">{{ userId }}</div>
                    <div class="profile-username text-black-50 my-2">Zaxua</div>
                    <div class="joined-date text-black-50 my-2 d-flex align-items-center">
                        <div class="img-clock me-2"></div>
                        Đã tham gia Tháng Bảy 2018
                    </div>
                    <div class="follow-section text-black-50 my-2 d-flex align-items-center">
                        <div class="img-followers me-2"></div>
                        Đang theo dõi 0 / 0 Người theo dõi
                    </div>
                    <svg viewBox="0 0 82 66" data-test="flag-en"
                        style="height: 37.0244px; width: 46px; margin-top: 10px;">
                        <image height="3168" href="../assets/images/countries.svg" width="82"
                            xlink:href="../assets/images/countries.svg">
                        </image>
                    </svg>

                </div>
            </div>
            <div class="edit-wrapper">
                <div class="edit-section d-flex align-items-center justify-content-center text-white fs-5">
                    <div class="img-icon-edit me-2"></div>
                    Sửa hồ sơ
                </div>
            </div>
        </div>
        <div class="profile-content d-flex">
            <div class="col-8">
                <div class="statistic-section">
                    <div class="statistic-title">Thống kê</div>
                    <div class="statistic-wrapper d-flex flex-wrap">
                        <div class="statistic-item">
                            <div class="statistic-item-img mx-4">
                                <img style="transform: scale(1.5);" src="../assets/images/flame-icon.svg" alt="">
                            </div>
                            <div class="statistic-item-text">
                                <div class="fw-bolder fs-4">3</div>
                                <div class="text-black-50">Ngày streak</div>
                            </div>
                        </div>
                        <div class="statistic-item">
                            <div class="statistic-item-img mx-4">
                                <img style="transform: scale(1.5);" src="../assets/images/kn.svg" alt="">
                            </div>
                            <div class="statistic-item-text">
                                <div class="fw-bolder fs-4">561</div>
                                <div class="text-black-50">Tổng điểm KN</div>
                            </div>
                        </div>
                        <div class="statistic-item">
                            <div class="statistic-item-img mx-4">
                                <img style="transform: scale(1.5);" src="../assets/images/crown.svg" alt="">
                            </div>
                            <div class="statistic-item-text">
                                <div class="fw-bolder fs-4">3</div>
                                <div class="text-black-50">Thứ hạng hiện tại</div>
                            </div>
                        </div>
                        <div class="statistic-item">
                            <div class="statistic-item-img me-4 ms-3" style="width: 45px;">
                                <img style="transform: scale(0.8);" src="../assets/images/silver-rank.svg" alt="">
                            </div>
                            <div class="statistic-item-text">
                                <div class="fw-bolder fs-4">Bạc</div>
                                <div class="text-black-50">Bậc rank</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="achievement-section py-3">
                    <div class="achievement-title">Thành tích</div>
                    <div class="achievement-list">
                        <div class="achievement-item d-flex">
                            <div class="achievement-item-img mx-4 position-relative">
                                <img src="../assets/images/achievement-wildfire.svg" alt="">
                                <div class="achievement-item-level">
                                    Cấp 4
                                </div>
                            </div>
                            <div class="achievement-item-content flex-grow-1 me-4">
                                <div class="achievement-item-text d-flex align-items-center justify-content-between">
                                    <div class="fw-bold fs-5">Lửa rừng</div>
                                    <div class="text-black-50">3/7</div>
                                </div>
                                <div class="achievement-item-process my-3">
                                    <div class="achievement-item-process-done" :style="{width: `${(3/7)*100}%` }"></div>
                                </div>
                                <div class="achievement-item-description text-black-50">
                                    Đạt chuỗi 7 ngày streak
                                </div>
                            </div>
                        </div>
                        <div class="achievement-item d-flex">
                            <div class="achievement-item-img mx-4 position-relative">
                                <img src="../assets/images/achievement-sage.svg" alt="">
                                <div class="achievement-item-level">
                                    Cấp 4
                                </div>
                            </div>
                            <div class="achievement-item-content flex-grow-1 me-4">
                                <div class="achievement-item-text d-flex align-items-center justify-content-between">
                                    <div class="fw-bold fs-5">Cao nhân</div>
                                    <div class="text-black-50">561/1000</div>
                                </div>
                                <div class="achievement-item-process my-3">
                                    <div class="achievement-item-process-done" :style="{width: `${(561/1000)*100}%` }"></div>
                                </div>
                                <div class="achievement-item-description text-black-50">
                                    Đạt được 1000 KN
                                </div>
                            </div>
                        </div>
                        <div class="achievement-item d-flex">
                            <div class="achievement-item-img mx-4 position-relative">
                                <img src="../assets/images/achievement-scholar.svg" alt="">
                                <div class="achievement-item-level">
                                    Cấp 4
                                </div>
                            </div>
                            <div class="achievement-item-content flex-grow-1 me-4">
                                <div class="achievement-item-text d-flex align-items-center justify-content-between">
                                    <div class="fw-bold fs-5">Học giả</div>
                                    <div class="text-black-50">213/250</div>
                                </div>
                                <div class="achievement-item-process my-3">
                                    <div class="achievement-item-process-done" :style="{width: `${(213/250)*100}%` }"></div>
                                </div>
                                <div class="achievement-item-description text-black-50">
                                    Học 250 từ mới
                                </div>
                            </div>
                        </div>
                        <router-link to="/achievements">
                            <div class="achievement-item d-flex border border-0 fw-bolder fs-4 text-black-50 ms-4"
                                style="cursor: pointer;">
                                Xem thêm
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
            <div class="col-4 friend-section">
                <div class="friend-title">Bạn bè</div>
                <div class="friend-wrapper">
                    <div class="friend-tabs d-flex col-12 flex-wrap">
                        <div class="following col-6" :class="{ active: !toggleTab }" @click="toggleTab = false">
                            Đang theo dõi
                        </div>
                        <div class="follower col-6" :class="{ active: toggleTab }" @click="toggleTab = true">
                            Người theo dõi
                        </div>
                    </div>
                    <div class="friend-list">
                        <div class="following-list" v-show="!toggleTab">
                            <div class="following-item my-2 py-2">
                                <div class="d-flex">
                                    <div class="following-avatar mx-2">
                                        <img class="rounded-circle" src="../assets/images/user.jpg" alt="pic">
                                    </div>
                                    <div class="following-name mx-2">
                                        <div class="fw-bold"> HIii </div>
                                        <div class="following-score text-black-50"> 100 KN</div>
                                    </div>
                                </div>
                                <div class="btn-follow">
                                    <img src="../assets/images/add-follow.svg" alt="">
                                </div>
                            </div>
                            <div class="following-item my-2 py-2 border-0">
                                <div class="d-flex">
                                    <div class="following-avatar mx-2">
                                        <img class="rounded-circle" src="../assets/images/user.jpg" alt="pic">
                                    </div>
                                    <div class="following-name mx-2">
                                        <div class="fw-bold"> HIii </div>
                                        <div class="following-score text-black-50"> 100 KN</div>
                                    </div>
                                </div>
                                <div class="btn-follow">
                                    <img src="../assets/images/add-follow.svg" alt="">
                                </div>
                            </div>
                            
                            <span v-show="false">Kết nối bạn bè giúp học vui và hiệu quả hơn.</span>
                        </div>
                        <div class="follower-list" v-show="toggleTab">
                            Chưa có người theo dõi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
import { useRoute } from "vue-router";
export default {
    mounted() {
        $("svg").attr("viewBox", `1 ${this.countryCode} 82 66`);
        const route = useRoute();
        this.userId = route.params.id;

    },
    data() {
        return {
            countryCode: 1190, // Vietnam,
            toggleTab: false,
            userId: "",
        };
    },
    methods: {

    },

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.profile {
    padding: 0 80px;
}

.profile-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    border-bottom: 2px solid #e6e6e6;
}

.info-section {
    display: flex;
    align-items: center;
}

.profile-info .profile-avatar {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 20px;
    border: 3px dashed #afafaf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 82px;
    font-weight: bolder;
    color: #afafaf;
}

.profile-info .profile-detail {
    margin-left: 20px;
}

.profile-info .profile-avatar .icon-edit {
    position: absolute;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background-color: #1CB0F6;
    right: 0;
    top: 20px;
}

.edit-wrapper {
    position: relative;
    width: 145px;
    height: 46px;
    border-radius: 15px;
    background-color: #0f6b96;
}

.edit-section {
    position: absolute;
    top: -5px;
    width: 145px;
    height: 46px;
    border-radius: 15px;
    background-color: #1CB0F6;
    cursor: pointer;
}

.edit-section:hover {
    background-color: #31b8f7;
}

.statistic-section .statistic-title {
    font-size: 24px;
    font-weight: bolder;
    color: #000;
    margin-top: 16px;
    margin-bottom: 20px;
}

.statistic-item-img {
    width: 38px;
    width: 40px;
}

.statistic-section .statistic-item {
    display: flex;
    width: 46%;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 15px;
    height: 80px;
    border-radius: 20px;
    border: 2px solid #e6e6e6;
}

.achievement-title,
.friend-section .friend-title {
    font-size: 24px;
    font-weight: bolder;
    color: #000;
    margin-top: 16px;
    margin-bottom: 20px;
}

.friend-section .friend-wrapper {
    width: 100%;
    /* height: 388px; */
    border: 2px solid #e6e6e6;
    border-radius: 20px;
}

.friend-tabs>div {
    border-bottom: 2px solid #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.friend-tabs>div:hover,
.friend-tabs>div.active {
    border-bottom: 2px solid #1caff6;
    color: #1caff6;
}

.achievement-section a {
    text-decoration: none;
}

.achievement-list {
    width: calc(95% - 10px);
    border: 2px solid #e6e6e6;
    border-radius: 20px;
}

.achievement-item {
    border-bottom: 2px solid #e6e6e6;
    padding: 15px 0;
}

.achievement-item-process {
    width: 100%;
    height: 14px;
    border-radius: 7px;
    background-color: #e5e5e5;
}

.achievement-item-process-done {
    position: relative;
    width: 80%;
    height: 14px;
    border-radius: 7px;
    background-color: #FFC800;
}

.achievement-item-process-done::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 10px;
    right: 10px;
    height: 4px;
    border-radius: 3px;
    background-color: #FFFFFF;
    opacity: 0.3;
}

.achievement-item-level {
    width: 100%;
    position: absolute;
    font-size: 12px;
    left: 50%;
    bottom: 17px;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.following-list .following-item {
    width: 100%;
    display: flex;
    border-bottom: 2px solid #e6e6e6;
    justify-content: space-between;
    align-items: center;
}

.btn-follow {
    width: 41px;
    height: 32px;
    border-radius: 10px;
    background-color: #1CB0F6;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.btn-follow:hover {
    background-color: #31b8f7;
}

@media screen and (max-width: 998px) {
    .profile {
        padding: 0;
    }
}

@media screen and (max-width: 768px) {
    .edit-wrapper {
        display: none;
    }

    .info-section {
        justify-content: space-between;
    }

    .profile-info .profile-avatar {
        width: 90px ;
        height: 90px ;
        font-size: 50px ;
    }

    .profile-info .profile-avatar .icon-edit {
        top: 10px;
        right: -10px;
    }

    .profile-content {
        flex-direction: column;
        align-items: center;
    }

    .profile-content > div {
        margin-left: 20px;
        width: 100% !important;;
    }

    .achievement-list {
        width: 97%;
    }

    .friend-section .friend-wrapper {
        width: 97%;
    }
}
</style>