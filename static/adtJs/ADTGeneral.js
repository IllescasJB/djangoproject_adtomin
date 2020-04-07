function ADTGeneral(){
   
}

ADTGeneral.prototype.sideBar = function() {
	var htmlContent= '';

	htmlContent += '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">';
	htmlContent += '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">';
	htmlContent += '<div class="sidebar-brand-icon rotate-n-15">';
	htmlContent += '<i class="fas fa-laugh-wink"></i>';
	htmlContent += '</div>';
	htmlContent += '<div class="sidebar-brand-text mx-3">AdTomin </div>';
	htmlContent += '</a>';
	htmlContent += '<hr class="sidebar-divider my-0">';
	htmlContent += '<hr class="sidebar-divider">';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="/welcome">';
	htmlContent += '<i class="fas fa-fw fa-circle-notch menu"></i>';
	htmlContent += '<span class="menu">Inicio</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="/welcome">';
	htmlContent += '<i class="fas fa-fw fa-money-check-alt menu"></i>';
	htmlContent += '<span class="menu">Cuentas</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="/welcome">';
	htmlContent += '<i class="fas fa-fw fa-chart-bar menu"></i>';
	htmlContent += '<span class="menu">Resumen</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="/welcome">';
	htmlContent += '<i class="fas fa-fw fa-users menu"></i>';
	htmlContent += '<span class="menu">Sobre nosotros</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="/welcome">';
	htmlContent += '<i class="fas fa-fw fa-envelope-open-text menu"></i>';
	htmlContent += '<span class="menu">Contacto</span></a>';
	htmlContent += '</li>';
	htmlContent += '<hr class="sidebar-divider d-none d-md-block">';
	htmlContent += '<div class="text-center d-none d-md-inline">';
	htmlContent += '<button class="rounded-circle border-0" id="sidebarToggle"></button>';
	htmlContent += '</div>';
	htmlContent += '</ul>';

	document.getElementById("sidebar").innerHTML= htmlContent;
};

ADTGeneral.prototype.navItemAlerts = function() {
	var htmlContent= '';

	htmlContent += '<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
	htmlContent += '<i class="fas fa-bell fa-fw"></i>';
	//Counter Alerts
	htmlContent += '<span class="badge badge-danger badge-counter">3+</span>';
	htmlContent += '</a>'
	//Dropdown - Alerts
	htmlContent += '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">';
	htmlContent += '<h6 class="dropdown-header">Centro de notificaciones</h6>';
	htmlContent += '<a class="dropdown-item d-flex align-items-center" href="#">';
	htmlContent += '<div class="mr-3">';
	htmlContent += '<div class="icon-circle bg-primary">';
	htmlContent += '<i class="fas fa-file-alt text-white"></i>';
	htmlContent += '</div>';
	htmlContent += '</div>';
	htmlContent += '<div>';
	htmlContent += '<div class="small text-gray-500">December 12, 2019</div>';
	htmlContent += '<span class="font-weight-bold">A new monthly report is ready to download!</span>';
	htmlContent += '</div>';
	htmlContent += '</a>';
	htmlContent += '<a class="dropdown-item d-flex align-items-center" href="#">';
	htmlContent += '<div class="mr-3">';
	htmlContent += '<div class="icon-circle bg-success">';
	htmlContent += '<i class="fas fa-donate text-white"></i>';
	htmlContent += '</div>';
	htmlContent += '</div>';
	htmlContent += '<div>';
	htmlContent += '<div class="small text-gray-500">December 7, 2019</div>';
	htmlContent += '$290.29 has been deposited into your account!</div>';
	htmlContent += '</a>'
	htmlContent += '<a class="dropdown-item d-flex align-items-center" href="#">';
	htmlContent += '<div class="mr-3">';
	htmlContent += '<div class="icon-circle bg-warning">';
	htmlContent += '<i class="fas fa-exclamation-triangle text-white"></i>';
	htmlContent += '</div>';
	htmlContent += '</div>';
	htmlContent += '<div>';
	htmlContent += '<div class="small text-gray-500">December 2, 2019</div>';
	htmlContent += 'Spending Alert: We ve noticed unusually high spending for your account.</div>';
	htmlContent += '</a>'
	htmlContent += '<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>';
	htmlContent += '</div>';

	document.getElementById("itemAlerts").innerHTML= htmlContent;
}

