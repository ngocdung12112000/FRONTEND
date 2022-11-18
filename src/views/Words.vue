<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container words-wrapper">
        <div class="learnt-words col-8">
            <div class="title">
                <h1>Từ vựng Tiếng Anh đã học</h1>
                <div class="total-words"> 150 Từ </div>
            </div>
            <div class="list-words">
                <table>
                    <thead>
                        <th>Từ vựng</th>
                        <th>Từ loại</th>
                        <th>Lần luyện tập cuối</th>
                        <th>Độ mạnh</th>
                    </thead>
                    <tbody v-if="words">
                        <tr v-for="word in words" :key="word.id">
                            <td>{{ word.en_meaning }}</td>
                            <td>{{ word.type }}</td>
                            <td>{{ word.time }}</td>
                            <td>
                                <div :class="`img-skill-strength-sprite_${word.strong}`"> </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="description col-4 ">
            <div class="description-wrapper">
                <h1>Lặp lại cách quãng</h1>
                <div>Thang đo mức độ các từ vựng đã học</div>
                <div class="strength-list">
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_4 me-3"></div>
                        <span>Xuất sắc</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_3 me-3"></div>
                        <span>Vẫn tốt</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_2 me-3"></div>
                        <span>Đến lúc luyện tập rồi</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_1 me-3"></div>
                        <span>Đã quên</span>
                    </div>
                </div>
            </div>
        </div>
        <Loading v-show="false" />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import Loading from "../components/Loading.vue";
import baseURL from "../assets/enum";
export default {
    components: {
        Loading,
    },
    beforeMount() {
        this.getWords();
    },
    data() {
        return {
            words: []
        }
    },
    methods: {
        getWords() {
            let me = this,
                userId = this.$store.getters['AUTH/userId'];

            if(userId) {
                this.axios
                .get(`${baseURL}api/Users/Word?UserId=${userId}`)
                .then((response) => {
                    if(response && response.data) {
                        me.words = response.data;
                    }
                });
            }
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.words-wrapper {
    display: flex;
    flex-wrap: wrap;
}    

.learnt-words {
    position: relative;
    padding: 20px 55px;
}

.learnt-words .title {
    padding: 20px 0;
}

.learnt-words .title .total-words {
    font-size: 18px;
    color: #afafaf;
}

.list-words {
    border-radius: 20px;
    border: 2px solid #dddddd;
    overflow: hidden;
}

.list-words table {
  border-collapse: collapse;
  width: 100%;
}

.list-words td, th {
  text-align: left;
  border-left: 2px solid #dddddd;
  border-bottom: 2px solid #dddddd;
  padding: 8px 15px;
}

.list-words td:first-child, th:first-child {
  border-left: none;
}

.strength-list {
    margin-top: 20px;
}

.list-words tr:last-child td{
  border-bottom: none;
}

.description {
    margin-top: 20px;
}

.description .description-wrapper{
    width: 80%;
    padding: 20px;
    border: 2px solid #dddddd;
    border-radius: 20px;
}

.description .description-wrapper h1 {
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
}

.description .description-wrapper .strength-item {
    display: flex;
    margin: 10px 15px;
}

.description .description-wrapper .strength-item span{
    font-size: 16px;
}

@media screen and (max-width: 998px) {
    .words-wrapper {
        flex-direction: column-reverse;
    }

    .learnt-words, .description  {
        width: 100% !important;
    }

    .description {
        display: flex;
        justify-content: center;
    }

    .learnt-words {
        padding: 20px 0;
    }
}

</style>