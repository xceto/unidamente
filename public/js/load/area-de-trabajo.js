// const loadPath = window.location.pathname.split('/');
const hashPersons = [
  {color:"9dce48", tittle: "Salud Mental Infancia y Adolescencia", persons: "<b>Angélica Torres</b> </br> Magíster en Promoción de Salud, Universidad de Chile"},
  {color:"ff3399", tittle: "Salud Mental, Género, Masculinidades e Identidades", persons: "<b>Andrea Alegría</b> </br> Egresada Magíster Salud Pública Universidad de Chile. Magíster Género, Identidades y Ciudadanía, Universidad de Cádiz"},
  {color:"f8c105", tittle: "Salud Mental y Personas Mayores", persons: "<b>Carolina Valenzuela</b> </br> Psicóloga clínica y Logoterapeuta acreditada por la FLP-EU (Föderation Logotherapie Profession Europa) </br></br> <b>Anita Alegría</b> </br> Magíster en envejecimiento y calidad de vida, Universidad de Chile"},
  {color:"1b7883", tittle: "Salud Mental y Terapias Alternativas Complementarias", persons: "<b>Enrique Silva</b> </br> Comunicador y Terapeuta"},
  {color:"9dce48", tittle: "Salud Mental y Educación", persons: "<b>Yassna Maureira</b> </br> Magíster en psicología educativa"},
  {color:"ff3399", tittle: "Unidad de Formación Continua y Proyectos", persons: "<b>Sonia Stevens</b> </br> Magíster en Salud Pública"},
];

const makePersons = [];
hashPersons.forEach((result, index) => {
  makePersons.push(`
  <div class="card">
    <div class="card-header" id="heading${index}" style="background-color: #${result.color}">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}" style="color: white">
          ${result.tittle}
        </button>
      </h2>
    </div>
    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
      <div class="card-body md-5">
        ${result.persons}
      </div>
    </div>
  </div>
  `)
});

document.write(`
  <div class="accordion w-100 p-3" id="accordionExample">
  ${makePersons.join(" ")}
  </div>
`);
