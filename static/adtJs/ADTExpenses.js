function ADTExpenses(){

	this.description;
  	this.color;
  	this.icon;
}

ADTExpenses.prototype.expenses = function() {

	var htmlContent= '';
	var expensesCatalog = JSON.parse(localStorage.expensesCatalogDict);

	htmlContent += '<div id="expenses">';
	htmlContent += '	<ul>';
	for(expense in expensesCatalog){
		htmlContent += '	<li>';
		htmlContent += '		<a onclick="adtExpenses.expenseShow(\''+ expensesCatalog[expense].EXID +'\',\''+ expensesCatalog[expense].EXDESC +'\',\''+ expensesCatalog[expense].EXPCOL +'\');"  style="background-color:#'+expensesCatalog[expense].EXPCOL+';" class="btn-circle btn-xl tooltip" data-toggle="modal" data-target="#expenseModal">';
		htmlContent += '			<span class="tooltiptext">'+expensesCatalog[expense].EXDESC+'</span>';
		htmlContent += '			<i class="'+expensesCatalog[expense].EXPICO+'"></i>';
		htmlContent += '		</a>';
		htmlContent += '	</li>';
	}
	htmlContent += '		<li>';
	htmlContent += '			<a onclick="adtExpenses.expenseEdit(\'\',\'\',\'create\');" style="background-color:#858796;" class="btn-circle btn-xl tooltip" data-toggle="modal" data-target="#expenseModal">';
	htmlContent += '				<span class="tooltiptext">Agregar Categoría</span>';
	htmlContent += '				<i class="fas fa-plus"></i>';
	htmlContent += '			</a>';
	htmlContent += '		</li>';
	htmlContent += '	</ul>';
	htmlContent += '</div>';

	document.getElementById("mainContent").innerHTML= htmlContent;
	adtExpenses.pieChart();	

}

ADTExpenses.prototype.expenseShow = function(id,expense,color){

	var htmlContent= '';

	htmlContent += '<div class="modal-dialog" role="document">';
	htmlContent += '	<div class="modal-content">';
	htmlContent += '		<div class="modal-header">';
	htmlContent += '			<h5 class="modal-title" id="exampleModalLabel">Cuenta '+expense+'</h5>';
	htmlContent += '			<button class="close" type="button" data-dismiss="modal" aria-label="Close">';
	htmlContent += '				<span aria-hidden="true">×</span>';
	htmlContent += '			</button>';
	htmlContent += '		</div>';
	htmlContent += '		<div class="modal-body">';
	htmlContent += '			<form>'
	htmlContent += '				<div class="form-group row">';
	htmlContent += '					<label for="balance" class="col-sm-5 col-form-label">Ingrese Cantidad: </label>';
	htmlContent += '					<div class="col-sm-5">';
	htmlContent += '						<input class="form-control" type="text" id="balance">';
	htmlContent += '					</div>';
	htmlContent += '				</div>';
	htmlContent += '			</form>'
	htmlContent += '		</div>';
	htmlContent += '		<div class="modal-footer">';
	htmlContent += '			<button onclick="adtExpenses.deleteExpense(\''+ id +'\');" style="background-color:#e74a3b;" class="btn btn-secondary" type="button" data-dismiss="modal">Eliminar cuenta</button>';
	htmlContent += '			<button onclick="adtExpenses.expenseEdit(\''+ id +'\',\''+ expense +'\',\''+ color +'\',\'edit\');" class="btn btn-secondary" type="button" >Editar cuenta</button>';
	htmlContent += '			<button onclick="adtExpenses.sendBalance(\''+ id +'\');" style="background-color:#1cc88a;" class="btn btn-secondary" type="button" data-dismiss="modal">Registrar gasto</button>';
	htmlContent += '		</div>';
	htmlContent += '	</div>';
	htmlContent += '</div>';

	document.getElementById("expenseModal").innerHTML= htmlContent;

}

