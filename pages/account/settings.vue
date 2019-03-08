<template>
  <div class="padding-20 background-color-ffffff">
    <el-tabs
      tab-position="left">
      <el-tab-pane label="基本设置">
        <div class="padding-left-18">
          <h2>基本设置</h2>
          <el-row :gutter="100">
            <el-col :span="8">
              <el-form 
                ref="userbaseform" 
                :model="form">
                <el-form-item label="邮箱">
                  <el-input
                    v-model="form.email"
                    :value="form.email"
                    type="email" 
                    size="small"/>
                </el-form-item>

                <el-form-item label="昵称">
                  <el-input
                    v-model="form.nick_name"
                    :value="form.nick_name"
                    type="text"
                    size="small"/>
                </el-form-item>

                <el-form-item label="个人简介">
                  <el-input 
                    :rows="4"
                    v-model="form.summary"
                    :value="form.summary"
                    type="textarea"
                    placeholder="个人简介"/>
                </el-form-item>

                <el-form-item>
                  <div>国家/地区</div>
                  <el-select 
                    v-model="form.country" 
                    :value="form.country" 
                    size="small">
                    <el-option value="测试">测试</el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <div>所在省市</div>
                  <el-row :gutter="24">
                    <el-col :span="12">
                      <el-select 
                        v-model="form.province" 
                        :value="form.province" 
                        size="small">
                        <el-option value="测试">测试</el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-select 
                        v-model="form.area" 
                        :value="form.area" 
                        size="small">
                        <el-option value="测试">测试</el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </el-form-item>

                <el-form-item >
                  <div>街道地址</div>
                  <el-input
                    v-model="form.address"
                    :value="form.address"
                    type="text"
                    size="small"/>
                </el-form-item>

                <el-form-item>
                  <div>联系电话</div>
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <el-input
                        v-model="form.area_code"
                        :value="form.area_code"
                        type="text"
                        size="small"/>
                    </el-col>
                    <el-col :span="16">
                      <el-input
                        v-model="form.tel"
                        :value="form.tel"
                        type="text"
                        size="small"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-button 
                  size="small" 
                  type="primary">更新基本信息</el-button>
              </el-form>
            </el-col>
            <el-col :span="16">
              <div>头像</div>
              <div>
                <div class="padding-bottom-20 padding-top-20">
                  <span class="pro-avatar pro-avatar-104">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                      alt="">
                  </span>
                </div>
                <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                  <el-button
                    class="font-14"
                    size="small"
                    type="default">
                    <i class="anticon anticon-upload font-12 padding-right-8"/>
                    更换头像
                  </el-button>
                </el-upload>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="安全设置">
        <div class="padding-left-18 padding-right-18">
          <h2>安全设置</h2>
          <div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>账户密码</h4>
                <div class="label-annotation">当前密码强度：<span class="color-success">强</span></div>
              </div>
              <div>
                <el-button type="text">修改</el-button>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>密保手机</h4>
                <div class="label-annotation">已绑定手机：<span>138****8765</span></div>
              </div>
              <div>
                <el-button type="text">修改</el-button>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>密保问题</h4>
                <div class="label-annotation">未设置密保问题，密保问题可有效保护账户安全</div>
              </div>
              <div>
                <el-button type="text">设置</el-button>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>备用邮箱</h4>
                <div class="label-annotation">已绑定备用邮箱：<span>hayixia***163.com</span></div>
              </div>
              <div>
                <el-button type="text">修改</el-button>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>MFA 设备</h4>
                <div class="label-annotation">未绑定 MFA设备，绑定后，可以进行二次确认</div>
              </div>
              <div>
                <el-button type="text">绑定</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="账号绑定">
        <div class="padding-left-18 padding-right-18">
          <h2>账号绑定</h2>
          <div>
            <div 
              class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item" 
              style="align-items: center">
              <div class="padding-right-18">
                <i 
                  class="anticon anticon-taobao" 
                  style="font-size: 48px;color: #ff4000;"/>
              </div>
              <div style="flex-grow: 1">
                <h4>绑定淘宝</h4>
                <div class="label-annotation">当前未绑定淘宝账号</div>
              </div>
              <div>
                <el-button type="text">绑定</el-button>
              </div>
            </div>

            <div
              class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item"
              style="align-items: center">
              <div class="padding-right-18">
                <i
                  class="anticon anticon-umidd17"
                  style="font-size: 48px;color: #2eabff;"/>
              </div>
              <div style="flex-grow: 1">
                <h4>绑定支付宝</h4>
                <div class="label-annotation">当前未绑定支付宝账号</div>
              </div>
              <div>
                <el-button type="text">绑定</el-button>
              </div>
            </div>

            <div
              class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item"
              style="align-items: center">
              <div class="padding-right-18">
                <i
                  class="anticon anticon-dingding-"
                  style="font-size: 48px;color: #2eabff;"/>
              </div>
              <div style="flex-grow: 1">
                <h4>绑定钉钉</h4>
                <div class="label-annotation">当前未绑定钉钉账号</div>
              </div>
              <div>
                <el-button type="text">绑定</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新消息通知">
        <div class="padding-left-18">
          <h2>新消息通知</h2>
          <div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>账户密码</h4>
                <div class="label-annotation">其他用户的消息将以站内信的形式通知</div>
              </div>
              <div>
                <el-switch
                  v-model="notifySwitch.password"
                  style="display: block"/>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>系统消息</h4>
                <div class="label-annotation">系统消息将以站内信的形式通知</div>
              </div>
              <div>
                <el-switch
                  v-model="notifySwitch.system"
                  style="display: block"/>
              </div>
            </div>
            <div class="padding-top-18 padding-bottom-18 border-bottom-e8 page-list-item">
              <div>
                <h4>待办任务</h4>
                <div class="label-annotation">待办任务将以站内信的形式通知</div>
              </div>
              <div>
                <el-switch
                  v-model="notifySwitch.task"
                  style="display: block"/>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      form: {
        email: 'hayixia606@163.com',
        nick_name: 'MarsWill',
        address: '渝北区某某某街道1号',
        area_code: '023',
        tel: '6776765',
        summary: '',
        area: '',
        province: '',
        country: ''
      },
      notifySwitch: {
        password: true,
        system: true,
        task: true
      }
    }
  }
}
</script>

<style scoped>
.page-list-item {
  display: flex;
  justify-content: space-between;
}
</style>
