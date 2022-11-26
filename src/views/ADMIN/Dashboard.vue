<!-- eslint-disable prettier/prettier -->
<template>
    <div class="dashboard px-4 py-3">
        <div class="number-info">
            <div class="total-user d-flex align-items-center ">
                <div class="info-img">
                    <i class="fas fa-users" style="color: #2e86de;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Số lượng người dùng</div>
                    <div class="fs-4 fw-bolder">{{dataOverView.totalUser}}</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">
                        Tăng {{ userRate }}% trong 30 ngày
                    </div>
                </div>
            </div>
            <div class="total-course d-flex align-items-center ">
                <div class="info-img ">
                    <i class="fas fa-graduation-cap" style="color: #01a3a4;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Số lượng khóa học</div>
                    <div class="fs-4 fw-bolder">50</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">Tăng {{ courseRate }}% trong 30 ngày</div>
                </div>
            </div>
            <div class="total-proceed d-flex align-items-center">
                <div class="info-img ">
                    <i class="fas fa-user" style="color: #ff9f43;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Số lượng người dùng mới</div>
                    <div class="fs-4 fw-bolder">{{dataOverView.totalNewUser}}</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <!-- <div style="font-size: 12px;">Tăng 50% trong 30 ngày</div> -->
                </div>
            </div>
            <div class="total-new-user d-flex align-items-center">
                <div class="info-img ">
                    <i class="fas fa-dollar-sign" style="color: #ee5253;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Tổng doanh thu</div>
                    <div v-if="dataOverView" class="fs-4 fw-bolder">{{formatPrice(dataOverView.totalMoney)}} đ</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">Tăng {{ revenueRate}}% trong 30 ngày</div>
                </div>
            </div>
        </div>
        <div class="d-flex ps-3">
            <select style="width: 300px; height: 40px;" v-model="timeSelect"
            class="form-select mb-3 me-3" aria-label=".form-select-lg example">
                <!-- <option value="30">30 Ngày</option> -->
                <option value="3">3 tháng</option>
                <option value="6">6 tháng</option>
                <option value="12">1 năm</option>
            </select>
            <button @click="changeDataChart" style="height: 40px;" class="btn btn-danger">Thay đổi</button>
        </div>
        <div class="chart-info d-flex justify-content-between flex-wrap">
            <div class="line-chart mb-3" style="background-color: #fff; padding-bottom: 20px;">
                <h4 class="py-3 ms-3">Số lượng người dùng trong 6 tháng</h4>
                <Chart v-if="dataUserChart.length > 0" :size="sizeChart" :data="dataUserChart" :margin="margin" :direction="direction">
                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Line :dataKeys="['time', 'quantity']" :lineStyle="{ stroke: '#ffc800' }" />
                        <LabelsLayer :dataKeys="['time', 'quantity']" />
                    </template>
                </Chart>
            </div>
            <div class="line-chart mb-3" style="background-color: #fff; padding-bottom: 20px;">
                <h4 class="py-3 ms-3">Số lượng khóa học trong 6 tháng</h4>
                <Chart v-if="dataUserChart.length > 0" :size="sizeChart" :data="dataCourseChart" :margin="margin" :direction="direction">
                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Line :dataKeys="['time', 'quantity']" :lineStyle="{ stroke: '#ffc800' }" />
                        <LabelsLayer :dataKeys="['time', 'quantity']" />
                    </template>
                </Chart>
            </div>
            <div class="bar-chart mb-3" style="background-color: #fff; padding-bottom: 20px;">
                <h4 class="py-3 ms-3">Doanh thu trong 6 tháng</h4>
                <Chart v-if="dataProceedChart" :size="sizeChart" :data="dataProceedChart" :margin="margin" :direction="direction" >
                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Bar :dataKeys="['time', 'quantity']" :barStyle="{ fill: '#90e0ef', }" />
                        <LabelsLayer :dataKeys="['time', 'quantity']" />
                    </template>
                </Chart>
            </div>
            <div class="pie-chart mb-3" style="background-color: #fff; padding-bottom: 20px;">
                <h4 class="py-3 ms-3">Chủ đề khóa học</h4>
                <Chart direction="circular" :size="sizeChart" :data="dataCourseCategoryChart" 
                    :margin="{
                        left: Math.round((sizeChart.width - 360)/2),
                        top: 50,
                        right: 0,
                        bottom: 0
                    }" 
                     :config="{ controlHover: false }">
                    <template #layers>
                        <Pie :dataKeys="['time', 'quantity']" :pie-style="{ innerRadius: 100, padAngle: 0.05, 
                            colors : ['#4daf4a', '#377eb8','#ffeaa7','#ff7675','#6c5ce7','#30336b','#130f40','#95afc0'] }" />
                    </template>
                    <template #widgets>
                        <Tooltip :config="{
                          name: { label: 'Tên chủ đề' },
                          avg: { hide: true},
                          pl: { label: 'Số lượng' },
                          inc: { hide: true }
                        }" hideLine />
                    </template>
                </Chart>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
