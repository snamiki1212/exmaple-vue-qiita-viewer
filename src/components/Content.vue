<template>
  <div class="content">
    <Article
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />

      {{ getArticles() }}
  </div>
</template>

<script>
import Article from './Article.vue';

export default {
  name: 'Content',
  components: {
    Article
  },
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
