function ADTAccounts(){

}

ADTAccounts.prototype.accounts = function (){

	var htmlContent= '';

	document.getElementById("mainContent").innerHTML= htmlContent;
}

ADTAccounts.prototype.createAccount = function (typeRegister){

	var htmlContent= '';

	htmlContent += '<div class="modal fade" id="modal_account" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" data-backdrop="static" data-keyboard="false">';
	htmlContent += '	<div class="modal-dialog">';
	htmlContent += '		<div class="modal-content">';
	htmlContent += '			<div class="modal-header">';
	htmlContent += '				<h3>Creando cuenta de Ingreso</h3>';
	htmlContent += '			</div>';
	htmlContent += '			<div class="modal-body">';
	htmlContent += '				<form>';
	if(typeRegister != "newRegister"){
		htmlContent += '					<div class="form-group row">';
		htmlContent += '						<label for="balance" class="col-sm-5 col-form-label">Descripción: </label>';
		htmlContent += '						<div class="col-sm-5">';
		htmlContent += '							<input class="form-control" type="text" id="descriptionAccount" value="">';
		htmlContent += '						</div>';
		htmlContent += '					</div>';
	}else{
		htmlContent += '					<div class="form-group row">';
		htmlContent += '						<label for="description" class="col-sm-6 col-form-label">Introduzca su ingreso mensual: </label>';
		htmlContent += '						<div class="col-sm-4">';
		htmlContent += '							<input class="form-control" type="text" id="balanceAccount" value="">';
		htmlContent += '						</div>';
		htmlContent += '					</div>';
	}
	htmlContent += '				</form>';
	htmlContent += '			</div>';
	htmlContent += '			<div class="modal-footer">';
	htmlContent += '				<button onclick="adtAccounts.addAccounts('+typeRegister+')" style="background-color:#1cc88a;" class="btn btn-secondary" type="button" data-dismiss="modal">Registrar cuenta</button>';
	htmlContent += '			</div>';
	htmlContent += '		</div>';
	htmlContent += '	</div>';
	htmlContent += '</div>';

	document.getElementById("accountModal").innerHTML= htmlContent;
	$("#modal_account").modal("show");
}

ADTAccounts.prototype.addAccounts = function (typeRegister){

	var params = '';

	if(typeRegister != "newRegister"){
		params += 'userName=' + window.USERNAME + '&description=' + $("#descriptionAccount").val() + '&balance=' + $("#balanceAccount").val();
		adtRequest.makeRequest('AddAccount',params);
	}else{
		params += 'userName=' + window.USERNAME + '&description=' + "IngresoMensual" + '&balance=' + $("#balanceAccount").val();
		adtRequest.makeRequest('AddAccount',params);
	} 
}

ADTAccounts.prototype.getAccounts = function (){

	var params = '';

	params += 'userName=' + window.USERNAME;
	adtRequest.makeRequest('GetAccounts',params);

}

var adtAccounts = new ADTAccounts();