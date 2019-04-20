<template name='ArticlesFooter'>
  <img
    v-if='isLoading'
    src='../assets/loading.gif'
    class='loading'
  />
  <button
    v-else
    @click="this.getArticles"
    class='next-button'
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
.loading{
  margin: 10px auto;
}
.next-button{
  color: #55c500;
}

</style>
