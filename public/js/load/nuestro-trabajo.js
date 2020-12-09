// const loadPath = window.location.pathname.split('/');
const hashP = [
    { text: "Terapia, individual y familiar", },
    { text: "Capacitación en Salud Mental a organizaciones, empresas, instituciones y comunidades educativas" },
    { text: "Conversatorios Gratuitos vía Zoom" },
    { text: "Grupos de apoyo mutuo"},
    { text: "Psicoterapias grupales"},
    { text: "Formación en salud mental a ex alumnos de universidades"},
    { text: "Capacitaciones para cuidadores y cuidadoras de personas mayores en salud mental, física y autocuidado"},
    { text: "Cursos de Terapias Complementarias y Alternativas"},
    { text: "Talleres familiares"},
    { text: "Talleres de autocuidado y herramientas para equipos de trabajo en colegios y universidades"},
    { text: "Talleres de herramientas prácticas para infancias y adolescencias"},
    { text: "Empresas: atención psicológica individual a colaboradores y espacios grupales de autocuidado y capacitación en herramientas prácticas de Salud Mental"},
    { text: "Instalación de espacios y entrega de herramientas de autocuidado para trabajadores de la Salud Mental"},
    { text: "Talleres de herramientas prácticas en Salud Mental para Grupos Scout"},
    { text: "Diagnóstico en espacios situados sobre cuál es la calidad de la Salud Mental de la población"},
];

const makeP = [];
hashP.forEach((result) => {
    makeP.push(`
  <div class="media col-sm-12">
    <img src="images/checked.png" class="align-self-center mr-3" alt="check" style="width: 30px;"/>
    <div class="media-body" style="margin-top: 10px;">
      <p>${result.text}</p>
    </div>
  </div>  
  `)
});
// const toView = makeLi.map((resuls) => { return(resuls) })
console.log(String(makeP))
document.write(makeP.join(" "));