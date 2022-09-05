<!-- eslint-disable prettier/prettier -->
<template>
    <div class="ques-6">
        <div class="title mb-5">{{ question.question_text.name }}</div>
        <div class="ques-content mb-5 d-flex justify-content-center align-items-center">
            <div class="ques-img me-3">
                <img src="../assets/images/STORY/s1.svg" alt="">
            </div>
            <div class="ques-text d-flex align-items-center">
                <div @click="speakWord(question.question_text.text, question.question_text.lang)"
                    class="icon icon-speaker me-2"></div>
                <span>{{ question.question_text.text }}</span>
            </div>
        </div>
        <div class="answer-area d-flex align-items-center justify-content-center flex-column" style="width: 100%;">
            <div class="img-mic-wrapper d-flex align-items-center justify-content-center me-3 mb-5" @click="startSpeechToTxt">
                <div class="icon icon-mic me-3"></div>
                <div class="fs-4 fw-bolder text-black-50"> Nhấn để đọc </div>
            </div>
            <div class="text-speech fs-5">
                {{ runtimeTranscription_ }}
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
            runtimeTranscription_: "",
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
        startSpeechToTxt() {
            window.SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;
            const recognition = new window.SpeechRecognition();
            recognition.lang = "en-US";
            recognition.interimResults = true;

            // event current voice reco word
            recognition.addEventListener("result", event => {
                var text = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("");
                this.runtimeTranscription_ = text;
            });
            // end of transcription
            recognition.addEventListener("end", () => {
                this.runtimeTranscription_ = this.runtimeTranscription_.trim();
                recognition.stop();
            });
            recognition.start();
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

.img-mic-wrapper {
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 2px solid #e6e6e6;
    cursor: pointer;
}

.img-mic-wrapper:hover {
    background-color: rgb(219, 219, 219);
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
</style>