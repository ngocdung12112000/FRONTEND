<!-- eslint-disable prettier/prettier -->
<template>
    <div class="intro-container">
        <div class="intro-header fixed-top">
            <div class="container d-flex align-items-center justify-content-between">
                <h3 @click="headerClick" class="fw-bolder text-white">BNDZ English</h3>
                <div>
                    <button class="sign-in me-3" @click="$router.push('/login')">
                        <span>Đăng nhập</span>
                    </button>
                    <button class="sign-up" @click="$router.push('/register')">
                        <span>Đăng ký</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="intro-banner position-relative">
            <div class="container">
                <div class="img-earth"></div>
                <div class="intro-banner-content">
                    <div class="intro-banner-title mb-5">
                        <h1 class="text-white run-animation">Học ngôn ngữ vui nhộn và hiệu quả!</h1>
                    </div>
                    <div class="intro-banner-subtitle mt-5 d-flex flex-column align-items-center">
                        <div class="mb-3" @click="$router.push('/register')">Bắt đầu</div>
                        <div @click="$router.push('/login')">Tôi đã có tài khoản</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="padding: 30px 100px">
            <div class="intro-detail d-flex align-items-center justify-content-between pb-5 border-bottom">
                <div class="img img-happy"></div>
                <div class="text" style="width: 75%">
                    <h3 class="fw-bolder">Cách học ngôn ngữ</h3>
                    <div>Học cùng Duolingo rất vui nhộn. Với các bài học nhỏ gọn, bạn có thể vừa ghi điểm và mở khóa các cấp độ mới vừa luyện tập các kỹ năng giao tiếp hữu dụng.</div>
                </div>
            </div>
            <div class="intro-detail d-flex align-items-center justify-content-between mt-5 pb-5 border-bottom">
                <div style="width: 30%">
                    <h5 class="fw-bolder">Cách học ngôn ngữ</h5>
                    <div>Các khóa học của chúng tôi giảng dạy một cách hiệu quả các kỹ năng nghe, đọc và viết. </div>
                </div>
                <div class="img img-learning"></div>
                <div class="text" style="width: 30%">
                    <h5 class="fw-bolder">Truyền động lực học</h5>
                    <div>Chúng tôi giúp người học dễ dàng xây dựng thói quen học tập, qua những tính năng mô phỏng trò chơi, các thử thách vui vẻ. Học hiệu quả mà không nhàm chán! Xây dựng kỹ năng mỗi ngày với các bài học thú vị.</div>
                </div>
            </div>
            <div class="intro-detail d-flex align-items-center justify-content-between mt-5 pb-5 border-bottom">
                <div>
                    <h3 class="fw-bolder">Học mọi lúc mọi nơi</h3>
                    <div>Thử giao diện mới với ứng dụng cho iPhone và Android của chúng tôi.</div>
                </div>
                <div class="img img-working"></div>
            </div>
            <div class="intro-detail d-flex align-items-center justify-content-between mt-5">
                <div class="img img-educator"></div>
                <div style="width: 75%">
                    <h3 class="fw-bolder">Các khóa học thực sự hiệu quả</h3>
                    <div>Các khóa học của chúng tôi thực sự hiệu quả trong việc giảng dạy kỹ năng nghe, đọc và nói. Hãy xem những nghiên cứu mới nhất của chúng tôi!</div>
                </div>
            </div>
        </div>
        <div class="intro-footer d-flex justify-content-center align-items-center">
            <div class="text-white fs-5">Powered By Ngọc Dũng</div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {

        }
    },
    methods: {
        handleScroll() {
            let y = window.scrollY;
            // const bannerheight = $('.intro-banner').height();
            if(y == 0) {
                $('.intro-banner-title h1').addClass("run-animation");
            } else {
                $('.intro-banner-title h1').removeClass("run-animation");
            }
        }
    },
    
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.intro-header {
    background: #222f3e;
    /* background: transparent; */
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
}

.sign-in,
.sign-up {
    position: relative;
    background: rgb(182, 182, 182);
    border-radius: 15px;
    padding: 10px 20px;
    color: #235390;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
}

.sign-up::before {
    content: "Đăng ký";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    top: -4px;
    left: 0;
    background-color: rgb(255, 255, 255);
    padding: 10px 20px;
    transition: all 0.1s ease-in-out;
}

.sign-in {
    background-color: #0d7057;
}

.sign-in::before {
    content: "Đăng nhập";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    top: -4px;
    left: 0;
    background-color: #10ac84;
    padding: 10px 20px;
    color: #fff;
    transition: all 0.1s ease-in-out;
}
.sign-up:hover::before,
.sign-in:hover::before {
    top: -2px;
}

/* #341f97 06684f*/ 
.intro-banner {
    position: relative;
    background: #222f3e;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url(../assets/images/background/star-pattern.svg);
    background-size: cover;
    text-align: center;
}

.intro-banner > div.container {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.img-earth{
    transition: all 0.3s ease-in-out;
}

.img-earth:hover {
    transform: scale(1.1);
}

.intro-banner-title h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */ 
}

.run-animation {
    animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

.intro-banner-subtitle div {
    width: 350px;
    height: 50px;
    background: rgb(253, 253, 253);
    border-radius: 20px;
    color: #235390;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.intro-banner-subtitle div:last-child {
    border: 3px solid #235390;
    color: #fff;
    background-color: transparent;
}

.img {
    width: 234px;
    height: 200px;
}

.intro-footer {
    background: #222f3e;
    width: 100%;
    height: 100px;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

@media screen and (max-width: 1366px) {
    .intro-banner > div.container {
        flex-direction: column;
    }
}

@media screen and (max-width: 768px) {
    .intro-banner-title > h1 {
        font-size: 18px !important;
    }

    .intro-container .container {
        margin-top: 30px;
        padding: 0 !important;
    }
}

@media screen and (max-width: 425px) {
    .sign-in,
    .sign-up {
        font-size: 11px;
    }

    .intro-detail {
        flex-direction: column !important;
    }

    .intro-detail >div{
        width: 90% !important;
        margin-bottom: 15px;
    }
}



</style>