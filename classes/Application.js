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
      appDiv.appendChild(this.articlesContainer);
    } else {
      console.log(`Block #${appDivId} wasn't found!`)
    }
  }
}
