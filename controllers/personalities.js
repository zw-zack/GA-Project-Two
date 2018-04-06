/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

 const allPersonalities = (request,response) =>{
  response.render('personalities/all')
 }

module.exports = {
  allPersonalities
};