import { Chart, Grid, Line, Bar,Pie, Tooltip } from 'vue3-charts';
import LabelsLayer from './Components/LabelsLayer.vue';
import baseURL from "../../assets/enum";
export default {
    components: {
        Chart,
        Grid,
        Line,
        Bar,
        LabelsLayer,
        Pie, 
        Tooltip,
    },
    data() {
        return {
            timeSelect: 6,
            windowWidth: window.innerWidth,
            sizeChart: {
                width: 0,
                height: 420
            },
            dataOverView: {},
            userRate: 0,
            courseRate: 0,
            revenueRate: 0,
            newUser: 0,
            dataAllChart:{},
            dataUserChart: [],
            dataCourseChart: [],
            dataProceedChart: [],
            dataCourseCategoryChart: [],
            dataBarChart: [
                { name: 'T1', pl: 1000, },
                { name: 'T2', pl: 2000, },
                { name: 'T3', pl: 453, },
                { name: 'T4', pl: 2960, },
                { name: 'T5', pl: 200, },
                { name: 'T6', pl: 200, },
                { name: 'T7', pl: 600, },
                { name: 'T8', pl: 500, },
            ],
            direction: 'horizontal',
            margin: {
                left: 20,
                top: 20,
                right: 20,
                bottom: 0
            },
            axis: {
                primary: {
                    type: 'band'
                },
            }
        }
    },
    mounted() {
        $('.total-user .done').css('width', '80%');
        $('.total-course .done').css('width', '50%');
        $('.total-proceed .done').css('width', '50%');
        $('.total-new-user .done').css('width', '50%');
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
        let containerWith = $('.dashboard').width();
        if (containerWith > 1100) {
            $('.chart-info svg').attr('width', `${containerWith / 2 - 45}`);
            this.sizeChart = {
                width: containerWith / 2 - 45,
                height: 420
            }
        }
        else {
            $('.chart-info svg').attr('width', `${containerWith}`);
            this.sizeChart = {
                width: containerWith,
                height: 420
            }
        }
        $(".pie-chart .axis").hide();

        this.getDataOverView();
        this.getDataAllChart();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            let containerWith = $('.dashboard').width();
            this.windowWidth = containerWith;
        },
        async changeDataChart() {
            await this.getDataAllChart();

            this.dataBarChart= [
                { name: 'T1', pl: 800, },
                { name: 'T2', pl: 1500, },
                { name: 'T3', pl: 453, },
                { name: 'T4', pl: 3150, },
                { name: 'T5', pl: 300, },
                { name: 'T6', pl: 300, },
                { name: 'T7', pl: 400, },
                { name: 'T8', pl: 750, },
            ];
            let value = $('.chart-info svg').width();
            this.sizeChart = {
                width: value + 0.0001,
                height: 420
            }
        },
        getDataOverView() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/OverView?time=30`)
                .then((response) => {
                    me.dataOverView = response.data;
                    me.userRate = Math.round(((me.dataOverView.totalUser - me.dataOverView.totalUserLast)/ me.dataOverView.totalUserLast)*100);
                    me.courseRate = Math.round(((me.dataOverView.totalCourse - me.dataOverView.totalCourseLast)/ me.dataOverView.totalCourseLast)*100);
                    me.revenueRate = Math.round(((me.dataOverView.totalMoney - me.dataOverView.totalMoneyLast)/ me.dataOverView.totalMoneyLast)*100);
                });
        },
        getDataAllChart() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/AllChart?time=${this.timeSelect}`)
                .then((response) => {
                    me.dataAllChart= response.data;
                    me.dataUserChart = me.dataAllChart.dataUserChart;
                    me.dataCourseChart = me.dataAllChart.dataCourseChart;
                    me.dataProceedChart = me.dataAllChart.dataProceedChart;
                    me.dataCourseCategoryChart = me.dataAllChart.dataCourseCategoryChart;
                });
        },
        formatPrice(value) {
            if(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        },
    },
    watch: {
        windowWidth: function (value) {
            if (value > 1100) {
                $('.chart-info svg').attr('width', `${value / 2 - 40}`);
                this.sizeChart = {
                    width: value / 2 - 40,
                    height: 420
                }
            }
            else {
                $('.chart-info svg').attr('width', `${value}`);
                this.sizeChart = {
                    width: value,
                    height: 420
                }
            }
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.dashboard {
    overflow-x: hidden;
}    
.number-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
}

.number-info>div {
    width: 25%;
    margin-left: 12px;
    margin-right: 12px;
    height: 170px;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.number-info .total-user {
    background-color: #2e86de;
}

.number-info .total-course {
    background-color: #01a3a4;
}

.number-info .total-proceed {
    background-color: #ff9f43;
}

.number-info .total-new-user {
    background-color: #ee5253;
}

.info-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 26px;
}

.process-bar {
    width: 100%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    margin-bottom: 10px;
}

.process-bar .done {
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    transition: all 1s ease-in-out;
}

.info-content {
    color: #fff;
    flex: 1;
}

.chart-info>div {
    margin: 0 15px;
}


@media screen and (max-width: 1100px) {
    .number-info {
        flex-wrap: wrap;
    }

    .number-info>div {
        width: 49%;
        margin: 0;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 660px) {
    .number-info>div {
        width: 100%;
        margin-bottom: 20px;
    }

    .chart-info>div {
        margin: 10px 0;
    }

    .dashboard {
        padding: 16px 10px !important;
    }

}
</style>