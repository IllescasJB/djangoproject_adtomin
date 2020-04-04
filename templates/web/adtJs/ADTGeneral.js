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
	htmlContent += '<a class="nav-link" href="charts.html">';
	htmlContent += '<i class="fas fa-fw fa-circle-notch menu"></i>';
	htmlContent += '<span class="menu">Inicio</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="tables.html">';
	htmlContent += '<i class="fas fa-fw fa-money-check-alt menu"></i>';
	htmlContent += '<span class="menu">Cuentas</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="tables.html">';
	htmlContent += '<i class="fas fa-fw fa-chart-bar menu"></i>';
	htmlContent += '<span class="menu">Resumen</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="tables.html">';
	htmlContent += '<i class="fas fa-fw fa-users menu"></i>';
	htmlContent += '<span class="menu">Sobre nosotros</span></a>';
	htmlContent += '</li>';
	htmlContent += '<li class="nav-item">';
	htmlContent += '<a class="nav-link" href="tables.html">';
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

$(document).ready(function(){
	adtGeneral.sideBar();
});

var adtGeneral= new ADTGeneral();