/**
 * ===========================================
 * Controller logic
 * ===========================================
 */
 let personality = [];
 let letter1 = "";
 let letter2 = "";
 let letter3 = "";
 let letter4 = "";
 
 const createForm = (request,response) =>{
 	response.render('form')
 }

 const results = (request, response) => {
 	if (Number(request.body.EI1) + Number(request.body.EI2) > 0) {
 		letter1 = "I"
 	};
 	if (Number(request.body.EI1) + Number(request.body.EI2) < 0) {
 		letter1 = "E"
 	};
 	if (Number(request.body.SN1) + Number(request.body.SN2) > 0) {
 		letter2 = "N"
 	};
 	if (Number(request.body.SN1) + Number(request.body.SN2) < 0) {
 		letter2 = "S"
 	};
 	if (Number(request.body.FT1) > 0) {
 		letter3 = "T"
 	};
 	if (request.body.FT1 < 0) {
 		letter3 = "F"
 	};
 	if (request.body.PJ1 > 0) {
 		letter4 = "J"
 	};
 	if (request.body.PJ1 < 0) {
 		letter4 = "P"
 	};
 	let context = {
 		letter1: letter1,
 		letter2: letter2,
 		letter3: letter3,
 		letter4: letter4
 	}
 	console.log(request.body)
 	console.log(request.body.SN2);
 	response.render('results', context);
 }







 module.exports = {
 	createForm,
 	results
 };
