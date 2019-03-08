<template>
  <div>
    <bread-crumbs :bread-list="[{name: '首页', url: '/'},{name: '列表页', url: ''}, {name: '查询表格', url: ''}]"/>
    <base-page-header
      :title="'查询表格'"/>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-form
        ref="searchForm"
        :model="form" 
        :inline="true">
        <el-row :gutter="60">
          <el-col :span="8">
            <div class="form-item">
              <span>规则名称：</span>
              <el-input 
                v-model="form.name"
                placeholder="请输入"
                class="form-control"/>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="form-item">
              <span>使用状态：</span>
              <el-select 
                v-model="form.status"
                class="form-control"
                placeholder="请选择">
                <el-option
                  v-for="item in statusList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
          <el-col 
            v-show="!searchFromCollapse" 
            :span="8">
            <div class="form-item">
              <span>调用次数：</span>
              <el-input
                v-model="form.times"
                placeholder="请输入"
                class="form-control"/>
            </div>
          </el-col>
          <el-col 
            v-show="searchFromCollapse" 
            :span="8">
            <el-button
              type="primary"
              size="small">查询</el-button>
            <el-button size="small">重置</el-button>
            <el-button 
              type="text"
              icon="anticon anticon-down"
              @click="searchFromCollapse = false">展开</el-button>
          </el-col>
        </el-row>
        <el-row 
          v-show="!searchFromCollapse" 
          :gutter="60"
          class="margin-top-20">
          <el-col :span="8">
            <div class="form-item">
              <span>更新时间：</span>
              <el-date-picker 
                v-model="form.update_time"
                class="form-control"/>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="form-item">
              <span>调用次数：</span>
              <el-input
                v-model="form.times"
                placeholder="请输入"
                class="form-control"/>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="form-item">
              <span>调用次数：</span>
              <el-input
                v-model="form.times"
                placeholder="请输入"
                class="form-control"/>
            </div>
          </el-col>
        </el-row>
        <div 
          v-show="!searchFromCollapse" 
          class="control-panel padding-top-18">
          <div class="pull-right">
            <el-button
              type="primary"
              size="small">查询</el-button>
            <el-button size="small">重置</el-button>
            <el-button
              type="text"
              icon="anticon anticon-up"
              @click="searchFromCollapse = true">展开</el-button>
          </div>
        </div>
      </el-form>
      <div class="margin-top-20">
        <el-button 
          icon="anticon anticon-plus font-12"
          size="small" 
          type="primary" 
          @click="openAdd">新建</el-button>
      </div>
      <div class="notice-wrap color-0-0-0-65 margin-top-20">
        <i class="anticon anticon-info-cirlce color-blue"/>
        <span>已选择 <span>0</span> 项</span>
        <span>服务调用次数总计 <span>0万</span></span>
        <el-button type="text">清空</el-button>
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>
        <el-table-column label="任务名称">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="描述">
          <template slot-scope="scope">{{ scope.row.description }}</template>
        </el-table-column>
        <el-table-column 
          label="服务调用次数"
          prop="times"
          sortable>
          <template slot-scope="scope">{{ scope.row.times }} 万</template>
        </el-table-column>
        <el-table-column 
          :filters="[{text: '运行中', value: '运行中'}, {text: '关闭', value: '关闭'}]"
          :filter-method="filterHandle"
          label="状态"
          prop="status">
          <template slot-scope="scope"><span class="badge-status-dot badge-status-processing" /><span class="padding-left-8">{{ scope.row.status }}</span></template>
        </el-table-column>
        <el-table-column label="上次调度时间">
          <template slot-scope="scope">{{ scope.row.update_time }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">配置</el-button>
            <div class="divider divider-vertical"/>
            <el-button type="text">订阅警报</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="pageBar.page"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="pageBar.page_size"
        :total="pageBar.total"
        background
        class="margin-top-20 padding-bottom-18 pull-right clearfix"
        layout="total, prev, pager, next, sizes, jumper"
        @size-change="handlePageSizeChange"
        @current-change="handlePageChange"/>
    </el-card>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'TableList',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      form: {
        name: '',
        status: '',
        update_time: ''
      },
      searchFromCollapse: true,
      pageBar: {
        total: 0,
        page: 1,
        page_size: 5
      },
      statusList: [
        {
          label: '关闭',
          value: '关闭'
        },
        {
          label: '运行中',
          value: '运行中'
        }
      ],
      tableData: [],
      totalData: [
        {
          name: 'tradeCode 1',
          description: '这是一段描述',
          times: '616',
          status: '运行中',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 2',
          description: '这是一段描述',
          times: '243',
          status: '运行中',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 3',
          description: '这是一段描述',
          times: '344',
          status: '已上线',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 4',
          description: '这是一段描述',
          times: '540',
          status: '关闭',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 5',
          description: '这是一段描述',
          times: '283',
          status: '关闭',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 6',
          description: '这是一段描述',
          times: '821',
          status: '异常',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 7',
          description: '这是一段描述',
          times: '961',
          status: '关闭',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 8',
          description: '这是一段描述',
          times: '741',
          status: '关闭',
          update_time: '2017-07-01 08:00:00'
        },
        {
          name: 'tradeCode 9',
          description: '这是一段描述',
          times: '464',
          status: '关闭',
          update_time: '2017-07-01 08:00:00'
        }
      ]
    }
  },
  created() {
    this._initPage()
  },
  methods: {
    _initPage() {
      this.pageBar.total = this.totalData.length
      this.pageBar.page = 1
      this.pageBar.page_size = 5
      this.tableData =
        this.pageBar.page_size > this.totalData.length
          ? this.totalData.slice(0)
          : this.totalData.slice(0, this.pageBar.page_size)
    },
    handlePageChange(event) {
      this.pageBar.page = event
      this.tableData =
        event * this.pageBar.page_size > this.totalData.length
          ? this.totalData.slice((event - 1) * this.pageBar.page_size)
          : this.totalData.slice(
              (event - 1) * this.pageBar.page_size,
              this.pageBar.page_size
            )
    },
    handlePageSizeChange(event) {
      this.pageBar.page_size = event
    },
    handleSelectionChange(event) {
      console.log(event)
    },
    filterHandle(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    openAdd() {
      this.$prompt('请输入规则名', '新建规则', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\w+/,
        inputErrorMessage: '规则名不能为空'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '规则名:[' + value + ']添加成功'
          })
          Object.assign({}, this.totalData, {
            name: value,
            description: '这是一段描述',
            times: '741',
            status: '关闭',
            update_time: '2017-07-01 08:00:00'
          })
          this._initPage()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消添加'
          })
        })
    }
  }
}
</script>

<style scoped>
.form-item {
  display: flex;
  align-items: center;
}

.form-control {
  flex: 1 1;
}

.control-panel {
  display: block;
}

.notice-wrap {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  border-radius: 4px;
  padding: 0px 15px;
}

.badge-status-processing {
  background-color: #1890ff;
  position: relative;
}

.badge-status-processing:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #409eff;
  content: '';
  animation: statusProcessing 1.2s ease-in-out infinite;
}

.badge-status-dot {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  top: -1px;
}

@keyframes statusProcessing {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  to {
    transform: scale(2.4);
    opacity: 0;
  }
}
</style>
