<template>
  <div>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-form
        :inline="true"
        :model="form">
        <div class="border-bottom-dashed-e8">
          <check-box-group
            :list="categoryTag"
            v-model="form.category"
            label="所属类目："/>
        </div>
        <div class="margin-top-18">
          <el-form-item label="活跃用户：">
            <el-select
              v-model="form.active_user"
              size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="好评度：">
            <el-select
              v-model="form.active_user"
              size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </el-card>

    <image-card-lists
      :col-num="4"
      :data="projectList"/>
  </div>
</template>

<script>
import CheckBoxGroup from '../../../components/CheckBoxGroup'
import ImageCardLists from '~/components/ImageCardLists'

export default {
  name: 'Projects',
  components: {
    CheckBoxGroup,
    ImageCardLists
  },
  data: function() {
    return {
      articleLoading: false,
      form: {
        owner: '',
        active_user: '',
        category: []
      },
      categoryTag: [
        {
          label: '类目一',
          value: '1',
          checked: false
        },
        {
          label: '类目二',
          value: '2',
          checked: false
        },
        {
          label: '类目三',
          value: '3',
          checked: true
        },
        {
          label: '类目四',
          value: '4',
          checked: false
        },
        {
          label: '类目五',
          value: '5',
          checked: false
        },
        {
          label: '类目六',
          value: '6',
          checked: false
        },
        {
          label: '类目七',
          value: '7',
          checked: false
        },
        {
          label: '类目八',
          value: '8',
          checked: false
        },
        {
          label: '类目九',
          value: '9',
          checked: false
        },
        {
          label: '类目十',
          value: '10',
          checked: false
        },
        {
          label: '类目十一',
          value: '11',
          checked: false
        }
      ],
      options: [
        {
          label: '我自己',
          value: '我自己'
        },
        {
          label: '吴家豪',
          value: '吴家豪'
        },
        {
          label: '周星星',
          value: '周星星'
        },
        {
          label: '赵丽颖',
          value: '赵丽颖'
        },
        {
          label: '姚明',
          value: '姚明'
        }
      ],
      projectList: [
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
  methods: {}
}
</script>

<style scoped>
</style>
