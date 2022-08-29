<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container words-wrapper">
        <div class="learnt-words col-8">
            <div class="title">
                <h1>Đã học từ vựng Tiếng Anh</h1>
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
                    <tbody>
                        <tr v-for="word in words" :key="word.id">
                            <td>{{ word.name }}</td>
                            <td>{{ word.type }}</td>
                            <td>5 tiếng trước</td>
                            <td>
                                <div :class="`img-skill-strength-sprite_${word.strength}`"> </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="description col-4">
            <div class="description-wrapper">
                <h1>Lặp lại cách quãng</h1>
                <div>Thuật toán của Duolingo sẽ tính toán khi nào bạn nên luyện tập từ vựng để có thể ghi nhớ từ một cách lâu dài.</div>
                <div class="strength-list">
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_1 me-3"></div>
                        <span>Xuất sắc</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_2 me-3"></div>
                        <span>Vẫn tốt</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_3 me-3"></div>
                        <span>Đến lúc luyện tập rồi</span>
                    </div>
                    <div class="strength-item">
                        <div class="img-skill-strength-sprite_4 me-3"></div>
                        <span>Đã quên</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    data() {
        return {
            words: [
                {
                    id: 1,
                    name: "new",
                    type: "Adjective",
                    lastTimeValue: new Date(2022,8,28,10,0,0),
                    strength: 1
                },
                {
                    id: 2,
                    name: "yours",
                    type: "Pronoun",
                    lastTimeValue: new Date(2022,8,28,8,0,0),
                    strength: 2
                },
                {
                    id: 3,
                    name: "women",
                    type: "Noun",
                    lastTimeValue: new Date(2022,8,28,7,0,0),
                    strength: 3
                },
                {
                    id: 4,
                    name: "wine",
                    type: "Noun",
                    lastTimeValue: new Date(2022,8,27,5,0,0),
                    strength: 4
                },
                {
                    id: 5,
                    name: "water",
                    type: "Noun",
                    lastTimeValue: new Date(2022,8,26,10,0,0),
                    strength: 2
                }
            ]
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.words-wrapper {
    display: flex;
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

</style>