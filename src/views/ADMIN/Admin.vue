<!-- eslint-disable prettier/prettier -->
<template>
    <div></div>
    <!-- </div> -->
    <!-- <Chart :size="{ width: 500, height: 420 }" :data="data" :margin="margin" :direction="direction" :axis="axis">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#90e0ef', }" />
        </template>

    </Chart> -->

</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import $ from "jquery";
// import Header from "./Header";
// import Navigation from "./Navigation";
// import { Chart, Grid, Line, Bar } from 'vue3-charts';
export default {
    name: 'LineChart',
    components: { 
        // Chart, 
        // Grid, 
        // Line, 
        // Bar, 
        // Header,
        // Navigation
    },
    mounted() {
        // $("svg").attr("viewBox", `0 0 400 230`);
        // $("rect").attr("width","60px");
    },
    data() {
        return {
            // data: [
            //     { name: 'Jan', pl: 1000, },
            //     { name: 'Feb', pl: 2000, },
            //     { name: 'Apr', pl: 400, },
            //     { name: 'Mar', pl: 3100,},
            //     { name: 'May', pl: 200,  },
            //     { name: 'Jun', pl: 600, },
            //     { name: 'Jul', pl: 500, }
            // ],
            // direction: 'horizontal',
            // margin: {
            //     left: 20,
            //     top: 20,
            //     right: 20,
            //     bottom: 0
            // },
            // axis: {
            //     primary: {
            //         type: 'band'
            //     },
            //     secondary: {
            //         domain: ['dataMin', 'dataMax + 100'],
            //         type: 'linear',
            //         ticks: 8
            //     }
            // }
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
</style>