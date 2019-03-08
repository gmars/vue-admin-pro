<template>
  <div class="monitor">
    <el-row :gutter="24">
      <el-col 
        :span="24"
        :sm="{span:18}"
        :xl="{span:18}">
        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">活动实时交易情况</h3>
          </div>
          <el-row>
            <el-col 
              :span="6" 
              :xs="{span:24}" 
              class="text-align-center">
              <div class="label-annotation">今日交易额</div>
              <span class="margin-top-18">
                <span class="font-24 font-weight-500">1254345,234</span>
                <span class="color-0-0-0-65 margin-left-8">元</span>
              </span>
            </el-col>
            <el-col
              :span="6"
              :xs="{span:24}"
              class="text-align-center">
              <div class="label-annotation">销售目标完成率</div>
              <span class="margin-top-18">
                <span class="font-24 font-weight-500">92%</span>
              </span>
            </el-col>
            <el-col
              :span="6"
              :xs="{span:24}"
              class="text-align-center">
              <div class="label-annotation">活动剩余时间</div>
              <span class="margin-top-18">
                <span class="font-24 font-weight-500">{{ timeRemain }}</span>
              </span>
            </el-col>
            <el-col
              :span="6"
              :xs="{span:24}"
              class="text-align-center">
              <div class="label-annotation">每秒交易总额</div>
              <span class="margin-top-18">
                <span class="font-24 font-weight-500">234</span>
                <span class="color-0-0-0-65 margin-left-8">元</span>
              </span>
            </el-col>
          </el-row>
          <div>
            <ve-heatmap
              :settings="mapSetting"
              :visual-map="visualMap"
              :data="mapData"
              :extend="mapExtend"
              style="margin: auto"
              zoom/>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="24"
        :sm="{span:6}"
        :xl="{span:6}">
        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">活动情况预测</h3>
          </div>
          <div>
            <div class="label-annotation">目标评估</div>
            <div class="font-24 margin-top-8">有望达到预期</div>
            <div
              style="margin-left: -20px"
              class="margin-top-8">
              <ve-line
                :data="hotSearch"
                :settings="{area:true}"
                :legend-visible="false"
                :extend="searchSetting"
                :colors="['#1890ff']"
                height="100px"
                judge-width/>
            </div>
          </div>
        </el-card>

        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">券核效率</h3>
          </div>
          <div class="text-align-center margin-top-24 padding-bottom-8">
            <el-progress
              :percentage="conversionRate"
              :stroke-width="10"
              type="circle"
              status="text">
              <div class="label-annotation">跳出率</div>
              <div class="font-16 margin-top-8">{{ conversionRate }}%</div>
            </el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row 
      :gutter="24">
      <el-col 
        :span="12"
        :xs="{span:24}">
        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">各品类占比</h3>
          </div>
          <el-row style="height: 161px;">
            <el-col :span="8">
              <el-progress
                :stroke-width="10"
                :percentage="28"
                type="circle"
                status="text">
                <div class="label-annotation">中式快餐</div>
                <div class="font-16 margin-top-8">28%</div>
              </el-progress>
            </el-col>
            <el-col :span="8">
              <el-progress
                :percentage="22"
                :stroke-width="10"
                type="circle"
                status="text">
                <div class="label-annotation">西餐</div>
                <div class="font-16 margin-top-8">22%</div>
              </el-progress>
            </el-col>
            <el-col :span="8">
              <el-progress
                :percentage="32"
                :stroke-width="10"
                type="circle"
                status="text">
                <div class="label-annotation">火锅</div>
                <div class="font-16 margin-top-8">32%</div>
              </el-progress>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col
        :span="6"
        :xs="{span:24}">
        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">热门搜索</h3>
          </div>
          <div>
            <ve-wordcloud 
              :data="searchWords"
              :extend="searchWordsExtend"
              :settings="searchWordsSettings"
              height="161px"/>
          </div>
        </el-card>
      </el-col>

      <el-col
        :span="6"
        :xs="{span:24}">
        <el-card
          class="margin-top-20 border-none box-shadow-none"
          style="position: relative;">
          <div slot="header">
            <h3 style="margin-bottom: 0px">剩余资源</h3>
          </div>
          <div>
            <ve-liquidfill 
              :data="sourceRemain"
              :settings="sourceRemainsetting"
              height="161px">
              <div class="page-ring-inner">
                <h4 
                  class="label-annotation" 
                  style="margin-bottom: 0px">补贴资金剩余</h4>
                <h2 class="font-24 color-0-0-0-85">34%</h2>
              </div>
            </ve-liquidfill>
          </div>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import VeHeatmap from 'v-charts/lib/heatmap.min'
