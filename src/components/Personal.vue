<!-- eslint-disable prettier/prettier -->
<template>
    <div class="personal col-4">
        <div class="rank">
            <div class="rank-title">
                <h2>Xếp hạng Bạc</h2>
                <div class="rank-images">
                    <div class="bronze-rank"></div>
                    <div class="silver-rank"></div>
                    <div class="lock-rank"></div>
                    <div class="lock-rank"></div>
                    <div class="lock-rank"></div>
                </div>
            </div>
            <div class="line"></div>
            <div class="rank-users">
                <div v-for="(user, index) in listUser" :key="user.id" class="user-item"
                    :class="{ selected: currentUser.id == user.id }" @click="() => userClick(user.id)">
                    <div class="user-info">
                        <div class="user-index"> {{ index + 1 }} </div>
                        <div class="user-avatar ms-2">
                            <img :src="user.avatar" alt="pic">
                        </div>
                        <div class="user-name">
                            <div class="mx-3"> {{ user.name }} </div>
                            <div :class="{
                                'small-gold-chest': index == 0,
                                'small-silver-chest': index == 1,
                                'small-bronze-chest': index == 2,
                            }">
                            </div>
                        </div>
                    </div>
                    <div class="user-score">{{ user.score }} KN</div>
                </div>
            </div>
        </div>
        <div class="total-exp-and-target">
            <div class="change-tab">
                <div class="total-exp-title active">
                    <div>Tổng kết KN</div>
                </div>
                <div class="target-title">
                    <div>THAY ĐỔI MỤC TIÊU</div>
                </div>
            </div>
            <div class="content">
                <div class="total-exp">
                    <div class="total-exp-header">
                        <div class="img-chest me-3"></div>
                        <div class="exp-target">
                            <div class="exp-target-title mb-2">
                                <div>Mục tiêu mỗi ngày</div>
                            </div>
                            <div class="exp-target-process">
                                <div class="exp-target-bar">
                                    <div class="exp-target-bar-done"></div>
                                </div>
                                <div class="exp-target-process-value">
                                    <div> 0/30 KN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="data && data.length > 0" class="total-exp-chart ">
                        <Chart :size="{ width: 400, height: 230 }"  :data="data" :margin="margin" :direction="direction">
                            <template #layers>
                                <Grid strokeDasharray="2,2" />
                                <Line :dataKeys="['name', 'pl']" :lineStyle="{ stroke: '#ffc800' }" />
                            </template>
                        </Chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import { ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
// import $ from "jquery";
export default {
    components: { Chart, Grid, Line },
    beforeMount() {
        this.getUserStreak();
    },
    data() {
        return {
            images: this.listUser,
            dataStreak: [],
            dataStreakNew: [],
            data: [],
            direction : 'horizontal',
            margin: {
                left: 20,
                top: 0,
                right: 0,
                bottom: 0
            },
        }
    },
    props: {
        listUser: {
            type: Array,
            required: true,
        },
        currentUser: {
            type: Object,
            required: true,
        },
        // dataStreakDemo :{
        //     type: Array,
        //     required: true,
        // }
    },

    methods: {
        userClick(id) {
            this.$router.push(`/profile/${id}`)
        },
        getUserStreak() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/v1/Users/UserId?UserId=4760d71f-6e2f-5b32-19cb-66948daf6128")
                .then((response) => {
                    const res = response.data;
                    res.forEach(function(item) {
                        me.data.push({
                            name: item.week_day,
                            pl: item.score
                        })
                    });
                });
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.personal {
    position: sticky;
    top: 93px;
    height: 835px;
}

.personal .rank {
    width: 100%;
    height: 405px;
    padding: 20px 0;
    border-radius: 30px;
    background: #fff;
    margin-bottom: 20px;
    border: 2px solid #e5e5e5;
}

.personal .rank .line {
    width: 100%;
    height: 2px;
    background: #e5e5e5;
}

.personal .rank .rank-title {
    padding: 0 20px;
}

.personal .rank .rank-title h2 {
    color: #3c3c3c;
    font-size: 24px;
    line-height: 26px;
    font-weight: bold;
}

.personal .rank .rank-title .rank-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.personal .rank .rank-users {
    max-height: 255px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: auto;
}

.personal .rank .rank-users .user-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    font-weight: bold;
    padding-right: 20px;
}

.personal .rank .rank-users .user-item.selected {
    background-color: #d7ffb8;
    color: #58a700;
}

.personal .rank .rank-users .user-item .user-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
}

.personal .rank .rank-users .user-item .user-name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.personal .rank .rank-users .user-item .user-avatar img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.personal .total-exp-and-target {
    width: 100%;
    height: 405px;
    border-radius: 30px;
    background: #fff;
    margin-bottom: 20px;
    border: 2px solid #e5e5e5;
}

.total-exp-and-target .change-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 2px solid #e5e5e5; */
    height: 60px;
    padding: 0 20px;
}

.total-exp-and-target .change-tab .total-exp-title,
.target-title {
    color: #1CB0F6;
    font-size: 15px;
    line-height: 26px;
    font-weight: bold;
    cursor: pointer;
}

.total-exp-and-target .change-tab .total-exp-title:hover {
    color: #3bb4ec;
}

.total-exp-and-target .change-tab .total-exp-title.active {
    color: #3c3c3c;
    font-size: 24px;
}

.total-exp-and-target .content .total-exp {
    width: 100%;
    height: 340px;
}

.total-exp-and-target .content .total-exp .total-exp-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
}

.total-exp-and-target .content .total-exp .total-exp-header .exp-target {
    flex: 1;
}

.total-exp-and-target .content .total-exp-header .exp-target-process {
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.total-exp-and-target .content .exp-target-process .exp-target-bar {
    position: relative;
    width: 200px;
    height: 14px;
    border-radius: 10px;
    background-color: #e5e5e5;
}

.total-exp-and-target .content .exp-target-process .exp-target-bar-done {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 100px;
    background-color: #ffc800;
    border-radius: 10px;
}

.total-exp-chart {
    width: 100%;
    height: 250px;
}

.chart svg{
    padding-top: 10px;
}

</style>