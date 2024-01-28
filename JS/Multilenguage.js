$(() => {
  const $rold = $('.text-animate');
  const $h3animated = $('.text-animate h3');
  const $b = $('#leng');
  const $lenguage = $('#lenguage');
  const $ACR = $('#ACR');
  const $cambiartexto = $('[data-section][data-value]');
  const $Btheme = $('#Btheme');

  const cambiaridioma = async (idioma) => {
    try {
      const requestjson = await fetch(`./JS/JSON/Lenguages/${idioma}.json`);
      const texts = await requestjson.json();

      // Ocultar los elementos antes de cambiar el idioma
      $('#Btheme, #leng, .navbar-nav a, .ImgF, .home-content, .btn-box, .home-rds, .heading, .about-content, #MY, .skill-container > *, .projects-container, #contact, #form').fadeOut('slow', async function() {
        $(this).css('pointer-events', 'none'); 
        $cambiartexto.each(function() {
          const $this = $(this);
          const section = $this.data('section');
          const value = $this.data('value');

          if ($this.is('input') || $this.is('textarea')) {
            $this.attr('placeholder', texts[section][value]);
          } else {
            $this.text(texts[section][value]);
          }
        });

        // Mostrar los elementos una vez que se hayan actualizado
        $('#Btheme, #leng, .navbar-nav a, .ImgF, .home-content, .btn-box, .home-rds, .heading, .about-content, #MY, .skill-container > *, .projects-container, #contact, #form').fadeIn('slow', function() {
          $(this).css('pointer-events', 'auto'); // Habilitar los elementos después de la transición
      });

        // Llamar a cambioidioma() después de que se complete el desvanecimiento y la traducción
        await cambioidioma();
        MediasQuerys();
      });

    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  };

  $b.on('click', function() {
    let newLanguage = $(this).data('language');

    if (newLanguage === "en") {
      newLanguage = "es";
    } else if(newLanguage === "es"){
      newLanguage = "en";
    }
    
    cambiaridioma(newLanguage);
    $(this).data('language', newLanguage);
    console.log($(this).data('language'));
    
  });

  async function cambioidioma() {
    let src;
    let texto;
    let textamimesixe;
    let hdelay;
    let icon1;
    let icon2;
    let newLanguage = $b.data('language');

    if (newLanguage === 'es') {
      src = 'img/lenguage/Espanol.png';
      texto = 'ES';
      textamimesixe = '52rem';
      hdelay = '2.08s';
      icon1 = `50rem`;
      icon2 = `44rem`;
    } else if (newLanguage === 'en') {
      src = 'img/lenguage/English.png';
      texto = 'EN';
      textamimesixe = '50rem';
      hdelay = '2s';
      icon1 = `58rem`;
      icon2 = `52rem`;
    }

    const evento = new CustomEvent('cambiaridioma', {
      detail: {
        src,
        texto,
        textamimesixe,
        hdelay,
        icon1,
        icon2
      }
    });

    $lenguage.attr('src', evento.detail.src);
    $ACR.text(evento.detail.texto);
    $rold.css('width', evento.detail.textamimesixe);
    $h3animated.css('animation-delay', evento.detail.hdelay);
    $b.css({ left: evento.detail.icon1 });
    $Btheme.css({ left: evento.detail.icon2 });
  }

  async function MediasQuerys() {
     
    let idiomaactual = $b.data('language');;

    if (idiomaactual === 'en') {
      if (window.matchMedia("(max-width: 991px)").matches) {
        $b.css({ left: '85rem'  });
        $Btheme.css({ left: '78rem' });
      }  
      if (window.matchMedia("(max-width: 577px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      }
      if (window.matchMedia("(max-width: 375px)").matches) {
        $b.css({ left: '60rem'  });
        $Btheme.css({ left: '53rem' });
      }
    } else if (idiomaactual === 'es'){
      if (window.matchMedia("(max-width: 2560px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      } 
      if (window.matchMedia("(max-width: 1400px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      } 

      if (window.matchMedia("(max-width: 1024px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      } 

      if (window.matchMedia("(max-width: 991px)").matches) {
        $b.css({ left: '85rem'  });
        $Btheme.css({ left: '78rem' });
      }  
      if (window.matchMedia("(max-width: 760px)").matches) {
        $b.css({ left: '85rem'  });
        $Btheme.css({ left: '78rem' });
      } 
      
      if (window.matchMedia("(max-width: 577px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      }
      if (window.matchMedia("(max-width: 375px)").matches) {
        $b.css({ left: '60rem'  });
        $Btheme.css({ left: '53rem' });
      }
      if (window.matchMedia("(max-width: 375px)").matches) {
        $b.css({ left: '60rem'  });
        $Btheme.css({ left: '53rem' });
      }
    }
    
  }
});

