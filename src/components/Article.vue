<template>
  <a :href="this.article.url" class="article">
    <img class='avator' :src="this.article.user.profile_image_url" />
    <span>{{ this.article.title }}</span>
  </a>
</template>

<script>
export default {
  name: 'Article',
  props: ['article'],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article{
  display: flex;
  flex-direction: row;

  width: 50%;
  color: #55c500;
  transition: 0.5s;
}
.article:hover{
  transition: 0.5s;
  color: white;
  background-color: #55c500;
}
.avator{
  height: 50px;
  width: 50px;
}
</style>
