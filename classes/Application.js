class Application {
  constructor() {
    this.apiKey = '79bcf63b008145a5913ed908010d69ea';
    this.sourcesListUrl = 'https://newsapi.org/v1/sources';
    this.state = {
      articles: [],
      sources: [],
    };
  }

  async renderSourceList() {
    const sources = await SourceList.getSourceList(this.sourcesListUrl);
    document.body.appendChild(SourceList.getDomElement(sources));
  }
}
