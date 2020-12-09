const tittlesCodes = [
  { 
    id: 'Andrea Alegría Del Pino', 
    tittles: `
    <li>Trabajadora Social.</li> 
    <li>Psicóloga en formación</li>
    <li>Diplomada en Género, Políticas Públicas y Masculinidades y Egresada del Magíster en Salud Pública, Universidad de Chile.</li>
    <li>Certificada como Evaluadora del Sistema Nacional de Acreditación de Prestadores Institucionales de Salud, por la Pontificia Universidad Católica de Chile.</li>
    <li>Pasante en el Centro de Rehabilitación Psiquiátrico de la Boston University, para conocer el Modelo de Recovery aplicado en Estados Unidos.</li>
    <li>Asesora técnica de proyectos para Voz Pro Salud Mental Jalisco A.C. México.</li>
    <li>Facilitadora de Yoga y Meditación Infantil, Santosha Yoga Center/Yoga Kiddy.</li>
    <li>Conferencista UNAM, UDG, Universidad Academia de Humanismo Cristiano, UCSC, SEREMI de Justicia Bíobio, Secretaría de Eduación Pública Jalisco, en Género, Masculinidades, Justicia Terapéutica y Salud Mental.</li>
    <li>Fundadora y Directora Ejecutiva de la UnidaMente: Creando Cultura en Salud Mental.</li>`
  },
  { 
    id: 'Anita Alegría Del Pino', 
    tittles: `<li>Kinesióloga. </li>
    <li>Candidata a Magíster en Envejecimiento y Calidad de Vida. Universidad de Chile. </li>
    <li>Co-fundadora de UnidaMente: Creando Cultura en Salud Mental. </li>
    <li>Área de desempeño con personas mayores en Concepción, Huechuraba y actualmente Kinesióloga de Atención Primaria de Salud</li>
    <li>Comuna de La Pintana. Bailarina de danza árabe. </li>
    <li>Co-Encargada Área Personas Mayores y Cuidadores UnidaMente.</li>` 
  },
  {
    id: 'Enrique Silva Gaete',
    tittles: `<li>Comunicador UNIACC, Terapeuta Complementario, estudios en Psicología Interaccional Sistémica Constructivista y Psicología Transpersonal. </li>
    <li>Instructor de cursos de Meditación, Reiki, Terapia Floral Bach y cursos de desarrollo personal y transpersonal. </li>
    <li>Encargado de Comunicaciones de la UnidaMente y del área de Terapias Complementarias.</li>`
  },
  {
    id: 'Rafael Dresdner Vicencio',
    tittles: `<li>Psicólogo Universidad de Concepción (UDEC) y actualmente postulo como candidato a Magíster en Psicología Clínica Adultos de la Universidad de Chile (2019-2020). </li>
    <li>Presidente y cofundador Corporación “Voces”, Observatorio de Derechos Humanos en Salud Mental Biobío. </li>
    <li>Diplomado en: Estrategias de Intervención Comunitaria (Udec)</li>
    <li>Prácticas narrativas, versiones básica y avanzada de la organización Prácticas Narrativas Chile (Pranas) e Intervención con familias en contextos de exclusión y vulnerabilidad social del Instituto Chileno de Terapia Familia (ICHTF). </li>
    <li>Co-autor del libro “Un acercamiento a buenas prácticas y a los conocimientos emergentes para la superación del estigma” y organizador de las Jornadas Antiestigma 2011-2018 en la Región del Biobío. </li>
    <li>Encargado Área Técnica UnidaMente.</li>`
  },
  {
    id: 'Sonia Stevens Bruzzese',
    tittles: `<li>Trabajadora Social por la Universidad de la República Oriental del Uruguay, Magister en salud Pública por la Universidad San Sebastián y la Universidad de Parma Italia. </li>
    <li>Académica de la Universidad Católica de la Santísima Concepción. </li>
    <li>Sus áreas de desarrollo: Salud mental, participación social, innovación social, determinantes sociales de la salud y promoción de la salud. </li>
    <li>Encargada de Área Proyectos y Formación Continua.</li>`
  }, 
  {
    id: 'Francisco Peñaloza Astudillo',
    tittles: `<li>Psicólogo, UdeC. Mg. en Educación Superior, UCSC. </li>
    <li>Coach Ontológico, Newfield Network. Coach en PNL, Sociedad Chilena de Programación Neurolingüística. </li>
    <li>Postítulo en Psicoterapia Humanista Transpersonal, Instituto de Expansión de la Consciencia Humana. </li>
    <li>Diplomado en Psicodrama, Escuela de Psicodrama Concepción. Relator Certificado de Power Pitch Method, Universidad de Girona, España </li>
    <li>Facilitador en herramientas didácticas y sistémicas Coaching Play para el desarrollo humano y organizacional.</li>
    <li>Proyección humana Internacional. </li>
    <li>Certificación en Management 3.0 Fundamentals, Meraki. Points of You y Espacios Humanos. </li>
    <li>Formación en diversas terapias complementarias. </li>
    <li>Miembro del Directorio UnidaMente.</li>`
  }, 
  {
    id: 'Verónica Donoso Apablaza',
    tittles: `<li>Profesora General Básica de la Universidad de Concepción. </li>
    <li>Diplomado en matemática primer ciclo, Universidad de Concepción. </li>
    <li>Coordinadora distrital rama Golondrinas distrito Talcahuano. Profesora de vocación y formadora de corazón con la convicción de dejar el mundo mejor de cómo lo encontramos.</li>
    <li>Colaboradora de la UnidaMente.</li>`
  }, 
  {
    id: 'Yassna Maureira Cruz',
    tittles: `<li>Trabajadora Social, Universidad Católica de la Santísima Concepción. </li>
    <li>Diplomado en estudios de género de la Universidad de Chile. </li>
    <li>Magíster en Psicología Educacional, Universidad del Desarrollo, en curso.</li>
    <li>Mujer, amante de la naturaleza y Scout de corazón. </li>
    <li>Colaboradora de la UnidaMente.</li>`
  },
  {
    id: 'Angélica Torres Sepúlveda',
    tittles: `<li>Profesora de educación física, Universidad de Concepción. </li>
    <li>Diplomado en obesidad infantil. </li>
    <li>Magister en nutrición mención promoción de la salud en la Universidad de Chile. </li>
    <li>Artesana autodidacta. </li>
    <li>Encargada Área Infancias, Adolecencias y Educación UnidaMente.</li>`
  },
  {
    id: 'Carolina Valenzuela Rodríguez',
    tittles: `<li>Psicóloga clínica y Logoterapeuta acreditada por la FLP-EU (Föderation Logotherapie Profession Europa).</li>
    <li>Dedicada por más de 10 años a enriquecer sus competencias a través del acompañamiento integral al Adulto Mayor y a los Cuidadores de personas dependientes en Chile y en Francia. </li>
    <li>Co-Encargada Área Personas Mayores y Cuidadores UnidaMente.</li>`
  },
  {
    id: 'Fernanda Gobantes Palacios',
    tittles: `<li>Psicóloga Clínica, Magister en Terapia Interaccional Sistémica Constructivista, Facilitadora de desarrollo personal Humanista Transpersonal. </li>
    <li>Docente Universidad Mayor. </li>
    <li>Colaboradora UnidaMente.</li>`
  },
  {
    id: 'Carmen Astargo Vega',
    tittles: `<li>Enfermera, Licenciada en Enfermería de la Universidad de Valparaíso, Magíster en Salud Pública de la Universidad de Chile. </li>
    <li>Poseo visión integral de salud, con experiencia y formación en Gestión de Calidad en Salud, Acreditación de Prestadores Institucionales y Salud Pública. </li>
    <li>Evaluadora del Sistema Nacional de Acreditación desde el año 2014. Me gusta trabajar en equipo, tomar desafíos. </li>
    <li>Colaboradora de la UnidaMente.</li>`
  }, 
  {
    id: 'José Miguel Pazols Melgarejo',
    tittles: `<li>Con formación en filosofía, teología, sociología y derecho. </li>
    <li>Su trayectoria laboral incluye participación en programas de la Prodemu, OCAC, Gobierno Regional de Tarapacá y Emplea. </li>
    <li>A partir del año 2000 emprende en el área de la consultoría desarrollando diversos proyectos en el ámbito sociocultural y de fomento productivo con financiamiento de SENCE, FOSIS, SERCOTEC, CONADI, INDAP, entre otros. </li>
    <li>Cuenta con experiencia en docencia en la Universidad Católica de la Santísima Concepción, el Instituto Profesional AIEP y DuocUC. </li>
    <li>Áreas de especialización: emprendimiento, innovación, formulación de proyectos. Colaborador UnidaMente</li>`
  },
  {
    id: 'María Fernanda Elizama Fuentealba',
    tittles: `<li>Licenciada de Trabajo Social, </li>
    <li>Estudiante en Práctica Profesional en Unidamente.</li>
    <li>Práctica intermedia de Persona y Familia (Mutual de Seguridad, Hualpén),.</li>
    <li>Práctica Intermedia de grupos (Oficina de Protección de Derechos de Infancia, San Pedro),.</li>
    <li>Práctica Intermedia de Comunidad (SEREMI De Desarrollo Social - Programa Vínculos, Concepción). </li>
    <li>Práctica Profesional UnidaMente.</li>`
  },
  {
    id: 'Nury Villagra Catrileo',
    tittles: `<li>Educadora Diferencial con Mención en Deficiencia Mental. </li>
    <li>Estudiante de 5° año de la Carrera de Psicología. </li>
    <li>Realizando proceso de Práctica Profesional en la UnidaMente.</li>`
  }, 
  {
    id: 'Carla Medina Medina',
    tittles: `<li>Licenciada de trabajo social, </li>
    <li>Estudiante en práctica profesional en UnidaMente, </li>
    <li>Práctica intermedia de persona y familia (sala cuna y jardín infantil araucaria), </li>
    <li>Práctica intermedia de grupos,(casa de la discapacidad, Concepción), </li>
    <li>Práctica intermedia comunidad (CESFAM Hualqui).</li>`
  },
]

$(document).ready(function() {
  var $imageSrc;  
  var $id;
  $('.img').click(function() {
      $imageSrc = $(this).data('bigimage');
      $id = $(this).data('id');
  });
    
  $('#teamModal').on('shown.bs.modal', function (e) {
    document.getElementById("tittlesProfessional").innerHTML = "";
    $("#image").attr('src', $imageSrc);
    let tittles = document.getElementById("tittlesProfessional");
    let nameProfesional = document.getElementById("name-modal");
    var resultFind = $.grep(tittlesCodes, function(element){ return element.id == $id; });
    if (resultFind.length > 0) {
      tittles.innerHTML = `<ul style="list-style-position: outside; list-style-image: url('images/cheked.png')">${resultFind[0].tittles}</ul>`
      nameProfesional.innerHTML = $id;
    } else {
      tittles.innerHTML = '';
      nameProfesional.innerHTML = '';
    }
  })

  $('#teamModal').on('hide.bs.modal', function (e) {
      $("#image").attr('src','//media.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif');

  }) 
});