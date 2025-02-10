console.log('prueba')

// Cerrar la barra de navegación después de hacer clic en un elemento del menú
var navbarCollapse = document.getElementById('navbarNavDropdown');
var navItems = navbarCollapse.getElementsByClassName('nav-link');

Array.from(navItems).forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
    });
});


var estudios = [
            {
                "institucion" : "Universidad Militar Nueva Granada",
                "programa" : "Geomatica",
                "tipo" : "Especialización",
                "año" : 2023
            },
            {
                "institucion" : "Ministerio de las TIC y Correlation One",
                "programa" : "Ciencia de Datos ",
                "tipo" : "Diplomado",
                "año" : 2022
            },
            {
                "institucion" : "Platzi",
                "programa" : "Programación",
                "tipo" : "Curso",
                "año" : 2022
            },
            {
                "institucion" : "Instituto Geográfico Agustín Codazzi",
                "programa" : "Reconocedor Predial Urbano-Rural",
                "tipo" : "Curso",
                "año" : 2021
            },
            {
                "institucion" : "Universidad Distrital Francisco Jose de Caldas",
                "programa" : "Ambiente y Desarrollo Local",
                "tipo" : "Especialización",
                "año" : 2023
            },
	    {
                "institucion" : "Universidad Militar Nueva Granada",
                "programa" : "Geomática",
                "tipo" : "Especialización",
                "año" : 2019
            }, 
            {
                "institucion" : "CUN y Colnodo",
                "programa" : "Competencias TIC",
                "tipo" : "Diplomado",
                "año" : 2016
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Desarrollo de Aplicaciones (java)",
                "tipo" : "Curso",
                "año" : 2016
            },
            {
                "institucion" : "Universidad Distrital Francisco Jose de Caldas",
                "programa" : "Ingenieria Catastral y Geodesia",
                "tipo" : "Pregrado",
                "año" : 2015
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Uso de Excel y Access para el desarrollo de Aplicaciones Administrativas Empresariales",
                "tipo" : "Curso",
                "año" : 2015
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Autocad 2D",
                "tipo" : "Curso",
                "año" : 2015
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Manejo de Herramientas Microsoft Office Excel",
                "tipo" : "Curso",
                "año" : 2015
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Formulación de Proyectos en mi Profesion",
                "tipo" : "Curso",
                "año" : 2015
            },
            {
                "institucion" : "SENA (Virtual)",
                "programa" : "Salud Ocupacional, seguridad y Salud en el Trabajo",
                "tipo" : "Curso",
                "año" : 2015
            }
]

estudios.forEach(function(estudio){
    
    if (estudio.tipo == 'Especialización' || estudio.tipo == 'Pregrado' ){
    
		var contenedor_estudio = document.getElementById("contenedor-edu");
		institucion = estudio.institucion;
		programa = estudio.programa
		tipo = estudio.tipo
		fecha = estudio.año

		var div_col = document.createElement("div");
		div_col.classList.add("col");
		contenedor_estudio.appendChild(div_col);

		var card = document.createElement("div");
		card.classList.add("card", "h-100");
		div_col.appendChild(card);

		var card_institucion = document.createElement("div");
		card_institucion.classList.add("card-header");
		card_institucion.textContent = institucion;
		card.appendChild(card_institucion);

		var card_cuerpo = document.createElement("div");
		card_cuerpo.classList.add("card-body");
		card.appendChild(card_cuerpo);

		var card_titulo = document.createElement("h5");
		card_titulo.classList.add("card-title");
		card_titulo.textContent = programa;
		card_cuerpo.appendChild(card_titulo);

		var card_texto = document.createElement("p");
		card_texto.classList.add("card-text");
		card_texto.textContent = tipo;
		card.appendChild(card_texto);

		var footer = document.createElement("div");
		footer.classList.add("card-footer");
		card.appendChild(footer);

		var small = document.createElement("small");
		small.classList.add("text-body-secondary")
		footer.appendChild(small);

		var cursiva = document.createElement("em");
		cursiva.textContent = fecha;
		small.appendChild(cursiva);
    }

    else if (estudio.tipo == 'Diplomado'){

		var contenedor_estudio = document.getElementById("contenedor-edu-no");
		institucion = estudio.institucion;
		programa = estudio.programa
		tipo = estudio.tipo

		var div_col = document.createElement("div");
		div_col.classList.add("col");
		contenedor_estudio.appendChild(div_col);

		var card = document.createElement("div");
		card.classList.add("card", "h-100");
		div_col.appendChild(card);

		var card_institucion = document.createElement("div");
		card_institucion.classList.add("card-header");
		card_institucion.textContent = institucion;
		card.appendChild(card_institucion);

		var card_cuerpo = document.createElement("div");
		card_cuerpo.classList.add("card-body");
		card.appendChild(card_cuerpo);

		var card_titulo = document.createElement("h5");
		card_titulo.classList.add("card-title");
		card_titulo.textContent = programa;
		card_cuerpo.appendChild(card_titulo);

		var card_texto = document.createElement("p");
		card_texto.classList.add("card-text");
		card_texto.textContent = tipo + " - " + fecha;
		card.appendChild(card_texto);
    }

	else if (estudio.tipo == 'Curso'){

		var contenedor_estudio = document.getElementById("contenedor-edu-curso");
		institucion = estudio.institucion;
		programa = estudio.programa
		tipo = estudio.tipo

		var div_col = document.createElement("div");
		div_col.classList.add("col");
		contenedor_estudio.appendChild(div_col);

		var card = document.createElement("div");
		card.classList.add("card", "h-100");
		div_col.appendChild(card);

		var card_institucion = document.createElement("div");
		card_institucion.classList.add("card-text");
		card_institucion.textContent = institucion + " - " + programa;
		card.appendChild(card_institucion);

	}
});


