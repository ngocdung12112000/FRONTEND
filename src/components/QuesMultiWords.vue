<!-- eslint-disable prettier/prettier -->
<template>
    <div v-if="question" class="ques-1">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="ques-content mb-3 d-flex justify-content-center align-items-center ">
            <div class="ques-img me-3">
                <img src="../assets/images/STORY/s1.svg" alt="">
            </div>
            <div class="ques-text d-flex align-items-center">
                <div @click="speakWord(question.question_text.text, question.question_text.lang)"
                    class="icon icon-speaker me-2"></div>
                <span>{{ question.question_text.text }}</span>
            </div>
        </div>
        <div class="answer-area d-flex justify-content-center" style="width: 100%;">
            <textarea v-if="!toggleSwitch" placeholder="Nhập đáp án..." @keyup.enter="onEnterTextArea"
                ref="textareaAnswer"></textarea>
            <div v-else class="answer-words-wrapper" style="width: 100%;">
                <div class="selected-words my-2 d-flex align-items-center flex-wrap"></div>
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
        speakWord(text, lang) {
            this.$emit("speakWord", text, lang);
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
    min-height: 60px;
    width: 100%;
    border-top: 2px solid #ebebeb;
    border-bottom: 2px solid #ebebeb;
    padding: 10px 0;
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

@media screen and (max-width: 768px) {
    .title {
        margin-bottom: 20px !important;
    }
}
</style>