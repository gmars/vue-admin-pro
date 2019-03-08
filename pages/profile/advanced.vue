<template>
  <div>
    <bread-crumbs
      :bread-list="[
        { name: '首页', url: '/' },
        { name: '详情页', url: '' },
        { name: '高级详情页', url: '' }
    ]"/>
    <div class="page-profile-header-wrap padding-bottom-18">
      <div class="page-header-logo">
        <img 
          src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" 
          alt="">
      </div>
      <div class="page-header-main">
        <div class="page-header-row">
          <h1 class="page-header-title">单号：234231029431</h1>
          <div>
            <el-button-group>
              <el-button size="small">操作</el-button>
              <el-button size="small">操作</el-button>
              <el-dropdown style="border-left: 1px solid #dcdfe6">
                <el-button
                  size="small"><i class="anticon anticon-ellipsis font-12"/></el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>操作一</el-dropdown-item>
                  <el-dropdown-item>操作二</el-dropdown-item>
                  <el-dropdown-item>操作三</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-button-group>
            <el-button
              size="small"
              type="primary">主操作</el-button>
          </div>
        </div>
        <div class="page-header-row margin-top-8">
          <div class="page-header-row-content">
            <el-row :gutter="24">
              <el-col 
                :xs="{span: 24}" 
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">创建人：</div>
                <div class="page-description-list-detail padding-bottom-8">曲丽丽</div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">订购产品：</div>
                <div class="page-description-list-detail padding-bottom-8">XX 服务</div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">创建时间：</div>
                <div class="page-description-list-detail padding-bottom-8">2017-07-07</div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">关联单据：</div>
                <div class="page-description-list-detail padding-bottom-8"><a href="">12421</a></div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">生效日期：</div>
                <div class="page-description-list-detail padding-bottom-8">2017-07-07 ~ 2017-08-08</div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="page-description-list-term padding-bottom-8">备注：</div>
                <div class="page-description-list-detail padding-bottom-8">请于两个工作日内确认</div>
              </el-col>
            </el-row>
          </div>
          <div class="page-header-row-extracontent text-align-right">
            <el-row :gutter="24">
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="color-0-0-0-65">状态</div>
                <div class="font-20 color-0-0-0-85">待审批</div>
              </el-col>
              <el-col
                :xs="{span: 24}"
                :sm="{span:12}">
                <div class="color-0-0-0-65">订单金额</div>
                <div class="font-20 color-0-0-0-85">￥568.08</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <h3 
        slot="header" 
        style="margin-bottom: 0px">流程进度</h3>
      <div>
        <el-steps 
          :active="1"
          align-center>
          <el-step 
            title="创建项目" 
            icon="anticon anticon-iconfontyuandian font-12">
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
            title="部门初审"
            icon="anticon anticon-iconfontyuandian font-12">
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
            title="财务复核"
            icon="anticon anticon-iconfontyuandian font-12"/>
          <el-step 
            title="完成"
            icon="anticon anticon-iconfontyuandian font-12"/>
        </el-steps>
      </div>
    </el-card>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <h3
        slot="header"
        style="margin-bottom: 0px">用户信息</h3>
      <el-row :gutter="24">
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}"
          class="padding-bottom-18">
          <div class="page-description-list-term">用户姓名：</div>
          <div class="page-description-list-detail">付小小</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}"
          class="padding-bottom-18">
          <div class="page-description-list-term">会员卡号：</div>
          <div class="page-description-list-detail">32943898021309809423</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}"
          class="padding-bottom-18">
          <div class="page-description-list-term">身份证：</div>
          <div class="page-description-list-detail">3321944288191034921</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}"
          class="padding-bottom-18">
          <div class="page-description-list-term">联系方式：</div>
          <div class="page-description-list-detail">18112345678</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}"
          class="padding-bottom-18">
          <div class="page-description-list-term">联系地址：</div>
          <div class="page-description-list-detail">曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</div>
        </el-col>
      </el-row>

      <h4 class="margin-bottom-16">信息组</h4>
      <el-row :gutter="24">
        <el-col
          :xs="{span: 24}"
          :md="{span:12}"
          class="padding-bottom-18">
          <div class="page-description-list-term">某某数据：</div>
          <div class="page-description-list-detail">725</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :md="{span:12}"
          class="padding-bottom-18">
          <div class="page-description-list-term">该数据更新时间：</div>
          <div class="page-description-list-detail">2017-08-08</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :md="{span:12}"
          class="padding-bottom-18">
          <div class="page-description-list-term">某某数据 <el-tooltip 
            effect="dark" 
            content="数据说明" 
            placement="top">
            <i class="anticon anticon-info-cirlce label-annotation"/>
          </el-tooltip>：</div>
          <div class="page-description-list-detail">725</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :md="{span:12}"
          class="padding-bottom-18">
          <div class="page-description-list-term">该数据更新时间：</div>
          <div class="page-description-list-detail">2017-08-08</div>
        </el-col>
      </el-row>

      <h4 class="margin-bottom-16">信息组</h4>
      <el-card>
        <div 
          slot="header" 
          class="page-card-header">
          <h4>多层级信息组</h4>
        </div>
        <div>
          <h4 class="margin-bottom-16">组名称</h4>
          <el-row :gutter="24">
            <el-col
              :xs="{span: 24}"
              :sm="{span:12}"
              :md="{span:8}"
              class="padding-bottom-18">
              <div class="page-description-list-term">用户姓名：</div>
              <div class="page-description-list-detail">付小小</div>
            </el-col>
            <el-col
              :xs="{span: 24}"
              :sm="{span:12}"
              :md="{span:8}"
              class="padding-bottom-18">
              <div class="page-description-list-term">会员卡号：</div>
              <div class="page-description-list-detail">32943898021309809423</div>
            </el-col>
            <el-col
              :xs="{span: 24}"
              :sm="{span:12}"
              :md="{span:8}"
              class="padding-bottom-18">
              <div class="page-description-list-term">身份证：</div>
              <div class="page-description-list-detail">3321944288191034921</div>
            </el-col>
            <el-col
              :xs="{span: 24}"
              :sm="{span:12}"
              :md="{span:8}"
              class="padding-bottom-18">
              <div class="page-description-list-term">联系方式：</div>
              <div class="page-description-list-detail">18112345678</div>
            </el-col>
            <el-col
              :xs="{span: 24}"
              :sm="{span:12}"
              :md="{span:8}"
              class="padding-bottom-18">
              <div class="page-description-list-term">联系地址：</div>
              <div class="page-description-list-detail">曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</div>
            </el-col>
          </el-row>
        </div>
        <div class="divider divider-horizontal"/>
        <h4>组学名称：</h4>
        <el-row :gutter="24">
          <el-col
            :xs="{span: 24}"
            class="padding-bottom-18 padding-top-18">
            <div class="color-0-0-0-65">学名：Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</div>
          </el-col>
        </el-row>
        <div class="divider divider-horizontal"/>
        <h4 class="margin-bottom-16">组学名称：</h4>
        <el-row :gutter="24">
          <el-col
            :xs="{span: 24}"
            :sm="{span:12}"
            :md="{span:8}"
            class="padding-bottom-18">
            <div class="page-description-list-term">用户姓名：</div>
            <div class="page-description-list-detail">付小小</div>
          </el-col>
          <el-col
            :xs="{span: 24}"
            :sm="{span:12}"
            :md="{span:8}"
            class="padding-bottom-18">
            <div class="page-description-list-term">会员卡号：</div>
            <div class="page-description-list-detail">32943898021309809423</div>
          </el-col>
        </el-row>
      </el-card>
    </el-card>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <h3
        slot="header"
        style="margin-bottom: 0px">用户近半年来电记录</h3>
      <el-table :data="recoard"/>
    </el-card>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-tabs>
        <el-tab-pane label="操作日志一">
          <el-table :data="log1">
            <el-table-column
              prop="type_name"
              label="操作类型"/>
            <el-table-column
              prop="operator"
              label="操作人"/>
            <el-table-column
              prop="result"
              label="执行结果"/>
            <el-table-column
              prop="time"
              label="操作时间"/>
            <el-table-column
              prop="remark"
              label="备注"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="操作日志二">
          <el-table :data="log2">
            <el-table-column
              prop="type_name"
              label="操作类型"/>
            <el-table-column
              prop="operator"
              label="操作人"/>
            <el-table-column
              prop="result"
              label="执行结果"/>
            <el-table-column
              prop="time"
              label="操作时间"/>
            <el-table-column
              prop="remark"
              label="备注"/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="操作日志三">
          <el-table :data="log3">
            <el-table-column
              prop="type_name"
              label="操作类型"/>
            <el-table-column
              prop="operator"
              label="操作人"/>
            <el-table-column
              prop="result"
              label="执行结果"/>
            <el-table-column
              prop="time"
              label="操作时间"/>
            <el-table-column
              prop="remark"
              label="备注"/>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
