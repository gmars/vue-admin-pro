<template>

  <div class="mars-layout-sider-children">
    <div class="mars-component-siderbar-logo">
      <a href="">
        <img 
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" 
          alt="vue admin pro">
        <h1>vue admin pro</h1>
      </a>
    </div>
    <div class="mars-menu-root">
      <el-scrollbar
        :wrap-style="[{'overflow-x': 'hidden'}]"
        style="height: 100%">
        <el-menu
          :collapse="this.$store.state.NavMenuCollapse"
          :collapse-transition="false"
          :default-active="activeIndex"
          :unique-opened="true"
          class="none-borad"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#1890ff">
          <el-submenu index="/dashboard">
            <template slot="title">
              <i class="anticon anticon-dashboard"/>
              <span class="mars-component-siderbar-icon-title">Dashboard</span>
            </template>
            <nuxt-link
              tag="span"
              to="/dashboard/analysis">
              <el-menu-item index="/dashboard/analysis">分析页</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/dashboard/monitor">
              <el-menu-item index="/dashboard/monitor">监控页</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/dashboard/workbench">
              <el-menu-item index="/dashboard/workbench">工作台</el-menu-item>
            </nuxt-link>
          </el-submenu>
          <el-submenu index="/form">
            <template slot="title">
              <i class="anticon anticon-file-text"/>
              <span 
                slot="title" 
                class="mars-component-siderbar-icon-title">表单页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/form/basic">
              <el-menu-item index="/form/basic">基础表单</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/form/step">
              <el-menu-item index="/form/step">分步表单</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/form/advanced">
              <el-menu-item index="/form/advanced">高级表单</el-menu-item>
            </nuxt-link>
          </el-submenu>
          <el-submenu index="/list">
            <template slot="title">
              <i class="anticon anticon-table"/>
              <span 
                slot="title" 
                class="mars-component-siderbar-icon-title">列表页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/list/table-list">
              <el-menu-item index="/list/table-list">查询表格</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/list/basic-list">
              <el-menu-item index="/list/basic-list">标准列表</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/list/card-list">
              <el-menu-item index="/list/card-list">卡片列表</el-menu-item>
            </nuxt-link>
            <el-submenu index="/list/search">
              <template slot="title">
                <span slot="title">搜索列表</span>
              </template>
              <nuxt-link
                tag="span"
                to="/list/search/articles">
                <el-menu-item index="/list/search/articles">搜索列表（文章）</el-menu-item>
              </nuxt-link>
              <nuxt-link
                tag="span"
                to="/list/search/projects">
                <el-menu-item index="/list/search/projects">搜索列表（项目）</el-menu-item>
              </nuxt-link>
              <nuxt-link
                tag="span"
                to="/list/search/applications">
                <el-menu-item index="/list/search/applications">搜索列表（应用）</el-menu-item>
              </nuxt-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="anticon anticon-profile"/>
              <span
                slot="title"
                class="mars-component-siderbar-icon-title">详情页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/list/table-list">
              <nuxt-link
                tag="span"
                to="/profile/basic">
                <el-menu-item index="/profile/basic">基础详情页</el-menu-item>
              </nuxt-link>
              <nuxt-link
                tag="span"
                to="/profile/advanced">
                <el-menu-item index="/profile/advanced">高级详情页</el-menu-item>
              </nuxt-link>
            </nuxt-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="anticon anticon-check-circle-o"/>
              <span
                slot="title"
                class="mars-component-siderbar-icon-title">结果页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/result/success">
              <el-menu-item index="/result/success">成功页</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/result/fail">
              <el-menu-item index="/result/fail">失败页</el-menu-item>
            </nuxt-link>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="anticon anticon-error"/>
              <span
                slot="title"
                class="mars-component-siderbar-icon-title">异常页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/list/table-list">
              <el-menu-item index="/list/table-list">403</el-menu-item>
              <el-menu-item index="/list/table-list">404</el-menu-item>
              <el-menu-item index="/list/table-list">500</el-menu-item>
            </nuxt-link>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="anticon anticon-user"/>
              <span
                slot="title"
                class="mars-component-siderbar-icon-title">个人页</span>
            </template>
            <nuxt-link
              tag="span"
              to="/account/center">
              <el-menu-item index="/list/table-list">个人中心</el-menu-item>
            </nuxt-link>
            <nuxt-link
              tag="span"
              to="/account/settings">
              <el-menu-item index="/account/settings">个人设置</el-menu-item>
            </nuxt-link>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Siderbar',
  props: {
    activeIndex: {
      type: String,
      default: '/dashboard'
    }
  }
}
</script>

<style scoped>
.mars-component-siderbar-logo {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
  background-color: #002140;
  overflow: hidden;
}
.mars-component-siderbar-logo img {
  display: inline-block;
  vertical-align: middle;
  height: 32px;
}
.mars-component-siderbar-logo h1 {
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  margin: 0 0 0 12px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.mars-component-siderbar-icon-title {
}

.mars-menu-root {
  overflow-y: auto;
  height: calc(100% - 64px);
  background-color: #001529;
}
.none-borad {
  border: none !important;
}

.scrollbar-wrap {
  overflow-x: hidden !important;
}
</style>
