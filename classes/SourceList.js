class SourceList {
  getSourceList({url}) {
    return fetch(url)
      .then(response => response.json())
      .then(response => response.sources)
      .catch(err => console.log(err));
  }

  getDomElement({ sources, appDiv, articlesContainer, apiKey }) {
    const ul = document.createElement('ul');
    ul.className = 'source-list';
    sources.forEach((src) => {
      const li = document.createElement('li');
      li.id = src.id;
      li.innerHTML = src.name;
      li.onclick = this.renderArticleList.bind(li, { src, appDiv, articlesContainer, apiKey });
      ul.appendChild(li);
    });

    return ul;
  }

  async renderArticleList({ src, appDiv, articlesContainer, apiKey }) {
    const articleList = new ArticleList();
    const { articles } = await articleList.loadArticles({ sourceId: src.id, apiKey });

    if (articlesContainer.getElementsByClassName('article').length > 0) {
      articlesContainer.innerHTML = '';
    }
    articlesContainer.appendChild(articleList.getDomElement({ articles }));
  }

}