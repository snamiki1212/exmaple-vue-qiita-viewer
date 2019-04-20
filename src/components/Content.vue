<template>
  <div class="content">
    <div class='articles-wrapper'>
      <Article
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <template name='ArticlesFooter'>
      <img
        v-if='isLoading'
        src='../assets/loading.gif'
      />
      <button
        v-else
        @click="getArticles()"
      >Next</button>
    </template>
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
      isLoading: false,
      page: 1,
    }
  },
  methods: {
    getArticles: function(){
      if(this.isLoading) return;
      this.isLoading = true;

      // const url = 'https://qiita.com/api/v2/items'
      // const url = 'https://jsondata.okiba.me/v1/json/IANx7190420070753';
      const url = 'https://jsondata.okiba.me/v1/json/m5nKD190420072904';
      fetch(url)
        .then(r => r.json())
        // .then(json => {console.log('json',json); console.log('articles', this.articles); [].push.apply(this.articles, json)});
        .then(json => {
          this.articles.push.apply(this.articles, json)
          this.isLoading = false;
          this.page += 1;
        })
        .catch(error => console.log(error))
          
    }
  },
  beforeMount() {
    this.getArticles();
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;
  flex-direction: column;
}
.articles-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
