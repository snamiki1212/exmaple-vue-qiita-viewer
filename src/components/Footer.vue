<template>
  <div class="footer">
    <span>
      This page is created by shun namiki with Vue(vue-cli).
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: #55c500;
  color: white;
  text-align: right;
}
</style>
