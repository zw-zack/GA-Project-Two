const personalities = require('./controllers/personalities');
const users = require('./controllers/user');
const form = require('./controllers/form')

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
  app.post('/users/login', users.login(db));

  // All personality types
  app.get('/personalities', personalities.allPersonalities);

  //About page
  app.get('/about', personalities.about);

  // Personality test form
  app.get('/form', form.createForm);
  app.post('/form', form.results);


};
