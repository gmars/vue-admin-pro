<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {},
  created: function() {
    this.$router.push('/dashboard/analysis')
  }
}
</script>

<style>
</style>
