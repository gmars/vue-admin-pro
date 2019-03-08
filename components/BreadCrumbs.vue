<template>
  <div class="component-breadcrumb-wrap hidden-xs-only">
    <el-breadcrumb 
      separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="{path: item.url}">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    breadList: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.component-breadcrumb-wrap {
  margin: -20px -20px 0px;
  padding: 24px 32px 18px;
  background-color: #ffffff;
}
</style>
