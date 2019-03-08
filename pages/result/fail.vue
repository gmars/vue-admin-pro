<template>
  <div class="background-color-ffffff padding-20">
    <div class="page-result-wrap">
      <div class="padding-bottom-20">
        <i class="anticon anticon-close-circle color-danger font-72"/>
      </div>
      <div class="font-24 color-0-0-0-85 margin-bottom-16 font-weight-500">
        提交失败
      </div>
      <div class="label-annotation">
        请核对并修改以下信息后，再重新提交。
      </div>
      <div class="page-result-extra margin-top-24">
        <h3>您提交的内容有如下错误：</h3>
        <div>
          <span><i class="anticon anticon-close-circle-o color-danger margin-right-8"/>您的账户已被冻结</span>
          <el-button type="text">立即解冻<i class="anticon anticon-right"/></el-button>
        </div>
        <div>
          <span><i class="anticon anticon-close-circle-o color-danger margin-right-8"/>您的账户还不具备申请资格</span>
          <el-button type="text">立即升级<i class="anticon anticon-right"/></el-button>
        </div>
      </div>

      <div class="margin-top-24">
        <el-button
          type="primary"
          size="small">返回修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fail'
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
