<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="7">
        <div class="background-color-ffffff padding-20">
          <div class="page-profile-usercard">
            <div class="margin-bottom-16">
              <span class="pro-avatar pro-avatar-104">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png">
              </span>
            </div>
            <div>
              <span class="font-20 font-weight-500 color-0-0-0-85 margin-top-24">Serati Ma</span>
            </div>
            <div class="margin-top-8">
              <span>海纳百川，有容乃大</span>
            </div>
          </div>
          <div class="margin-top-24">
            <p>
              <i class="anticon anticon-zhiwei"/>
              <span class="margin-left-8">交互专家</span>
            </p>
            <p class="margin-top-8">
              <i class="anticon anticon-zuzhijiagou"/>
              <span class="margin-left-8">蚂蚁金服 - 某某某事业群 - 某某平台部 - 某某技术部 - UED</span>
            </p>
            <p class="margin-top-8">
              <i class="anticon anticon-weizhi"/>
              <span class="margin-left-8">浙江省杭州市</span>
            </p>
          </div>
          <div class="page-profile-usertag">
            <h4>标签</h4>
            <div>
              <el-tag
                v-for="tag in dynamicTags"
                :key="tag"
                :disable-transitions="false"
                size="small"
                type="info"
                class="margin-right-8 margin-top-8">
                {{ tag }}
              </el-tag>
              <el-input
                v-if="inputVisible"
                ref="saveTagInput"
                v-model="inputValue"
                class="input-new-tag margin-top-8"
                size="mini"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              />
              <el-button
                v-else
                size="mini"
                class="cursor-pointer margin-top-8 btn-dashed-border"
                style="height: 24px;line-height: 24px;padding: 0px 8px"
                @click="showInput"><i class="anticon anticon-plus font-12 font-weight-500"/></el-button>
            </div>
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
        </div>
      </el-col>
      <el-col :span="17">
        <div class="background-color-ffffff padding-20">
          <el-tabs 
            v-model="view.activedTab" 
            @tab-click="tabClickHandle">
            <el-tab-pane 
              label="文章(8)" 
              name="article">
              <article-lists 
                :data="[
                  {
                    id: 1,
                    title: 'Alipay',
                    link: 'sdfasdfasdf',
                    keywords: ['Ant Design', '设计语言', '蚂蚁金服'],
                    summary:
                      '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                    createTime: '2019-01-30 12:03',
                    author: {
                      avatar:
                        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                      name: '付小小',
                      publish: 'https://ant.design'
                    },
                    addition: [
                      { icon: 'anticon anticon-star-o', value: 191, link: 'baidu.com' },
                      { icon: 'anticon anticon-like-o', value: 162, link: 'baidu.com' },
                      { icon: 'anticon anticon-message', value: 12, link: 'baidu.com' }
                    ]
                  },
                  {
                    id: 2,
                    title: 'Alipay',
                    link: 'sdfasdfasdf',
                    keywords: ['Ant Design', '设计语言', '蚂蚁金服'],
                    summary:
                      '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                    createTime: '2019-01-30 12:03',
                    author: {
                      avatar:
                        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                      name: '付小小',
                      publish: 'https://ant.design'
                    },
                    addition: [
                      { icon: 'anticon anticon-star-o', value: 191, link: 'baidu.com' },
                      { icon: 'anticon anticon-like-o', value: 162, link: 'baidu.com' },
                      { icon: 'anticon anticon-message', value: 12, link: 'baidu.com' }
                    ]
                  },
                  {
                    id: 3,
                    title: 'Alipay',
                    link: 'sdfasdfasdf',
                    keywords: ['Ant Design', '设计语言', '蚂蚁金服'],
                    summary:
                      '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                    createTime: '2019-01-30 12:03',
                    author: {
                      avatar:
                        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                      name: '付小小',
                      publish: 'https://ant.design'
                    },
                    addition: [
                      { icon: 'anticon anticon-star-o', value: 191, link: 'baidu.com' },
                      { icon: 'anticon anticon-like-o', value: 162, link: 'baidu.com' },
                      { icon: 'anticon anticon-message', value: 12, link: 'baidu.com' }
                    ]
                  },
                  {
                    id: 4,
                    title: 'Alipay',
                    link: 'sdfasdfasdf',
                    keywords: ['Ant Design', '设计语言', '蚂蚁金服'],
                    summary:
                      '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                    createTime: '2019-01-30 12:03',
                    author: {
                      avatar:
                        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                      name: '付小小',
                      publish: 'https://ant.design'
                    },
                    addition: [
                      { icon: 'anticon anticon-star-o', value: 191, link: 'baidu.com' },
                      { icon: 'anticon anticon-like-o', value: 162, link: 'baidu.com' },
                      { icon: 'anticon anticon-message', value: 12, link: 'baidu.com' }
                    ]
                  },
                  {
                    id: 5,
                    title: 'Alipay',
                    link: 'sdfasdfasdf',
                    keywords: ['Ant Design', '设计语言', '蚂蚁金服'],
                    summary:
                      '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                    createTime: '2019-01-30 12:03',
                    author: {
                      avatar:
                        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                      name: '付小小',
                      publish: 'https://ant.design'
                    },
                    addition: [
                      { icon: 'anticon anticon-star-o', value: 191, link: 'baidu.com' },
                      { icon: 'anticon anticon-like-o', value: 162, link: 'baidu.com' },
                      { icon: 'anticon anticon-message', value: 12, link: 'baidu.com' }
                    ]
                  }
              ]"/>
            </el-tab-pane>
            <el-tab-pane
              label="应用(8)"
              name="application">
              <data-card-lists 
                :data="applications" 
                :col-num="3"/>
            </el-tab-pane>
            <el-tab-pane
              label="项目(8)"
              name="project">
              <image-card-lists 
                :col-num="3" 
                :data="proData"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleLists from '~/components/ArticleLists'
