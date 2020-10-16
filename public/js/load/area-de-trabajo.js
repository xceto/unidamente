// const loadPath = window.location.pathname.split('/');
const hashPersons = [
  {color:"9dce48", tittle: "Salud Mental, Infancias, Adolescencias y Educación", persons: ".."},
  {color:"ff3399", tittle: "Salud Mental, Género, Masculinidades e Identidades", persons: ".."},
  {color:"f8c105", tittle: "Salud Mental, Personas Mayores, Cuidadoras, Cuidadores y Personas en Situación de Dependencia", persons: ".."},
  {color:"1b7883", tittle: "Salud Mental, Terapias Complementarias y Alternativas", persons: ".."},
  {color:"9dce48", tittle: "Área de Formación Continuan", persons: ".."},
  {color:"ff3399", tittle: "Área Técnica", persons: ".."},
  {color:"f8c105", tittle: "Comunicaciones", persons: ".."},
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
