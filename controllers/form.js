/**
 * ===========================================
 * Controller logic
 * ===========================================
 */
 let personality = [];
 let letter1 = "-";
 let letter2 = "-";
 let letter3 = "-";
 let letter4 = "-";
 
 const createForm = (request,response) =>{
 	response.render('form')
 }

 const results = (request, response) => {
 	if (Number(request.body.EI1) + Number(request.body.EI2) + Number(request.body.EI3) /*+ Number(request.body.EI4) + Number(request.body.EI5) + Number(request.body.EI6) + Number(request.body.EI7) + Number(request.body.EI8) + Number(request.body.EI9) + Number(request.body.EI10)*/ > 0) {
 		letter1 = "I"
 	};
 	if (Number(request.body.EI1) + Number(request.body.EI2) + Number(request.body.EI3) /*+ Number(request.body.EI4) + Number(request.body.EI5) + Number(request.body.EI6) + Number(request.body.EI7) + Number(request.body.EI8) + Number(request.body.EI9) + Number(request.body.EI10)*/ < 0) {
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
 	if (Number(request.body.FT1) < 0) {
 		letter3 = "F"
 	};
 	if (Number(request.body.PJ1) + Number(request.body.PJ2) > 0) {
 		letter4 = "J"
 	};
 	if (Number(request.body.PJ1) + Number(request.body.PJ2) < 0) {
 		letter4 = "P"
 	};
 	let context = {
 		letter1: letter1,
 		letter2: letter2,
 		letter3: letter3,
 		letter4: letter4
 	}
 	console.log(request.body)
 	response.render('results', context);
 }







 module.exports = {
 	createForm,
 	results
 };