export default {
  name: 'Advanced',
  components: {
    BreadCrumbs
  },
  data: function() {
    return {
      log1: [
        {
          type_name: '订单关系生效',
          operator: '曲丽丽',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: ''
        },
        {
          type_name: '财务复审',
          operator: '付小小',
          result: '驳回',
          time: '2017-10-03 19:23:12',
          remark: '不通过原因'
        },
        {
          type_name: '部门初审',
          operator: '周毛毛',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: ''
        },
        {
          type_name: '提交订单',
          operator: '林东东',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: '很棒'
        },
        {
          type_name: '创建订单',
          operator: '汗牙牙',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: ''
        }
      ],
      log2: [
        {
          type_name: '订单关系生效',
          operator: '曲丽丽',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: ''
        }
      ],
      log3: [
        {
          type_name: '订单关系生效',
          operator: '曲丽丽',
          result: '成功',
          time: '2017-10-03 19:23:12',
          remark: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-profile-header-wrap {
  margin: 0px -20px 0px -20px;
  padding: 0px 32px 18px 32px;
  background-color: #ffffff;
  display: flex;
}
.page-header-logo {
  flex: 0 1 auto;
  margin-right: 16px;
  margin-bottom: 16px;
  padding-top: 1px;
}
.page-header-logo > img {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: block;
}
.page-header-main {
  width: 100%;
  flex: 0 1 auto;
}
.page-header-row {
  display: flex;
  width: 100%;
}
.page-header-title {
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  flex: auto;
}
.page-description-list-term {
  line-height: 20px;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.85);
  white-space: nowrap;
  display: table-cell;
}
.page-description-list-detail {
  line-height: 20px;
  width: 100%;
  color: rgba(0, 0, 0, 0.65);
  display: table-cell;
}
.page-header-row-content {
  flex: auto;
}
.page-header-row-extracontent {
  margin-left: 88px;
  min-width: 242px;
}
.page-card-header {
  background-color: #fafafa;
  margin: -18px -20px;
  padding: 8px 18px;
}
.page-incard-nopadding {
  margin: -18px -20px;
}
</style>
