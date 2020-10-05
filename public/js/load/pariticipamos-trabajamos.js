// const loadPath = window.location.pathname.split('/');
const hashParticipamos = [
  {logo:"", name: "INDDH mesa regional de salud mental. (Región Metropolitana, Chile)"},
  {logo:"", name: "AC Unión por los niños (Guadalajara, México)"},
  {logo:"", name: "Congreso Chile. Mesa Social de Salud Mental. Abogacía y Políticas Públicas."},
  {logo:"", name: "MINSAL. Estamos avalados en el catastro de instituciones que prestan servicios. (Chile)"},
];

const makeParticipamos = [];
hashParticipamos.forEach((result, index) => {
  makeParticipamos.push(`
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
  ${makeParticipamos.join(" ")}
  </div>
`);
