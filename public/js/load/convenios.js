// const loadPath = window.location.pathname.split('/');
const textConvenio = "Creamos convenios con instituciones, organizaciones y agrupaciones donde diagnosticamos, capacitamos y entregamos estrategias de Salud Mental tanto a nivel organizacional como individual."
const hashConvenios = [
  {logo:"", name: "Universidad de Chile Facultad de Ciencias Veterinarias y Pecuarias"},
  {logo:"", name: "Universidad Católica de la Santísima Concepción"},
  {logo:"", name: "Universidad de O&#39;Higgins"},
  {logo:"", name: "Universidad Academia de Humanismo Cristiano"},
  {logo:"", name: "Colegio Libertador Bernardo O&#39;Higgins de Iquique"},
  {logo:"", name: "Empresa REDD"},
  {logo:"", name: "Instituto Comercial Padre Alberto Hurtado de Pedro Aguirre Cerda (Fundación nacional del comercio para la educación COMEDUC)"},
  {logo:"", name: "Jardín Infantil El Pescador Región del Biobío"},
  {logo:"", name: "Universidad San Sebastián Región del Biobío"},
  {logo:"", name: "Universidad de las Américas Región Metropolitana"},
  {logo:"", name: "Pastoral de Diversidad Sexual. (Chile)"},
];

const makeConvenios = [];
hashConvenios.forEach((result, index) => {
  makeConvenios.push(`
  <div class="media col-sm-12">
    <img src="images/checked.png" class="align-self-center mr-3" alt="check" style="width: 30px;"/>
    <div class="media-body" style="margin-top: 10px;">
      <p>${result.name}</p>
    </div>
  </div>  
  `)
});

document.write(`
  <div class="accordion w-100 p-3" id="accordionExample">
  ${makeConvenios.join(" ")}
  </div>
`);
