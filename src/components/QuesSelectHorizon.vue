<!-- eslint-disable prettier/prettier -->
<template>
    <div class="ques-2">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="answer-area " style="width: 100%;">
            <div class="answer-words-wrapper" style="width: 100%;">
                <div class="answer-words mt-5">
                    <div v-for="(word, index) in question.arr_words.arr" :key="word"
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
        }
    },
    methods: {
        // Hàm thực hiện bấm vào chọn một đáp án
        btnWordClick2(e) {
            const thisBtn = e.target;
            $(".word-wrapper").removeClass("selected");
            $(thisBtn).parent().addClass("selected");
            this.speakWord(thisBtn.innerText, this.question.arr_words.lang);
        },
        speakWord(text, lang) {
            this.$emit("speakWord", text, lang);
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