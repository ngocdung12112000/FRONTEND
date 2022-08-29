<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="d-flex">
        <div class="col left">
            <div v-for="item in arrL" :key="item.id" @click="btnClick" class="btn" :data="item"> {{ item.name }} </div>
        </div>
        <div class="col right">
            <div v-for="item in arrR" :key="item.id" @click="btnClick" class="btn" :data="item"> {{ item.name }} </div>
        </div>
        <button class="speech-to-txt" @click="startSpeechToTxt">Speech to txt</button>
        <button class="speech-to-txt" @click="btnCheckClick">Check</button>
        <h2 @click="speakWord(sentence)">{{ sentence }}</h2> <br/>
        <p> {{ runtimeTranscription_ }} </p><br/>
        <a href="" class="collection-item">Michael</a>
        <h1></h1>
    </div>
    <div>
        <p>Dòng này</p> <br/>
        <div class="words-selected d-flex border-bottom p-2">
            <!-- <button type="button" class="btn me-2 btn-outline-secondary">Hi</button> -->
        </div>
    </div> <br/>
    <div class="d-flex justify-content-center">
        <div v-for="(word,index) in arrWords" :key="word" class="word-wrapper d-flex justify-content-center me-2">
            <button  type="button" :id="`word${index}`"
                @click="btnWordClick" 
                class="btn btn-light btn-outline-secondary">
                {{ word }}
            </button>
        </div>
    </div> <br/>
    <button class="check-words btn btn-primary" @click="btnCheckSelectedWord">Check</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
export default {
  name: "Prepare",
  data() {
    return {
        runtimeTranscription_: "",
        sentence: "A woman talks to Vikram in a store",
        lang_: "en-US",
        correct: 0,
        correctAll: false,
        arrL: [
            {
                id: 1,
                name: "1",
                value: 1,
            },
            {
                id: 2,
                name: "2",
                value: 2,
            },
            {
                id: 3,
                name: "3",
                value: 3,
            },
        ],
        arrR: [
            {
                id: 1,
                name: "Two",
                value: 2,
            },
            {
                id: 2,
                name: "Three",
                value: 3,
            },
            {
                id: 3,
                name: "One",
                value: 1,
            },
        ],
        arrWords: ["This","is","That","your","my","house"],
    };
  },
  methods: {
    // Phát ra âm thanh từ text
    speakWord(text) {
      window.speechSynthesis.cancel();
      var voices = window.speechSynthesis.getVoices();
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = this.lang_;
      msg.voice = voices[2];
      msg.pitch = 1.8;
      window.speechSynthesis.speak(msg);
    },
    // Xử lý giọng nói sang text
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
    btnWordClick(e) {
        const thisBtn = e.target;
        const thisBtnId = thisBtn.id;
        this.speakWord(thisBtn.innerText);
        
        const cloneBtn = $(thisBtn).clone();
        $(cloneBtn).addClass("me-2");
        $(cloneBtn).click(function() {
            $(this).remove();
            $(`#${thisBtnId}`).css("opacity", "1");
        });
        $(".words-selected").append(cloneBtn);
        $(thisBtn).css("opacity", "0");
    },
    btnCheckClick() {
      if(this.runtimeTranscription_ == `${this.sentence}.`) {
        this.correctAll = true;
      }
      else {
        $("h1").text("Sai rồi lại nào");
        this.correctAll = false;
      }
    },
    btnCheckSelectedWord() {
        let selectedWords = $(".words-selected").children();
        let selectedWordsText = [];
        for(let i = 0; i < selectedWords.length; i++) {
            selectedWordsText.push(selectedWords[i].innerText);
        }
        if(selectedWordsText.join(" ") == this.sentence) {
            this.correctAll = true;
        }
        else {
            $("h1").text("Sai rồi lại nào");
            this.correctAll = false;
        }
    },
    btnClick(e) {
      let btn = e.target;
      $(btn).siblings().removeClass("selected");
      if (!$(btn).hasClass("disabled")) {
        $(btn).addClass("selected");
      }

      let leftSelect = $(".left .selected");
      let rightSelect = $(".right .selected");
      this.speakWord($(rightSelect).text());
      if (leftSelect.length > 0 && rightSelect.length > 0) {
        let leftValue = leftSelect.attr("data");
        let rightValue = rightSelect.attr("data");
        console.log(leftValue, rightValue);
        if (leftValue == rightValue) {
          $(leftSelect).removeClass("selected").addClass("disabled");
          $(rightSelect).removeClass("selected").addClass("disabled");
          this.correct++;
          if (this.correct == this.arrL.length) {
            this.correctAll = true;
          }
        } else {
          $(".col .btn").removeClass("selected");
          $(leftSelect).addClass("wrong");
          $(rightSelect).addClass("wrong");
          setTimeout(() => {
            $(leftSelect).removeClass("wrong");
            $(rightSelect).removeClass("wrong");
          }, 500);
        }
      }
    },
  },
  watch: {
    correctAll() {
      if (this.correctAll == true) {
        $("h1").text("Chúc mừng bạn đã hoàn thành bài thi");
        this.correctAll = false;
        this.correct = 0;
      }
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>

.word-wrapper {
    background-color: #cfcfcf;
    border-radius: 5px;
    padding: 3px;
}

.words-selected {
    height: 50px;
}

.btn {
    transition: all 0.2s ease-in-out;; 
}

.speech-to-txt {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  cursor: pointer;
}

.col {
  margin: 20px;
}


.btn.selected {
  border: 1px solid black;
}

.btn:hover {
  transform: scale(1.1);
}

.btn.disabled {
  background: #ccc;
  cursor: context-menu;
}

.btn.disabled:hover {
  transform: unset;
}

.btn.wrong {
  background: red;
  animation: shake 1s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
