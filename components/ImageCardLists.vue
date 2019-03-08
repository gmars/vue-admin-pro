<template>
  <div>
    <el-row
      :gutter="gutter">
      <el-col
        v-for="(item, index) in data"
        :span="24/colNum"
        :key="index"
        class="margin-top-20 cursor-pointer">
        <el-card
          :body-style="{ padding: '0px' }"
          class="border-e8"
          shadow="hover">
          <div>
            <img
              :src="item.cover_img"
              width="100%"
              class="image">
          </div>
          <div class="padding-20">
            <h3>{{ item.name }}</h3>
            <div class="project-description">
              <p
                class="label-annotation"
                style="-webkit-line-clamp: 2;-webkit-box-orient: vertical;">{{ item.description }}</p>
            </div>
            <div class="label-annotation project-card-footer margin-top-8 font-12">
              <div>{{ item.time }}</div>
              <div class="project-avatarlist">
                <ul>
                  <li
                    v-for="(member, mkey) in item.member"
                    :key="mkey">
                    <el-tooltip
                      :content="member.name"
                      class="item"
                      effect="dark"
                      placement="top">
                      <span>
                        <img
                          :src="member.avatar"
                          alt="">
                      </span>
                    </el-tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ImageCardLists',
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
.project-description {
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}

.project-description > p {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.project-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-avatarlist {
}

.project-avatarlist > ul {
  list-style: none;
}

.project-avatarlist li {
  width: 20px;
  height: 20px;
  float: left;
  margin-left: -8px;
  cursor: pointer;
}

.project-avatarlist img {
  width: 100%;
  height: 100%;
  display: block;
  border: 1px solid #ffffff;
  border-radius: 50%;
}
</style>
