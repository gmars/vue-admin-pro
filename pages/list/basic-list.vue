<template>
  <div>
    <bread-crumbs 
      :bread-list="[{name: '首页', url: '/'},{name: '列表页', url: ''}, {name: '标准列表', url: ''}]"/>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-row 
        :gutter="100"
        type="flex"
        justify="center">
        <el-col 
          :span="8" 
          class="border-right-e8">
          <div>
            <p class="label-annotation text-align-center">我的待办</p>
            <p class="text-align-center font-24 padding-top-8">8个任务</p>
          </div>
        </el-col>
        <el-col 
          :span="8" 
          class="border-right-e8">
          <div>
            <p class="label-annotation text-align-center">本周任务平均处理时间</p>
            <p class="text-align-center font-24 padding-top-8">32分钟</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p class="label-annotation text-align-center">本周完成任务数</p>
            <p class="text-align-center font-24 padding-top-8">24个任务</p>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="margin-top-20 border-none box-shadow-none">
      <div 
        slot="header" 
        style="border-bottom: none">
        <span>标准列表</span>
        <div class="pull-right">
          <el-button-group>
            <el-button 
              :autofocus="true" 
              size="small">全部</el-button>
            <el-button size="small">进行中</el-button>
            <el-button size="small">等待中</el-button>
          </el-button-group>
          <el-input
            size="small"
            style="width: 300px" 
            placeholder="请输入">
            <i 
              slot="suffix" 
              class="anticon anticon-search font-20"/>
          </el-input>
        </div>
      </div>
      <div>
        <el-button
          size="small"
          class="btn-dashed-border width-percent-100"
          @click="handleAdd"><i class="anticon anticon-plus padding-right-8"/>添加</el-button>
        <div class="padding-top-18">
          <div 
            v-for="(item, index) in list"
            :key="index"
            class="border-bottom-e8">
            <el-row
              :gutter="18"
              class="padding-20-0"
              type="flex"
              align="middle">
              <el-col
                :span="13"
                class="page-list-row">
                <div class="page-list-avatar margin-right-8">
                  <img
                    :src="item.avatar"
                    class="border-radius-4"
                    alt="">
                </div>
                <div>
                  <h4 class="color-0-0-0-65">{{ item.title }}</h4>
                  <p class="label-annotation">{{ item.sub_title }}</p>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <p class="label-annotation">Owner</p>
                  <p class="label-annotation">{{ item.owner }}</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div>
                  <p class="label-annotation">开始时间</p>
                  <p class="label-annotation">{{ item.start_time }}</p>
                </div>
              </el-col>
              <el-col :span="3">
                <el-progress 
                  :percentage="item.percentage" 
                  :status="item.process_type"/>
              </el-col>
              <el-col :span="3">
                <el-button type="text">编辑</el-button>
                <div class="divider divider-vertical"/>
                <el-dropdown>
                  <el-button 
                    type="text"
                    class="el-dropdown-link">更多<i class="el-icon-arrow-down el-icon--right"/></el-button>
                  <el-dropdown-menu 
                    slot="dropdown">
                    <el-dropdown-item>编辑</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </div>
        </div>

        <div>
          <div class="pull-right padding-20-0">
            <el-pagination
              :current-page="1"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              :total="400"
              background
              layout="prev, pager, next, sizes, jumper"/>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
export default {
  name: 'BasicList',
  components: {
    BreadCrumbs
  },
  data: function() {
    return {
      list: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          title: 'Alipay',
          sub_title: '那是一种内在的东西， 他们到达不了，也无法触及的',
          owner: '付小小',
          start_time: '2019-01-07 16:32',
          process_type: '',
          percentage: 70
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          title: 'Angular',
          sub_title: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          owner: '曲丽丽',
          start_time: '2019-01-07 16:32',
          process_type: 'exception',
          percentage: 70
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          title: 'Ant Design',
          owner: '林东东',
          sub_title: '生命就像一盒巧克力，结果往往出人意料',
          start_time: '2019-01-07 16:32',
          process_type: '',
          percentage: 93
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          title: 'Ant Design Pro',
          sub_title: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
          owner: '周星星',
          start_time: '2019-01-07 16:32',
          process_type: '',
          percentage: 70
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          title: 'Bootstrap',
          sub_title: '那时候我只会想自己想要什么，从不想自己拥有什么',
          owner: '吴加好',
          start_time: '2019-01-07 16:32',
          process_type: 'exception',
          percentage: 70
        }
      ]
    }
  },
  created() {}
}
</script>

<style scoped>
.page-list-row {
  display: flex;
  align-items: center;
}
.page-list-avatar {
  width: 48px;
  height: 48px;
  line-height: 48px;
}
.page-list-avatar > img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
