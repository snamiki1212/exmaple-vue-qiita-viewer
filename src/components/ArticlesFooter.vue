<template name='ArticlesFooter'>
  <img
    v-if='isLoading'
    src='../assets/loading.gif'
  />
  <button
    v-else
    @click="this.getArticles"
  >Next</button>
</template>

<script>
export default {
  name: 'ArticlesFooter',
  props: ['isLoading', 'getArticles'],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
