<!-- eslint-disable prettier/prettier -->
<template>
    <div class="lesson col-12">
        <div class="lesson-header"
            :style="{ backgroundColor: currentPageUser > topic.id ? '#FFC800' : topic.colors[0] }">
            <div class="lesson-title">Bài {{ topic.id }}</div>
            <div class="lesson-title-content">{{ topic.name }}</div>
        </div>
        <div class="lesson-content mt-4">
            <div class="d-flex justify-content-center" @click="() => goToLesson(topic.id, 1)">
                <div class="lesson-wrapper" 
                    :class="{ disabled: isDisabled, 
                              current: currentPageUser == topic.id && currentLessonUser == 1 }" 
                    :style="{backgroundColor: currentPageUser == topic.id && currentLessonUser == 1 ? topic.colors[1] :
                        currentPageUser == topic.id && currentLessonUser > 1 ? '#C19B11' :
                        currentPageUser > topic.id ? '#C19B11' : '#bdbdbd'
                }">
                    <div v-if="currentPageUser == topic.id && currentLessonUser == 1" class="lesson-item"
                        :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-current-lesson"></div>
                    </div>
                    <div v-else-if="(currentPageUser == topic.id && currentLessonUser > 1) || (currentPageUser > topic.id)"
                        class="lesson-item" style="background-color: #FFC800;">
                        <div class="img-yellow-slash d-flex align-items-center justify-content-center">
                            <div class="img-done-tick"></div>
                        </div>
                    </div>
                    <div v-else class="lesson-item">
                        <div class="img-lock"></div>
                    </div>
                    <!-- <div v-else class="lesson-item" :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-skip"></div>
                    </div> -->
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3" @click="() => goToLesson(topic.id, 2)">
                <div class="lesson-wrapper" 
                    :class="{ disabled: currentPageUser < topic.id || currentPageUser == topic.id && currentLessonUser < 2, 
                                current: currentPageUser == topic.id && currentLessonUser == 2 ,
                                mr_100 : topic.id % 2 == 0, ml_100 : topic.id % 2 == 1 }"
                    :style="{backgroundColor: currentPageUser == topic.id && currentLessonUser == 2 ? topic.colors[1] :
                        currentPageUser == topic.id && currentLessonUser > 2 ? '#C19B11' :
                        currentPageUser > topic.id ? '#C19B11' : '#bdbdbd'}"
                >
                    <div v-if="currentPageUser == topic.id && currentLessonUser == 2" class="lesson-item"
                        :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-current-lesson"></div>
                    </div>
                    <div v-else-if="(currentPageUser == topic.id && currentLessonUser > 2) || (currentPageUser > topic.id)"
                        class="lesson-item" style="background-color: #FFC800;">
                        <div class="img-yellow-slash d-flex align-items-center justify-content-center">
                            <div class="img-done-tick"></div>
                        </div>
                    </div>
                    <div v-else class="lesson-item">
                        <div class="img-lock"></div>
                    </div>
                </div>
                
            </div>
            <div class="d-flex justify-content-center mt-3" @click="() => goToLesson(topic.id, 3)">
                <div class="lesson-wrapper"
                    :class="{ disabled: currentPageUser < topic.id || currentPageUser == topic.id && currentLessonUser < 3, 
                              current: currentPageUser == topic.id && currentLessonUser == 3,
                              mr_175 : topic.id % 2 == 0, ml_175 : topic.id % 2 == 1}" 
                    :style="{backgroundColor: currentPageUser == topic.id && currentLessonUser == 3 ? topic.colors[1] :
                        currentPageUser == topic.id && currentLessonUser > 3 ? '#C19B11' :
                        currentPageUser > topic.id ? '#C19B11' : '#bdbdbd'}"
                >
                    <div v-if="currentPageUser == topic.id && currentLessonUser == 3" class="lesson-item"
                        :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-current-lesson"></div>
                    </div>
                    <div v-else-if="(currentPageUser == topic.id && currentLessonUser > 3) || (currentPageUser > topic.id)"
                        class="lesson-item" style="background-color: #FFC800;">
                        <div class="img-yellow-slash d-flex align-items-center justify-content-center">
                            <div class="img-done-tick"></div>
                        </div>
                    </div>
                    <div v-else class="lesson-item">
                        <div class="img-lock"></div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3" @click="() => goToLesson(topic.id, 4)">
                <div class="lesson-wrapper"
                    :class="{ disabled: currentPageUser < topic.id || currentPageUser == topic.id && currentLessonUser < 4, 
                              current: currentPageUser == topic.id && currentLessonUser == 4,
                              mr_100 : topic.id % 2 == 0, ml_100 : topic.id % 2 == 1 }" 
                    :style="{backgroundColor: currentPageUser == topic.id && currentLessonUser == 4 ? topic.colors[1] :
                        currentPageUser == topic.id && currentLessonUser > 4 ? '#C19B11' :
                        currentPageUser > topic.id ? '#C19B11' : '#bdbdbd'}"
                >
                    <div v-if="currentPageUser == topic.id && currentLessonUser == 4" class="lesson-item"
                        :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-current-lesson"></div>
                    </div>
                    <div v-else-if="(currentPageUser == topic.id && currentLessonUser > 4) || (currentPageUser > topic.id)"
                        class="lesson-item" style="background-color: #FFC800;">
                        <div class="img-yellow-slash d-flex align-items-center justify-content-center">
                            <div class="img-done-tick"></div>
                        </div>
                    </div>
                    <div v-else class="lesson-item">
                        <div class="img-lock"></div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <div class="img-chest" 
                    :class="{ opened : (currentPageUser == topic.id && currentLessonUser > 4) || (currentPageUser > topic.id),
                            disabled : currentPageUser < topic.id || currentPageUser == topic.id && currentLessonUser < 5 
                    }">

                </div>
            </div>
            <div class="d-flex justify-content-center mt-3" @click="() => goToLesson(topic.id, 5)">
                <div class="lesson-wrapper"
                    :class="{ disabled: currentPageUser < topic.id || currentPageUser == topic.id && currentLessonUser < 5, 
                              current: currentPageUser == topic.id && currentLessonUser == 5,
                              ml_100 : topic.id % 2 == 0, mr_100 : topic.id % 2 == 1 }" 
                    :style="{ backgroundColor: currentPageUser == topic.id && currentLessonUser == 5 ? topic.colors[1] :
                        currentPageUser == topic.id && currentLessonUser > 5 ? '#C19B11' :
                        currentPageUser > topic.id ? '#C19B11' : '#bdbdbd'}"
                >
                    <div v-if="currentPageUser == topic.id && currentLessonUser == 5" class="lesson-item"
                        :style="{ backgroundColor: topic.colors[0] }">
                        <div class="img-current-lesson"></div>
                    </div>
                    <div v-else-if="(currentPageUser == topic.id && currentLessonUser > 5) || (currentPageUser > topic.id)"
                        class="lesson-item" style="background-color: #FFC800;">
                        <div class="img-yellow-slash d-flex align-items-center justify-content-center">
                            <div class="img-done-tick"></div>
                        </div>
                    </div>
                    <div v-else class="lesson-item">
                        <div class="img-lock"></div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <div v-if="currentPageUser <= topic.id" class="lesson-wrapper disabled">
                    <div class="lesson-item">
                        <div class="img-trophy disabled"></div>
                    </div>
                </div>
                <div v-else class="lesson-wrapper" style="width: 105px; background-color: transparent; margin-top: 10px;">
                    <div class="img-trophy d-flex justify-content-center align-items-center"
                        style="color: #CD7900; font-weight: bolder; font-size: 20px;"
                    >
                        {{ topic.id }}
                    </div>
                </div>
            </div>
            <div class="lesson-svg position-absolute" :class="{bottom_20 : topic.id % 2 == 0, top_20 : topic.id % 2 == 1}" style="left: 20px">
                <img v-if="topic.id == 1" style="width: 180px; height: 180px;" src="../assets/images/HOME/s1.svg" alt="">
                <img v-else-if="topic.id == 2" style="width: 180px; height: 180px;" src="../assets/images/HOME/s3.svg" alt="">
                <img v-else-if="topic.id == 3" style="width: 180px; height: 180px;" src="../assets/images/HOME/s5.svg" alt="">
                <img v-else-if="topic.id == 4" style="width: 180px; height: 180px;" src="../assets/images/HOME/s7.svg" alt="">
                <img v-else-if="topic.id == 5" style="width: 180px; height: 180px;" src="../assets/images/HOME/s9.svg" alt="">
            </div>
            <div class="lesson-svg position-absolute" :class="{top_20 : topic.id % 2 == 0, bottom_20 : topic.id % 2 == 1}" style="right: 40px">
                <img v-if="topic.id == 1" style="width: 180px; height: 180px;" src="../assets/images/HOME/s2.svg" alt="">
                <img v-else-if="topic.id == 2" style="width: 180px; height: 180px;" src="../assets/images/HOME/s4.svg" alt="">
                <img v-else-if="topic.id == 3" style="width: 180px; height: 180px;" src="../assets/images/HOME/s6.svg" alt="">
                <img v-else-if="topic.id == 4" style="width: 180px; height: 180px;" src="../assets/images/HOME/s8.svg" alt="">
                <img v-else-if="topic.id == 5" style="width: 180px; height: 180px;" src="../assets/images/HOME/s10.svg" alt="">
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
        };
    },
    props: {
        topic: {
            type: Object,
            required: true,
        },
        currentPageUser: {
            type: Number,
            required: true,
        },
        currentLessonUser: {
            type: Number,
            required: true,
        },
    },
    beforeMount() {
        $('.current:before').css('color', this.topic.colors[0]);
    },
    methods: {
        goToLesson(lessonId, lessonPage) {
            if(lessonId ==  this.currentPageUser && lessonPage == this.currentLessonUser) {
                this.$router.push({
                    name: 'GamePlay',
                    params: {
                        currentTopicId: this.currentPageUser,
                        currentLessonName: this.currentLessonUser,
                        idLesson: this.currentPageUser*5-(5-this.currentLessonUser),
                    },
                });
            }
        },
    },
    computed: {
        currentIndex() {
            return (this.currentPageUser % 6);
        },
        currentLesson() {
            return (this.topic.id);
        },
        isDisabled() {
            return (this.currentPageUser < this.topic.id);
        },
    },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.lesson {
    /* background: rgb(195, 223, 195); */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}

