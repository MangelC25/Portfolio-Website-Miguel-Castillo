$(() => {
    const rold = $('.text-animate');
    const h3animated = $('.text-animate h3');
    const b = $("#leng");
    const lenguage = $("#lenguage")[0]; 
    const ACR = $("#ACR")[0]; 
    const cambiartexto = $('[data-section][data-value]');
  
    const cambiaridioma = async (idioma) => {
      const idiomaLower = idioma.toLowerCase();
      const requestjson = await fetch(`./JS/JSON/Lenguages/${idiomaLower}.json`);
      const texts = await requestjson.json();
  

      cambiartexto.each(function() {
        const section = $(this).data('section');
        const value = $(this).data('value');
        const textToReplace = texts[section][value];
    
        if ($(this).is('input') || $(this).is('textarea')) {
          $(this).attr('placeholder', textToReplace);
        } else {
          $(this).text(textToReplace);
        }
      });
    };
  
    b.on("click", ()=> {
      cambiaridioma($(this).parent().data('language'));
      cambioidioma();
    });
  
    function cambioidioma() {
      let src;
      let texto;
      let datalg;
      let textamimesixe;
      let hdelay;
  
      if (lenguage.src.includes("English")) {
        src = "img/lenguage/Espanol.png";
        texto = "ES";
        datalg = "en";
        textamimesixe = "50rem";
        hdelay = "5";
      } else if (lenguage.src.includes("Espanol")) {
        src = "img/lenguage/English.png";
        texto = "EN";
        datalg = "es";
        textamimesixe = "45rem";
        hdelay = "2s";
      }
  
      const evento = new CustomEvent("cambiaridioma", {
        detail: {
          src,
          texto,
          datalg,
          textamimesixe,
          hdelay
        },
      });
  
      lenguage.src = evento.detail.src;
      ACR.innerText = evento.detail.texto;
      b.data('language', evento.detail.datalg);
      rold.css('width', evento.detail.textamimesixe);
      h3animated.css({'animation-delay': evento.detail.hdelay} );
  
      b[0].dispatchEvent(evento);
    }
  });


  //////////////////////////////////

  
const rold = document.querySelector('.text-animate');
const h3animated = document.querySelector('.text-animate h3');
const b = document.getElementById("leng");
const lenguage = document.getElementById("lenguage");
const ACR = document.getElementById("ACR");
const cambiartexto = document.querySelectorAll(`[data-section][data-value]`)

const cambiaridioma = async idioma =>{
  const requestjson = await fetch(`./JS/JSON/Lenguages/${idioma}.json`);
  const texts = await requestjson.json();

cambiartexto.forEach(i => {
  const section = i.dataset.section;
  const value = i.dataset.value;

   if (i.tagName.toLowerCase() === 'input' || i.tagName.toLowerCase() === 'textarea') {
    i.placeholder = texts[section][value];
  } else {
    i.textContent = texts[section][value];
  }

  });
}

b.addEventListener("click", (evento) => {
  cambiaridioma(evento.target.parentElement.dataset.language);
  cambioidioma();
});

function cambioidioma() {
  let src;
  let texto;
  let datalg;
  let textamimesixe ;
  let hdelay;

  if (lenguage.src.includes("English")) {
    src = "img/lenguage/Espanol.png";
    texto = "ES";
    datalg = "en";
    textamimesixe = "50rem";
    hdelay = "2.08s";
  } else if (lenguage.src.includes("Espanol")) {
    src = "img/lenguage/English.png";
    texto = "EN";
    datalg = "es";
    textamimesixe = "45rem";
    hdelay = "2s";
  }

  const evento = new CustomEvent("cambiaridioma", {
    detail: {
      src,
      texto,
      datalg,
      textamimesixe,
      hdelay
    },
  });


  lenguage.src = evento.detail.src;
  ACR.innerText = evento.detail.texto;
  b.dataset.language = evento.detail.datalg;
  rold.style.width = evento.detail.textamimesixe;
  h3animated.style["animation-delay"]  = evento.detail.hdelay;

  b.dispatchEvent(evento);
}
