let conocenosBody = [
    { image: "images/equipo/a_alegría_dp.jpg", name: "Andrea Alegría Del Pino", profession: "TS, MG EN SALUD PÚBLICA, PSICÓLOGA EN FORMACIÓN, MAGISTER EN GÉNERO, IDENTIDADES Y CIUDADANÍA. FACILITADORA DE YOGA Y MEDITACIÓN INFANTIL." },
    { image: "images/equipo/a_alegría.jpg", name: "Anita Alegría Del Pino", profession: "KINE, MG ENVEJECIMIENTO Y CALIDAD DE VIDA, CO FUNDADORA, DIRECTORIO, SALUD MENTAL PERSONAS MAYORES CUIDADORES, CUIDADORAS" },
    { image: "images/equipo/e_silva.jpg", name: "Enrique Silva Gaete", profession: "COMUNICADOR TERAPEUTA COMPLEMENTARIO. ENCARGADO DE COMUNICACIONES ENCARGADO ÁREA SALUD MENTAL Y TERAPIAS COMPLEMENTARIAS Y ALTERNATIVAS" },
    { image: "images/equipo/r_dresdner.jpeg", name: "Rafael Dresdner Vicencio", profession: "PS, MG EN PSICOLOGÍA CLÍNICA ADULTOS U DE CHILE, DIPLOMADO EN TERAPIAS NARRATIVAS, ENCARGADO ÁREA TÉCNICA" },
    { image: "images/equipo/s_stevens.jpg", name: "Sonia Stevens Bruzzese", profession: "TS, MG SALUD PUBLICA UNIVERSIDAD DE LA REPUBLICA DEL URUGUAY. ENCARGADA ÁREA DE PROYECTOS Y FORMACIÓN CONTINUA" },
    { image: "images/equipo/f_peñaloza.jpg", name: "Francisco Peñaloza Astudillo", profession: "PS, MG EDUCACIÓN, COACH ONTOLÓGICO DIRECTORIO" },
    { image: "images/equipo/v_donoso.jpg", name: "Verónica Donoso Apablaza", profession: "DIRECTORIO </br> PROFESORA MATEMÁTICAS" },
    { image: "images/equipo/y_moreira.jpg", name: "Yassna Maureira Cruz", profession: "REFERENTE ÁREA SALUD MENTAL Y EDUCACIÓN" },
    { image: "images/equipo/a_torres.jpg", name: "Angélica Torres Sepúlveda", profession: "" },
    { image: "images/equipo/c_valenzuela.jpg", name: "Carolina Valenzuela Rodríguez", profession: "" },
    { image: "images/equipo/f_gobantes.jpeg", name: "Fernanda Gobantes Palacios", profession: "" },
    { image: "images/woman-default.jpg", name: "Carmen Astargo Vega", profession: "DIRECTORIO </br> ENFERMERA, SALUBRISTA U DE CHILE" },
    { image: "images/equipo/jm_pazols.png", name: "José Miguel Pazols Melgarejo", profession: "PROYECTOS Y FORMACIÓN CONTINUA" },
    { image: "images/equipo/f_lizama.jpg", name: "María Fernanda Elizama Fuentealba", profession: "" },
    { image: "images/equipo/n_villara.jpg", name: "Nury Villagra Catrileo", profession: "" },
    { image: "images/equipo/c_medina.jpg", name: "Carla Medina Medina", profession: "" },
]

let conocenosBuild = [];
conocenosBody.forEach((result) => {
    conocenosBuild.push(`
      <div class="col-md-6 col-lg-3 ftco-animate">
      <div class="staff">
        <div class="img-wrap d-flex align-items-stretch">
          <div class="img align-self-stretch" data-id="${result.name}"style="background-image: url(${result.image});" data-toggle="modal" data-target="#teamModal" class="img-fluid" data-bigimage="${result.image}"></div>
        </div>
        <div class="text pt-3 text-center">
          <h3>${result.name}</h3>
          <span class="position mb-2">
            ${result.profession}								
          </span>
          <div>
            <div 
              class="ftco-social img align-self-stretch" 
              data-id="${result.name}" 
              data-toggle="modal" 
              data-target="#teamModal" 
              class="img-fluid" 
              data-bigimage="${result.image}"> 
                <button class="btn btn-info"> Ver </button> 
              </div>
          </div>
        </div>
      </div>
    </div>
  `)
})

document.write(`
<section class="ftco-section">
  <div class="container">
    <div class="row">
      ${conocenosBuild.join(' ')}
    </div>
  </div>
</section>
`);