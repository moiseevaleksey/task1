class ArticleList {
  constructor({ sourceId, apiKey }) {
    this.sourceId = sourceId;
    this.apiKey = apiKey;
  }

  static loadArticles(sourceId, apiKey) {
    return fetch(`https://newsapi.org/v1/articles?apiKey=${apiKey}&source=${sourceId}`)
      .then(response => response.json())
      .then(response => response);
  }

  static renderArticles(articles) {
    const articleContainer = document.createElement('div');
    articleContainer.id = 'articles';

    articles.forEach((article) => {
      const a = document.createElement('a');
      a.style.backgroundImage = `url(${article.urlToImage})`;
      a.href = article.url;
      a.text = article.title;
      a.className = 'article';
      articleContainer.appendChild(a);
    });
    return articleContainer;
  }
}