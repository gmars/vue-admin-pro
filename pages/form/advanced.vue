<template>
  <div>
    <bread-crumbs
      :bread-list="[{name: '首页', url: '/'},{name: '表单', url: ''}, {name: '高级表单', url: '/form/advanced'}]"/>
    <base-page-header 
      :title="'高级表单'"
      :description="'高级表单常见于一次性输入和提交大批量数据的场景。'"/>
    <el-form 
      ref="form" 
      :rules="rules" 
      :model="form">
      <el-card class="margin-top-20 border-none box-shadow-none">
        <div slot="header">
          <span>
            <h3>仓库管理</h3>
          </span>
        </div>
        <el-row :gutter="200">
          <el-col :span="8">
            <el-form-item 
              label="仓库名" 
              prop="warehouse_name">
              <el-input 
                v-model="form.warehouse_name"
                size="small"
                placeholder="请输入仓库名称"/>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item 
              label="仓库域名" 
              prop="warehouse_domain">
              <el-input
                v-model="form.warehouse_domain"
                size="small"
                placeholder="请输入">
                <template slot="prepend">Http://</template>
                <template slot="append">.com</template>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item 
              label="仓库管理员" 
              prop="warehouse_manager">
              <el-select
                v-model="form.warehouse_manager"
                class="width-percent-100"
                size="small"
                placeholder="请选择管理员">
                <el-option
                  v-for="item in executorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item 
              label="审批员" 
              prop="warehouse_approver">
              <el-select
                v-model="form.warehouse_approver"
                class="width-percent-100"
                size="small"
                placeholder="请选择审批员">
                <el-option
                  v-for="item in executorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item 
              label="生效日期" 
              prop="warehouse_dateLine">
              <el-date-picker
                v-model="form.warehouse_dateLine"
                style="width: 100%"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
                unlink-panels/>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item 
              label="仓库类型" 
              prop="warehouse_type">
              <el-select
                v-model="form.warehouse_type"
                class="width-percent-100"
                size="small"
                placeholder="请选择仓库类型">
                <el-option
                  v-for="item in taskTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
      </el-card>

      <el-card class="margin-top-20 border-none box-shadow-none">
        <div slot="header">
          <span>
            <h3>任务管理</h3>
          </span>
        </div>
        <el-row :gutter="200">
          <el-col :span="8">
            <el-form-item 
              label="任务名" 
              prop="task_name">
              <el-input 
                v-model="form.task_name"
                type="text"
                size="small"
                placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item 
              label="任务描述" 
              prop="task_description">
              <el-input
                v-model="form.task_description"
                type="text"
                size="small"
                placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="执行人">
              <el-select
                v-model="form.task_executor"
                class="width-percent-100"
                size="small"
                placeholder="请选择管理员">
                <el-option
                  v-for="item in executorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="责任人">
              <el-select
                v-model="form.task_duty"
                class="width-percent-100"
                size="small"
                placeholder="请选择审批员">
                <el-option
                  v-for="item in executorList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生效日期">
              <el-time-picker
                v-model="form.task_noticeTime"
                size="small"
                style="width: 100%"
                placeholder="提醒时间"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="任务类型">
              <el-select
                v-model="form.task_type"
                class="width-percent-100"
                size="small"
                placeholder="请选择仓库类型">
                <el-option
                  v-for="item in taskTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="margin-top-20 border-none box-shadow-none">
        <div slot="header">
          <span>
            <h3>成员管理</h3>
          </span>
        </div>
        <div>
          <el-table 
            :data="members" 
            style="width: 100%">
            <el-table-column 
              label="成员姓名">
              <template slot-scope="props">
                <span v-show="!props.row.edit">{{ props.row.name }}</span>
                <el-input 
                  v-show="props.row.edit"
                  :value="props.row.name"
                  v-model="props.row.name"
                  placeholder="成员姓名"
                  size="small"/>
              </template>
            </el-table-column>
            <el-table-column 
              label="工号">
              <template slot-scope="props">
                <span v-show="!props.row.edit">{{ props.row.job_number }}</span>
                <el-input
                  v-show="props.row.edit"
                  :value="props.row.job_number"
                  v-model="props.row.job_number"
                  placeholder="工号"
                  size="small"/>
              </template>
            </el-table-column>
            <el-table-column 
              label="所属部门" >
              <template slot-scope="props">
                <span v-show="!props.row.edit">{{ props.row.department }}</span>
                <el-input
                  v-show="props.row.edit"
                  :value="props.row.department"
                  v-model="props.row.department"
                  placeholder="所属部门"
                  size="small"/>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <span 
                  v-show="scope.row.edit"
                  class="color-blue cursor-pointer"
                  @click="scope.row.edit=false">保存</span>
                <span 
                  v-show="!scope.row.edit"
                  class="color-blue cursor-pointer"
                  @click="handleEdit(scope.$index, scope.row)">编辑</span>
                <div class="divider divider-vertical"/>
                <el-popover
                  v-model="scope.row.popover"
                  placement="top">
                  <p><i class="anticon anticon-exclamation-circle color-warning padding-right-8"/>是否要删除此行？</p>
                  <div class="text-align-right margin-top-20">
                    <el-button 
                      size="mini" 
                      type="text" 
                      @click="scope.row.popover = false">取消</el-button>
                    <el-button 
                      type="primary" 
                      size="mini" 
                      @click="handleDelete(scope.$index)">确定</el-button>
                  </div>
                  <span
                    v-show="!scope.row.edit"
                    slot="reference"
                    class="color-danger cursor-pointer">删除</span>
                </el-popover>
                <span 
                  v-show="scope.row.edit"
                  class="color-danger cursor-pointer"
                  @click="handleCancle(scope.$index)">取消</span>
              </template>
            </el-table-column>
          </el-table>
          <el-button 
            size="small"
            class="btn-dashed-border width-percent-100 margin-top-20"
            @click="handleAdd"><i class="anticon anticon-plus padding-right-8"/>增加新成员</el-button>
        </div>
      </el-card>

      <div 
        :style="{width : this.$store.state.NavMenuCollapse? 'calc(100% - 64px)' : 'calc(100% - 256px)'}"
        class="page-form-advanced-toolbar-wrap">
        <div class="pull-right">
          <span 
            v-if="errorNum>0" 
            class="page-form-advanced-toolbar-errortag">
            <i class="anticon anticon-exclamation-circle"/>
            <span>{{ errorNum }}</span>
          </span>
          <el-button 
            type="primary"
            size="medium"
            @click="handleSubmit">提交</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'Advanced',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      form: {
        warehouse_name: '',
        warehouse_domain: '',
        warehouse_manager: '',
        warehouse_approver: '',
        warehouse_dateLine: '',
        warehouse_type: '',
        task_name: '',
        task_description: '',
        task_executor: '',
        task_duty: '',
        task_noticeTime: '',
        task_type: ''
      },
      rules: {
        warehouse_name: [
          { required: true, message: '该内容不能为空', trigger: 'blur' },
          { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
        ],
        warehouse_domain: [
          { required: true, message: '该内容不能为空', trigger: 'blur' },
          { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
        ],
        warehouse_manager: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ],
        warehouse_approver: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ],
        warehouse_dateLine: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ],
        warehouse_type: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ],
        task_name: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ],
        task_description: [
          { required: true, message: '该内容不能为空', trigger: 'blur' }
        ]
      },
      executorList: [
        {
          label: '周毛毛',
          value: '周毛毛'
        },
        {
          label: '付晓晓',
          value: '付晓晓'
        }
      ],
      taskTypeList: [
        {
          label: '私密',
          value: '1'
        },
        {
          label: '公开',
          value: '2'
        }
      ],
      members: [
        {
          name: '魏永强',
          job_number: '001',
          department: '技术开发部门',
          edit: false
        },
        {
          name: '王小毛',
          job_number: '002',
          department: '技术开发部门-Web前端',
          edit: false
        },
        {
          name: '绿巨人',
          job_number: '003',
          department: '安全防卫部',
          edit: false
        }
      ],
      editMemeber: [],
      errorNum: 0
    }
  },
  methods: {
    handleEdit(index, row) {
      this.editMemeber[index] = {}
      Object.assign(this.editMemeber[index], row)
      this.members[index].edit = true
    },
    handleCancle(index) {
      if (
        this.members[index].name == '' &&
        this.members[index].job_number == '' &&
        this.members[index].department == ''
      ) {
        this.members.splice(index, 1)
      } else {
        Object.assign(this.members[index], this.editMemeber[index])
        this.members[index].edit = false
      }
    },
    handleDelete(index) {
      this.members.splice(index, 1)
    },
    handleAdd() {
      this.members.push({
        name: '',
        job_number: '',
        department: '',
        edit: true
      })
    },
    handleSubmit() {
      this.$refs['form'].validate((valid, error) => {
        for (let item in error) {
          this.errorNum++
        }
      })
    }
  }
}
</script>

<style scoped>
.page-form-advanced-toolbar-wrap {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  margin-left: -20px;
  border-top: 1px solid #e8e8e8;
  height: 56px;
  line-height: 56px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  padding: 0px 20px;
  z-index: 2;
}

.page-form-advanced-toolbar-errortag {
  cursor: pointer;
  color: #f5222d;
  margin-right: 24px;
}
</style>
