<template>
  <div class="component-header-wrap">
    <div>
      <h1 class="mars-components-page-header-index-title">{{ title }}</h1>
      <div
        v-if="description"
        class="margin-top-18 padding-bottom-18">
        <div>{{ description }}</div>
      </div>
      <slot name="addition"/>
    </div>
    <div 
      v-if="image" 
      class="component-header-image" >
      <img
        :src="image"
        alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePageHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.mars-components-page-header-index-title {
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}

.component-header-wrap {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0px 32px 0px;
  margin: 0px -20px;
}

.component-header-image {
  width: 195px;
}
.component-header-image > img {
  width: 100%;
}
</style>
