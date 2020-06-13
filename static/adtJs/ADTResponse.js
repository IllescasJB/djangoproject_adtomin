function ADTResponse(){
	
}

ADTResponse.prototype.getexpensesResponse = function(data){
	localStorage.expensesCatalogDict = JSON.stringify(data.expensesCatalogDict);
	adtExpenses.expenses();
	//console.log("Respuesta obtenida")
	//console.log(localStorage.expensesCatalogDict);
	console.log(data)
}

ADTResponse.prototype.addexpenseResponse = function(data){
	//console.log(data);
	if(data.Status == 'OK'){
		console.log("cuenta agregada");

		expensesCatalogDict = JSON.parse(localStorage.expensesCatalogDict);

		var newExpense = {

			EXID   : data.EXID,
			EXDESC : data.EXDESC,
			EXPBAL : data.EXPBAL,
			EXPCOL : data.EXPCOL,
			EXPICO : data.EXPICO 

		}
		expensesCatalogDict.push(newExpense);
		localStorage.expensesCatalogDict = JSON.stringify(expensesCatalogDict);
		//console.log(localStorage.expensesCatalogDict);
		adtExpenses.expenses();
	}
}

ADTResponse.prototype.addexpensedateResponse = function(data){
	//console.log(data);
	if(data.Status == 'OK'){
		console.log("cuenta agregada");
	}
}

ADTResponse.prototype.updateexpenseResponse = function(data){

	//console.log(data);
	if(data.Status == 'OK'){
		console.log("cuenta modificada");
		expensesCatalog = JSON.parse(localStorage.expensesCatalogDict);
		for(expense in expensesCatalog){
			if(data.EXID == expensesCatalog[expense].EXID){
				expensesCatalog[expense].EXDESC = data.EXDESC;
				expensesCatalog[expense].EXPCOL = data.EXPCOL;
				expensesCatalog[expense].EXPICO = data.EXPICO;
			}
		}
		localStorage.expensesCatalogDict = JSON.stringify(expensesCatalog);
		adtExpenses.expenses();
	}
}

ADTResponse.prototype.updateexpensedateResponse = function(data){

	//console.log(data);
	if(data.Status == 'OK'){
		console.log("cuenta modificada");
	}
}


ADTResponse.prototype.deleteexpenseResponse = function(data){

	//console.log(data)
	if(data.Status == 'OK'){
		console.log("cuenta borrada");
		expensesCatalog = JSON.parse(localStorage.expensesCatalogDict);
		for(expense in expensesCatalog){
			if(data.EXID == expensesCatalog[expense].EXID){
				console.log(expensesCatalog[expense].EXDESC)
				expensesCatalog.splice(expense,expense);
			}
		}
		localStorage.expensesCatalogDict = JSON.stringify(expensesCatalog);
		//console.log(localStorage.expensesCatalogDict);
		adtExpenses.expenses();
	}
}

ADTResponse.prototype.sendbalanceResponse = function(data){

	if(data.Status == 'OK'){
		console.log("gasto registrado");
		expensesCatalog = JSON.parse(localStorage.expensesCatalogDict);
		for(expense in expensesCatalog){
			if(data.EXID == expensesCatalog[expense].EXID){
				console.log(parseFloat(expensesCatalog[expense].EXPBAL));
				console.log(parseFloat(data.EXPBAL));
				expensesCatalog[expense].EXPBAL = data.EXPBAL;
			}
		}
		localStorage.expensesCatalogDict = JSON.stringify(expensesCatalog);
		adtExpenses.expenses();
		console.log(localStorage.expensesCatalogDict);
	}
}

ADTResponse.prototype.sendbalancedateResponse = function(data){

	if(data.Status == 'OK'){
		console.log("gasto registrado");
	}
}

ADTResponse.prototype.getaccountsResponse = function(data){

	if(data.Status == 'OK'){
		console.log("Bienvenido");
		localStorage.accountsCatalogDict = JSON.stringify(data.accountsCatalogDict);
	}else{
		console.log("Por favor registre una cuenta de ingreso");
		adtAccounts.createAccount("newRegister");
	}
}


var adtResponse = new ADTResponse();