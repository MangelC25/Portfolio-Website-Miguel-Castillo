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
      $('#Btheme, #leng, .navbar-nav a, .Home > *, .About > *, #MY, .skill-container > *, .Projects > *, .Contact > *').fadeOut('slow', async function() {
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
        $('#Btheme, #leng, .navbar-nav a, .Home > *, .About > *, #MY, .skill-container > *, .Projects > *, .Contact > *').fadeIn('slow');

        // Llamar a cambioidioma() después de que se complete el desvanecimiento y la traducción
        await cambioidioma();
        MediasQuerys();
      });

    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  };

  $b.on('click', function() {
    cambiaridioma($(this).data('language'));
    MediasQuerys();
  });

  async function cambioidioma() {
    let src;
    let texto;
    let datalg;
    let textamimesixe;
    let hdelay;
    let icon1;
    let icon2;

    if ($lenguage.attr('src').includes('English')) {
      src = 'img/lenguage/Espanol.png';
      texto = 'ES';
      datalg = 'en';
      textamimesixe = '52rem';
      hdelay = '2.08s';
      icon1 = `50rem`;
      icon2 = `44rem`;
    } else if ($lenguage.attr('src').includes('Espanol')) {
      src = 'img/lenguage/English.png';
      texto = 'EN';
      datalg = 'es';
      textamimesixe = '50rem';
      hdelay = '2s';
      icon1 = `58rem`;
      icon2 = `52rem`;
    }

    const evento = new CustomEvent('cambiaridioma', {
      detail: {
        src,
        texto,
        datalg,
        textamimesixe,
        hdelay,
        icon1,
        icon2
      }
    });

    $lenguage.attr('src', evento.detail.src);
    $ACR.text(evento.detail.texto);
    $b.data('language', evento.detail.datalg);
    $rold.css('width', evento.detail.textamimesixe);
    $h3animated.css('animation-delay', evento.detail.hdelay);
    $b.css({ left: evento.detail.icon1 });
    $Btheme.css({ left: evento.detail.icon2 });
  }

  async function MediasQuerys() {

    const WindowWith = $(window).width();
    console.log(WindowWith);
    
    let idiomaactual;

    if ($lenguage.attr('src').includes('English')) {
      idiomaactual = "en";
    } else if ($lenguage.attr('src').includes('Espanol')) {
      idiomaactual = "es";
    }

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
      
      if (window.matchMedia("(max-width: 577px)").matches) {
        $b.css({ left: '50rem'  });
        $Btheme.css({ left: '44rem' });
      }
      if (window.matchMedia("(max-width: 375px)").matches) {
        $b.css({ left: '60rem'  });
        $Btheme.css({ left: '53rem' });
      }
    }
    
  }
});

