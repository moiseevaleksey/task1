class SourceList {
  static getSourceList(url) {
    return fetch(url)
      .then(response => response.json())
      .then(response => response.sources);
  }

  static getDomElement(srcArr) {
    const ul = document.createElement('ul');
    ul.className = 'source-list';
    srcArr.forEach((src) => {
      const li = document.createElement('li');
      li.id = src.id;
      li.innerHTML = src.name;
      li.onclick = async () => {
        const articlesContainer = document.getElementById('articles');
        if (articlesContainer) {
          document.body.removeChild(articlesContainer);
        }
        const { articles } = await ArticleList.loadArticles(src.id, '79bcf63b008145a5913ed908010d69ea');
        document.body.appendChild(ArticleList.renderArticles(articles));
      };
      ul.appendChild(li);
    });

    return ul;
  }
}