<template>
  <div>
    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-form 
        :inline="true" 
        :model="form">
        <div class="border-bottom-dashed-e8">
          <check-box-group
            :list="category"
            v-model="form.category"
            label="所属类目："/>
        </div>
        <div class="margin-top-18">
          <el-form-item label="作者：">
            <el-input
              v-model="form.author"
              size="small"
              placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="好评度：">
            <el-select
              v-model="form.praise"
              size="small"
              placeholder="请选择">
              <el-option
                v-for="item in praiseList"
                :key="item.name"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </el-card>

    <data-card-lists
      :data="applications"
      :col-num="4"/>
  </div>
</template>

<script>
import CheckBoxGroup from '../../../components/CheckBoxGroup.vue'
import DataCardLists from '~/components/DataCardLists'
export default {
  name: 'Applications',
  components: {
    CheckBoxGroup,
    DataCardLists
  },
  data: function() {
    return {
      form: {
        author: '',
        praise: '',
        category: []
      },
      praiseList: [
        {
          label: '好评',
          value: '好评'
        },
        {
          label: '一般',
          value: '一般'
        }
      ],
      category: [
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
      ownerList: [
        {
          label: '魏永强',
          value: '魏永强'
        },
        {
          label: '曹操',
          value: '曹操'
        },
        {
          label: '高渐离',
          value: '高渐离'
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
      ]
    }
  },
  methods: {
    test: function() {
      console.log(this.form.category)
    }
  }
}
</script>

<style scoped>
</style>
