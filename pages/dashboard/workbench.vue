<template>
  <div>
    <bread-crumbs
      :bread-list="[{name: '首页', url: '/'},{name: 'Dashboard', url: ''}, {name: '工作台', url: '/dashboard/workbench'}]"/>
    <div class="page-workbench-header-wrap">
      <div class="page-workbench-header-index">
        <div class="page-header-left">
          <div class="page-header-avatar">
            <span class="pro-avatar pro-avatar-lg page-header-avatar-image">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png">
            </span>
          </div>
          <div class="page-header-left-content">
            <div class="page-header-left-title">早安，Serati Ma，祝你开心每一天！</div>
            <div>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
          </div>
        </div>
        <div class="page-header-right">
          <div class="page-workbench-extracontent">
            <div class="page-workbench-extraitem">
              <p class="label-annotation">项目数</p>
              <p class="font-30 color-0-0-0-85">56</p>
            </div>
            <div class="page-workbench-extraitem">
              <p class="label-annotation">团队内排名</p>
              <p class="font-30 color-0-0-0-85">8 <span class="font-20 label-annotation">/ 24</span></p>
            </div>
            <div class="page-workbench-extraitem">
              <p class="label-annotation">项目访问</p>
              <p class="font-30 color-0-0-0-85">2,223</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-row 
      :gutter="24" 
      class="margin-top-20">
      <el-col :span="16">
        <el-card class="margin-top-20 border-none box-shadow-none">
          <div 
            slot="header" 
            class="page-card-header">
            <span>
              <h3 style="margin-bottom: 0px">进行中的项目</h3>
            </span>
            <nuxt-link
              tag="span"
              to="/list/search/projects">
              <el-button
                type="text">全部项目</el-button>
            </nuxt-link>
          </div>
          <div style="margin: -20px -18px -18px -20px">
            <el-row>
              <el-col 
                v-for="(item, key) in projectList"
                :key="key"
                :span="8" 
                class="page-workbench-projectgrid">
                <div>
                  <span class="pro-avatar pro-avatar-sm">
                    <img :src="item.image">
                  </span>
                  <a
                    href="/"
                    class="color-0-0-0-85 font-weight-500 margin-left-8">{{ item.name }}</a>
                </div>
                <div class="margin-top-8 label-annotation page-workbench-description">
                  {{ item.description }}
                </div>
                <div class="margin-top-8 font-12 label-annotation page-workbench-gridextra">
                  <span><a 
                    href="/" 
                    class="label-annotation">{{ item.author }}</a></span>
                  <span><a 
                    href="/" 
                    class="label-annotation">{{ item.create_time }}</a></span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <el-card class="margin-top-20 border-none box-shadow-none">
          <div
            slot="header"
            class="page-card-header"
            style="padding: 16px 20px">
            <span>
              <h3 style="margin-bottom: 0px">动态</h3>
            </span>
          </div>
          <div 
            v-for="(item, key) in dynamic" 
            :key="key" 
            class="page-workbench-item padding-bottom-18 border-bottom-e8 margin-bottom-16">
            <div>
              <span class="pro-avatar pro-avatar-md">
                <img :src="item.image">
              </span>
            </div>
            <div class="margin-left-8">
              <div class="font-14">
                <span>
                  <a 
                    :href="item.author_link"
                    class="color-0-0-0-65">{{ item.author }}</a> <span>在 <a :href="item.team_link">{{ item.team? item.team : item.project }}</a> {{ item.action }} <a href="/">{{ item.team? item.project : '' }}</a></span>
                </span>
              </div>
              <div class="font-12 label-annotation margin-top-8">4 天前</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="margin-top-20 border-none box-shadow-none">
          <div
            slot="header"
            class="page-card-header" 
            style="padding: 16px 20px">
            <span>
              <h3 style="margin-bottom: 0px">快速开始/便捷导航</h3>
            </span>
          </div>
          <el-row>
            <el-col :span="6">
              <el-button 
                type="text" 
                class="label-annotation">
                操作一
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text"
                class="label-annotation">
                操作二
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text"
                class="label-annotation">
                操作三
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text"
                class="label-annotation">
                操作四
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text"
                class="label-annotation">
                操作五
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text"
                class="label-annotation">
                操作六
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button 
                type="text">
                <span style="border: 1px solid;border-radius: 4px;padding: 2px 8px;">
                  <i class="anticon anticon-plus"/>
                  添加
                </span>
              </el-button>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="margin-top-20 border-none box-shadow-none">
          <div
            slot="header"
            class="page-card-header"
            style="padding: 16px 20px">
            <span>
              <h3 style="margin-bottom: 0px">XX 指数</h3>
            </span>
          </div>
          <div>
            <ve-radar 
              :data="works"
              :extend="worksExtendSetting"/>
          </div>
        </el-card>

        <el-card class="margin-top-20 border-none box-shadow-none">
          <div
            slot="header"
            class="page-card-header"
            style="padding: 16px 20px">
            <span>
              <h3 style="margin-bottom: 0px">团队</h3>
            </span>
          </div>
          <el-row>
            <el-col 
              v-for="(item, key) in projectList"
              :span="12"
              :key="key"
              :class="{'margin-top-24' : key > 1}">
              <span class="pro-avatar pro-avatar-sm">
                <img :src="item.image">
              </span>
              <span class="margin-left-8">
                <a 
                  href="/" 
                  class="color-0-0-0-65">{{ item.author }}</a>
              </span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
