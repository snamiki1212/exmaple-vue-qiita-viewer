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
  align-items: center;

  width: 45%;
  border: solid 1px #55c50022;
  border-radius: 5px;
  color: #55c500;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.2);
  transition: 0.5s;
  padding: 10px;
  margin: 5px;
}
.article:hover{
  transition: 0.5s;
  color: white;
  background-color: #55c500;
}
.avator{
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