ADTExpenses.prototype.expenseEdit = function(id,expense,color,action){

	var htmlContent= '';

	htmlContent += '<div class="modal-dialog" role="document">';
	htmlContent += '	<div class="modal-content">';
	htmlContent += '		<div class="modal-header">';
	if(action == 'edit'){
		htmlContent += '		<h5 class="modal-title" id="exampleModalLabel">Editando Cuenta</h5>';
	}else{
		htmlContent += '		<h5 class="modal-title" id="exampleModalLabel">Creando Cuenta</h5>';
	}
	htmlContent += '			<button class="close" type="button" data-dismiss="modal" aria-label="Close">';
	htmlContent += '				<span aria-hidden="true">×</span>';
	htmlContent += '			</button>';
	htmlContent += '		</div>';
	htmlContent += '		<div class="modal-body">';
	htmlContent += '			<form>'
	htmlContent += '				<div class="form-group row">';
	htmlContent += '					<label for="description" class="col-sm-5 col-form-label">Descripción: </label>';
	htmlContent += '					<div class="col-sm-5">';
	if(action == 'edit'){
		htmlContent += '					<input class="form-control" type="text" id="description" value='+expense+'>';
	}else{
		htmlContent += '					<input class="form-control" type="text" id="description" value="">';
	}
	htmlContent += '					</div>';
	htmlContent += '				</div>'
	htmlContent += '				<div class="form-group row">';
	htmlContent += '					<label for="color" class="col-sm-5 col-form-label">Seleccione Color: </label>';
	htmlContent += '					<div class="col-sm-5">';
	if(action == 'edit'){		
		htmlContent += '					<select class="custom-select my-1 mr-sm-2" id="selectColor" style="background-color:#'+color+';" onchange="adtExpenses.changeColorSelect()";>';
	}else{
		htmlContent += '					<select class="custom-select my-1 mr-sm-2" id="selectColor" onchange="adtExpenses.changeColorSelect()";>';
	}
    htmlContent += '							<option style="background-color:#4e73df;" value="4e73df"></option>';
    htmlContent += '							<option style="background-color:#6610f2;" value="6610f2"></option>';
    htmlContent += '							<option style="background-color:#6f42c1;" value="6f42c1"></option>';
    htmlContent += '							<option style="background-color:#e83e8c;" value="e83e8c"></option>';
    htmlContent += '							<option style="background-color:#e74a3b;" value="e74a3b"></option>';
    htmlContent += '							<option style="background-color:#fd7e14;" value="fd7e14"></option>';
    htmlContent += '							<option style="background-color:#f6c23e;" value="f6c23e"></option>';
    htmlContent += '							<option style="background-color:#1cc88a;" value="1cc88a"></option>';
    htmlContent += '							<option style="background-color:#20c9a6;" value="20c9a6"></option>';
    htmlContent += '							<option style="background-color:#36b9cc;" value="36b9cc"></option>';
    htmlContent += '							<option style="background-color:#858796;" value="858796"></option>';
    htmlContent += '							<option style="background-color:#5a5c69;" value="5a5c69"></option>';
    htmlContent += '							<option style="background-color:#4e73df;" value="4e73df"></option>';
    htmlContent += '							<option style="background-color:#858796;" value="858796"></option>';
    htmlContent += '						</select>';
	htmlContent += '					</div>';
	htmlContent += '				</div>';
	htmlContent += '				<div class="form-group row">';
	htmlContent += '					<label for="color" class="col-sm-5 col-form-label">Seleccione Icono: </label>';
	htmlContent += '					<div class="col-sm-5">';
	htmlContent += '						<table id="table-icon">';
	htmlContent += '							<tr>';
	htmlContent += '								<td id="fas fa-utensils"><i class="fas fa-utensils"></i></td>';
	htmlContent += '								<td id="fas fa-shopping-cart"><i class="fas fa-shopping-cart"></i></td>';
	htmlContent += '								<td id="fas fa-heartbeat"><i class="fas fa-heartbeat"></i></td>';
	htmlContent += '								<td id="fas fa-bus"><i class="fas fa-bus"></i></td>';
	htmlContent += '								<td id="fas fa-bus"><i class="fas fa-tshirt"></i></td>';
	htmlContent += '								<td id="fas fa-shopping-basket"><i class="fas fa-shopping-basket"></i></td>';
	htmlContent += '								<td id="fas fa-store"></><i class="fas fa-store"></i></td>';
	htmlContent += '								<td id="fas fa-film"><i class="fas fa-film"></i></td>'
	htmlContent += '							</tr>';
	htmlContent += '							<tr>';
	htmlContent += '								<td id="fas fa-coffee"><i class="fas fa-coffee"></i></td>';
	htmlContent += '								<td id="fas fa-hamburger"><i class="fas fa-hamburger"></i></td>';
	htmlContent += '								<td id="fas fa-pizza-slice"><i class="fas fa-pizza-slice"></i></td>';
	htmlContent += '								<td id="fas fa-wine-glass-alt"><i class="fas fa-wine-glass-alt"></i></td>';
	htmlContent += '								<td id="fas fa-beer"><i class="fas fa-beer"></i></td>';
	htmlContent += '								<td id="fas fa-mobile-alt"><i class="fas fa-mobile-alt"></i></td>';
	htmlContent += '								<td id="fas fa-tv"><i class="fas fa-tv"></i></td>';
	htmlContent += '								<td id="fas fa-laptop"><i class="fas fa-laptop"></i></td>';
	htmlContent += '							</tr>';
	htmlContent += '							<tr>';
	htmlContent += '								<td id="fas fa-building"><i class="fas fa-building"></i></td>';
	htmlContent += '								<td id="fas fa-hotel"><i class="fas fa-hotel"></i></td>';
	htmlContent += '								<td id="fas fa-bolt"><i class="fas fa-bolt"></i></td>';
	htmlContent += '								<td id="fas fa-tint"><i class="fas fa-tint"></i></td>';
	htmlContent += '								<td id="fas fa-burn"><i class="fas fa-burn"></i></td>';
	htmlContent += '								<td id="fas fa-phone-alt"><i class="fas fa-phone-alt"></i></td>';
	htmlContent += '								<td id="fas fa-broom"><i class="fas fa-broom"></i></td>';
	htmlContent += '								<td id="fas fa-wifi"><i class="fas fa-wifi"></i></td>';
	htmlContent += '							</tr>';
	htmlContent += '							<tr>';
	htmlContent += '								<td id="fas fa-graduation-cap"><i class="fas fa-graduation-cap"></i></td>';
	htmlContent += '								<td id="fas fa-dumbbell"><i class="fas fa-dumbbell"></i></td>';
	htmlContent += '								<td id="fas fa-paw"><i class="fas fa-paw"></i></td>';
	htmlContent += '								<td id="fas fa-gift"><i class="fas fa-gift"></i></td>';
	htmlContent += '								<td id="fas fa-plane-departure"><i class="fas fa-plane-departure"></i></td>';
	htmlContent += '								<td id="fas fa-home"><i class="fas fa-home"></i></td>';
	htmlContent += '								<td id="far fa-credit-card"><i class="far fa-credit-card"></i></td>'
	htmlContent += '								<td id="fas fa-baby-carriage"><i class="fas fa-baby-carriage"></i></td>'
	htmlContent += '							</tr>';
	htmlContent += '							<tr>';
	htmlContent += '								<td id="fas fa-umbrella-beach"><i class="fas fa-umbrella-beach"></i></td>';
	htmlContent += '								<td id="fas fa-gas-pump"><i class="fas fa-gas-pump"></i></td>';
	htmlContent += '								<td id="fas fa-wrench"><i class="fas fa-wrench"></i></td>';
	htmlContent += '								<td id="fas fa-gamepad"><i class="fas fa-gamepad"></i></td>';
	htmlContent += '								<td id="fas fa-couch"><i class="fas fa-couch"></i></td>';
	htmlContent += '								<td id="fas fa-car"></><i class="fas fa-car"></i></td>';
	htmlContent += '								<td id="fas fa-tooth"><i class="fas fa-tooth"></i></td>';
	htmlContent += '								<td id="fas fa-music"><i class="fas fa-music"></i></td>'
	htmlContent += '							</tr>';
	htmlContent += '						</table>';
	htmlContent += '					</div>';
	htmlContent += '				</div>';
	htmlContent += '			</form>';
	htmlContent += '		</div>';
	htmlContent += '		<div class="modal-footer">';
	htmlContent += '			<button style="background-color:#e74a3b;" class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>';
	if(action == 'edit'){
		htmlContent += '		<button onclick="adtExpenses.updateExpense('+ id +')"; style="background-color:#1cc88a;" class="btn btn-secondary" type="button" data-dismiss="modal">Guardar</button>';
	}else{
		htmlContent += '		<button onclick="adtExpenses.addExpense()"; style="background-color:#1cc88a;" class="btn btn-secondary" type="button" data-dismiss="modal">Guardar</button>';
	}
	htmlContent += '		</div>';
	htmlContent += '	</div>';
	htmlContent += '</div>';

	document.getElementById("expenseModal").innerHTML= htmlContent;

	var select = 0;
	$("#table-icon tr td").click(function() {
		var celda = $(this);	
		if(select == 0){	
			//alert(celda.html());
			celda.css('background-color','red');
			adtExpenses.icon = celda.attr('id');
			select = 1;
		}
		else{
			$("#table-icon tr td").css("background-color","#f8f9fc");
			celda.css('background-color','red');
			adtExpenses.icon = celda.attr('id');	
		}
	});
}

