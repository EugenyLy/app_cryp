
module.exports = function(app) {
  app.get('/', require('./frontpage').get);
  app.get('/about', require('./about').get);
  app.get('/traders/cryptocurrency', require('./cryptocurrency').get);
  app.get('/traders/assets', require('./assets').get);
  app.get('/traders/faq', require('./faq').get);
  app.get('/traders/glossary', require('./glossary').get);
  app.get('/traders/how_to_buy', require('./how_to_buy').get);
  app.get('/doc/withdrawal&refund_policy', require('./withdrawal&refund_policy').get);
  app.get('/doc/payment_policy', require('./payment_policy').get);
  app.get('/doc/privacy_policy', require('./privacy_policy').get);
  app.get('/doc/terms&conditions', require('./terms&conditions').get);
  app.get('/doc/bonus', require('./bonus').get);
};


