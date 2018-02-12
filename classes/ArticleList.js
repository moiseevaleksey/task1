class ArticleList {
  loadArticles({ sourceId, apiKey }) {
    return fetch(`https://newsapi.org/v1/articles?apiKey=${apiKey}&source=${sourceId}`)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.log(err));
  }

  getDomElement({ articles }) {
    const fragment = document.createDocumentFragment();
    fragment.id = 'articles';
    articles.forEach((article) => {
      const a = document.createElement('a');
      a.style.backgroundImage = `url(${article.urlToImage})`;
      a.href = article.url;
      a.text = article.title;
      a.className = 'article';
      fragment.appendChild(a);
    });

    return fragment;
  }
}