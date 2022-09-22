export function ProteinaDesgloce(){
    let Despliegue = [
        {
            Piramide:
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +
            '<a class="segundo" href="">Calcular</a>' +
            '</header>',


    }
    ]

    let Proteina = document.querySelector("#Proteina")

     function Desglosar(){
        root.innerHTML = Despliegue[0].Piramide;

     }

     Proteina.addEventListener("click", Desglosar)
 }
