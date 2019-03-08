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
        <div class="border-bottom-dashed-e8 margin-top-18 ">
          <el-form-item label="owner：">
            <el-select
              v-model="form.owner"
              multiple
              size="small"
              placeholder="请选择Owner">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
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

    <el-card class="margin-top-20 border-none box-shadow-none">
      <el-row 
        v-for="(item, index) in articles" 
        :key="index" 
        class="border-bottom-e8 padding-bottom-18 padding-top-18">
        <el-col :span="12">
          <div><h3>{{ item.title }}</h3></div>
          <div>
            <el-tag 
              v-for="tag in item.tag" 
              :key="tag"
              class="margin-right-8"
              size="mini">{{ tag }}</el-tag>
          </div>
          <div class="margin-top-18 color-0-0-0-65">
            {{ item.description }}
          </div>
          <div class="page-article-author-wrap margin-top-18">
            <div class="page-article-avatar">
              <img 
                :src="item.head_img"
                alt="">
            </div>
            <span>{{ item.author }}</span>
            <span class="label-annotation margin-left-8">发布在</span>
            <a 
              href="" 
              class="margin-left-8">{{ item.link }}</a>
            <span class="margin-left-8 label-annotation">{{ item.date }}</span>
          </div>
          <div class="page-article-author-wrap margin-top-18">
            <div class="label-annotation cursor-pointer margin-right-8">
              <i class="anticon anticon-star-o"/>
              <span>{{ item.star }}</span>
            </div>
            <div class="divider divider-vertical"/>
            <div class="label-annotation cursor-pointer margin-left-8 margin-right-8">
              <i class="anticon anticon-like-o"/>
              <span>{{ item.praise }}</span>
            </div>
            <div class="divider divider-vertical"/>
            <div class="label-annotation cursor-pointer margin-left-8">
              <i class="anticon anticon-message1"/>
              <span>{{ item.comments }}</span>
            </div>
            <div/>
            <div/>
          </div>
        </el-col>
      </el-row>

      <div style="text-align: center; margin-top: 18px">
        <el-button
          :loading="articleLoading"
          size="medium" 
          @click="loadMore">加载更多</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import CheckBoxGroup from '../../../components/CheckBoxGroup'
export default {
  name: 'Articles',
  components: {
    CheckBoxGroup
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
      articles: [
        {
          title: 'Alipay',
          description:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          tag: ['Ant Design', '设计语言', '蚂蚁金服'],
          author: '付小小',
          link: 'https://ant.design',
          date: '2019-01-08 15:45',
          star: 140,
          praise: 161,
          comments: 16
        },
        {
          title: 'Angular',
          description:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          head_img:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          tag: ['Ant Design', '设计语言', '蚂蚁金服'],
          author: '曲丽丽',
          link: 'https://ant.design',
          date: '2019-01-08 15:45',
          star: 128,
          praise: 113,
          comments: 15
        }
      ]
    }
  },
  methods: {
    loadMore() {
      this.articleLoading = true
      setTimeout(() => {
        this.articleLoading = false
        this.articles.push(this.articles[0])
      }, 1500)
    }
  }
}
</script>

<style scoped>
.page-search-control-wrap {
  display: flex;
  align-items: center;
}

.page-search-control-bottom {
  padding-bottom: 18px;
  margin-bottom: 13px;
  border-bottom: 1px dashed #e8e8e8;
}

.page-article-avatar {
  vertical-align: top;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 1px;
}

.page-article-avatar > img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.page-article-author-wrap {
  display: flex;
  align-items: center;
}
</style>
