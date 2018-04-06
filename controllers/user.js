/**
 * ===========================================
 * Controller logic
 * ===========================================
 */
 const newForm = (request, response) => {
  response.render('user/new');
};

const create = (db) => {
  return (request, response) => {
    // use user model method `create` to create new user entry in db
    db.user.create(request.body, (error, queryResult) => {
      // queryResult of creation is not useful to us, so we ignore it
      // (console log it to see for yourself)
      // (you can choose to omit it completely from the function parameters)

      if (error) {
        console.error('error:', error);
        response.sendStatus(500);
      }

      if (queryResult.rowCount >= 1) {
        console.log('User created successfully');

        // drop cookies to indicate user's logged in status and username
        response.cookie('loggedIn', true);
        response.cookie('username', request.body.name);
      } else {
        console.log('User could not be created');
      }

      // redirect to home page after creation
      response.redirect('/');
    });
  };
};

const logout = (request, response) => {
  response.clearCookie('loggedIn');
  response.redirect(301, '/');
};

const loginForm = (request, response) => {
  response.render('user/login');
};

const login = (db) => {
  return (request, response) => {
    console.log(request.body)
    db.user.login(request.body, (error, queryResult) => {
      console.log('ok');
      if (error) {
        console.error('error:', error);
        response.sendStatus(500);
      }
      response.cookie('loggedIn', true);
      response.cookie('username', request.body.name);

      response.redirect('/');
    });
  };
};

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
 module.exports = {
  newForm,
  create,
  logout,
  loginForm,
  login
};
