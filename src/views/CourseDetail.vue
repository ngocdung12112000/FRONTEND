<template>
    <div class="course-detail-wrapper">
        <div class="course-header">
            <div class="header-circle">
            </div>
            <img src="../assets/images/background/course-detail-bg.png" alt="">
        </div>
        <div class="course-overview-wrapper">
            <div class="course-overview">
                <div class="course-content">
                    <div class="course-navbar">

                    </div>
                    <div class="course-benefit">

                    </div>
                    <div class="course-roadmap">

                    </div>
                    <div class="course-teacher">

                    </div>
                </div>
                <div class="course-card-wrapper">
                    <div class="course-card">
                        <div class="course-card-content">
                            <div class="courseImg">
                                <div>
                                    <img src="../assets/images/COURSES/c1.png" alt="">
                                </div>
                            </div>
                            <div class="courseDetails">
                                <div class="priceInfo">
                                    <div class="actualPrice">749,000 đ</div>
                                    <div class="sellingPrice">399,000 đ</div>
                                </div>
                                <div class="add-to-cart my-2">
                                    <div class="label">
                                        <div class="icon-cart"></div>
                                        Thêm vào giỏ hàng
                                    </div>
                                </div>
                                <div class="buy-now my-2">
                                    <div class="label">
                                        Mua ngay
                                    </div>
                                </div>
                                <div class="courseAdAction">
                                    <div class="wishlistAction">
                                        <div class="icon-header"></div>
                                        <span>Lưu vào Yêu thích</span>
                                    </div>
                                    <div class="shareAction">
                                        <div class="icon-share"></div>
                                        <span>Chia sẻ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            slug: this.$route.params.slug
        }
    },
    methods: {
        clickHeader() {
            console.log(this.$route.params);
        }
    }
}
</script>

<style scoped>
.course-detail-wrapper {
    background: linear-gradient(191.1deg, rgba(255, 192, 67, 0) 14.17%, rgba(255, 192, 67, 0.28) 105.12%);
    height: 200vh;
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
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
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


/* @media (min-width: 960px) {
    
} */
</style>