<template>
    <div class="learning-wrapper">
        <div class="left-section">
            <div class="video-wrapper">
                <div class="video-section">
                    <div class="video-container" style="width: 100%; height: 100%;">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y4rVYbfbhcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <!-- <video id="video" controls style="width: 100%; height: 100%;">
                            <source src="https://www.youtube.com/embed/JHSRTU31T14" type="video/mp4">
                        </video> -->
                    </div>
                </div>
            </div>
            <h1 class="mt-3">Chủ đề: Travelling</h1>
            <div class="time-wrapper d-flex my-3">
                <div class="time d-flex me-5">
                    <div class="me-4">
                        <i class="fas fa-clock me-1"></i>
                        01:02:38
                    </div>
                    <div>
                        <i class="fas fa-users me-1"></i>
                        1000
                    </div>
                </div>
                <div class="date d-flex">
                    <div class="me-4">Thời gian tạo: 29/07/2017</div>
                    <div>Thời gian cập nhật: 04/04/2022</div>
                </div>
            </div>
            <div class="course-detail-area">
                <div class="course-detail-tabs my-3">
                    <div>
                        <button class="active me-2" @click="() => switchTab(1)">Giới thiệu</button>
                        <button @click="() => switchTab(3)" class="lesson">Bài học</button>
                        <button class="me-2" @click="() => switchTab(2)">Tài liệu</button>
                    </div>
                    <span class="indicator"></span>
                </div>
                <div class="course-about mt-4" v-show="switchToggle == 1">
                    <div class="course-intro">
                        <p>Khoá học với 100% giảng viên người bản ngữ, đến từ Topica Native</p>
                        <p>Học viên thường xuyên được kiểm tra, đánh giá qua các bài kiểm tra trong và sau mỗi bài học</p>
                        <p>Luyện các kĩ năng quan trọng trong giao tiếp tiếng anh (nghe, nói, phản xạ, ngữ âm) trong 1 bài học</p>
                        <p>Nắm bắt được các từ và các cụm từ thường sử dụng theo các chủ đề</p>
                    </div>
                    <div class="course-benefit mt-4">
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
                    <div class="course-teacher mt-3">
                        <div class="my-3">
                            <h2>Giảng viên</h2>
                        </div>
                        <div>
                            <div class="teacher-item d-flex align-items-center">
                                <div class="teacher-avatar ">
                                    <img class="rounded-circle" style="width: 100px; height: 100px;" src="../assets/images/user.jpg" alt="">
                                </div>
                                <div class="teacher-info ms-5">
                                    <div class="teacher-name fs-5 fw-bolder">Nguyễn Văn A</div>
                                    <div class="teacher-job">Giảng viên</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-lesson-tab" v-show="switchToggle == 3">
                    <div class="list-lesson">
                        <div v-for="(item,index) in data" :key="item.id" class="item-lesson d-flex" :data="item.link" @click="itemLessonClick">
                            <div class="item-title">
                                <span>Video {{ index + 1 }}: {{ item.title }}</span>
                            </div>
                            <div class="item-quantity d-flex align-items-center">
                                {{ item.time }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="course-document" v-show="switchToggle == 2">
                    <h4>Tài liệu</h4>
                    <div class="list-document">
                        <div class="item-document d-flex align-items-center justify-content-between my-3">
                            <div class="d-flex">
                                <i class="fas fa-file-alt me-2"></i>
                                1.rar
                            </div>
                            <a class="d-flex align-items-center justify-content-center" 
                            href="/assets/images/bronze-rank.svg" download
                            >
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-section">
            <div class="list-lesson">
                <div v-for="(item,index) in data" :key="item.id" class="item-lesson d-flex" :data="item.link" @click="itemLessonClick">
                    <div class="item-title">
                        <span>Video {{ index + 1 }}: {{ item.title }}</span>
                    </div>
                    <div class="item-quantity d-flex align-items-center">
                        {{ item.time }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    data() {
        return {
            switchToggle: 1,
            data: [
                {
                    id: 1,
                    title: "Going to a hotel",
                    time: "00:04:05",
                    link: "y4rVYbfbhcE",
                },
                {
                    id: 2,
                    title: "In the Airport",
                    time: "00:04:05",
                    link: "61Pgo-puryk",
                },
                {
                    id: 3,
                    title: "Using Transportation",
                    time: "00:04:05",
                    link: "y4rVYbfbhcE",
                }
            ]
        }
    },
    methods: {
        switchTab(index) {
            const thisBtn = event.currentTarget;
            const left = thisBtn.offsetLeft;
            const width = $(thisBtn).width();
            $('.course-detail-tabs button').removeClass('active');
            $(thisBtn).addClass('active');
            $('.indicator').css('left', (left ) + 'px');
            $('.indicator').css('width', (width + 10) + 'px');
            this.switchToggle = index;
        },
        itemLessonClick(e) {
            $('.item-lesson').removeClass('active');
            const itemLesson = e.currentTarget;
            $(itemLesson).addClass('active');
            $('iframe').attr('src', 'https://www.youtube.com/embed/' + $(itemLesson).attr('data'));
        }
    }
}
</script>

<style scoped>
.learning-wrapper {
    display: flex;
    margin-top: 20px;
    margin-bottom: 0px;
}   

.left-section {
    width: 70%;
    padding-left: 40px;
    padding-right: 20px;
}

.video-section {
    width: 100%;
    height: 37.3vw;
    background: #1d1e22;
}

.course-detail-tabs {
    position: relative;
}

.course-detail-tabs button {
    font-size: 20px;
    line-height: 32px;
    opacity: 0.7;
    min-height: 48px;
    text-align: center;
    background-color: #fff;
}

.course-detail-tabs button.active {
    color: #E3BA00;
}

.indicator {
    left: 0px;
    width: 98px;
    height: 5px;
    background-color: #E3BA00;
    position: absolute;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    bottom: 0;
}

.course-teacher,
.course-benefit {
    margin-top: 15px;
    width: 100%;
    padding: 20px 0;
}

.course-document {
    width: 100%;
    max-height: 900px;
    overflow-y: auto;
}

.list-lesson-tab {
    width: 100%;
    max-height: 900px;
    overflow-y: auto;
}

.list-document {
    width: 100%;
    padding: 0 15px;     
}

.item-document a{
    color: #000;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
}

.item-document a:hover{
    background-color: rgba(212, 212, 212,0.4);
}

.right-section {
    width: 30%;
    height: 720px;
    overflow-y: auto;
}

.list-lesson {
    padding: 8px 0px;
}

.item-lesson {
    padding: 12px 16px;
    border-bottom: 1px solid #CBCBCB;
    cursor: pointer;
}

.item-lesson:hover {
    background-color: rgba(212, 212, 212,0.4);
}

.item-lesson.active span{
    color: #E3BA00;
}

.item-title {
    flex: 1 1 auto;
    min-width: 0;
    margin-top: 4px;
    margin-bottom: 4px;
}

.item-title span {
    color: #1D1E22;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
}

.item-quantity {
    color: #757575;
    width: 90px;
    font-size: 16px;
    min-width: 90px;
    align-self: start;
    margin-top: 4px;
    text-align: right;
    line-height: 24px;
    cursor: pointer;
}

.video-item {
    cursor: pointer;
}

.lesson {
    display: none;
}

@media screen and (max-width: 768px) {
    .lesson {
        display: inline-block;
    }
    .left-section {
        width: 100%;
        padding: 0 10px;
    }

    .video-section {
        height: 30vh;
    }

    .right-section {
        display: none;
    }
}
</style>