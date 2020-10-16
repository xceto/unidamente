const toFooter = {
  blogTittle: 'Noticias recientes',
  dude: '¿Tienes Dudas?',
  fb: 'https://www.facebook.com/FundacionUnidaMenteChile',
  twitter: 'https://twitter.com/F_UnidaMente',
  instagram: '',
  linkedin: 'https://www.linkedin.com/company/fundaci%C3%B3n-unidamente/'
};

document.write(`
<footer class="ftco-footer ftco-bg-dark ftco-section">
<div class="container">
  <div class="row mb-5">
    <div class="col-md">
      <div class="ftco-footer-widget mb-5">
        <h2 class="ftco-heading-2">${toFooter.dude}</h2>
        <div class="block-23 mb-3">
          <ul>
           <!-- <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li> -->
           <!-- <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li> -->
            <li><a href="#"><span class="icon icon-envelope"></span><span class="text">contacto@unidamente.org</span></a></li>
          </ul>
        </div>

        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
          <!-- <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li> -->
          <li class="ftco-animate"><a href="${toFooter.fb}"><span class="icon-facebook"></span></a></li>
          <li class="ftco-animate"><a href="${toFooter.twitter}"><span class="icon-twitter"></span></a></li>
          <li class="ftco-animate"><a href="${toFooter.linkedin}"><span class="icon-linkedin"></span></a></li>
          <!-- <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li> -->
        </ul>
      </div>
    </div>
    <div class="col-md">
      <div class="ftco-footer-widget mb-5 ml-md-4">
        <h2 class="ftco-heading-2">Links</h2>
        <ul class="list-unstyled">
          <li><a href="/"><span class="ion-ios-arrow-round-forward mr-2"></span>Inicio</a></li>
          <li><a href="/quienes-somos"><span class="ion-ios-arrow-round-forward mr-2"></span>Quiénes Somos</a></li>
          <li><a href="/colabora"><span class="ion-ios-arrow-round-forward mr-2"></span>Colabora</a></li>
          <li><a href="/nuestro-trabajo"><span class="ion-ios-arrow-round-forward mr-2"></span>Nuestro Trabajo</a></li>
          <li><a href="/areas-de-trabajo"><span class="ion-ios-arrow-round-forward mr-2"></span>Áreas de Trabajo</a></li>
          <li><a href="/contactanos"><span class="ion-ios-arrow-round-forward mr-2"></span>Contáctanos</a></li>
        </ul>
      </div>

    </div>
    <div class="col-md">
      <div class="ftco-footer-widget mb-5">
        <h2 class="ftco-heading-2">${toFooter.blogTittle}</h2>
        <div class="block-21 mb-4 d-flex">
          <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
          <div class="text">
            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
            <div class="meta">
              <div><a href="#"><span class="icon-calendar"></span> Dec 25, 2018</a></div>
              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
            </div>
          </div>
        </div>
        <div class="block-21 mb-5 d-flex">
          <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
          <div class="text">
            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
            <div class="meta">
              <div><a href="#"><span class="icon-calendar"></span> Dec 25, 2018</a></div>
              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="row">
    <div class="col-md-12 text-center" style="color: white">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Unidamente.org </p>
    </div>
  </div>
</div>
</footer>
`);