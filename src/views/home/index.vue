<template>
  <div class="home">
    <!-- 展示框 -->
    <div class="display-box">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :lg="6" v-for="(list,i) in state.lists" :key="i">
          <div class="display-con" :style="{background:list.color}">
            <P>{{list.name}}</P>
            <countTo :startVal="0" :endVal="list.number" :duration="list.duration"></countTo>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 图表 -->
    <div class="mychart">
      <div id="chart1" class="chart1"></div>
      <div id="chart2" class="chart2"></div>
      <div id="chart3" class="chart3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, reactive } from 'vue';
import { CountTo } from 'vue3-count-to';
import { ECharts, EChartsOption, init } from 'echarts';
const state = reactive({
  lists: [{
    name: '最高可借金额',
    color: '#67ca3a',
    number: 13594,
    duration: 2000
  },
  {
    name: '回报率',
    color: '#f60',
    number: 9833,
    duration: 3000
  },
  {
    name: '业绩领跑',
    color: '#f56c6c',
    number: 8888,
    duration: 1500
  },
  {
    name: '安稳底薪战队',
    color: '#409eff',
    number: 6666,
    duration: 3500
  }
  ],


})


const initChart = () => {


  const chart1 = document.getElementById('chart1') as HTMLElement
  const chart2 = document.getElementById('chart2') as HTMLElement
  const chart3 = document.getElementById('chart3') as HTMLElement
  const chartCh1: ECharts = init(chart1)
  const chartCh2: ECharts = init(chart2)
  const chartCh3: ECharts = init(chart3)


  //  const chartCh2:ECharts = init(document.getElementById('chart2') as HTMLElement)
  //   const chartCh3:ECharts = init(document.getElementById('chart3') as HTMLElement)

  const option1: EChartsOption = {
    title: {
      text: '折线图'
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      },
    },
    color: ['#4993f6', '#e07ca1'],
    legend: {
      data: ['2018', '2019'],
      top: 20
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2018',
        type: 'line',
        stack: '总量',
        areaStyle: {
          color: '#fff',
          opacity: 0.5
        },
        data: [120,
          136,
          250,
          340,
          650,
          780,
          1200,
          1600,
          1700,
          1000,
          600,
          480]
      },
      {
        name: '2019',
        type: 'line',
        stack: '总量',
        areaStyle: {
          opacity: 0
        },
        data: [
          200,
          360,
          500,
          680,
          780,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320
        ]
      },

    ]
  };
  const option2: EChartsOption = {
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  const option3: EChartsOption = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  chartCh1.setOption(option1)
  chartCh2.setOption(option2)
  chartCh3.setOption(option3)
}
onMounted(() => {
  initChart()
  // window.onresize=()=>{
  //   (state.chart1 as any).resize()
  // }
})


</script>

<style scoped lang="scss">
.home {
  width: 100%;
  margin-top: 40px;
}

.home .display-box .display-con {
  padding: 20px 0 40px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
}

.home .display-box .display-con p {
  color: #323133;
  margin-bottom: 10px;
}

.home .display-box .el-col-sm-12 {
  margin-bottom: 10px;
}

.home .mychart {
  margin-top: 20px;
}

.home .mychart .chart1 {
  width: 100%;
  height: 500px;
  background-color: #c7e4db;
}

.home .mychart .chart2,
.home .mychart .chart3 {
  width: 50%;
  height: 400px;
  margin-top: 30px;
}

.home .mychart .chart2 {
  float: left;
}

.home .mychart .chart3 {
  float: right;
}
</style>