ADTGeneral.prototype.navItemUserInformation = function() {
	var htmlContent= '';

	htmlContent += '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
	htmlContent += '<span class="mr-2 d-none d-lg-inline text-gray-600 small">{{user.username}}</span>';
	htmlContent += '<img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">'
	htmlContent += '</a>';
	//Dropdown - User Information
	htmlContent += '<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">';
	htmlContent += '<a class="dropdown-item" href="#">';
	htmlContent += '<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>';
	htmlContent += 'Profile';
	htmlContent += '</a>';
	htmlContent += '<a class="dropdown-item" href="#">';
	htmlContent += '<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>';
	htmlContent += 'Settings';
	htmlContent += '</a>';
	htmlContent += '<a class="dropdown-item" href="#">';
	htmlContent += '<i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>';
	htmlContent += 'Activity Log';
	htmlContent += '</a>';
	htmlContent += '<div class="dropdown-divider"></div>';
	htmlContent += '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">';
	htmlContent += '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>';
	htmlContent += 'Logout';
	htmlContent += '</a>';
	htmlContent += '</div>';

	document.getElementById("itemUser").innerHTML= htmlContent;
}

ADTGeneral.prototype.expenses = function() {
	var htmlContent= '';

	htmlContent += '<ul>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-utensils"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-shopping-cart"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-heartbeat"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-bus"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-tshirt"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '<li>';
	htmlContent += '<a href="#" class="btn-circle btn-xl">';
	htmlContent += '<i class="fas fa-plus"></i>';
	htmlContent += '</a>';
	htmlContent += '</li>';
	htmlContent += '</ul>';

	document.getElementById("expenses").innerHTML= htmlContent;	

}

ADTGeneral.prototype.pieChart = function() {

	var htmlContent= '';

	htmlContent += '<div class="chart-pie pt-4 pb-2">';
	htmlContent += '<div id="chartContainer" style="height: 300px; width: 100%;"></div>';
	htmlContent += '</div>';
	htmlContent += '<div class="mt-4 text-center small">';
	htmlContent += '<span class="mr-2">';
	htmlContent += '<i class="fas fa-circle text-primary"></i> Direct';
	htmlContent += '</span>';
	htmlContent += '<span class="mr-2">';
	htmlContent += '<i class="fas fa-circle text-success"></i> Social';
	htmlContent += '</span>';
	htmlContent += '<span class="mr-2">';
	htmlContent += '<i class="fas fa-circle text-info"></i> Referral';
	htmlContent += '</span>';
	htmlContent += '</div>';

	document.getElementById("pieChart").innerHTML= htmlContent;
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

ADTGeneral.prototype.logoutModal = function() {

	var htmlContent= '';

	htmlContent += '<div class="modal-dialog" role="document">';
	htmlContent += '<div class="modal-content">';
	htmlContent += '<div class="modal-header">';
	htmlContent += '<h5 class="modal-title" id="exampleModalLabel">¿Desea cerrar su sesión?</h5>';
	htmlContent += '<button class="close" type="button" data-dismiss="modal" aria-label="Close">';
	htmlContent += '<span aria-hidden="true">×</span>';
	htmlContent += '</button>';
	htmlContent += '</div>';
	htmlContent += '<div class="modal-body">¿Preparado para partir?Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>';
	htmlContent += '<div class="modal-footer">';
	htmlContent += '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>';
	htmlContent += '<a class="btn btn-primary" href="logout/">Cerrar sesión</a>';
	htmlContent += '</div>';
	htmlContent += '</div>';
	htmlContent += '</div>';

	document.getElementById("logoutModal").innerHTML= htmlContent;
}

$(document).ready(function(){
	adtGeneral.sideBar();
	adtGeneral.navItemAlerts();
	adtGeneral.navItemUserInformation();
	adtGeneral.expenses();
	adtGeneral.pieChart();
	adtGeneral.logoutModal();
});

var adtGeneral= new ADTGeneral();