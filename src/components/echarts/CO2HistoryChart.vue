<template>
    <div class="full" id="co2-dom">

    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {co2Option} from "@/assets/js/echarts-option/co2s.js";
import {getTimeRange, timeHandle} from "@/util/data-generator.js";
import {getHistoryData} from "@/apis/request-api.js";


let co2Data = ref([]);
const props = defineProps({
    masterNum: String,
})

const getCO2History = async (dom) => {
    try {
        let co2s = ['co211', 'co212', 'co213', 'co214', 'co215', 'co216', 'co217', 'co218', ];
        const response = await getHistoryData(props.masterNum, co2s, getTimeRange(6))
        co2Data.value = response.data;
        refresh(dom, co2Data.value);
    } catch (error) {
        console.error(error);
    }
}

let option = co2Option

function refresh(dom, co2Data) {
    option.series = [];
    option.xAxis.data = [];
    let nameList = [];
    for (let i = 0; i < co2Data.length; i++) {
        let newSeriesItem = {name: '', type: 'line', symbol: 'none', data: []};
        let sensorData = co2Data[i];
        let dataList = [];
        let timeList = [];
        for (let item of sensorData) {
            dataList.push(item['CO2']);
            timeList.push(timeHandle(item['timest']));
        }
        newSeriesItem.data = dataList;
        let name = '从站 0' + (i + 1) + ' CO2';
        nameList.push(name)
        newSeriesItem.name = name
        newSeriesItem.data = dataList;
        option.xAxis.data = timeList;
        option.series.push(newSeriesItem)
    }
    option.legend.data = nameList;
    dom.setOption(option)
    dom.hideLoading();
}

onMounted(() => {
    let dom = IdInitEcharts('co2-dom');
    dom.showLoading();
    getCO2History(dom)
    window.addEventListener('resize', function () {
        dom.resize();
    });
})
</script>

<style scoped>

</style>