export function CalculoIMC(){

export function ProteinaDesgloce(){
    let Despliegue = [
        {
            Piramide:
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +

            '</header>'+

            '<h1 class="tittle3">Agrega tus datos</h1>'+
            '<section class="IMG-IMC">'+

            '<div class="IMC"></div>'+

            '<div class="Cuadrante">'+
            '<h3>¿Cuál es tu peso?</h3>'+
            '<div></div>'+
            '<h3>¿Cuál es tu altura?</h3>'+
            '<div></div>'+
            '<h3>¿Cuál es tu género?</h3>'+
            '<div></div>'+
            '</div>'+
            '<img class="nutria" src="https://github.com/AMontanico11/IMGs-ApS/blob/main/nutriachico%202.png?raw=true" alt="">'+
    
            '<h2 class="Resultados">Veamos tus <br> resultados</h2>'+
            '</section>'+
    
    


            '<div class="Integrantes">'+
            '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
            '<div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
            '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
    
            '<div>Empresa: <br> Healthy Point</div>'+
            '<div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
            '</div>',

            '<a class="segundo" href="">Calcular</a>' +
            '</header>',




    }
    ]


    let Calcular = document.querySelector("#Calcular")

    let Proteina = document.querySelector("#Proteina")


     function Desglosar(){
        root.innerHTML = Despliegue[0].Piramide;

     }


     Calcular.addEventListener("click", Desglosar)

     Proteina.addEventListener("click", Desglosar)

 }
