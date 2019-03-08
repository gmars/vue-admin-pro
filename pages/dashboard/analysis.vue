<template>
  <div>
    <el-row :gutter="24">
      <el-col
        :xs="{span: 24}"
        :span="12"
        :lg="{span: 6}"
        class="margin-top-8">
        <div class="page-col-content">
          <div class="label-annotation width-percent-100">
            <span>总销售额</span>
            <span class="pull-right">
              <el-tooltip
                content="指标说明"
                placement="top">
                <i class="anticon anticon-exclamation-circle-o font-14"/>
              </el-tooltip>
            </span>
          </div>
          <div>
            <span class="font-30 color-0-0-0-85">￥126,560</span>
          </div>
          <div style="height: 48px;line-height: 48px;overflow: hidden">
            <span>
              <span class="color-0-0-0-65">周同比</span>
              <span class="margin-left-8">12%</span>
              <span style="transform: scale(0.83)">
                <i class="anticon anticon-xiala1 color-danger"/>
              </span>
            </span>
            <span>
              <span class="color-0-0-0-65">日同比</span>
              <span class="margin-left-8">11%</span>
              <span>
                <i class="anticon anticon-jubaohuitubiao- color-success"/>
              </span>
            </span>
          </div>
          <div
            class="divider divider-horizontal"
            style="margin: 8px 0px"/>
          <div>
            <span>
              <span class="color-0-0-0-65">日销售额</span>
              <span class="margin-left-8 color-0-0-0-85">￥12,423</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="{span: 24}"
        :span="12"
        :lg="{span: 6}"
        class="margin-top-8">
        <div class="page-col-content">
          <div class="label-annotation width-percent-100">
            <span>访问量</span>
            <span class="pull-right">
              <el-tooltip
                content="指标说明"
                placement="top">
                <i class="anticon anticon-exclamation-circle-o font-14"/>
              </el-tooltip>
            </span>
          </div>
          <div>
            <span class="font-30 color-0-0-0-85">8,846</span>
          </div>
          <div style="margin-left: -26px">
            <ve-line
              :data="chartData"
              :extend="chartExtend"
              :colors="colors"
              :settings="chartSettings" 
              height="48px"/>
          </div>
          <div
            class="divider divider-horizontal"
            style="margin: 8px 0px"/>
          <div>
            <span>
              <span class="color-0-0-0-65">日访问量</span>
              <span class="margin-left-8 color-0-0-0-85">1,234</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="{span: 24}"
        :span="12"
        :lg="{span: 6}"
        class="margin-top-8">
        <div class="page-col-content">
          <div class="label-annotation width-percent-100">
            <span>访问量</span>
            <span class="pull-right">
              <el-tooltip
                content="指标说明"
                placement="top">
                <i class="anticon anticon-exclamation-circle-o font-14"/>
              </el-tooltip>
            </span>
          </div>
          <div>
            <span class="font-30 color-0-0-0-85">6,560</span>
          </div>
          <div style="margin-left: -26px">
            <ve-histogram
              :data="chartData"
              :colors="['#1890ff']"
              :extend="chartExtend2"
              :legend-visible="false"
              :settings="chartSettings"
              height="48px"/>
          </div>
          <div
            class="divider divider-horizontal"
            style="margin: 8px 0px"/>
          <div>
            <span>
              <span class="color-0-0-0-65">转化率</span>
              <span class="margin-left-8 color-0-0-0-85">60%</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="{span: 24}"
        :span="12"
        :lg="{span: 6}"
        class="margin-top-8">
        <div class="page-col-content">
          <div class="label-annotation width-percent-100">
            <span>运营活动效果</span>
            <span class="pull-right">
              <el-tooltip
                content="指标说明"
                placement="top">
                <i class="anticon anticon-exclamation-circle-o font-14"/>
              </el-tooltip>
            </span>
          </div>
          <div>
            <span class="font-30 color-0-0-0-85">78%</span>
          </div>
          <div style="height: 48px;padding-top: 18px">
            <el-progress
              :text-inside="true"
              :stroke-width="16"
              :percentage="78"
              color="#13c2c2"
              status="success"/>
          </div>
          <div
            class="divider divider-horizontal"
            style="margin: 8px 0px"/>
          <div style="overflow: hidden;height: 21px">
            <span>
              <span class="color-0-0-0-65">周同比</span>
              <span class="margin-left-8">12%</span>
              <span style="transform: scale(0.83)">
                <i class="anticon anticon-xiala1 color-danger"/>
              </span>
            </span>
            <span>
              <span class="color-0-0-0-65">日同比</span>
              <span class="margin-left-8">11%</span>
              <span>
                <i class="anticon anticon-jubaohuitubiao- color-success"/>
              </span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-card 
      class="margin-top-20 border-none box-shadow-none"
      style="position: relative;">
      <div class="page-tabs-extra-control">
        <span 
          :class="{ 'color-blue' : dateActive === 'day'}"
          class="margin-right-24 cursor-pointer color-0-0-0-65"
          @click="quickData('day')">今日</span>
        <span
          :class="{ 'color-blue' : dateActive === 'week'}"
          class="margin-right-24 cursor-pointer color-0-0-0-65"
          @click="quickData('week')">本周</span>
        <span
          :class="{ 'color-blue' : dateActive === 'month'}"
          class="margin-right-24 cursor-pointer color-0-0-0-65"
          @click="quickData('month')">本月</span>
        <span
          :class="{ 'color-blue' : dateActive === 'year'}"
          class="margin-right-24 cursor-pointer color-0-0-0-65"
          @click="quickData('year')">全年</span>
        <el-date-picker
          v-model="dateRange"
          :picker-options="pickerOptions2"
          size="small"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="datePickerChange"/>
      </div>
      <el-tabs style="margin-bottom: -20px">
        <el-tab-pane 
          value="sales" 
          lazy>
          <span
            slot="label"
            class="font-16 page-tabs-label">销售额</span>
          <el-row>
            <el-col
              :xs="{span:24}"
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:12}"
              :xl="{span:16}">
              <h4>销售趋势</h4>
              <ve-histogram
                :extend="salesExtend"
                :data="saleData"
                :colors="['#1890ff']"
                :legend-visible="false"
                judge-width
                height="320px"
              />
            </el-col>
            <el-col
              :xs="{span:24}"
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:12}"
              :xl="{span:8}"
              style="padding: 0 32px 32px 72px">
              <h4>门店销售额排行</h4>
              <ul class="page-ranking-list margin-top-24">
                <li
                  v-for="(item, index) in rankingData"
                  :key="index"
                  class="page-ranking-list-item color-0-0-0-65">
                  <span
                    :style="index<=2 ? 'background-color: #314659;color: #fff':''"
                    class="page-ranking-list-num">{{ index+1 }}</span>
                  <span class="page-ranking-list-title">工专路 0 号店</span>
                  <span>323,234</span>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane lazy>
          <span
            slot="label"
            class="font-16 page-tabs-label">访问量</span>
          <el-row>
            <el-col
              :xs="{span:24}"
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:12}"
              :xl="{span:16}">
              <h4>访问趋势</h4>
              <ve-histogram
                :extend="salesExtend"
                :data="accessData"
                :colors="['#1890ff']"
                :legend-visible="false"
                judge-width
                height="320px"
              />
            </el-col>
            <el-col
              :xs="{span:24}"
              :sm="{span:24}"
              :md="{span:12}"
              :lg="{span:12}"
              :xl="{span:8}"
              style="padding: 0 32px 32px 72px">
              <h4>门店访问量排行</h4>
              <ul class="page-ranking-list margin-top-24">
                <li
                  v-for="(item, index) in rankingData"
                  :key="index"
                  class="page-ranking-list-item color-0-0-0-65">
                  <span
                    :style="index<=2 ? 'background-color: #314659;color: #fff':''"
                    class="page-ranking-list-num">{{ index+1 }}</span>
                  <span class="page-ranking-list-title">工专路 0 号店</span>
                  <span>323,234</span>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <el-row :gutter="24">
      <el-col :span="12">
        <el-card
          class="margin-top-20 border-none box-shadow-none">
          <div slot="header">
            <span class="font-16">线上热门搜索</span>
            <el-dropdown class="pull-right cursor-pointer">
              <i class="anticon anticon-ellipsis"/>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>选项一</el-dropdown-item>
                <el-dropdown-item>选项二 </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-row :gutter="48">
            <el-col
              :span="12"
              :xs="{span:24}">
              <div>
                <span class="label-annotation">
                  <span>搜索用户数</span>
                  <span>
                    <el-tooltip
                      content="指标说明"
                      placement="top">
                      <i class="anticon anticon-exclamation-circle-o font-14"/>
                    </el-tooltip>
                  </span>
                </span>
              </div>
              <div class="margin-top-8">
                <span class="font-20">12,321</span>
                <span class="label-annotation margin-left-24">17.2
                  <span style="transform: scale(0.83)">
                    <i class="anticon anticon-jubaohuitubiao- color-success"/>
                  </span>
                </span>
              </div>
              <div 
                style="margin-left: -20px"
                class="margin-top-8">
                <ve-line
                  :data="hotSearch"
                  :settings="{area:true}"
                  :legend-visible="false"
                  :extend="searchSetting"
                  :colors="['#1890ff']"
                  :min="['dataMin', 'dataMin']"
                  :max="['dataMax', 'dataMax']"
                  height="65%"
                  judge-width/>
              </div>
            </el-col>
            <el-col
              :span="12"
              :xs="{span:24}">
              <div>
                <span class="label-annotation">
                  <span>人均搜索次数</span>
                  <span>
                    <el-tooltip
                      content="指标说明"
                      placement="top">
                      <i class="anticon anticon-exclamation-circle-o font-14"/>
                    </el-tooltip>
                  </span>
                </span>
              </div>
              <div class="margin-top-8">
                <span class="font-20">2.7</span>
                <span class="label-annotation margin-left-24">26.2
                  <span style="transform: scale(0.83)">
                    <i class="anticon anticon-xiala1 color-danger"/>
                  </span>
                </span>
              </div>
              <div
                style="margin-left: -20px"
                class="margin-top-8">
                <ve-line
                  :data="hotSearch"
                  :settings="{area:true}"
                  :legend-visible="false"
                  :extend="searchSetting"
                  :colors="['#1890ff']"
                  :min="['dataMin', 'dataMin']"
                  :max="['dataMax', 'dataMax']"
                  height="65%"
                  judge-width/>
              </div>
            </el-col>
          </el-row>

          <el-table
            ref="multipleTable"
            :data="currentPage"
            :cell-style="{padding: '8px 0px'}"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column label="排名">
              <template slot-scope="scope">{{ scope.row.sort }}</template>
            </el-table-column>
            <el-table-column label="搜索关键词">
              <template slot-scope="scope"><a href="">{{ scope.row.words }}</a></template>
            </el-table-column>
            <el-table-column
              label="用户数"
              prop="user_num"
              sortable>
              <template slot-scope="scope">{{ scope.row.user_num }}</template>
            </el-table-column>
            <el-table-column
              label="周涨幅"
              prop="range"
              sortable>
              <template slot-scope="scope">
                {{ scope.row.range }}%
                <span 
                  v-if="scope.row.status > 0" 
                  style="transform: scale(0.83)">
                  <i class="anticon anticon-jubaohuitubiao- color-success"/>
                </span>
                <span 
                  v-if="scope.row.status < 0" 
                  style="transform: scale(0.83)">
                  <i class="anticon anticon-xiala1 color-danger"/>
                </span>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            :current-page="pageBar.page"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="pageBar.page_size"
            :total="pageBar.total"
            class="margin-top-20 padding-bottom-18 pull-right clearfix"
            layout="prev, pager, next"
            @current-change="handlePageChange"/>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          class="margin-top-20 border-none box-shadow-none">
          <div slot="header">
            <span class="font-16">销售额类别占比</span>
            <div class="pull-right">
              <el-button-group>
                <el-button 
                  size="mini" 
                  type="primary"
                  plain>全部渠道</el-button>
                <el-button size="mini">线上</el-button>
                <el-button size="mini">门店</el-button>
              </el-button-group>
              <el-dropdown class="cursor-pointer margin-left-8">
                <i class="anticon anticon-ellipsis"/>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>选项一</el-dropdown-item>
                  <el-dropdown-item>选项二 </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <h4 style="margin-top: 4px">销售额</h4>
          <ve-ring
            :extend="ringExtend"
            :data="ringData"
            :colors="['#1890ff', '#13c2c2', '#2fc25b', '#facc14', '#f04864', '#8543e0']"
            datatype="percent">
            <div class="page-ring-inner">
              <h4 class="label-annotation">销售额</h4>
              <h2 class="color-blue">￥15,781</h2>
            </div>
          </ve-ring>
        </el-card>
      </el-col>
    </el-row>
    <el-card
      class="margin-top-20 border-none box-shadow-none"
      style="position: relative;">
      <ve-line
        :data="customerData"
        :extend="customerExtend"
        :data-zoom="dataZoom"/>
    </el-card>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common.min'
