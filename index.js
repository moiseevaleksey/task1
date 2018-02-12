const app = new Application({
  apiKey: '79bcf63b008145a5913ed908010d69ea',
});

app.init({
  appDivId: 'app',
})
  .catch(err => console.log(err));
