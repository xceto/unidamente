$( "#contactanos" ).submit(function( e ) { 
  event.preventDefault(e)
  var data = JSON.stringify( $(this).serializeArray() );

  var whyContact = $('#whyContact').val();
  var email = $('#correo').val();
  var name = $('#nombre').val();
  var textWrite = $('#textWrite').val();

  $.ajax({
      url:"/sendmail",    
      type:"POST",
      data: JSON.stringify({
        name,
        email,
        whyContact,
        textWrite
      }),
      contentType: "application/json; charset=utf-8",
      dataType   : "json",       
      success:function(datos){ 
        if (datos.code === 200) {
          closeHoldon();
          console.log('here')
          $.notify({
            message: datos.message
          }, {
            type: 'danger',
            z_index: 9999,
            delay: 3000,
            offset: 50,
            animate: {
              enter: 'animated rollIn',
              exit: 'animated rollOut'
            }
          });
        } else {
          $.notify(datos.message, "danger");
        }
      },
  })
});