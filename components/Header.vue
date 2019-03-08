<template>
  <div class="mars-component-header mars-component-header-index">
    <div class="mars-component-header-wrap">
      <span 
        class="mars-component-header-trigger"
        @click="handleChangeSiderBar">
        <i 
          :class="[this.$store.state.NavMenuCollapse? 'anticon-menu-fold' : 'anticon-menu-unfold']"
          class="anticon font-20"/>
      </span>
      <div class="mars-component-header-right">
        <el-dropdown class="mars-component-header-right-submenu">
          <span class="el-dropdown-link">
            <img
              :src="user.user_info.head_img"
              class="mars-component-header-avator">
            {{ user.user_info.name }}<i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="anticon anticon-user"/><span class="sub-menu-with-icon">个人中心</span></el-dropdown-item>
            <el-dropdown-item><i class="anticon anticon-setting"/><span class="sub-menu-with-icon">个人设置</span></el-dropdown-item>
            <el-dropdown-item divided><i class="anticon anticon-logout"/><span class="sub-menu-with-icon">退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({ user: 'user' })
  },
  methods: {
    ...mapMutations({
      handleChangeSiderBar: 'NavMenuCollapseChange'
    })
  }
}
</script>

<style scoped>
.mars-component-header-index {
  transition: width 0.2s;
}

.mars-component-header {
  background: #001529;
  height: 64px;
  line-height: 64px;
}

.mars-component-header-wrap {
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
}

.mars-component-header-trigger {
  font-size: 20px;
  height: 64px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  padding: 22px 24px;
}

.mars-component-header-right {
  float: right;
  height: 100%;
  overflow: hidden;
}

.sub-menu-with-icon {
  padding-left: 8px;
}

.mars-component-header-right-submenu {
  padding: 0px 20px;
}

.mars-component-header-avator {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
