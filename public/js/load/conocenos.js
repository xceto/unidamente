let conocenosBody = [
    { image: "images/woman-default.jpg", name: "Carmen Astargo", profession: "DIRECTORIO </br> ENFERMERA, SALUBRISTA U DE CHILE" },
    { image: "images/woman-default.jpg", name: "Verónica Donoso", profession: "DIRECTORIO </br> PROFESORA MATEMÁTICAS" },
    { image: "images/man-default.jpg", name: "José Miguel Pazols", profession: "PROYECTOS Y FORMACIÓN CONTINUA" },
    { image: "images/woman-default.jpg", name: "Yassna Maureira", profession: "REFERENTE ÁREA SALUD MENTAL Y EDUCACIÓN" },
    { image: "images/man-default.jpg", name: "Francisco Peñaloza", profession: "PS, MG EDUCACIÓN, COACH ONTOLÓGICO DIRECTORIO" },
    { image: "images/woman-default.jpg", name: "Anita Alegría", profession: "KINE, MG ENVEJECIMIENTO Y CALIDAD DE VIDA, CO FUNDADORA, DIRECTORIO, SALUD MENTAL PERSONAS MAYORES CUIDADORES, CUIDADORAS" },
    { image: "images/woman-default.jpg", name: "Sonia Stevens", profession: "TS, MG SALUD PUBLICA UNIVERSIDAD DE LA REPUBLICA DEL URUGUAY. ENCARGADA ÁREA DE PROYECTOS Y FORMACIÓN CONTINUA" },
    { image: "images/woman-default.jpg", name: "Andrea Alegría", profession: "TS, MG EN SALUD PÚBLICA, PSICÓLOGA EN FORMACIÓN, MAGISTER EN GÉNERO, IDENTIDADES Y CIUDADANÍA. FACILITADORA DE YOGA Y MEDITACIÓN INFANTIL." },
    { image: "images/man-default.jpg", name: "Rafael Dresdner", profession: "PS, MG EN PSICOLOGÍA CLÍNICA ADULTOS U DE CHILE, DIPLOMADO EN TERAPIAS NARRATIVAS, ENCARGADO ÁREA TÉCNICA" },
    { image: "images/man-default.jpg", name: "Enrique Silva", profession: "COMUNICADOR TERAPEUTA COMPLEMENTARIO. ENCARGADO DE COMUNICACIONES ENCARGADO ÁREA SALUD MENTAL Y TERAPIAS COMPLEMENTARIAS Y ALTERNATIVAS" },
]

let conocenosBuild = [];
conocenosBody.forEach((result) => {
    conocenosBuild.push(`
      <div class="col-md-6 col-lg-3 ftco-animate">
      <div class="staff">
        <div class="img-wrap d-flex align-items-stretch">
          <div class="img align-self-stretch" style="background-image: url(${result.image});"></div>
        </div>
        <div class="text pt-3 text-center">
          <h3>${result.name}</h3>
          <span class="position mb-2">
            ${result.profession}								
          </span>
          <div class="faded">
            <ul class="ftco-social text-center">
              <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
              <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
            </ul>
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