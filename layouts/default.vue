<template>
  <div class="container-wrap">
    <el-container class="container-box">
      <el-aside 
        :style="{width: this.$store.state.NavMenuCollapse? '64px' : '256px'}"
        class="menu-aside">
        <sider-bar 
          :active-index="activeRouter"/>
      </el-aside>

      <el-container>
        <el-header class="container-header">
          <top-header />
        </el-header>
        <el-main class="container-main">
          <nuxt/>
          <el-footer class="container-footer">
            <div class="container-footer-wrap">
              <div class="container-footer-copyright">
                <span>Copyright</span>
                <i class="anticon anticon-copyright"/>
                <span>2019</span>
                <span>魏永强 &lt;hayixia606@163.com&gt;</span>
              </div>
            </div>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SiderBar from '~/components/Siderbar'
import Header from '~/components/Header'
export default {
  name: 'Default',
  components: {
    'sider-bar': SiderBar,
    'top-header': Header
  },
  data: function() {
    return {
      collapse: false,
      activeRouter: '/dashboard'
    }
  },
  created: function() {
    this.activeRouter = this.$router.currentRoute.path
  },
  methods: {}
}
</script>
<style scoped>
.container-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}

.container-box {
  height: 100%;
}

.container-header {
  padding: 0px;
}

.container-main {
  background-color: #f0f2f5;
}

.container-footer {
}

.container-footer-wrap {
  padding: 40px 0;
  text-align: center;
}

.container-footer-copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.menu-aside {
  transition: width 0.2s;
}
</style>
