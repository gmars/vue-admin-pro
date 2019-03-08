<template>
  <div>
    <el-row
      :gutter="gutter">
      <div 
        v-if="!data.length" 
        style="color: rgba(0, 0, 0, 0.65);text-align: center;padding: 20px">暂无数据</div>
      <el-col
        v-for="(item, index) in data"
        :span="24/colNum"
        :key="index"
        class="margin-top-20 cursor-pointer">
        <el-card
          class="border-e8"
          shadow="hover">
          <div class="card-meta">
            <div class="card-meta-avatar">
              <span class="avatar avatar-sm">
                <img
                  :src="item.head_img"
                  alt="">
              </span>
            </div>
            <div class="card-meta-detail">
              <div class="card-meta-title">
                {{ item.name }}
              </div>
            </div>
          </div>
          <slot name="info">
            <div class="applications-info">
              <div>
                <p>活跃用户</p>
                <p>
                  <span>{{ item.active_user }} <span style="position: relative; top: -2px; font-size: 14px; font-style: normal; margin-left: 2px;">万</span></span>
                </p>
              </div>
              <div>
                <p>新增用户</p>
                <p>
                  <span>{{ item.new_user }}</span>
                </p>
              </div>
            </div>
          </slot>
          <div class="clearfix"/>
          <slot name="action">
            <ul class="card-list">
              <li>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="下载"
                  placement="top">
                  <i class="anticon anticon-download"/>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="编辑"
                  placement="top">
                  <i class="anticon anticon-edit"/>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="分享"
                  placement="top">
                  <i class="anticon anticon-sharealt"/>
                </el-tooltip>
              </li>
              <li>
                <el-dropdown placement="bottom">
                  <span class="el-dropdown-link">
                    <i class="anticon anticon-ellipsis"/>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>选项一</el-dropdown-item>
                    <el-dropdown-item>选项二</el-dropdown-item>
                    <el-dropdown-item>选项三</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </slot>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DataCardLists',
  props: {
    colNum: {
      type: Number,
      default: 4
    },
    gutter: {
      type: Number,
      default: 24
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.card-meta {
  margin: -4px 0;
  zoom: 1;
}
.card-meta-avatar {
  font-size: 0;
  padding-right: 16px;
  float: left;
}
.avatar-sm {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
}
.avatar {
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.avatar > img {
  width: 100%;
  height: 100%;
  display: block;
}
.card-meta-detail {
  overflow: hidden;
}
.card-meta-title {
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.applications-info {
  zoom: 1;
  margin-top: 16px;
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.65);
}
.applications-info > div {
  position: relative;
  text-align: left;
  float: left;
  width: 50%;
}
.applications-info > div p {
  line-height: 32px;
  font-size: 24px;
  margin: 0;
}
.applications-info > div p:first-child {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 4px;
}
.card-list {
  list-style: none;
  padding: 0px;
  margin: 20px -20px -20px -20px;
  background-color: #f7f9fa;
  border-top: 1px solid #e8e8e8;
}
.card-list li {
  float: left;
  width: 25%;
  text-align: center;
  margin: 12px 0px;
  color: rgba(0, 0, 0, 0.45);
}
.card-list > li:not(:last-child) {
  border-right: 1px solid #e8e8e8;
}
</style>