.lesson .lesson-header {
    width: 630px;
    /* background: #CE82FF; */
    height: 110px;
    border-radius: 10px;
}

.lesson .lesson-header .lesson-title {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    padding-top: 20px;
    padding-left: 20px;
}

.lesson .lesson-header .lesson-title-content {
    font-size: 20px;
    color: #fff;
    padding-left: 20px;
}

.lesson .lesson-content {
    width: 630px;
    position: relative;
}

.lesson .lesson-wrapper {
    position: relative;
    width: 75px;
    height: 70px;
    background-color: #6608a5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.lesson .lesson-wrapper .lesson-item {
    position: absolute;
    top: -2px;
    width: 75px;
    height: 62px;
    /* background-color: #CE82FF ; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    cursor: pointer;
}

.lesson .lesson-wrapper.disabled {
    background-color: #bdbdbd;
}

.lesson .lesson-wrapper.current {
    position: relative;
}

.lesson .lesson-wrapper.current::before {
    content: "Bắt đầu";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -50px;
    width: 101px;
    height: 45px;
    border: 2px solid #d6d6d6;
    background-color: #fff;
    border-radius: 10px;
    z-index: 9;
    font-size: 20px;
    font-weight: bold;
    animation-name: up_down_1;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    cursor: pointer;
}


.lesson .lesson-wrapper.current::after {
    content: "";
    position: absolute;
    top: -13px;
    width: 100px;
    height: 95px;
    border: 7px solid #d6d6d6;
    border-radius: 50%;
    z-index: 4;
    cursor: pointer;
}


.lesson .lesson-wrapper.disabled .lesson-item {
    background-color: #e5e5e5;
    cursor: context-menu;
    transition: none;
}

.lesson .lesson-wrapper:hover .lesson-item {
    top: 0px;
}

.lesson-item .img-skip::after {
    content: "Học vượt";
    display: flex;
    color: #000;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -40px;
    left: -15px;
    width: 110px;
    height: 45px;
    border: 2px solid #d6d6d6;
    background-color: #fff;
    border-radius: 10px;
    z-index: 9;
    font-size: 20px;
    font-weight: bold;
    animation-name: up_down_2;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    cursor: pointer;
}

.ml_100 {
    margin-left: 100px;
}

.ml_200 {
    margin-left: 200px;
}

.ml_175 {
    margin-left: 175px;
}

.mr_100{
    margin-right: 100px;
}
.mr_175 {
    margin-right: 175px;
}

.mr_200 {
    margin-right: 200px;
}

.top_20 {
    top: 15%;
}

.bottom_20 {
    bottom: 15%;
}

@keyframes up_down_1 {
  0%   {top: -60px;}
  50%  {top: -40px;}
  100% {top: -60px;}
}

@keyframes up_down_2 {
  0%   {top: -50px;}
  50%  {top: -35px;}
  100% {top: -50px;}
}

@media screen and (max-width: 768px) {
    
    .lesson .lesson-header {
        width: 100%;
    }

    .lesson .lesson-content {
        width: 100%;
    }

    .lesson-svg img{
        width: 120px !important;
        height: 120px !important;
    }
}
</style>
