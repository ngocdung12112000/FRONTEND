<!-- eslint-disable prettier/prettier -->
<template>
    <Loading v-show="isShowLoading" />
    <div style="height: calc(100vh - 17px)">
        <div class="container position-relative">
            <div class="process mt-3">
                <div class="icon icon-cancel me-3" @click="backAction"></div>
                <div class="process-bar">
                    <div class="process-bar-done"></div>
                </div>
            </div>
            <div v-if="questions && questions.length > 0" class="play-content">
                <QuesMultiWords v-if="indexQues == 0 " 
                    :question="questions[0]" 
                    :toggleSwitch="toggleSwitch"
                    @speakWord="speakWord"
                    @onEnterTextArea = "btnCheckSelectedWord"
                />
                <QuesSelectHorizon v-if="indexQues == 1 " 
                    :question="questions[1]" 
                    @speakWord="speakWord"
                />
                <QuesSelectPair v-if="indexQues == 2 " 
                    :question="questions[2]" 
                    @speakWord="speakWord"
                    @checkAnswer="checkAnswer"
                />
                <QuesHearSelect v-if="indexQues == 3 " 
                    :question="questions[3]" 
                    @speakWord="speakWord"
                />
                <QuesHearSelectMulti v-if="indexQues == 4 "
                    :question="questions[4]" 
                    :toggleSwitch="toggleSwitch"
                    @speakWord="speakWord"
                    @onEnterTextArea = "btnCheckSelectedWord"
                />
                <QuesSpeak v-if="indexQues == 5 "
                    :question="questions[5]" 
                    @speakWord="speakWord"
                />
            </div>
            <div class="finish" v-show="isShowFinish">
                <div class="finish-container">
                    <div class="finish-header">
                        <img src="../assets/images/complete-text.png" alt="">
                    </div>  
                    <div class="finish-content">
                        <h3>S??? c??u ????ng {{numberCorrect}}/6</h3>
                        <img src="../assets/images/complete.svg" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="footer position-absolute bottom-0">
            <div class="default container d-flex justify-content-between align-items-center" style="padding: 0 100px">
                <div class="result d-none">
                    <div v-if="correctAll" class="accurate d-flex align-items-center">
                        <div class="img-accurate d-flex justify-content-center align-items-center">
                            <div class="icon icon-accurate"></div>
                        </div>
                        <div class="accurate-notify d-flex align-items-center fs-4 fw-bold ms-3" style="color: #58A700">
                            Ch??nh x??c!</div>
                    </div>
                    <div v-else class="inaccurate d-flex align-items-center">
                        <div class="img-inaccurate d-flex justify-content-center align-items-center">
                            <div class="icon icon-inaccurate"></div>
                        </div>
                        <div class="inaccurate-notify ms-3">
                            <div class="correct-text fw-bold fs-4" style="color: #ea2b2b">
                                Sai r???i!
                            </div>
                            <div class="correct-answer" style="color: #ea2b2b">
                                ????p ??n: {{ questions[indexQues].answer }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-btn-wrapper skip-btn" @click="skipClick">
                    <div class="my-btn">
                        B??? qua
                    </div>
                </div>
                <div v-show="questions[indexQues] && questions[indexQues].is_show_switch" class="switch-input fs-5"
                    @click="toggleSwitch = !toggleSwitch">
                    <div v-if="toggleSwitch" class="switch-input-wrapper d-flex align-items-center">
                        <div class="icon-keyboard me-3"></div>
                        S??? D???NG B??N PH??M
                    </div>
                    <div v-else class="switch-input-wrapper d-flex align-items-center">
                        <div class="icon-word-bank me-3"></div>
                        S??? D???NG KHO T??? V???NG
                    </div>
                </div>
                <div class="my-btn-wrapper check-btn" @click="btnCheckSelectedWord">
                    <div class="my-btn">
                        Ki???m tra
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import allQuestions from '../assets/js/data.js';
import $ from "jquery";
import baseURL from "../assets/enum";
import QuesMultiWords from "../components/QuesMultiWords.vue";
import QuesSelectHorizon from "../components/QuesSelectHorizon.vue";
import QuesSelectPair from "../components/QuesSelectPair.vue";
import QuesHearSelect from "../components/QuesHearSelect.vue";
import QuesHearSelectMulti from "../components/QuesHearSelectMulti.vue";
import QuesSpeak from "../components/QuesSpeak.vue";
import Loading from "../components/Loading.vue";
export default {
    components: {
        QuesMultiWords,
        QuesSelectHorizon,
        QuesSelectPair,
        QuesHearSelect,
        QuesHearSelectMulti,
        QuesSpeak,
        Loading
    },
    beforeMount(){
        this.getLessonQuestions();
    },
    data() {
        return {
            isShowLoading: true,
            indexQues: 0,
            numberCorrect: 0,
            streakCorrect: 0,
            lang_: "en-US",
            toggleSwitch: true,
            correctAll: null,
            correct: 0,
            questions: [],
            isShowFinish: false,
        }
    },
    methods: {
        // Ph??t ra ??m thanh t??? text
        speakWord(text, lang, speed) {
            if (lang == "EN") {
                this.lang_ = "en-US";
                window.speechSynthesis.cancel();
                var voices = window.speechSynthesis.getVoices();
                var msg = new SpeechSynthesisUtterance();
                msg.text = text;
                msg.lang = this.lang_;
                // let ramdom = Math.floor(Math.random() * voices.length);
                // console.log(ramdom);
                msg.voice = voices[2];
                msg.pitch = 1.8;
                msg.volume = 1;
                if(speed) {
                    msg.rate = speed;
                }
                window.speechSynthesis.speak(msg);
            }
        },
        // H??m ki???m tra ????p ??n
        btnCheckSelectedWord() {
            if (this.correctAll == null) {
                let userAnswer = "";
                switch(this.indexQues) {
                    case 0:
                    case 4:    
                        if (this.toggleSwitch) {
                            let selectedWords = $(".selected-words").children();
                            let selectedWordsText = [];
                            for (let i = 0; i < selectedWords.length; i++) {
                                selectedWordsText.push(selectedWords[i].innerText.toLocaleLowerCase());
                            }
                            userAnswer = selectedWordsText.join(" ");
                        }
                        else {
                            userAnswer = $(".answer-area textarea").val();
                            userAnswer = userAnswer.trim().toLocaleLowerCase();
                        }
                        var res = (userAnswer == this.questions[this.indexQues].answer.toLocaleLowerCase());
                        this.checkAnswer(res);
                        break;
                    case 1:
                    case 3:        
                        userAnswer = $(".word-wrapper.selected").text().trim().toLocaleLowerCase();
                        res = (userAnswer == this.questions[this.indexQues].answer.toLocaleLowerCase());
                        this.checkAnswer(res);
                        break;
                    case 2:
                        break;
                    case 5:
                        userAnswer = $(".text-speech").text().trim().toLocaleLowerCase();
                        res = (userAnswer == `${this.questions[this.indexQues].answer.toLocaleLowerCase()}.`);
                        this.checkAnswer(res);
                        // this.indexQues++;
                        break;             
                }
            }
            else {
                if(!this.isShowFinish) {
                    if(this.indexQues == 5) {
                    this.resetFooter();
                    $(".check-btn .my-btn").text("Ti???p t???c");
                    this.isShowFinish = true;
                    }
                    else {
                        this.indexQues++;
                        // Th???c hi???n chuy???n c??u h???i
                        this.correctAll = null;
                        this.resetFooter();
                    }
                }
                else {
                    this.isShowFinish = false;
                    this.isShowLoading = true;
                    this.updateData();
                }
            }
        },
        // H??m th???c hi???n x??? l?? b??? qua c??u h???i
        skipClick() {
            this.checkAnswer(null);
        },
        // H??m reset footer
        resetFooter() {
            $(".selected-words").empty();
            $(".answer-area textarea").val("");
            $(".footer").removeClass("correct");
            $(".footer").removeClass("incorrect");
            $(".check-btn").css("background", "#3d8d00");
            $(".check-btn > .my-btn").css("background", "#58CC02");
            $(".result").addClass("d-none");
            $(".skip-btn").removeClass("d-none");
            $(".check-btn .my-btn").text("Ki???m tra");
        },
        // H??m hi???n th??? footer -> ????ng
        correctFooter() {
            $(".footer").removeClass("incorrect");
            $(".footer").addClass("correct");
            $(".skip-btn").addClass("d-none");
            $(".check-btn").css("background", "#3d8d00");
            $(".check-btn > .my-btn").css("background", "#58CC02");
        },
        // H??m hi???n th??? footer -> sai
        inCorrectFooter() {
            $(".skip-btn").addClass("d-none");
            $(".check-btn").css("background", "#a10e0a");
            $(".check-btn > .my-btn").css("background", "#ea2b2b");
            $(".footer").removeClass("correct");
            $(".footer").addClass("incorrect"); 
        },
        // H??m ki???m tra ????p ??n
        checkAnswer(userAnswer) {
            if (userAnswer == true) {
                this.correctAll = true;
                this.numberCorrect++;
                this.streakCorrect++;
                this.correctFooter();
            }
            else {
                this.correctAll = false;
                this.streakCorrect = 0;
                this.inCorrectFooter();
            }
            $(".result").removeClass("d-none");
            $(".check-btn .my-btn").text("Ti???p t???c");
        },
        // H??m th???c hi???n quay l???i home
        backAction() {
            this.$router.push("/home");
        },
        // H??m l???y ra c??u h???i c???a b??i h???c
        getLessonQuestions() {
            let me = this,
                loginUserId = this.$store.getters['AUTH/userId'];
                
            this.axios.get(`${baseURL}api/Lesson/QuestionRand?userID=${loginUserId}`)
            .then(res => {
                if(res.data && res.data.length > 0) {
                    let arrQuestions = res.data.map(item => JSON.parse(item.content.toString()));
                    arrQuestions = arrQuestions.sort((a,b) => a.id - b.id);
                    me.questions = arrQuestions;
                    setTimeout(() => {
                        me.isShowLoading = false;
                    }, 1000);
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        // H??m th???c hi???n update th??ng tin sau khi ho??n th??nh
        updateData() {
            let me = this,
                loginUserId = this.$store.getters['AUTH/userId'],
                lessonId = this.$store.getters['AUTH/currentLessonId'];

            this.axios
                .post(`${baseURL}api/Lesson/Word?userId=${loginUserId}&lessonId=${lessonId}&isPractise=true`)
                .then((response) => {
                    if (response.data) {
                        console.log(response.data);
                        // Th???c hi???n chuy???n v??? trang home
                        setTimeout(() => {
                            me.isShowLoading = false;
                            this.$router.push({name: "Home",params: {isFinish: true}});
                        }, 1000);
                    }
                });
        }
    },
    watch: {
        toggleSwitch: function (val) {
            if (val == false) {
                this.$nextTick(function () {
                    $("textarea").focus();
                });
            }
        },
        indexQues: function (val) {
            const totalQues = this.questions.length;
            $(".process-bar-done").css("width", `${(val / totalQues) * 100}%`);
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.process {
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.process-bar {
    width: 90%;
    height: 16px;
    background-color: #e5e5e5;
    border-radius: 10px;
}

.process-bar-done {
    position: relative;
    width: 0%;
    height: 16px;
    background-color: #58cc02;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.process-bar-done:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 10px;
    right: 10px;
    height: 5px;
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.2;
}

.play-content {
    width: 100%;
    height: calc(100vh - 235px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
}

.play-content > div {
    width: 70%;
    height: 70%;
}

.play-content .title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

.play-content .ques-img {
    width: 100px;
    height: 100px;
}

.play-content .ques-text {
    font-size: 20px;
    padding: 15px;
    border: 2px solid #ebebeb;
    border-radius: 15px;
}

.play-content .selected-words {
    height: 60px;
    width: 100%;
    border-top: 2px solid #ebebeb;
    border-bottom: 2px solid #ebebeb;
}

.play-content textarea {
    width: 70%;
    height: 200px;
    border: 2px solid #ebebeb;
    outline: none;
    resize: none;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(235, 235, 235);
}

/* ****************************** FOOTER *******************************/
.footer {
    width: 100%;
    height: 140px;
    min-height: 140px;
    overflow: hidden;
    border-top: 2px solid #ebebeb;
}

.footer.correct {
    background-color: #d7ffb8;
}

.footer.incorrect {
    background-color: #ffdfe0;
}

.default {
    height: 140px;
}

.my-btn-wrapper {
    position: relative;
    width: 150px;
    height: 50px;
    border-radius: 12px;
    background: #c7c7c7;
    cursor: pointer;
}

.my-btn {
    position: absolute;
    top: -1px;
    width: 150px;
    height: 48px;
    border-radius: 12px;
    border: 2px solid #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #afafaf;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bolder;
    transition: all 0.2s ease-in-out;
}

.skip-btn>.my-btn {
    background-color: #fff;
}

.skip-btn>.my-btn:hover {
    background-color: #dbdbdb;
}

.my-btn-wrapper.check-btn {
    background-color: #3d8d00;
}

.check-btn>.my-btn {
    background-color: #58cc02;
    color: #fff;
    border: none;
}

.check-btn>.my-btn:hover {
    background-color: #6be012;
}

.switch-input {
    color: #afafaf;
    font-weight: bolder;
    cursor: pointer;
}

.switch-input:hover>div {
    opacity: 0.7;
    user-select: none;
}

.switch-input:hover {
    color: rgb(197, 197, 197);
}

.finish {
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.finish-content img{
    width: 200px;
    height: 200px;
}

@media screen and (max-width: 768px) {
    .play-content {
        padding: 0;
    }

    .play-content > div {
        width: 90%;
        height: 85%;
    }

    .footer .container {
        padding: 0 !important;
        flex-direction: column;
        justify-content: space-around !important;
    }

    .skip-btn, .switch-input {
        display: none;
    }

    .check-btn {
        width: 90%;
    }

    .my-btn {
        width: 100%;
    }
}
</style>