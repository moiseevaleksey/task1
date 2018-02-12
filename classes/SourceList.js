class SourceList {
  getSourceList({ url }) {
    return fetch(url)
      .then(response => response.json())
      .then(response => response.sources)
      .catch(err => console.log(err));
  }

  getDomElement({ sources, appDiv, articlesContainer, apiKey }) {
    const ul = document.createElement('ul');
    ul.className = 'source-list';
    sources.forEach((source) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      li.id = source.id;
      span.innerHTML = source.name;
      li.appendChild(span);
      li.onclick = this.renderArticleList.bind(li, { source, appDiv, articlesContainer, apiKey });
      ul.appendChild(li);
    });

    return ul;
  }

  async renderArticleList({ source, appDiv, articlesContainer, apiKey }) {
    const articleList = new ArticleList();
    const { articles } = await articleList.loadArticles({ sourceId: source.id, apiKey });
    if (articlesContainer.getElementsByClassName('article').length > 0) {
      console.log('articles was cleared');
      articlesContainer.innerHTML = '';
    }
    const fragment = articleList.getDomElement({ articles });
    articlesContainer.appendChild(fragment);
    appDiv.appendChild(articlesContainer);
  }
}