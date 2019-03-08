<template>
  <div>
    <bread-crumbs
      :bread-list="[{name: '首页', url: '/'},{name: '表单', url: ''}, {name: '分步表单', url: '/form/basic'}]"/>
    <base-page-header 
      :title="'分步表单'" 
      :description="'将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'"/>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-col 
        :sm="{offset: 4, span: 16}"
        :md="{offset: 4, span: 16}"
        :xs="{span: 24}">
        <el-steps 
          :active="actived"
          :align-center="true"
          process-status="wait"
          finish-status="finish">
          <el-step title="填写转账信息"/>
          <el-step title="确认转账信息"/>
          <el-step title="完成"/>
        </el-steps>
      </el-col>
      <div v-if="actived==1">
        <el-col
          :sm="{offset: 6, span: 12}"
          :md="{offset: 6, span: 12}"
          :xs="{span: 24}"
          class="margin-top-20">
          <el-form
            ref="form"
            :model="form"
            :rules="rules" 
            label-width="200px">
            <el-form-item
              prop="pay_account">
              <span
                slot="label"
                class="color-0-0-0-85">付款账户：</span>
              <el-col
                :span="18">
                <el-select 
                  v-model="form.pay_account"
                  class="width-percent-100"
                  size="small"
                  placeholder="请选择付款账号">
                  <el-option
                    v-for="item in pay_account_list"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </el-col>
            </el-form-item>

            <el-form-item
              prop="account">
              <span
                slot="label"
                class="color-0-0-0-85">收款账户：</span>
              <el-col
                :span="18">
                <el-input 
                  v-model="form.account"
                  size="small"
                  placeholder="请输入内容">
                  <el-select 
                    slot="prepend" 
                    v-model="form.account_type"
                    placeholder="请选择" 
                    class="width-100">
                    <el-option 
                      label="支付宝"
                      value="1"/>
                    <el-option 
                      label="银行卡"
                      value="2"/>
                  </el-select>
                </el-input>
              </el-col>
            </el-form-item>

            <el-form-item
              prop="account_name">
              <span
                slot="label"
                class="color-0-0-0-85">收款人姓名：</span>
              <el-col
                :span="18">
                <el-input
                  v-model="form.account_name"
                  size="small"
                  placeholder="输入收款人姓名"/>
              </el-col>
            </el-form-item>

            <el-form-item
              prop="amount">
              <span
                slot="label"
                class="color-0-0-0-85">转账金额：</span>
              <el-col
                :span="18">
                <el-input
                  v-model="form.amount"
                  size="small"
                  prefix-icon="anticon anticon-renminbi"
                  placeholder="输入转账金额"/>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-col
                :span="18">
                <el-button
                  type="primary"
                  size="medium" 
                  @click="handleNext">下一步</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="24">
          <div class="page-form-stemp-infobox label-annotation padding-20-40">
            <h3 class="label-annotation">说明</h3>
            <h4 class="label-annotation">转账到支付宝账户</h4>
            <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
            <h4 class="label-annotation margin-top-20">转账到银行卡</h4>
            <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
          </div>
        </el-col>
      </div>
      <el-col 
        v-if="actived==2"
        :sm="{offset: 8, span: 8}"
        :md="{offset: 8, span: 8}"
        :xs="{span: 24}" 
        class="margin-top-24">
        <el-alert
          title="确认转账后，资金将直接打入对方账户，无法退回。"
          type="warning"
          show-icon 
          class="margin-bottom-16"/>
        <el-row class="margin-bottom-16">
          <el-col 
            :span="6"
            class="text-align-right">付款账户：</el-col>
          <el-col 
            :span="16" 
            class="label-annotation">{{ form.pay_account || '--' }}</el-col>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-col 
            :span="6"
            class="text-align-right">收款账户：</el-col>
          <el-col 
            :span="16"
            class="label-annotation">{{ form.account }}</el-col>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-col 
            :span="6"
            class="text-align-right">收款人姓名：</el-col>
          <el-col 
            :span="16"
            class="label-annotation">{{ form.account_name }}</el-col>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-col 
            :span="6"
            class="text-align-right">转账金额：</el-col>
          <el-col 
            :span="16"
            class="label-annotation">{{ form.amount }} </el-col>
        </el-row>
        <el-row class="margin-bottom-16 page-form-stemp-infobox padding-20-0 page-form-stemp-inputpassword">
          <el-col
            :span="6"
            class="text-align-right">支付密码：</el-col>
          <el-col :span="16">
            <el-input 
              v-model="form.pay_password"
              size="small"
              type="password"/>
          </el-col>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-col
            :span="16" 
            :offset="6">
            <el-button
              :loading="submitLoading"
              type="primary"
              size="medium" 
              @click="confirmInfo">提交</el-button>
            <el-button
              size="medium"
              @click="preStep">上一步</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        v-if="actived==3"
        :sm="{offset: 8, span: 8}"
        :md="{offset: 8, span: 8}"
        :xs="{span: 24}"
        class="margin-top-24">
        <div class="page-form-step-msgbox">
          <div class="page-form-step-msgicon">
            <i class="anticon anticon-check-circle"/>
            <h2>操作成功</h2>
            <h4 class="label-annotation">预计两小时内到账</h4>
          </div>
        </div>
        <div class="page-form-step-msgbox margin-top-24">
          <el-row class="margin-bottom-16">
            <el-col
              :span="8"
              class="text-align-right">付款账户：</el-col>
            <el-col
              :span="16"
              class="label-annotation">{{ form.pay_account || '--' }}</el-col>
          </el-row>
          <el-row class="margin-bottom-16">
            <el-col
              :span="8"
              class="text-align-right">收款账户：</el-col>
            <el-col
              :span="16"
              class="label-annotation">{{ form.account }}</el-col>
          </el-row>
          <el-row class="margin-bottom-16">
            <el-col
              :span="8"
              class="text-align-right">收款人姓名：</el-col>
            <el-col
              :span="16"
              class="label-annotation">{{ form.account_name }}</el-col>
          </el-row>
          <el-row class="margin-bottom-16">
            <el-col
              :span="8"
              class="text-align-right">转账金额：</el-col>
            <el-col
              :span="16"
              class="label-annotation">{{ form.amount }} </el-col>
          </el-row>
        </div>
        <el-row class="margin-bottom-16 margin-top-24">
          <el-col
            :span="16"
            :offset="8">
            <el-button
              :loading="submitLoading"
              type="primary"
              size="medium"
              @click="rePay">再转一笔</el-button>
            <el-button
              size="medium">查看账单</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'Step',
  components: {
    'bread-crumbs': BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      actived: 1,
      submitLoading: false,
      form: {
        pay_account: '',
        account_type: '1',
        account: '970150379@qq.com',
        account_name: '魏永强',
        amount: 0.01,
        pay_password: ''
      },
      rules: {
        amount: [
          { required: true, message: '转账金额不能为空', trigger: 'blur' }
        ]
      },
      pay_account_list: [
        {
          value: '970150379@qq.com',
          label: '970150379@qq.com'
        }
      ]
    }
  },
  methods: {
    handleNext(event) {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.actived++
        } else {
          return false
        }
      })
    },
    confirmInfo(event) {
      if (this.form.pay_password != '') {
        this.submitLoading = true
        setTimeout(() => {
          this.actived++
          this.submitLoading = false
        }, 1500)
      } else {
        this.$message({
          type: 'error',
          message: '支付密码不能为空'
        })
      }
    },
    preStep(event) {
      this.actived--
    },
    rePay(event) {
      this.actived = 1
    }
  }
}
</script>

<style scoped>
.page-form-stemp-infobox {
  border-top: 1px solid #e8e8e8;
  margin-top: 20px;
}

.page-form-stemp-inputpassword {
  display: flex;
  align-items: center;
}

.page-form-step-msgicon {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-form-step-msgicon > i {
  font-size: 60px;
  color: #52c41a;
}
</style>
