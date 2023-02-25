const button = document.querySelector('button');

      button.onclick = function(button) {
        let name = prompt('¿Cuàl es tu nombre?');
        alert('¡Hola '+name+'! Cualquier consulta que tengas, mi contacto està al final de la pàgina. Tambièn puedes contactarme a travès de mi pàgina oficial de LinkedIn o del logo de WhatsApp en la esquina inferior izquierda .');
      }


      $(document).ready(function(){

        $('.ir-abajo').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.ir-abajo').slideDown(300);
            } else {
                $('.ir-arriba').slideUp(300);
            }
        });
    
    });