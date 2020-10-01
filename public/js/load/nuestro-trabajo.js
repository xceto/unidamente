// const loadPath = window.location.pathname.split('/');
const hashP = [
  { text: "Terapia, individual y familiar." },
  { text: "Capacitación a organizaciones, empresas, instituciones, comunidades educativas." },
  { text: "Conversatorios Gratuitos vía Zoom" },
  { text: "Grupos de apoyo mutuo" },
  { text: "Psicoterapias grupales" },
  { text: "Formación en salud mental a ex alumnos de universidades." },
  { text: "Capacitaciones para profesionales cuidadores y cuidadoras de adultos mayores, salud mental y física, autocuidado, Universidad de O&#39;Higgins en conjunto con SENAMA Región de O&#39;Higgins, programa Vínculos" },
  { text: "Cursos terapias complementarias y alternativas" },
  { text: "Talleres familiares" },
  { text: "Talleres de autocuidado y herramientas para equipos de trabajo en colegios y universidades." },
  { text: "Empresas: atención psicológica individual a colaboradores y espacios grupales de autocuidado y capacitación en herramientas prácticas de salud mental." },
  { text: "Instalación de espacios y entrega de herramientas de autocuidado para trabajadores de la Salud mental (CESFAM)" },
  { text: "Talleres de herramientas prácticas en salud mental Grupos Scout Región Biobío" },
  { text: "Herramientas de autocuidado y salud mental para equipos de jardines infantiles" },
  { text: "Talleres de autocuidado en Centro de la mujer Talcahuano Biobío" },
  { text: "Diagnóstico en espacios situados sobre cuál es la calidad de la salud mental de la población" },
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
