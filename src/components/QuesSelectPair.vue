<!-- eslint-disable prettier/prettier -->
<template>
    <div class="ques-3">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="answer-area d-flex justify-content-center" style="width: 100%;">
            <div class="answer-words-wrapper d-flex justify-content-between" style="width: 100%;">
                <div class="answer-words left" style="width: 45%;">
                    <div v-for="(word) in question.arr_words.arr" :key="word"
                        class="word-wrapper d-flex justify-content-center my-3" :data="word.value">
                        <button type="button" @click="btnWordClick3" class="my-button long">
                            {{ word.name }}
                        </button>
                    </div>
                </div>
                <div class="answer-words right" style="width: 45%;">
                    <div v-for="(word) in question.arr_words.arr2" :key="word"
                        class="word-wrapper d-flex justify-content-center my-3" :data="word.value">
                        <button type="button" @click="btnWordClick3" class="my-button long">
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
    },
    data() {
        return {
            correct : 0
        }
    },
    methods: {
        btnWordClick3(e) {
            let btn = e.target;
            let length = this.question.arr_words.arr.length;
            $(btn).parent().siblings().removeClass("selected");
            if (!$(btn).parent().hasClass("disabled")) {
                $(btn).parent().addClass("selected");
            }

            let leftSelect = $(".left .selected");
            let rightSelect = $(".right .selected");
            this.speakWord($(rightSelect).text(), this.question.arr_words.lang);
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
        speakWord(text, lang) {
            this.$emit("speakWord", text, lang);
        },
        checkAnswer(isCorrect) {
            this.$emit("checkAnswer", isCorrect);
        },
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
</style>