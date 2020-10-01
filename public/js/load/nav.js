const loadPath = window.location.pathname.split('/');
const hashLi = [
  {url: "index.html", name: "Inicio"},
  {url: "quienes-somos.html", name: "Quienes Somos"},
  {url: "conocenos.html", name: "Conocenos"},
  {url: "nuestro-trabajo.html", name: "Nuestro Trabajo"},
  {url: "area-de-trabajo.html", name: "Areas de Trabajo"},
  {url: "contactanos.html", name: "Contactanos"},
];
const makeLi = [];
hashLi.forEach((result) => {
  if ( result.url === loadPath[5]) {
    makeLi.push(`<li class="nav-item active"><a href="${result.url}" class="nav-link nav-letter-color">${result.name}</a></li>`);
  } else {
    makeLi.push(`<li class="nav-item"><a href="${result.url}" class="nav-link nav-letter-color">${result.name}</a></li>`);
  }
});

document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-light ftco-navbar-light sticky-top" id="ftco-navbar">
<div class='container d-flex align-items-center'>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" style="color: black !important">
    <span class="oi oi-menu"></span> Menu
  </button>
  <a href="index.html"><img src="images/logo.png" height="95" class="d-inline-block align-top" alt="" loading="lazy"></a>
  <div class="collapse navbar-collapse order-lg-last mb-0" id="ftco-nav">
    <ul class="navbar-nav ml-auto">
     ${ makeLi.join(' ') }
    </ul>
  </div>
</div>
</nav>
`);
