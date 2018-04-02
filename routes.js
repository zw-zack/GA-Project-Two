const personalities = require('./controllers/personalities');
const users = require('./controllers/user');

module.exports = (app, db) => {
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
  app.get('/users/new', users.newForm);
  app.post('/users', users.create(db));

  // Authentication
  app.post('/users/logout', users.logout);
  app.get('/users/login', users.loginForm);
  app.post('/users/login', users.login);

  app.get('/personalities', personalities.allPersonalities);


};
