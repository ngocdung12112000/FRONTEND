<!-- eslint-disable prettier/prettier -->
<template>
    <div class="ques-2">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="answer-area d-flex align-items-center" style="width: 100%;">
            <div class="img-speaker-large-wrapper d-flex align-items-center justify-content-center me-3" style="width: 20%;">
                <div class="img-speaker-large" @click="speakWord(question.answer, 'EN')">
                    <img style="width: 80px; height: 78px;" src="../assets/images/ICON/k.svg" alt="">
                </div>
            </div>
            <div class="answer-words-wrapper" style="width: 80%;">
                <div class="answer-words d-flex justify-content-between flex-wrap" style="width: 100%;">
                    <div v-for="(word, index) in question.arr_words.arr" :key="word"
                        class="word-wrapper d-flex justify-content-center my-3" style="width: 48%;">
                        <button type="button" :id="`word${index}`" @click="btnWordClick4" class="my-button long">
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
    mounted() {
        setTimeout(() => {
            this.speakWord(this.question.answer, "EN");
        }, 900);
    },
    data() {
        return {
        }
    },
    methods: {
        // Hàm thực hiện bấm vào chọn một đáp án
        btnWordClick4(e) {
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

.img-speaker-large {
    width: 150px;
    height: 150px;
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

.img-speaker-large:hover {
    background-color: #0692d3;
}

.my-button:hover {
    background-color: #dbdbdb;
}

</style>