<template>
  <div class="header">
    <span class='title'>Qiita Viewer with Vue</span>
    <a href='https://github.com/snamiki1212/qiita-viewer-with-vue'>Github</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 40px;
  background-color: #55c500;
  color: white;
}

.title{
  font-size: 20px;
}
</style>
