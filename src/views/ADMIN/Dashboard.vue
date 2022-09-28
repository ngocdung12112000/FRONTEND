<template>
    <div class="dashboard px-4 py-3">
        <div class="number-info">
            <div class="total-user d-flex align-items-center ">
                <div class="info-img">
                    <i class="fas fa-users" style="color: #2e86de;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Số lượng người dùng</div>
                    <div class="fs-4 fw-bolder">100</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">Tăng 80% trong 20 ngày</div>
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
                    <div style="font-size: 12px;">Tăng 50% trong 20 ngày</div>
                </div>
            </div>
            <div class="total-proceed d-flex align-items-center">
                <div class="info-img ">
                    <i class="fas fa-user" style="color: #ff9f43;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Số lượng người dùng mới</div>
                    <div class="fs-4 fw-bolder">50</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">Tăng 50% trong 20 ngày</div>
                </div>
            </div>
            <div class="total-new-user d-flex align-items-center">
                <div class="info-img "> 
                    <i class="fas fa-dollar-sign" style="color: #ee5253;"></i>
                </div>
                <div class="info-content">
                    <div style="font-size: 16px;">Tổng doanh thu</div>
                    <div class="fs-4 fw-bolder">50M đ</div>
                    <div class="process-bar">
                        <div style="width: 0%;" class="done"></div>
                    </div>
                    <div style="font-size: 12px;">Tăng 50% trong 20 ngày</div>
                </div>
            </div>
        </div>
        <div class="chart-info d-flex justify-content-between flex-wrap">
            <div class="line-chart" style="background-color: #fff; padding-bottom: 20px;">
                <Chart :size="sizeChart"  :data="dataBarChart" :margin="margin" :direction="direction">
                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Line :dataKeys="['name', 'pl']" :lineStyle="{ stroke: '#ffc800' }" />
                    </template>
                </Chart>
            </div>
            <div class="bar-chart" style="background-color: #fff; padding-bottom: 20px;">
                <Chart :size="sizeChart" :data="dataBarChart" :margin="margin" :direction="direction" :axis="axis">
                <template #layers>
                    <Grid strokeDasharray="2,2" />
                    <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#90e0ef', }" />
                </template>
                </Chart>
            </div>
        </div>
        <div class="top-info">

        </div>
    </div>
</template>

<script>
import $ from "jquery";
import { Chart, Grid, Line, Bar } from 'vue3-charts';
export default {
    components: {
        Chart,
        Grid,
        Line,
        Bar
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            sizeChart: {
                width: 0,
                height: 420
            },
            dataBarChart: [
                { name: 'T1', pl: 1000,},
                { name: 'T2', pl: 2000,},
                { name: 'T3', pl: 400,},
                { name: 'T4', pl: 3100,},
                { name: 'T5', pl: 200,},
                { name: 'T7', pl: 600,},
                { name: 'T8', pl: 500,},
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
                secondary: {
                    domain: ['dataMin', 'dataMax + 100'],
                    type: 'linear',
                    ticks: 8
                }
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
        // $('svg').attr('width', `${containerWith/2 - 40}`);
        if(containerWith > 1100) {
            $('.chart-info svg').attr('width', `${containerWith/2 -40}`);
            this.sizeChart = {
                width: containerWith/2 - 40,
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

    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        onResize() {
            let containerWith = $('.dashboard').width();
            this.windowWidth = containerWith;
        }
    },
    watch: {
        windowWidth: function(value) {
            if(value > 1100) {
                $('.chart-info svg').attr('width', `${value/2 -40}`);
                this.sizeChart = {
                    width: value/2 - 40,
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

<style scoped>
.number-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.number-info > div{
    width: 25%;
    margin-left: 12px;
    margin-right: 12px;
    height: 170px;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
    flex:1;
}

.chart-info > div {
    margin: 0 15px;
}

@media screen and (max-width: 1100px) {
    .number-info {
        flex-wrap: wrap;
    }
    .number-info > div{
        width: 49%;
        margin: 0;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 660px) {
    .number-info > div{
        width: 100%;
        margin-bottom: 20px;
    }

    .chart-info > div {
        margin: 10px 0;
    }

    .dashboard {
        padding: 16px 10px !important;
    }

}
</style>