import VeHistogram from 'v-charts/lib/histogram.min'
import VeRing from 'v-charts/lib/ring.common.min'
import 'echarts/lib/component/dataZoom'
import {
  getMonthStartDate,
  getMonthEndDate,
  getYearStartDate,
  getYearEndDate,
  getWeekStartDate,
  getWeekEndDate,
  now,
  nowYear,
  nowMonth,
  nowDay
} from '../../utils/QuickDate'
export default {
  name: 'Analysis',
  components: {
    VeLine,
    VeHistogram,
    VeRing
  },
  data: function() {
    this.colors = ['#975fe4']
    this.chartSettings = {
      area: true
    }
    this.chartExtend = {
      xAxis(v) {
        v.forEach(i => {
          i.show = false
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
      legend(v) {
        v.show = false
        return v
      },
      series(v) {
        v.forEach(i => {
          i.areaStyle.normal.color = ['#975fe4']
          i.symbol = 'none'
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
          i.show = false
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
      }
    }
    this.chartExtend2 = {
      xAxis(v) {
        v.forEach(i => {
          i.show = false
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
      }
    }
    this.salesExtend = {
      series(v) {
        v.forEach(i => {
          i.symbol = 'none'
          i.barCategoryGap = 40
        })
        return v
      }
    }
    this.ringExtend = {
      legend(v) {
        v.orient = 'vertical'
        v.right = 20
        v.top = 80
        v.itemGap = 24
        return v
      }
    }
    this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 100
      }
    ]
    this.customerExtend = {
      series(v) {
        v.forEach(i => {
          i.smooth = false
        })
        return v
      }
    }
    return {
      trans: 0,
      activeName: 'sales',
      chartData: {
        columns: ['日期', '访问量'],
        rows: [
          { 日期: '2019-01-01', 访问量: 7 },
          { 日期: '2019-01-02', 访问量: 5 },
          { 日期: '2019-01-03', 访问量: 4 },
          { 日期: '2019-01-04', 访问量: 2 },
          { 日期: '2019-01-05', 访问量: 4 },
          { 日期: '2019-01-06', 访问量: 7 },
          { 日期: '2019-01-07', 访问量: 5 },
          { 日期: '2019-01-08', 访问量: 6 },
          { 日期: '2019-01-09', 访问量: 5 },
          { 日期: '2019-01-10', 访问量: 9 },
          { 日期: '2019-01-11', 访问量: 6 },
          { 日期: '2019-01-12', 访问量: 3 },
          { 日期: '2019-01-13', 访问量: 1 },
          { 日期: '2019-01-14', 访问量: 5 },
          { 日期: '2019-01-15', 访问量: 3 },
          { 日期: '2019-01-16', 访问量: 6 },
          { 日期: '2019-01-17', 访问量: 5 },
          { 日期: '2019-01-18', 访问量: 10 }
        ]
      },
      saleData: {
        columns: ['月份', 'value'],
        rows: [
          { 月份: '1月', value: 443 },
          { 月份: '2月', value: 339 },
          { 月份: '3月', value: 409 },
          { 月份: '4月', value: 862 },
          { 月份: '5月', value: 259 },
          { 月份: '6月', value: 538 },
          { 月份: '7月', value: 288 },
          { 月份: '8月', value: 452 },
          { 月份: '9月', value: 269 },
          { 月份: '10月', value: 368 },
          { 月份: '11月', value: 556 },
          { 月份: '12月', value: 555 }
        ]
      },
      accessData: {
        columns: ['月份', 'value'],
        rows: [
          { 月份: '1月', value: 443 },
          { 月份: '2月', value: 339 },
          { 月份: '3月', value: 409 },
          { 月份: '4月', value: 862 },
          { 月份: '5月', value: 259 },
          { 月份: '6月', value: 538 },
          { 月份: '7月', value: 288 },
          { 月份: '8月', value: 452 },
          { 月份: '9月', value: 270 },
          { 月份: '10月', value: 368 },
          { 月份: '11月', value: 556 },
          { 月份: '12月', value: 555 }
        ]
      },
      rankingData: [
        {
          name: '工专路 0 号店',
          value: '323,234'
        },
        {
          name: '工专路 2 号店',
          value: '323,234'
        },
        {
          name: '工专路 3 号店',
          value: '323,234'
        },
        {
          name: '工专路 4 号店',
          value: '323,234'
        },
        {
          name: '工专路 5 号店',
          value: '323,234'
        },
        {
          name: '工专路 6 号店',
          value: '323,234'
        },
        {
          name: '工专路 7 号店',
          value: '323,234'
        }
      ],
      hotSearch: {
        columns: ['日期', 'value'],
        rows: [
          { 日期: '2019-01-17', value: 1 },
          { 日期: '2019-01-18', value: 6 },
          { 日期: '2019-01-19', value: 4 },
          { 日期: '2019-01-20', value: 8 },
          { 日期: '2019-01-21', value: 3 },
          { 日期: '2019-01-22', value: 7 },
          { 日期: '2019-01-23', value: 2 }
        ]
      },
      searchKey: [
        {
          sort: 1,
          words: '搜索关键词-0',
          user_num: 453,
          status: -1,
          range: 98
        },
        {
          sort: 2,
          words: '搜索关键词-1',
          user_num: 34,
          status: -1,
          range: 12
        },
        {
          sort: 3,
          words: '搜索关键词-2',
          user_num: 43,
          status: 1,
          range: 34
        },
        {
          sort: 4,
          words: '搜索关键词-3',
          user_num: 452,
          status: 1,
          range: 1
        },
        {
          sort: 5,
          words: '搜索关键词-4',
          user_num: 1234,
          status: -1,
          range: 12
        },
        {
          sort: 6,
          words: '搜索关键词-5',
          user_num: 5643,
          status: -1,
          range: 32
        },
        {
          sort: 7,
          words: '搜索关键词-6',
          user_num: 121,
          status: -1,
          range: 1
        }
      ],
      currentPage: [],
      pageBar: {
        page: 1,
        page_size: 5,
        total: 5
      },
      dateRange: '',
      dateActive: '',
      pickerOptions2: {},
      ringData: {
        columns: ['item', 'value'],
        rows: [
          { item: '家用电器', value: 4544 },
          { item: '食用酒水', value: 3321 },
          { item: '个护健康', value: 3113 },
          { item: '服饰箱包', value: 2341 },
          { item: '母婴产品', value: 1231 },
          { item: '其他', value: 1231 }
        ]
      },
      customerData: {
        columns: ['item', '客流量', '支付笔数'],
        rows: [
          { item: '06:39', 客流量: 33, 支付笔数: 25 },
          { item: '07:09', 客流量: 76, 支付笔数: 101 },
          { item: '07:39', 客流量: 52, 支付笔数: 59 },
          { item: '08:09', 客流量: 59, 支付笔数: 79 },
          { item: '08:39', 客流量: 50, 支付笔数: 69 },
          { item: '09:09', 客流量: 63, 支付笔数: 94 },
          { item: '09:39', 客流量: 54, 支付笔数: 46 },
          { item: '10:09', 客流量: 20, 支付笔数: 100 },
          { item: '10:39', 客流量: 103, 支付笔数: 72 },
          { item: '11:09', 客流量: 31, 支付笔数: 75 },
          { item: '11:39', 客流量: 73, 支付笔数: 96 },
          { item: '12:09', 客流量: 99, 支付笔数: 102 },
          { item: '12:39', 客流量: 42, 支付笔数: 95 },
          { item: '13:09', 客流量: 75, 支付笔数: 15 },
          { item: '13:39', 客流量: 22, 支付笔数: 26 },
          { item: '15:09', 客流量: 59, 支付笔数: 51 },
          { item: '15:39', 客流量: 53, 支付笔数: 19 }
        ]
      }
    }
  },
  created: function() {
    this.pageBar.total = this.searchKey.length
    this.currentPage = this.pageBar.total ? this.searchKey.slice(0, 5) : []
  },
  methods: {
    quickData(type) {
      this.dateActive = type
      switch (type) {
        case 'year':
          this.dateRange = [
            new Date(getYearStartDate()),
            new Date(getYearEndDate())
          ]
          break
        case 'month':
          this.dateRange = [
            new Date(getMonthStartDate()),
            new Date(getMonthEndDate())
          ]
          break
        case 'week':
          this.dateRange = [
            new Date(getWeekStartDate()),
            new Date(getWeekEndDate())
          ]
          break
        case 'day':
          this.dateRange = [
            new Date(nowYear, nowMonth, nowDay, 0, 0, 0),
            new Date(nowYear, nowMonth, nowDay, 23, 59, 59)
          ]
          break
      }
    },
    datePickerChange() {
      this.dateActive = ''
    },
    handlePageChange(event) {
      if (event === 1) {
        this.currentPage = this.searchKey.slice(0, 5)
      } else {
        this.currentPage = this.searchKey.slice(
          (event - 1) * this.pageBar.page_size - 1,
          event * this.pageBar.page_size
        )
      }
    }
  }
}
</script>

<style scoped>
.page-col-content {
  width: 100%;
  padding: 20px 24px 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.page-tabs-extra-control {
  position: absolute;
  right: 40px;
  top: 16px;
  height: 40px;
  line-height: 40px;
  z-index: 2;
}

.page-tabs-label {
  font-weight: normal;
}

.page-ranking-list {
  list-style: none;
  padding-left: 0px;
}

.page-ranking-list-item {
  display: flex;
  margin-top: 16px;
  align-items: center;
}

.page-ranking-list-num {
  background-color: #f5f5f5;
  border-radius: 20px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  margin-right: 16px;
  height: 20px;
  line-height: 20px;
  width: 20px;
  text-align: center;
  margin-top: 1.5px;
}

.page-ranking-list-title {
  flex: 1 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 8px;
}

.page-ring-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  max-height: 62px;
  transform: translate(-50%, -50%);
}
</style>
