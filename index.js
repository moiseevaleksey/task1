const app = new Application({
  apiKey: '79bcf63b008145a5913ed908010d69ea',
});

app.init('app', 'articles')
  .catch(err => console.log(err));