import VeRadar from 'v-charts/lib/radar.min'
export default {
  name: 'Workbench',
  components: {
    BreadCrumbs,
    VeRadar
  },
  data() {
    return {
      projectList: [
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          name: 'Alipay',
          description: '那是一种内在的东西，他们到达不了，也无法触及的',
          author: '科学搬砖组',
          create_time: '4 小时前'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          name: 'Angular',
          description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          author: '全组都是吴彦祖',
          create_time: '2 年前'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          name: 'Ant Design',
          description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
          author: '中二少女团',
          create_time: '4 小时前'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          name: 'Ant Design Pro',
          description: '那时候我只会想自己想要什么，从不想自己拥有什么',
          author: '程序员日常',
          create_time: '2 年前'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          name: 'Bootstrap',
          description: '凛冬将至',
          author: '高逼格设计天团',
          create_time: '2 年前'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
          name: 'React',
          description: '生命就像一盒巧克力，结果往往出人意料',
          author: '骗你来学计算机',
          create_time: '2 年前'
        }
      ],
      dynamic: [
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
          author: '曲丽丽',
          author_link: '/',
          team: '高逼格设计天团',
          team_link: '/',
          action: '新建项目',
          project: '六月迭代',
          project_link: '/'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
          author: '付小小',
          author_link: '/',
          team: '高逼格设计天团',
          team_link: '/',
          action: '新建项目',
          project: '六月迭代',
          project_link: '/'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
          author: '林东东',
          author_link: '/',
          team: '中二少女团',
          team_link: '/',
          action: '新建项目',
          project: '六月迭代',
          project_link: '/'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
          author: '周星星',
          author_link: '/',
          team: '',
          team_link: '/',
          action: '更新至已发布状态',
          project: '5 月日常迭代',
          project_link: '/'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
          author: '周偏右',
          author_link: '/',
          team: '工程效能',
          team_link: '/',
          action: '发布了',
          project: '六月迭代',
          project_link: '/'
        },
        {
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
          author: '乐哥',
          author_link: '/',
          team: '程序员日常',
          team_link: '/',
          action: '新建项目',
          project: '品牌迭代',
          project_link: '/'
        }
      ],
      works: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      worksExtendSetting: {
        legend: {
          show: false
        }
      }
    }
  }
}
</script>

<style scoped>
.page-workbench-header-wrap {
  margin: -20px -20px 0px;
  padding: 24px 32px 8px;
  background-color: #ffffff;
  box-sizing: border-box;
}
.page-workbench-header-index {
  display: flex;
  flex: 1 1 auto;
}
.page-header-left {
  display: flex;
  flex: auto;
}
.page-header-avatar {
  flex: 0 1 72px;
  margin-bottom: 8px;
}
.page-header-avatar > span {
  border-radius: 72px;
  display: block;
  width: 72px;
  height: 72px;
}

.page-header-avatar-image {
  background: transparent;
}

.page-header-left-content {
  position: relative;
  top: 4px;
  margin-left: 24px;
  flex: 1 1 auto;
  color: rgba(0, 0, 0, 0.45);
  line-height: 22px;
}

.page-header-left-title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 12px;
}

.page-header-right {
  margin-left: 88px;
  min-width: 242px;
}

.page-workbench-extracontent {
  zoom: 1;
  float: right;
  white-space: nowrap;
}

.page-workbench-extraitem {
  padding: 0 32px;
  position: relative;
  display: inline-block;
}

.page-card-header {
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  margin: -18px -20px;
  padding: 8px 18px;
}

.page-workbench-projectgrid {
  border-radius: 0;
  border: 0;
  box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8,
    inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
  padding: 24px;
  transition: all 0.3s;
}

.page-workbench-projectgrid:hover {
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.page-workbench-gridextra {
  display: flex;
  justify-content: space-between;
}

.page-workbench-description {
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}

.page-workbench-item {
  display: flex;
}
</style>