import VeLine from 'v-charts/lib/line.common.min'
import VeLiquidfill from 'v-charts/lib/liquidfill.common.min'
import VeWordcloud from 'v-charts/lib/wordcloud.common.min'
import { CountDown } from '../../utils/Base'
export default {
  name: 'Monitor',
  components: {
    VeHeatmap,
    VeLine,
    VeLiquidfill,
    VeWordcloud
  },
  data: function() {
    this.mapSetting = {
      position: 'world',
      type: 'map',
      geo: {
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#e1e9f0',
            borderColor: '#ffffff'
          },
          emphasis: {
            areaColor: '#c0dfff',
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      }
    }
    this.searchSetting = {
      series(v) {
        v.forEach(i => {
          i.areaStyle.normal.color = ['#d0e9ff']
          i.symbol = 'none'
        })
        return v
      },
      xAxis(v) {
        v.forEach(i => {
          i.show = true
          i.boundaryGap = false
          i.boundaryGap = false
        })
        return v
      },
      yAxis(v) {
        v.forEach(i => {
          i.show = false
        })
        return v
      },
      grid: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }
    }

    this.mapExtend = {
      series: {
        name: '交易额',
        type: 'effectScatter',
        itemStyle: {
          emphasis: {
            borderColor: '#3da0fe',
            borderWidth: 1
          }
        },
        label: {
          normal: {
            show: false,
            position: 'top',
            color: '#0250b3',
            formatter: function(val) {
              return `交易额：${val.data.value[2]}`
            }
          },
          emphasis: {
            show: true
          }
        },
        coordinateSystem: 'geo'
      }
    }

    this.sourceRemainsetting = {
      seriesMap: {
        补贴资金剩余: {
          amplitude: '3%',
          waveLength: '50%',
          period: 2000,
          direction: 'left',
          color: ['#20a0ff'],
          backgroundStyle: {
            color: '#ffffff',
            borderWidth: 0
          },
          itemStyle: {
            shadowBlur: 0
          },
          outline: {
            borderDistance: 1,
            itemStyle: {
              borderColor: '#20a0ff',
              borderWidth: 2
            }
          },
          label: {
            show: false
          },
          radius: '90%'
        }
      }
    }

    this.searchWordsSettings = {
      sizeMax: 20,
      color: ['#2ba4ff']
    }
    this.searchWordsExtend = {
      series: {
        shape: 'circle',
        gridSize: 10,
        rotationRange: [-10, 10],
        rotationStep: 1,
        width: '100%',
        textStyle: {
          normal: {
            fontFamily: 'Microsoft YaHei, sans-serif',
            fontWeight: 500
          },
          emphasis: {
            shadowBlur: 6,
            shadowColor: '#2ba4ff'
          }
        }
      }
    }
    return {
      mapData: {
        columns: ['lat', 'lng', 'turnover'],
        rows: [
          {
            name: '中国',
            lat: 116.446238,
            lng: 39.937549,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '北美洲',
            lat: -62.743434,
            lng: -12.349195,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '南美洲',
            lat: -103.953379,
            lng: 41.643327,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '非洲',
            lat: 19.161332,
            lng: 10.024106,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '英国',
            lat: 0.028143,
            lng: 51.591889,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '法国',
            lat: 2.382997,
            lng: 48.854517,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          },
          {
            name: '澳大利亚',
            lat: 133.620114,
            lng: -25.271738,
            turnover: Math.round(Math.random().toFixed(5) * 2000)
          }
        ]
      },
      timeRemain: '00:00:00',
      hotSearch: {
        columns: ['time', 'value'],
        rows: [
          { time: '00:00', value: Math.round(Math.random()) },
          { time: '01:00', value: Math.round(Math.random() * 11) + 10 },
          { time: '02:00', value: Math.round(Math.random() * 11) + 20 },
          { time: '03:00', value: Math.round(Math.random() * 11) + 30 },
          { time: '04:00', value: Math.round(Math.random() * 11) + 40 },
          { time: '06:00', value: Math.round(Math.random() * 11) + 50 },
          { time: '07:00', value: Math.round(Math.random() * 11) + 160 },
          { time: '08:00', value: Math.round(Math.random() * 11) + 70 },
          { time: '09:00', value: Math.round(Math.random() * 11) + 80 },
          { time: '10:00', value: Math.round(Math.random() * 11) + 90 },
          { time: '11:00', value: Math.round(Math.random() * 11) + 290 },
          { time: '12:00', value: Math.round(Math.random() * 11) + 110 },
          { time: '13:00', value: Math.round(Math.random() * 11) + 120 },
          { time: '14:00', value: Math.round(Math.random() * 11) + 130 },
          { time: '15:00', value: Math.round(Math.random() * 11) + 140 },
          { time: '16:00', value: Math.round(Math.random() * 11) + 150 },
          { time: '17:00', value: Math.round(Math.random() * 11) + 160 },
          { time: '18:00', value: Math.round(Math.random() * 11) + 170 },
          { time: '19:00', value: Math.round(Math.random() * 11) + 280 },
          { time: '20:00', value: Math.round(Math.random() * 11) + 190 },
          { time: '21:00', value: Math.round(Math.random() * 11) + 200 },
          { time: '22:00', value: Math.round(Math.random() * 11) + 210 },
          { time: '23:00', value: Math.round(Math.random() * 11) + 240 }
        ]
      },
      conversionRate: 25,
      sourceRemain: {
        columns: ['item', 'percent'],
        rows: [
          {
            item: '补贴资金剩余',
            percent: 0.34
          }
        ]
      },
      searchWords: {
        columns: ['word', 'count'],
        rows: getRows()
      }
    }
  },
  computed: {
    visualMap: function() {
      let max = 0,
        pieces = []
      this.mapData.rows.forEach(val => {
        max += val.turnover
      })
      let prev = Math.round(max / 5)
      for (let i = 1; i <= 5; i++) {
        let min = (i - 1) * prev,
          max = i * prev
        pieces.push({
          min: min,
          max: max,
          label: `${min} ~ ${max}`
        })
      }
      return {
        left: 'left',
        top: 'bottom',
        type: 'piecewise',
        calculable: true,
        inRange: {
          color: ['#bae7ff', '#0250b3']
        },
        max: max,
        orient: 'vertical',
        pieces: pieces
      }
    }
  },
  created: function() {
    let now = new Date()
    now.setMinutes(now.getMinutes() + 1)
    let interval = setInterval(() => {
      let remain = CountDown(now.getTime())
      this.timeRemain = remain
      if (eval(remain.split(':').join('+')) == 0) {
        clearInterval(interval)
        return false
      }
    }, 1000)

    setInterval(() => {
      this.conversionRate = Math.round(Math.random() * 100)
      this.hotSearch.rows.forEach(i => {
        i.value = Math.round(Math.random() * 11)
      })
    }, 1000)
  }
}

