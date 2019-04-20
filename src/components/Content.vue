<template>
  <div class="content">
    <div class='articles-wrapper'>
      <Article
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <ArticlesFooter
      :isLoading="this.isLoading"
      :getArticles="this.getArticles"
    />
  </div>
</template>

<script>
import Article from './Article.vue';
import ArticlesFooter from './ArticlesFooter.vue'

export default {
  name: 'Content',
  components: {
    Article,
    ArticlesFooter
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

      // const url = 'https://qiita.com/api/v2/items';
      const url = 'https://jsondata.okiba.me/v1/json/m5nKD190420072904';
      const full_url = `${url}?page=${this.page}`

      fetch(full_url)
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
