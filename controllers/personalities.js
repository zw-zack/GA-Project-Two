/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

 const allPersonalities = (request,response) =>{
  response.render('personalities/all')
 }

 const about = (request,response) =>{
 	response.render('about')
 }

module.exports = {
  allPersonalities,
  about
};

