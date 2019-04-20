<template>
  <div class="article">
    <a :href="this.article.url">
      <img class='avator' :src="this.article.user.profile_image_url" />
      <span>{{ this.article.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['article'],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avator{
  height: 50px;
  width: 50px;
}
</style>