ADTExpenses.prototype.changeColorSelect = function(){

	adtExpenses.color = $("#selectColor option:selected").val();
	var color = $("#selectColor option:selected").val();
	document.getElementById("selectColor").style.backgroundColor = '#'+color;

}

ADTExpenses.prototype.addExpense = function(){

	var params = '';

	params += 'userName=' + window.USERNAME + '&description=' + $("#description").val() + '&balance=' + 0 + '&color=' + adtExpenses.color + '&icon=' + adtExpenses.icon;
	adtRequest.makeRequest('AddExpense',params);

}

ADTExpenses.prototype.updateExpense = function(id){

	console.log(id);
	var params = '';

	params += 'userName=' + window.USERNAME + '&description=' + $("#description").val() + '&color=' + adtExpenses.color + '&icon=' + adtExpenses.icon + '&expenseId=' + id;
	adtRequest.makeRequest('UpdateExpense',params);

}

ADTExpenses.prototype.deleteExpense = function(id){

	var params = '';
	params += 'userName=' + window.USERNAME + '&expenseId=' + id;
	//console.log(id);
	adtRequest.makeRequest('DeleteExpense',params);

}

ADTExpenses.prototype.getExpenses = function(){

	var params = '';
	params += 'userName=' + window.USERNAME;
	adtRequest.makeRequest('GetExpenses',params);

}

