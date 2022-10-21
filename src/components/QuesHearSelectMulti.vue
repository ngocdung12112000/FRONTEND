<!-- eslint-disable prettier/prettier -->
<template>
    <div v-if="question" class="ques-5">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="ques-content mb-3 d-flex justify-content-center align-items-center ">
            <div class="img-speaker-large-wrapper d-flex align-items-center justify-content-center me-5" >
                <div class="img-speaker-large" @click="speakWord(question.answer, 'EN')">
                    <img style="width: 50px; height: 48px;" src="../assets/images/ICON/k.svg" alt="">
                </div>
            </div>
            <div class="img-speaker-large-wrapper d-flex align-items-center justify-content-center me-3">
                <div class="img-speaker-slow" @click="speakWord(question.answer, 'EN', 0.3)">
                    <img style="width: 40px; height: 38px;" src="../assets/images/ICON/slow.svg" alt="">
                </div>
            </div>
        </div>
        <div class="answer-area d-flex justify-content-center" style="width: 100%;">
            <textarea v-if="!toggleSwitch" placeholder="Nhập đáp án..." @keyup.enter="onEnterTextArea"
                ref="textareaAnswer"></textarea>
            <div v-else class="answer-words-wrapper" style="width: 100%;">
                <div class="selected-words my-2 d-flex align-items-center"></div>
                <div class="answer-words d-flex justify-content-center mt-5 flex-wrap">
                    <div v-for="(word, index) in question.arr_words.arr" :key="word"
                        class="word-wrapper d-flex justify-content-center me-2 mb-2">
                        <button type="button" :id="`word${index}`" @click="btnWordClick" class="my-button">
                            {{ word.name }}
                        </button>
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
    mounted() {
        setTimeout(() => {
            this.speakWord(this.question.answer, "EN");
        }, 900);
    },
    props: {
        question: {
            type: Object,
            required: true
        },
        toggleSwitch: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {

        }
    },
    methods: {
        btnWordClick(e) {
            const thisBtn = e.target;
            const thisBtnId = thisBtn.id;
            this.speakWord(thisBtn.innerText, "EN");

            const cloneBtn = $(thisBtn).clone();
            $(cloneBtn).addClass("me-2");
            $(cloneBtn).click(function () {
                $(this).remove();
                $(`#${thisBtnId}`).css("opacity", "1");
            });
            $(".selected-words").append(cloneBtn);
            $(thisBtn).css("opacity", "0");
        },
        speakWord(text, lang, speed) {
            this.$emit("speakWord", text, lang, speed);
        },
        onEnterTextArea() {
            this.$emit("onEnterTextArea");
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

.ques-img {
    width: 100px;
    height: 100px;
}

.ques-text {
    font-size: 20px;
    padding: 15px;
    border: 2px solid #ebebeb;
    border-radius: 15px;
}

.selected-words {
    height: 60px;
    width: 100%;
    border-top: 2px solid #ebebeb;
    border-bottom: 2px solid #ebebeb;
}

textarea {
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

.img-speaker-slow,
.img-speaker-large {
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-color: rgb(28, 176, 246);
    border-radius: 20px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 14px 28px rgba(0, 99, 145, 0.25), 0 10px 10px rgba(0, 99, 145,0.22);
}
.img-speaker-slow:hover,
.img-speaker-large:hover {
    background-color: #0692d3;
}

.img-speaker-slow {
    width: 70px;
    height: 70px;
}
</style>