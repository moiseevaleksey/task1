class Application {
  constructor({ apiKey, articleContainerId = 'articles' }) {
    this.sourcesListUrl = 'https://newsapi.org/v1/sources';
    this.sourcesList = new SourceList();
    this.apiKey = apiKey;
    this.articlesContainer = document.createElement('div');
    this.articlesContainer.id = articleContainerId;
  }

  async init({ appDivId }) {
    const sources = await this.sourcesList.getSourceList({ url: this.sourcesListUrl });

    this.renderApp({ appDivId, sources });
    this.showPreview({ appDivId, sources });
  }

  renderApp({ appDivId, sources }) {
    const appDiv = document.getElementById(appDivId);

    if (appDiv) {
      const sourceListDiv = this.sourcesList.getDomElement({
        sources,
        appDiv,
        articlesContainer: this.articlesContainer,
        apiKey: this.apiKey
      });

      appDiv.appendChild(sourceListDiv);
    } else {
      console.log(`Block #${appDivId} wasn't found!`)
    }
  }

  showPreview({ appDivId, sources }) {
    const initialSrc = new SourceList();
    const appDiv = document.getElementById(appDivId);
    initialSrc.renderArticleList({
      source: sources[0],
      appDiv,
      articlesContainer: this.articlesContainer,
      apiKey: this.apiKey
    });
  }
}
