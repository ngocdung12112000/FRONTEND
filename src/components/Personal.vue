<!-- eslint-disable prettier/prettier -->
<template>
    <div class="personal col-4">
        <div class="rank">
            <div class="rank-title">
                <h2>Xếp hạng {{userRank}}</h2>
                <div class="rank-images">
                    <div :class="userRankPoint > 0  ? 'bronze-rank' : 'lock-rank'"></div>
                    <div :class="userRankPoint > 100  ? 'silver-rank' : 'lock-rank'"></div>
                    <div class="lock-rank"></div>
                    <div class="lock-rank"></div>
                    <div class="lock-rank"></div>
                </div>
            </div>
            <div class="line"></div>
            <div class="rank-users">
                <div v-for="(user, index) in listUser" :key="user.user_id" class="user-item"
                    :class="{ selected: currentUser.user_id == user.user_id }" @click="() => userClick(user.user_id)">
                    <div class="user-info">
                        <div class="user-index"> {{ index + 1 }} </div>
                        <div class="user-avatar ms-2">
                            <img :src="user.avatar" alt="pic">
                        </div>
                        <div class="user-name">
                            <div class="mx-3"> {{ user.full_name }} </div>
                            <div :class="{
                                'small-gold-chest': index == 0,
                                'small-silver-chest': index == 1,
                                'small-bronze-chest': index == 2,
                            }">
                            </div>
                        </div>
                    </div>
                    <div class="user-score">{{ user.point }} KN</div>
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
                        <div style="width: 45px; height: 100%;" class="d-flex justify-content-center me-3">
                            <img style="transform: scale(1.5);" src="../assets/images/kn.svg" alt=""/>
                        </div>
                        <div class="exp-target">
                            <div class="exp-target-title mb-2">
                                <div>Mục tiêu mỗi ngày</div>
                            </div>
                            <div class="exp-target-process">
                                <div class="exp-target-bar">
                                    <div id="barDone" class="exp-target-bar-done"></div>
                                </div>
                                <div class="exp-target-process-value">
                                    <div> {{ currentPoint }}/{{ currentUser.target}} KN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="total-exp-chart">
                        <div v-if="data && data.length > 0">
                            <Chart :size="sizeChart"  :data="data" :margin="margin" :direction="direction">
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
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import { ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import $ from "jquery";
import baseURL from '../assets/enum';
export default {
    components: { Chart, Grid, Line },
    beforeMount() {
        this.loginUserId = this.$store.getters['AUTH/userId'];
        if (this.loginUserId) {
            this.getUserStreak();
        }
    },
    mounted() {
        let rate = (this.currentPoint / this.currentUser.target)*100;
        rate = rate > 100 ? 100 : rate;
        $('#barDone').width(rate + '%');
    },
    updated() {
        let rate = (this.currentPoint / this.currentUser.target)*100;
        rate = rate > 100 ? 100 : rate;
        $('#barDone').width(rate + '%');
    },
    data() {
        return {
            images: this.listUser,
            loginUserId: "",
            dataStreak: [],
            currentPoint: 0,
            sizeChart: {
                width: 400,
                height: 230
            },
            userRank: "Đồng",
            rankImg: "bronze-rank",
            userRankPoint: 0,
            pointToday: 0,
            target: 0,
            dataStreakNew: [],
            data: [],
            direction : 'horizontal',
            margin: {
                left: 20,
                top: 10,
                right: 20,
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
        }
    },

    methods: {
        userClick(id) {
            this.$router.push(`/profile/${id}`)
        },
        getUserStreak() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/UserStreak?UserId=` + this.loginUserId)
                .then((response) => {
                    const res = response.data;
                    res.forEach(function(item) {
                        me.data.push({
                            name: item.week_day,
                            pl: item.score
                        })
                    });
                    this.currentPoint = res[res.length - 1].score;
                });
        },
        getRanking(point){
            let me = this;
            if(point < 100) {
                me.userRank = "Đồng";
                me.rankImg = "bronze-rank";
            } else if(point < 200) {
                me.userRank = "Bạc";
                me.rankImg = "silver-rank";
            } else if(point < 300) {
                me.userRank = "Vàng";
                me.rankImg = "gold-rank";
            }else if(point < 400) {
                me.userRank = "Bạch Kim";
                me.rankImg = "gold-rank";
            }else if(point < 500) {
                me.userRank = "Kim Cương";
                me.rankImg = "gold-rank";
            }
        }
    },
    watch: {
        currentUser: function(newVal) {
            this.getRanking(newVal.point);
            this.userRankPoint = newVal.point;
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


</style>