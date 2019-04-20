<template>
  <div class='articles-footer'>
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
  </div>
</template>

<script>
export default {
  name: 'ArticlesFooter',
  props: ['isLoading', 'getArticles'],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articles-footer{
  display: flex;
  justify-content: center;
  align-items:center;
  height: 50px;
}

.loading{
  margin: 10px auto;
  width: 25px;
}
.next-button{
  width: 90%;
  height: 70%;
  background-color: white;
  border: solid 1px;
  color: #55c500;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}
.next-button:hover{
  cursor: pointer;
}

</style>
