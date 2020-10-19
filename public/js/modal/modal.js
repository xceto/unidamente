const tittlesCodes = [
  { id: 'Carmen Astargo', tittles: `
  <li>Trabajadora Social.</li> 
  <li>Psicóloga en formación</li>
  <li>Diplomada en Género, Políticas Públicas y Masculinidades y Egresada del Magíster en Salud Pública, Universidad de Chile.</li>
  <li>Certificada como Evaluadora del Sistema Nacional de Acreditación de Prestadores Institucionales de Salud, por la Pontificia Universidad Católica de Chile.</li>
  <li>Pasante en el Centro de Rehabilitación Psiquiátrico de la Boston University, para conocer el Modelo de Recovery aplicado en Estados Unidos.</li>
  <li>Asesora técnica de proyectos para Voz Pro Salud Mental Jalisco A.C. México.</li>
  <li>Facilitadora de Yoga y Meditación Infantil, Santosha Yoga Center/Yoga Kiddy.</li>
  <li>Conferencista UNAM, UDG, Universidad Academia de Humanismo Cristiano, UCSC, SEREMI de Justicia Bíobio, Secretaría de Eduación Pública Jalisco, en Género, Masculinidades, Justicia Terapéutica y Salud Mental.</li>
  <li>Fundadora y Directora Ejecutiva de la Fundación UnidaMente: Creando Cultura en Salud Mental.</li>`},
  { id: null, tittles: '' },
]

$(document).ready(function() {
  var $imageSrc;  
  var $id;
  $('.img').click(function() {
      $imageSrc = $(this).data('bigimage');
      $id = $(this).data('id');
  });
    
  $('#teamModal').on('shown.bs.modal', function (e) {
    document.getElementById("tittlesProfessional").innerHTML = "";
    $("#image").attr('src', $imageSrc);
    let tittles = document.getElementById("tittlesProfessional");
    let nameProfesional = document.getElementById("name-modal");
    var resultFind = $.grep(tittlesCodes, function(element){ return element.id == $id; });
    if (resultFind.length > 0) {
      tittles.innerHTML = `<ul style="list-style-position: outside; list-style-image: url('images/cheked.png')">${resultFind[0].tittles}</ul>`
      nameProfesional.innerHTML = $id;
    } else {
      tittles.innerHTML = '';
      nameProfesional.innerHTML = '';
    }
  })

  $('#teamModal').on('hide.bs.modal', function (e) {
      $("#image").attr('src','');

  }) 
});