<template>
  <div>
    <bread-crumbs
      :bread-list="[{name: '首页', url: '/'},{name: '表单', url: ''}, {name: '基本表单', url: '/form/basic'}]"/>
    <base-page-header
      :title="'基础表单'"
      :description="'表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'"/>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-col 
        :sm="{offset: 4, span: 16}"
        :md="{offset: 4, span: 16}"
        :xs="{span: 24}">
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-width="200px">

          <el-form-item
            prop="title">
            <span 
              slot="label" 
              class="color-0-0-0-85">标题：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.title"
                size="small"
                placeholder="给目标起个名字"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="dateRange">
            <span 
              slot="label" 
              class="color-0-0-0-85">起止日期：</span>
            <el-col
              :span="18">
              <el-date-picker
                v-model="form.dateRange"
                style="width: 100%"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
                unlink-panels/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="description">
            <span 
              slot="label" 
              class="color-0-0-0-85">目标描述：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.description"
                type="textarea"
                rows="4"
                placeholder="请输入你的阶段性工作目标"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="target">
            <span 
              slot="label" 
              class="color-0-0-0-85">衡量标准：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.target"
                type="textarea"
                rows="4"
                placeholder="请输入衡量标准"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="customer">
            <span 
              slot="label" 
              class="color-0-0-0-85">客户<span class="label-annotation">（选填）</span>：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.customer"
                size="small"
                placeholder="请描述你服务的客户，内部客户直接@姓名"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="referee">
            <span 
              slot="label" 
              class="color-0-0-0-85">邀评人<span class="label-annotation">（选填）</span>：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.referee"
                size="small"
                placeholder="请直接@姓名/工号，最多可邀请5人"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="customer">
            <span 
              slot="label" 
              class="color-0-0-0-85">客户<span class="label-annotation">（选填）</span>：</span>
            <el-col
              :span="18">
              <el-input
                v-model="form.customer"
                size="small"
                placeholder="请描述你服务的客户，内部客户直接@姓名"/>
            </el-col>
          </el-form-item>

          <el-form-item
            prop="customer">
            <span 
              slot="label" 
              class="color-0-0-0-85">权重<span class="label-annotation">（选填）</span>：</span>
            <el-col
              :span="4">
              <el-input
                v-model="form.customer"
                size="small"
                placeholder="请输入"/>
            </el-col>
            <el-col
              :span="2" 
              class="margin-left-8">%</el-col>
          </el-form-item>

          <el-form-item>
            <span 
              slot="label" 
              class="color-0-0-0-85">目标公开：</span>
            <el-col
              :span="18">
              <el-radio-group v-model="form.open">
                <el-radio label="1">公开</el-radio>
                <el-radio label="2">部分公开</el-radio>
                <el-radio label="3">不公开</el-radio>
              </el-radio-group>
              <el-input
                v-show="form.open==2"
                class="width-percent-100"
                size="small"
                placeholder="公开给"/>
              <p class="label-annotation">客户、邀评人默认被分项</p>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-col
              :span="18">
              <el-button 
                type="primary" 
                size="medium">提交</el-button>
              <el-button size="medium">保存</el-button>
            </el-col>
          </el-form-item>

        </el-form>
      </el-col>
    </el-card>
  </div>
</template>
<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'Basic',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data() {
    return {
      form: {
        title: '',
        dateRange: '',
        description: '',
        target: '',
        customer: '',
        referee: '',
        open: '1'
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
        ],
        dateRange: [
          { required: true, message: '请选择起止日期', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入目标描述', trigger: 'blur' }
        ],
        target: [{ required: true, message: '请输入衡量标准', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style scoped>
.margin-left-8 {
  margin-left: 8px;
}
</style>
