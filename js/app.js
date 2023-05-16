const seccionesPaginas = new fullpage('#fullpage',{

    navigation: true,
    anchors: ['inicio', 'infoEvento',',miFrase','confirmacion'],
    navigationTooltips: ['Inicio', 'Donde y cuando', 'Mi frase', 'Confirmacion'],
    sectionsColor : ['#000', '#ffd166' , '#ef476f','#06d6a0'],
    verticalCentered: true,
  });
  
  //Cuenta regresiva
  const getRemainingTime = deadline => {
      let now = new Date(),
          remainTime = (new Date(deadline) - now + 1000) / 1000,
          remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
          remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
          remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
          remainDays = Math.floor(remainTime / (3600 * 24));
    
      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
      }
    };
    
    const countdown = (deadline,elem,finalMessage) => {
      const el = document.getElementById(elem);
    
      const timerUpdate = setInterval( () => {
        let t = getRemainingTime(deadline);
        el.innerHTML = `${t.remainDays} : ${t.remainHours} : ${t.remainMinutes} : ${t.remainSeconds}`;
    
        if(t.remainTime <= 1) {
          clearInterval(timerUpdate);
          el.innerHTML = finalMessage;
        }
    
      }, 1000)
    };
    
    countdown('May 27 2023 21:00:00 GMT-0300', 'clock', '¡Feliz cumpleaños!');
  
  //Formulario de confirmacion
  const send = document.getElementById('send');
  const form = document.getElementById('form');
  const nombre = document.getElementById('nombre');
  const check1 = document.getElementById('check1');
  const check2 = document.getElementById('check2');
  const warning = document.getElementById('warning');
  const warning2 = document.getElementById('warning2');
  
  
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    warning.style.display='none';
  
    let nombre = document.getElementById('nombre').value;
    
    let numero= 5491165163029;
    let opcion;
  
    for(let i = 0 ; i < form.opcion.length ; i++){
      if(form.opcion[i].checked == true){
        opcion = i;
      }
    }
  
    switch (opcion){
      case 0:
              var win= window.open(`https://wa.me/${numero}?text=Hola%20,si%20puedo%20asistir%20:)%20soy%20${nombre},%20gracias%20por%20invitarme
    `,'_blank');
      break;
  
      case 1: 
              var win= window.open(`https://wa.me/${numero}?text=Hola%20,perdon%20no%20puedo%20asistir%20:(%20soy%20${nombre},%20gracias%20por%20invitarme
    `,'_blank');
      break;
  
      default: warning.style.display='flex';
      break;
    }
  });

//music
let music = document.getElementById(`my_audio`);
const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');

  music.paused? music.play(): music.pause();
});
  
  