ADTExpenses.prototype.sendBalance = function(id){

	var params = ''; 
	params += 'userName' + window.USERNAME + '&balance=' + $("#balance").val() + '&expenseId=' + id; 
	adtRequest.makeRequest('SendBalance',params)
}

ADTExpenses.prototype.pieChart = function() {

	var htmlContent= '';

	htmlContent += '<div id="pieChart" class="card shadow mb-4">';
	htmlContent += '	<div class="chart-pie pt-4 pb-2">';
	htmlContent += '		<div id="chartContainer" style="height: 300px; width: 100%;"></div>';
	htmlContent += '	</div>';
	htmlContent += '	<div class="mt-4 text-center small">';
	htmlContent += '		<span class="mr-2">';
	htmlContent += '			<i class="fas fa-circle text-primary"></i> Direct';
	htmlContent += '		</span>';
	htmlContent += '		<span class="mr-2">';
	htmlContent += '			<i class="fas fa-circle text-success"></i> Social';
	htmlContent += '		</span>';
	htmlContent += '		<span class="mr-2">';
	htmlContent += '			<i class="fas fa-circle text-info"></i> Referral';
	htmlContent += '		</span>';
	htmlContent += '	</div>';
	htmlContent += '</div>';

	document.getElementById("mainContent").innerHTML+= htmlContent;
	chart();
}

function chart(){

	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title:{
			text: "",
			horizontalAlign: "left"
		},
		data: [{
			type: "doughnut",
			startAngle: 60,
			//innerRadius: 60,
			indexLabelFontSize: 17,
			indexLabel: "{label} - #percent%",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 67, label: "Inbox" },
				{ y: 28, label: "Archives" },
				{ y: 10, label: "Labels" },
				{ y: 7, label: "Drafts"},
				{ y: 15, label: "Trash"},
				{ y: 6, label: "Spam"}
			]
		}]
	});
	chart.render();
}

$(document).ready(function(){ 



});

var adtExpenses = new ADTExpenses();