function getRows() {
  return [
    {
      word: '重庆市',
      count: 22199
    },
    {
      word: '兰州市',
      count: 10288
    },
    {
      word: '澳门半岛',
      count: 620
    },
    {
      word: '平凉市',
      count: 274470
    },
    {
      word: '舟山市',
      count: 12311
    },
    {
      word: '甘肃省',
      count: 1206
    },
    {
      word: '渝北区',
      count: 4885
    },
    {
      word: '陕西省',
      count: 32294
    },
    {
      word: 'PHP开发',
      count: 18574
    },
    {
      word: '后端开发',
      count: 38929
    },
    {
      word: 'UI设计',
      count: 969
    },
    {
      word: '前端工程师',
      count: 37517
    },
    {
      word: '设计师',
      count: 12053
    },
    {
      word: '安徽省',
      count: 57299
    },
    {
      word: '北京市',
      count: 15418
    },
    {
      word: '通州区',
      count: 22905
    },
    {
      word: '广州市',
      count: 5146
    },
    {
      word: '天河区',
      count: 49487
    },
    {
      word: '武侯区',
      count: 33837
    },
    {
      word: '城关区',
      count: 4500
    },
    {
      word: '安宁区',
      count: 5744
    },
    {
      word: '静宁路',
      count: 4840
    },
    {
      word: '上海滩',
      count: 232
    },
    {
      word: '东方明珠',
      count: 3706
    },
    {
      word: '下城区',
      count: 4812
    },
    {
      word: '七里河区',
      count: 16578
    },
    {
      word: '渝中区',
      count: 76970
    },
    {
      word: '两江新区',
      count: 6704
    },
    {
      word: '第三航站楼',
      count: 15964
    },
    {
      word: '卡尔文望远镜',
      count: 60679
    },
    {
      word: '图数据库',
      count: 24347
    },
    {
      word: 'go语言开发',
      count: 43420
    },
    {
      word: '浙江省',
      count: 25222
    },
    {
      word: '西湖区',
      count: 16904
    },
    {
      word: '乌镇',
      count: 4029
    }
  ]
}
</script>

<style scoped>
.page-ring-inner {
  position: absolute;
  left: 50%;
  top: 40%;
  text-align: center;
  max-height: 62px;
  transform: translate(-50%, -50%);
}
</style>
