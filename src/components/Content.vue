<template>
  <div class="content">
    <p>here is content</p>
    <p>{{ getArticles() }}</p>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    getArticles: function(){
      const url = 'https://qiita.com/api/v2/items'
      fetch(url)
        .then(r => r.json())
        // .then(json => {console.log('json',json); console.log('articles', this.articles); [].push.apply(this.articles, json)});
        .then(json => [].push.apply(this.articles, json));
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