import DataCardLists from '~/components/DataCardLists'
import ImageCardLists from '~/components/ImageCardLists'
export default {
  name: 'Center',
  components: {
    ArticleLists,
    DataCardLists,
    ImageCardLists
  },
  data() {
    return {
      dynamicTags: [
        '很有想法的',
        '专注设计',
        '辣~',
        '大长腿',
        '川妹子',
        '海纳百川'
      ],
      inputVisible: false,
      inputValue: '',
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
      applications: [
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          name: 'Alipay',
          active_user: 14,
          new_user: 1073
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          name: 'Angular',
          active_user: 18,
          new_user: 1550
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          name: 'Ant Design',
          active_user: 19,
          new_user: 1524
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          name: 'Ant Design Pro',
          active_user: 13,
          new_user: 1015
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          name: 'Bootstrap',
          active_user: 11,
          new_user: 1236
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
          name: 'React',
          active_user: 17,
          new_user: 1481
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
          name: 'Vue',
          active_user: 15,
          new_user: 1940
        },
        {
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          name: 'Webpack',
          active_user: 17,
          new_user: 1363
        }
      ],
      view: {
        activedTab: 'article'
      },
      proData: [
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
          name: 'Alipay',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          time: '几秒前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
          name: 'Angular',
          description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          time: '2 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
          name: 'Ant Design',
          description: '生命就像一盒巧克力，结果往往出人意料',
          time: '4 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
          name: 'Ant Design Pro',
          description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
          time: '6 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
          name: 'Bootstrap',
          description: '那时候我只会想自己想要什么，从不想自己拥有什么',
          time: '8 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
          name: 'React',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          time: '10 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
          name: 'Vue',
          description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          time: '12 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        },
        {
          cover_img:
            'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
          name: 'Webpack',
          description: '生命就像一盒巧克力，结果往往出人意料',
          time: '14 小时前',
          member: [
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君'
            },
            {
              avatar:
                'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜'
            }
          ]
        }
      ]
    }
  },
  created() {},
  methods: {
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    tabClickHandle(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.page-profile-usercard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-profile-usertag {
  border-top: 1px dashed #e8e8e8;
  border-bottom: 1px dashed #e8e8e8;
  margin: 18px 0px;
  padding: 20px 0px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
