<template>
    <g class="layer-labels">
        <text v-for="(p, i) in points" :key="i" :x="p.x" :y="p.y - 10" text-anchor="middle" font-size="12"
            fill="#000">
            {{ p.props.data[dataKeys[1]] }}
        </text>
    </g>
</template>

<script>
import { usePoints } from 'vue3-charts';
export default {
    name: 'LabelsLayer',
    props: {
        dataKeys: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const { points } = usePoints(props.dataKeys)
        return { points }
    }
}
</script>

<style scoped>

</style>