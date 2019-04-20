<template>
  <div class="header">
    <span>Qiita Viewer with Vue</span>
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
  height: 20px;
  background-color: red;
}
</style>
