<template>
  <div>
    <bread-crumbs 
      :bread-list="[{name: '首页', url: '/'},{name: '列表页', url: ''}, {name: '卡片列表', url: ''}]"/>
    <base-page-header
      title="卡片列表"
      image="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      description="段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。">
      <div 
        slot="addition" 
        class="padding-bottom-18 page-inner-nav">
        <a href="http://blog.csdn.net/marswill">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            alt="">
          <span class="inner-nav-text">快速开始</span>
        </a>
        <a>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
            alt="">
          <span class="inner-nav-text">产品介绍</span>
        </a>
        <a>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
            alt="">
          <span class="inner-nav-text">产品文档</span>
        </a>
      </div>
    </base-page-header>

    <div class="margin-20 border-none box-shadow-none">
      <el-row
        :gutter="24" 
        class="page-card-row">
        <el-col 
          :span="8" 
          class="page-card-wrap">
          <el-button 
            class="page-add-product btn-dashed-border"
            icon="anticon anticon-plus font-12 margin-right-8">新增产品</el-button>
        </el-col>
        <el-col 
          v-for="(item, index) in productList"
          :key="index"
          :span="8"
          class="page-card-wrap">
          <el-card 
            shadow="hover" 
            class="border-e8 page-card">
            <div class="page-card-meta">
              <div class="page-card-meta-avatar">
                <img 
                  :src="item.image"
                  alt="">
              </div>
              <div class="page-card-meta-detail">
                <div class="page-card-meta-title">
                  <a><h3>{{ item.name }}</h3></a>
                </div>
                <div 
                  class="page-card-meta-description label-annotation" 
                  style="-webkit-line-clamp:3;-webkit-box-orient: vertical">{{ item.description }}</div>
              </div>
            </div>
            <div class="page-card-footer">
              <div class="page-card-btn">操作一</div>
              <div class="divider divider-vertical"/>
              <div class="page-card-btn">操作二</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'CardList',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      productList: [
        {
          name: 'Alipay',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Angular',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Ant Design',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Ant Design Pro',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Bootstrap',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'React',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Vue',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        },
        {
          name: 'Webpack',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-add-product {
  background-color: #fff;
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 188px;
}
.page-inner-nav {
  display: flex;
}
.page-inner-nav a {
  display: flex;
  align-items: center;
}

.page-inner-nav a:not(:first-child) {
  margin-left: 18px;
}

.inner-nav-text {
  margin-left: 8px;
}

.page-card-row div {
  border-radius: 0px;
}

.page-card-meta {
  display: flex;
}

.page-card-meta-avatar {
  padding-right: 16px;
}
.page-card-meta-avatar > img {
  width: 48px;
  height: 48px;
  border-radius: 48px;
}

.page-card-meta-description {
  height: 64px;
  margin-top: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.page-card-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f9fa;
  border-top: 1px solid #e8e8e8;
  margin: 20px -20px -20px;
  height: 40px;
}

.page-card-btn {
  color: rgba(0, 0, 0, 0.45);
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
}

.page-card-btn:hover {
  color: #409eff;
}

.page-card-wrap {
  margin-bottom: 12px;
}
</style>
