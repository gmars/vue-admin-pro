<template>
  <div>
    <bread-crumbs
      :bread-list="[
        { name: '首页', url: '/' },
        { name: '详情页', url: '' },
        { name: '基础详情页', url: '' }
    ]"/>
    <base-page-header 
      title="基础详情页" 
      class="border-bottom-e8"/>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <div class="page-description-list-title">退款申请</div>
      <el-row :gutter="24">
        <el-col 
          :xs="{span: 24}" 
          :sm="{span:12}" 
          :md="{span:8}">
          <div class="page-description-list-term">取货单号：</div>
          <div class="page-description-list-detail">1000000000</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">状态：</div>
          <div class="page-description-list-detail">已取货</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">销售单号：</div>
          <div class="page-description-list-detail">1234123421</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">子订单：</div>
          <div class="page-description-list-detail">3214321432</div>
        </el-col>
      </el-row>
      <div class="divider divider-horizontal"/>
      <div class="page-description-list-title">用户信息</div>
      <el-row :gutter="24">
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">用户姓名：</div>
          <div class="page-description-list-detail">付小小</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">联系电话：</div>
          <div class="page-description-list-detail">18100000000</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">常用快递：</div>
          <div class="page-description-list-detail">菜鸟仓储</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">取货地址：</div>
          <div class="page-description-list-detail">浙江省杭州市西湖区万塘路18号</div>
        </el-col>
        <el-col
          :xs="{span: 24}"
          :sm="{span:12}"
          :md="{span:8}">
          <div class="page-description-list-term">备注：</div>
          <div class="page-description-list-detail">无</div>
        </el-col>
      </el-row>
      <div class="divider divider-horizontal"/>
      <div class="page-description-list-title">退货商品</div>
      <el-table 
        :data="goodsList"
        :header-cell-style="{'background-color': '#fafafa', 'color':'rgba(0,0,0,.85)'}"
        show-summary 
        style="width: 100%">
        <el-table-column 
          prop="id" 
          label="商品编号">
          <template slot-scope="goods">
            <a href="">{{ goods.row.id }}</a>
          </template>
        </el-table-column>>
        <el-table-column
          prop="name"
          label="商品名称"/>
        <el-table-column
          prop="price"
          label="单价"/>
        <el-table-column
          prop="num"
          label="数量（件）"/>
        <el-table-column
          prop="amount"
          label="金额"/>
      </el-table>

      <div class="page-description-list-title margin-top-24">退货进度</div>
      <el-table
        :data="rebackList"
        :header-cell-style="{'background-color': '#fafafa', 'color':'rgba(0,0,0,.85)'}"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="时间"/>
        <el-table-column
          prop="process"
          label="当前进度"/>
        <el-table-column
          prop="status"
          label="状态"/>
        <el-table-column
          prop="operator"
          label="操作员ID"/>
        <el-table-column
          prop="time"
          label="耗时"/>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
import BasePageHeader from '~/components/BasePageHeader'
export default {
  name: 'Basic',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      goodsList: [
        {
          id: 1234561,
          name: '矿泉水 550ml',
          sn: '12421432143214321',
          price: 2.0,
          num: 1,
          amount: '2.00'
        },
        {
          id: 1234562,
          name: '凉茶 300ml',
          sn: '12421432143214322',
          price: 3.0,
          num: 2,
          amount: '6.00'
        },
        {
          id: 1234563,
          name: '好吃的薯片',
          sn: '12421432143214323',
          price: 7.0,
          num: 4,
          amount: '28.00'
        },
        {
          id: 1234564,
          name: '特别好吃的蛋卷',
          sn: '12421432143214324',
          price: '8.50',
          num: 3,
          amount: '25.5'
        }
      ],
      rebackList: [
        {
          date: '2017-10-01 14:10',
          process: '联系客户',
          status: '进行中',
          status_type: 1,
          operator: '取货员 ID1234',
          time: '5mins'
        },
        {
          date: '2017-10-01 14:05',
          process: '取货员出发',
          status: '成功',
          status_type: 2,
          operator: '取货员 ID1234',
          time: '1h'
        },
        {
          date: '2017-10-01 13:05',
          process: '取货员接单',
          status: '成功',
          status_type: 2,
          operator: '取货员 ID1234',
          time: '5mins'
        },
        {
          date: '2017-10-01 13:00',
          process: '申请审批通过',
          status: '成功',
          status_type: 2,
          operator: '系统',
          time: '1h'
        },
        {
          date: '2017-10-01 12:00',
          process: '发起退货申请',
          status: '成功',
          status_type: 2,
          operator: '用户',
          time: '5mins'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-description-list-title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  margin-bottom: 16px;
}
.page-description-list-term {
  line-height: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.85);
  white-space: nowrap;
  display: table-cell;
}
.page-description-list-detail {
  line-height: 20px;
  width: 100%;
  padding-bottom: 16px;
  color: rgba(0, 0, 0, 0.65);
  display: table-cell;
}
</style>
