<!-- eslint-disable prettier/prettier -->
<template>
    <div>
        <div class="container position-relative">
            <div class="process mt-3">
                <div class="icon icon-cancel me-3"></div>
                <div class="process-bar">
                    <div class="process-bar-done"></div>
                </div>
            </div>
            <div class="play-content">
                <div class="ques-1" v-show="indexQues == 0">
                    <div class="title mb-5">{{ questions[0].question_text.name }}</div>
                    <div class="ques-content mb-3 d-flex justify-content-center align-items-center ">
                        <div class="ques-img me-3">
                            <img src="../assets/images/STORY/s1.svg" alt="">
                        </div>
                        <div class="ques-text d-flex align-items-center">
                            <div @click="speakWord(questions[0].question_text.text, questions[0].question_text.lang)"
                                class="icon icon-speaker me-2"></div>
                            <span>{{ questions[0].question_text.text }}</span>
                        </div>
                    </div>
                    <div class="answer-area d-flex justify-content-center" style="width: 100%;">
                        <textarea v-if="!toggleSwitch" placeholder="Nhập đáp án..." @keyup.enter="btnCheckSelectedWord"
                            ref="textareaAnswer"></textarea>
                        <div v-else class="answer-words-wrapper" style="width: 100%;">
                            <div class="selected-words my-2 d-flex align-items-center"></div>
                            <div class="answer-words d-flex justify-content-center mt-5">
                                <div v-for="(word, index) in questions[0].arr_words.arr" :key="word"
                                    class="word-wrapper d-flex justify-content-center me-2">
                                    <button type="button" :id="`word${index}`" @click="btnWordClick" class="my-button">
                                        {{ word.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ques-2" v-show="indexQues == 1">
                    <div class="title mb-5">{{ questions[1].question_text.name }}</div>
                    <div class="answer-area " style="width: 100%;">
                        <div class="answer-words-wrapper" style="width: 100%;">
                            <div class="answer-words mt-5">
                                <div v-for="(word, index) in questions[indexQues].arr_words.arr" :key="word"
                                    class="word-wrapper d-flex justify-content-center my-3">
                                    <button type="button" :id="`word${index}`" @click="btnWordClick2"
                                        class="my-button long">
                                        {{ word.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ques-3" v-show="indexQues == 2">
                    <div class="title mb-5">{{ questions[2].question_text.name }}</div>
                    <div class="answer-area d-flex justify-content-center" style="width: 100%;">
                        <div class="answer-words-wrapper d-flex justify-content-between" style="width: 100%;">
                            <div class="answer-words left" style="width: 45%;">
                                <div v-for="(word) in questions[indexQues].arr_words.arr" :key="word"
                                    class="word-wrapper d-flex justify-content-center my-3" :data="word.value">
                                    <button type="button" @click="btnWordClick3"
                                        class="my-button long">
                                        {{ word.name }}
                                    </button>
                                </div>
                            </div>
                            <div class="answer-words right" style="width: 45%;">
                                <div v-for="(word) in questions[indexQues].arr_words.arr2" :key="word"
                                    class="word-wrapper d-flex justify-content-center my-3" :data="word.value">
                                    <button type="button" @click="btnWordClick3"
                                        class="my-button long">
                                        {{ word.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ques-2" v-show="indexQues == 3">
                    <div class="title mb-5">{{ questions[3].question_text.name }}</div>
                    <div class="answer-area " style="width: 100%;">
                        <div class="answer-words-wrapper" style="width: 100%;">
                            <div class="answer-words mt-5">
                                <div v-for="(word, index) in questions[indexQues].arr_words.arr" :key="word"
                                    class="word-wrapper d-flex justify-content-center my-3">
                                    <button type="button" :id="`word${index}`" @click="btnWordClick2"
                                        class="my-button long">
                                        {{ word.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
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
                            Chính xác!</div>
                    </div>
                    <div v-else class="inaccurate d-flex align-items-center">
                        <div class="img-inaccurate d-flex justify-content-center align-items-center">
                            <div class="icon icon-inaccurate"></div>
                        </div>
                        <div class="inaccurate-notify ms-3">
                            <div class="correct-text fw-bold fs-4" style="color: #ea2b2b">
                                Sai rồi!
                            </div>
                            <div class="correct-answer" style="color: #ea2b2b">
                                Đáp án: {{ questions[indexQues].answer }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-btn-wrapper skip-btn">
                    <div class="my-btn">
                        Bỏ qua
                    </div>
                </div>
                <div v-show="questions[indexQues].is_show_switch" class="switch-input fs-5"
                    @click="toggleSwitch = !toggleSwitch">
                    <div v-if="toggleSwitch" class="switch-input-wrapper d-flex align-items-center">
                        <div class="icon-keyboard me-3"></div>
                        SỬ DỤNG BÀN PHÍM
                    </div>
                    <div v-else class="switch-input-wrapper d-flex align-items-center">
                        <div class="icon-word-bank me-3"></div>
                        SỬ DỤNG KHO TỪ VỰNG
                    </div>
                </div>
                <div class="my-btn-wrapper check-btn" @click="btnCheckSelectedWord">
                    <div class="my-btn">
                        Kiểm tra
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
    props: {
        currentPageUser: {
            type: Number,
            required: true
        },
        currentLessonUser: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            indexQues: 0,
            numberCorrect: 0,
            streakCorrect: 0,
            lang_: "en-US",
            toggleSwitch: true,
            correctAll: null,
            correct: 0,
            questions: [
                {
                    id: 1,
                    question_text: {
                        name: "Viết lại bằng tiếng Việt",
                        text: "Two hats",
                        lang: "EN"
                    },
                    arr_words: {
                        arr: [
                            {
                                id: 1,
                                name: "ô",
                                value: 1,
                            },
                            {
                                id: 2,
                                name: "xe",
                                value: 2,
                            },
                            {
                                id: 3,
                                name: "mũ",
                                value: 3,
                            },
                            {
                                id: 4,
                                name: "chiếc",
                                value: 4,
                            },
                            {
                                id: 5,
                                name: "Hai",
                                value: 5,
                            }
                        ],
                        lang: "VN"
                    },
                    answer: "Hai chiếc mũ",
                    is_show_switch: true
                },
                {
                    id: 2,
                    question_text: {
                        name: `Làm sao để nói "những chiếc áo khoác?"`,
                        text: "",
                        lang: "VN"
                    },
                    arr_words: {
                        arr:[
                            {
                                id: 1,
                                name: "Good morning",
                                value: 1,
                            },
                            {
                                id: 2,
                                name: "hi",
                                value: 2,
                            },
                            {
                                id: 3,
                                name: "coats",
                                value: 3,
                            },
                        ],
                        lang: "EN"
                    },
                    answer: "coats",
                    is_show_switch: false
                },
                {
                    id: 3,
                    question_text: {
                        name: `Chọn cặp từ`,
                        text: "",
                        lang: "VN"
                    },
                    arr_words: {
                        arr: [
                            {
                                id: 1,
                                name: "này",
                                value: 1,
                            },
                            {
                                id: 2,
                                name: "thích",
                                value: 2,
                            },
                            {
                                id: 3,
                                name: "màu đen",
                                value: 3,
                            },
                            {
                                id: 4,
                                name: "xin chào",
                                value: 4,
                            },
                            {
                                id: 5,
                                name: "màu đỏ",
                                value: 5,
                            }
                        ],
                        arr2: [
                            {
                                id: 1,
                                name: "black",
                                value: 3,
                            },
                            {
                                id: 2,
                                name: "red",
                                value: 5,
                            },
                            {
                                id: 3,
                                name: "hi",
                                value: 4,
                            },
                            {
                                id: 4,
                                name: "this",
                                value: 1,
                            },
                            {
                                id: 5,
                                name: "like",
                                value: 2,
                            }
                        ],
                        lang: "EN"
                    },
                    answer: "",
                    is_show_switch: false
                },
                {
                    id: 4,
                    question_text: {
                        name: `Làm sao để nói "những chiếc áo khoác?"`,
                        text: "",
                        lang: "VN"
                    },
                    arr_words: {
                        arr:[
                            {
                                id: 1,
                                name: "Good morning",
                                value: 1,
                            },
                            {
                                id: 2,
                                name: "hi",
                                value: 2,
                            },
                            {
                                id: 3,
                                name: "coats",
                                value: 3,
                            },
                        ],
                        lang: "EN"
                    },
                    answer: "coats",
                    is_show_switch: false
                },
            ]
        }
    },
    methods: {
        // Phát ra âm thanh từ text
        speakWord(text, lang) {
            if (lang == "EN") {
                this.lang_ = "en-US";
                window.speechSynthesis.cancel();
                var voices = window.speechSynthesis.getVoices();
                var msg = new SpeechSynthesisUtterance();
                msg.text = text;
                msg.lang = this.lang_;
                msg.voice = voices[2];
                msg.pitch = 1.8;
                window.speechSynthesis.speak(msg);
            }
        },
        // Hàm thực hiện bấm vào chọn nhiều đáp án
        btnWordClick(e) {
            const thisBtn = e.target;
            const thisBtnId = thisBtn.id;
            this.speakWord(thisBtn.innerText);

            const cloneBtn = $(thisBtn).clone();
            $(cloneBtn).addClass("me-2");
            $(cloneBtn).click(function () {
                $(this).remove();
                $(`#${thisBtnId}`).css("opacity", "1");
            });
            $(".selected-words").append(cloneBtn);
            $(thisBtn).css("opacity", "0");
        },
        // Hàm thực hiện bấm vào chọn một đáp án
        btnWordClick2(e) {
            const thisBtn = e.target;
            $(".word-wrapper").removeClass("selected");
            $(thisBtn).parent().addClass("selected");
            this.speakWord(thisBtn.innerText, this.questions[1].arr_words.lang);
        },
        // Hàm thực hiện bấm vào chọn một cặp từ
        btnWordClick3(e) {
            let btn = e.target;
            let length = this.questions[2].arr_words.arr.length;
            $(btn).parent().siblings().removeClass("selected");
            if (!$(btn).parent().hasClass("disabled")) {
                $(btn).parent().addClass("selected");
            }

            let leftSelect = $(".left .selected");
            let rightSelect = $(".right .selected");
            this.speakWord($(rightSelect).text(), this.questions[2].arr_words.lang);
            if (leftSelect.length > 0 && rightSelect.length > 0) {
                let leftValue = leftSelect.attr("data");
                let rightValue = rightSelect.attr("data");
                if (leftValue == rightValue) {
                    $(leftSelect).addClass("ok");
                    $(rightSelect).addClass("ok");
                    setTimeout(() => {
                        $(leftSelect).removeClass("ok");
                        $(rightSelect).removeClass("ok");
                        $(leftSelect).removeClass("selected").addClass("disabled");
                        $(rightSelect).removeClass("selected").addClass("disabled");
                    }, 500);
                    this.correct++;
                    if (this.correct == length) {
                        // this.correctAll = true;
                        this.checkAnswer(true);
                    }
                } else {
                    $(".word-wrapper").removeClass("selected");
                    $(leftSelect).addClass("wrong");
                    $(rightSelect).addClass("wrong");
                    setTimeout(() => {
                        $(leftSelect).removeClass("wrong");
                        $(rightSelect).removeClass("wrong");
                    }, 500);
                }
            }
        },
        // Hàm kiểm tra đáp án
        btnCheckSelectedWord() {
            if (this.correctAll == null) {
                let userAnswer = "";
                switch(this.indexQues) {
                    case 0:
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
                        console.log(res);
                        this.checkAnswer(res);
                        break;
                    case 1:
                        userAnswer = $(".word-wrapper.selected").text().trim().toLocaleLowerCase();
                        res = (userAnswer == this.questions[this.indexQues].answer.toLocaleLowerCase());
                        this.checkAnswer(res);
                        break;
                    case 2:
                        // this.checkAnswer(true);
                        break;    
                }
            }
            else {
                if(this.indexQues == 5) {
                    // Thực hiện lưu dữ liệu

                    // Thực hiện trở về home
                    this.$router.push("/");
                }
                else {
                    this.indexQues++;
                    // Thực hiện chuyển câu hỏi
                    this.correctAll = null;
                    this.resetFooter();
                }
            }
        },
        resetFooter() {
            $(".selected-words").empty();
            $(".answer-area textarea").val("");
            $(".footer").removeClass("correct");
            $(".footer").removeClass("incorrect");
            $(".check-btn").css("background", "#3d8d00");
            $(".check-btn > .my-btn").css("background", "#58CC02");
            $(".result").addClass("d-none");
            $(".skip-btn").removeClass("d-none");
        },
        correctFooter() {
            $(".footer").removeClass("incorrect");
            $(".footer").addClass("correct");
            $(".skip-btn").addClass("d-none");
            $(".check-btn").css("background", "#3d8d00");
            $(".check-btn > .my-btn").css("background", "#58CC02");
        },
        inCorrectFooter() {
            $(".skip-btn").addClass("d-none");
            $(".check-btn").css("background", "#a10e0a");
            $(".check-btn > .my-btn").css("background", "#ea2b2b");
            $(".footer").removeClass("correct");
            $(".footer").addClass("incorrect"); 
        },
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
            $(".check-btn .my-btn").text("Tiếp tục");
        }
    },
    watch: {
        toggleSwitch: function (val) {
            if (val == false) {
                this.$nextTick(function () {
                    this.$refs.textareaAnswer.focus();
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

.play-content>div {
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
</style>