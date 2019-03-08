<template>
  <div>
    <bread-crumbs 
      :bread-list="[
        { name: '首页', url: '/' },
        { name: '列表页', url: '' },
        { name: '搜索列表', url: '' },
        { name: `搜索列表（${currentTitle}）`, url: '' }
    ]"/>
    <base-page-header title="搜索列表" />
    <el-row class="page-search-header">
      <el-col 
        :md="{span: 8, offset: 8}" 
        :xs="{span: 24}">
        <el-input
          type="text"
          placeholder="请输入">
          <template
            slot="append">
            <el-button
              type="primary">搜索</el-button>
          </template>
        </el-input>
      </el-col>
      <el-col class="margin-top-18 page-search-navbar">
        <nuxt-link
          v-for="item in pageNav"
          :key="item.name"
          :class="{'page-search-nav-active' : item.path == currentPath}"
          :to="item.path"
          tag="div"
          class="page-search-nav">{{ item.name }}</nuxt-link>
      </el-col>
    </el-row>
    <nuxt/>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import BasePageHeader from '../../components/BasePageHeader'
export default {
  name: 'Search',
  components: {
    BreadCrumbs,
    BasePageHeader
  },
  data: function() {
    return {
      currentPath: '',
      currentTitle: '',
      breadList: [
        { name: '首页', url: '/' },
        { name: '列表页', url: '' },
        { name: '搜索列表', url: '' }
      ],
      pageNav: [
        {
          name: '文章',
          path: '/list/search/articles'
        },
        {
          name: '项目',
          path: '/list/search/projects'
        },
        {
          name: '应用',
          path: '/list/search/applications'
        }
      ]
    }
  },
  created() {
    this.currentPath = this.$router.currentRoute.path
    this.pageNav.forEach((val, index) => {
      if (val.path == this.currentPath) {
        this.currentTitle = val.name
      }
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.currentPath = to.path
    this.pageNav.forEach((val, index) => {
      if (val.path == to.path) {
        this.currentTitle = val.name
      }
    })
    next()
  }
}
</script>

<style scoped>
.page-search-header {
  background: #fff;
  margin: 0px -20px;
  padding: 8px 32px 0px;
}

.page-search-navbar {
  display: flex;
}

.page-search-nav {
  padding: 10px 16px;
  margin-right: 32px;
  cursor: pointer;
  border-bottom: 2px solid #ffffff;
  transition: all 0.3s ease-in-out;
}

.page-search-nav:hover {
  color: #409eff;
}

.page-search-nav-active {
  border-bottom-color: #409eff;
  color: #409eff;
}
</style>
