/*************************************************************************** MENU HAMBURGUESA****************************************** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
    
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);

/*************************************************************************** BOTON DE LEER MAS ****************************************** */
  
let readmorebtn = document.getElementById('readmorebtn');

let hideText = document.getElementById('hideText');

readmorebtn.addEventListener('click', toggleText);

function toggleText (){
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')){
    readmorebtn.innerHTML = 'Leer menos';
  }
  else{
    readmorebtn.innerHTML = 'Leer Mas'
  }

}

/***************************************************************************  VALIDACION DE FORMULARIO    *******************************************/


const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("lastname")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre debe tener mas de seis caracteres <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `El apellido debe tener mas de tres letras <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

/***************************************************************************  MOD NOCTURNO   *******************************************/
let toggle = document.getElementById('toggle');
 let label_uno=document.getElementById('label_uno');
 toggle.addEventListener('change',(event)=>{
         let checked=event.target.checked;
         document.body.classList.toggle('dark');
         if (checked==true){
          label_uno.innerHTML = '<i class="fa-solid fa-moon"></i>';
          label_uno.style.color="white";
         }else{
          label_uno.innerHTML = '<i class="fa-solid fa-sun"></i>';
          label_uno.style.color="yellow";
         }


 });