var experiencia = [
		{
			"empresa" : "Arce Rojas Consultores",
			"cargo" : "Experto Desarrollo",
			"inicio" : "2025-01-13",
			"fin" : "Actualmente",
			"meses" : 1.0,
			"descripcion" : "Análisis de datos, pruebas funcionales, y desarrollos."
		},
		{
			"empresa" : "Konfirma",
			"cargo" : "Experto Desarrollo",
			"inicio" : "2024-02-08",
			"fin" : "2025-01-03",
			"meses" : 11.0,
			"descripcion" : "Análisis de datos, pruebas funcionales, y desarrollos"
		},
	        {
			"empresa" : "Ingicat",
			"cargo" : "Profesional Experto SIG",
			"inicio" : "2023-02-09",
			"fin" : "2023-07-11",
			"meses" : 5.0667,
			"descripcion" : "Procesamiento información geográfica asociada a Infraestructura petrolera a nivel Nacional asociada a Ecopetrol S.A."
		},
		{
			"empresa" : "Arce Rojas Consultores",
			"cargo" : "Profesional Especialista SIG",
			"inicio" : "2022-09-01",
			"fin" : "2022-12-30",
			"meses" : 4.0000,
			"descripcion" : "Procesamiento información geográfica asociada a Infraestructura petrolera a nivel Nacional asociada a Ecopetrol S.A."
		},
		{
			"empresa" : "Arce Rojas Consultores",
			"cargo" : "Profesional Integral SIG",
			"inicio" : "2022-07-01",
			"fin" : "2022-08-30",
			"meses" : 2.0000,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., operación – Barrancabermeja."
		},
		{
			"empresa" : "Arce Rojas Consultores",
			"cargo" : "Coordinador Técnico",
			"inicio" : "2021-07-01",
			"fin" : "2022-06-30",
			"meses" : 12.1333,
			"descripcion" : "Diagnósticos Jurídico-Catastrales y Saneamiento Inmobiliarios para Mansarovar Energy Colombia Limited. Saneamiento Contrato de Asociación Nare."
		},
		{
			"empresa" : "Arce Rojas Consultores",
			"cargo" : "Supervisor de Tierras",
			"inicio" : "2021-01-18",
			"fin" : "2021-06-25",
			"meses" : 5.2667,
			"descripcion" : "Diagnósticos Jurídico-Catastrales y Saneamiento Inmobiliarios para Mansarovar Energy Colombia Limited. Saneamiento Contrato de Asociación Nare."
		},
		{
			"empresa" : "Unión Temporal Gestión Inmobiliaria ECP 2016",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2020-06-08",
			"fin" : "2020-07-15",
			"meses" : 1.2333,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., operación – Barrancabermeja."
		},
		{
			"empresa" : "Unión Temporal Gestión Inmobiliaria ECP 2016",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2020-01-20",
			"fin" : "2020-04-30",
			"meses" : 3.3667,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., Saneamiento"
		},
		{
			"empresa" : "Unión Temporal Gestión Inmobiliaria ECP 2016",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2019-09-09",
			"fin" : "2019-12-31",
			"meses" : 3.7667,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., Exploración - Sísmica."
		},
		{
			"empresa" : "Unión Temporal Gestión Inmobiliaria ECP 2016",
			"cargo" : "Profesional SIG",
			"inicio" : "2019-02-11",
			"fin" : "2019-09-06",
			"meses" : 6.9000,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., Saneamiento Casanare"
		},
		{
			"empresa" : "Unión Temporal Gestión Inmobiliaria ECP 2016",
			"cargo" : "Profesional SIG",
			"inicio" : "2018-04-30",
			"fin" : "2018-12-30",
			"meses" : 8.1333,
			"descripcion" : "Administración de derechos Inmobiliarios para Ecopetrol S.A., Saneamiento Casanare"
		},
		{
			"empresa" : "Garrido & Lopez",
			"cargo" : "Profesional SIG",
			"inicio" : "2017-10-11",
			"fin" : "2018-02-15",
			"meses" : 4.2333,
			"descripcion" : "Diagnósticos Jurídico-Catastrales Gasoducto Opón."
		},
		{
			"empresa" : "Saexploration",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2017-03-28",
			"fin" : "2017-08-29",
			"meses" : 5.1333,
			"descripcion" : "Adquisición de datos sísmicos 2D y 3D."
		},
		{
			"empresa" : "Saexploration",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2016-05-08",
			"fin" : "2017-02-06",
			"meses" : 9.1333,
			"descripcion" : "Adquisición de datos sísmicos 2D y 3D."
		},
		{
			"empresa" : "ENNCOL",
			"cargo" : "Profesional Gestión Inmobiliaria",
			"inicio" : "2016-01-01",
			"fin" : "2016-05-07",
			"meses" : 4.2333,
			"descripcion" : "Estudios Jurídicos-Catastrales – Apoyo Transversal."
		},
		{
			"empresa" : "Geocing SAS",
			"cargo" : "Auxiliar SIG",
			"inicio" : "2015-10-15",
			"fin" : "2015-12-30",
			"meses" : 2.5333,
			"descripcion" : "Proyectos de Ambientales análisis de AVR (Amenaza – Vulnerabilidad y Riesgo)."
		},
		{
			"empresa" : "Geocing SAS",
			"cargo" : "Auxiliar SIG",
			"inicio" : "2015-04-28",
			"fin" : "2015-05-28",
			"meses" : 1.0000,
			"descripcion" : "Proyectos de Ambientales análisis de AVR (Amenaza – Vulnerabilidad y Riesgo)."
		},
		{
			"empresa" : "Avasin Ltda",
			"cargo" : "Avaluador",
			"inicio" : "2014-04-28",
			"fin" : "2014-08-30",
			"meses" : 4.1333,
			"descripcion" : "Avaluador de bienes inmuebles urbanos y rurales."
		},
		{
			"empresa" : "Universidad Distrital Francisco José de Caldas",
			"cargo" : "Monitor académico",
			"inicio" : "2012-07-01",
			"fin" : "2012-12-31",
			"meses" : 6.1000,
			"descripcion" : "Monitor académico fotogrametría."
		}
	]
	
	experiencia.forEach(function(exp){

		var contenedor_laboral = document.getElementById("contenedor-lab")
		
		empresa = exp.empresa;
		cargo = exp.cargo;
		inicio = exp.inicio;
		fin = exp.fin;
		meses = exp.meses;
		descripcion = exp.descripcion;

		var div_col_l = document.createElement("div");
		div_col_l.classList.add("col");
		contenedor_laboral.appendChild(div_col_l);

		var card_l = document.createElement("div");
		card_l.classList.add("card","bg-er","mb-3");
		div_col_l.appendChild(card_l);

		var card_header_l = document.createElement("div");
		card_header_l.classList.add("card-header");
		card_header_l.textContent = empresa;
		card_l.append(card_header_l);

		var linea_l = document.createElement("hr");
		linea_l.classList.add("linea");
		card_l.appendChild(linea_l);

		var card_cuerpo_l = document.createElement("div");
		card_cuerpo_l.classList.add("card-body");
		card_l.appendChild(card_cuerpo_l);

		var card_titulo_l = document.createElement("h3");
		card_titulo_l.classList.add("card-title");
		card_cuerpo_l.appendChild(card_titulo_l);

		var negrilla_l = document.createElement("b");
		negrilla_l.textContent = cargo;
		card_titulo_l.appendChild(negrilla_l);

		var espacio = document.createElement("br");
		card_cuerpo_l.appendChild(espacio);

		var parrafo_l = document.createElement("p");
		parrafo_l.classList.add("card-text");
		parrafo_l.textContent = descripcion;
		card_cuerpo_l.appendChild(parrafo_l);

		var linea_l2 = document.createElement("hr")
		card_cuerpo_l.appendChild(linea_l2);

		var parrafo_l2 = document.createElement("p");
		parrafo_l2.classList.add("card-text");
		card_cuerpo_l.appendChild(parrafo_l2);

		var cursiva2 = document.createElement("em");
		cursiva2.textContent = inicio + " / " + fin;
		parrafo_l2.appendChild(cursiva2);

		var espacio2 = document.createElement("br");
		parrafo_l2.appendChild(espacio2);

		var cursiva3 = document.createElement("em")
		cursiva3.textContent = Math.round(meses,-2) + " meses";
		parrafo_l2.appendChild(cursiva3);

	}

	)
    
