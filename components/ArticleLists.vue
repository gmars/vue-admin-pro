<template>
  <div :style="{'max-width': maxWidth}">
    <div
      ref="articleList"
      class="article-list-wrap">
      <div
        v-for="item in data"
        :key="item.id"
        class="article-item">
        <div class="article-item-meta">
          <div class="article-item-title"><a :href="item.link">{{ item.title }}</a></div>
          <div v-if="item.keywords">
            <span
              v-for="(keyword, keyindex) in item.keywords"
              :key="keyindex"
              class="components-tag">
              {{ keyword }}
            </span>
          </div>
        </div>
        <div class="article-item-content">
          <div class="article-item-summary">
            {{ item.summary }}
          </div>
          <div
            v-if="item.author"
            class="article-item-extra">
            <span class="components-avatar components-avatar-20">
              <img
                :src="item.author.avatar"
                alt="">
            </span>
            <span><a :href="item.author.link">{{ item.author.name }}</a></span>
            <span>发布在</span>
            <span><a href="">{{ item.author.publish }}</a></span>
            <em>{{ item.createTime }}</em>
          </div>
        </div>
        <slot name="action">
          <ul
            v-if="item.addition"
            class="article-item-action">
            <li
              v-for="(action, actionKey) in item.addition"
              :key="`action_${item.id}_${actionKey}`">
              <a :href="action.link">
                <span>
                  <span><i
                    :class="action.icon"
                    class="font-14" /></span>
                  <span>{{ action.value }}</span>
                </span>
              </a>
              <em
                v-if="actionKey!=item.addition.length-1"
                class="article-item-action-split"/>
            </li>
          </ul>
        </slot>
      </div>
    </div>
    <div class="article-page-control">
      <div 
        v-if="page<totalPage" 
        class="article-loadmore-btn" 
        @click="$emit('articleLoadMoreHandle', page)">加载更多</div>
      <div
        v-else 
        class="article-item-nomore">
        暂无更多数据
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleLists',
  props: {
    pageSize: {
      type: Number,
      default: 5
    },
    page: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 1
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '720px'
    },
    summaryRows: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.font-14 {
  font-size: 14px;
}
.article-list-wrap {
  display: flex;
  flex-direction: column;
}
.article-item {
  padding-top: 16px;
  padding-bottom: 16px;
}
.article-item:not(:last-child) {
  border-bottom: 1px solid #e8e8e8;
}
.article-item-meta {
  margin-bottom: 16px;
}
.components-avatar {
  font-size: 14px;
  font-variant: tabular-nums;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  text-align: center;
  background: #ccc;
  color: #fff;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
}

.components-avatar-20 {
  height: 20px;
  width: 20px;
  line-height: 24px;
}
.components-avatar > img {
  width: 100%;
  height: 100%;
  display: block;
}
.article-item-title {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
  font-weight: 500;
}
.article-item-title > a {
  color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s;
}
.article-item-title > a:hover {
  color: #1890ff;
}
.components-tag {
  font-variant: tabular-nums;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  list-style: none;
  display: inline-block;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
  font-size: 12px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 1;
  margin: 0 8px 0 0;
  cursor: pointer;
  white-space: nowrap;
}
.components-tag:hover {
  opacity: 0.85;
}
.article-item-content {
  display: block;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  margin: 0 0 16px;
}
.article-item-summary {
  line-height: 22px;
}
.article-item-extra {
  color: rgba(0, 0, 0, 0.45);
  margin-top: 16px;
  line-height: 22px;
}
.article-item-extra em {
  color: rgba(0, 0, 0, 0.25);
  font-style: normal;
  margin-left: 16px;
}
.article-item-action {
  font-size: 0;
  flex: 0 0 auto;
  margin-left: auto;
  padding: 0;
  list-style: none;
}
.article-item-action > li {
  display: inline-block;
  cursor: pointer;
  padding: 0 16px;
  position: relative;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.article-item-action > li:first-child {
  padding-left: 0;
}
.article-item-action > li > a {
  color: rgba(0, 0, 0, 0.45);
}
.article-item-action-split {
  background-color: #e8e8e8;
  margin-top: -7px;
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 14px;
}
.article-loadmore-btn {
  display: inline-block;
  padding: 0px 8px;
  border: 1px dashed #e8e8e8;
  border-radius: 5px;
  cursor: pointer;
}
.article-loadmore-btn:hover {
  color: rgba(0, 0, 0, 0.45);
}
.article-page-control {
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
}
</style>
