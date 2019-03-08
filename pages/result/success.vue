<template>
  <div class="background-color-ffffff padding-20">
    <div class="page-result-wrap">
      <div class="padding-bottom-20">
        <i class="anticon anticon-check-circle color-success font-72"/>
      </div>
      <div class="font-24 color-0-0-0-85 margin-bottom-16 font-weight-500">
        提交成功
      </div>
      <div class="label-annotation">
        提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
      </div>
      <div class="page-result-extra margin-top-24">
        <h3>项目名称</h3>
        <el-row :gutter="24">
          <el-col 
            :xs="{span:24}" 
            :md="{span:6}"
            :span="12">
            <span class="color-0-0-0-85">
              <span>项目 ID：</span>
            </span>
            23421
          </el-col>
          <el-col
            :xs="{span:24}"
            :md="{span:6}"
            :span="12">
            <span class="color-0-0-0-85">
              <span>负责人：</span>
            </span>
            曲丽丽
          </el-col>
          <el-col
            :md="{span:12}"
            :span="24">
            <span class="color-0-0-0-85">
              <span>生效时间：</span>
            </span>
            2016-12-12 ~ 2017-12-12
          </el-col>
        </el-row>
        <el-steps
          :active="1"
          class="margin-top-24"
          align-center>
          <el-step
            title="创建项目">
            <div
              slot="description"
              class="font-14">
              <div class="label-annotation margin-top-8">
                <span>曲丽丽 <i class="anticon anticon-850chibang"/></span>
              </div>
              <div class="label-annotation margin-top-8">
                <span>2016-12-12 12:32</span>
              </div>
            </div>
          </el-step>
          <el-step
            title="部门初审">
            <div
              slot="description"
              class="font-14">
              <div class="label-annotation margin-top-8">
                <span>周毛毛 <i class="anticon anticon-850chibang color-blue"/></span>
              </div>
              <div class="margin-top-8">
                <el-button type="text">催一下</el-button>
              </div>
            </div>
          </el-step>
          <el-step
            title="财务复核"/>
          <el-step
            title="完成"/>
        </el-steps>
      </div>

      <div class="margin-top-24">
        <el-button 
          type="primary" 
          size="small">返回列表</el-button>
        <el-button
          size="small">查看项目</el-button>
        <el-button
          size="small">打印</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>
.page-result-wrap {
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 16px;
  text-align: center;
  width: 72%;
}
.page-result-extra {
  background-color: #fafafa;
  padding: 24px 40px;
  border-radius: 2px;
  text-align: left;
}
</style>
