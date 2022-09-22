 export function home_page(){
    let homepage = [
        {
            header: 
            '<header>' +
            '<img class="banner" src="./img/nutria.2 1.png" alt="">'+
            '<a class="primer" href="">Inicio</a>' +
            '<a class="segundo" href="">Calcular</a>' +
            '</header>',
    
            paginaPrincipal:
            '<div class="body">' +
            '<img src="./img/jojo.jpg" alt="">' +
            '<div>'+
            '<img class="logo" src="./img/nutria.2 1.png" alt=""> '+
            ' <p class="start" id = "btonempezar" href="">Empezar</p>'+
            ' </div>'+
            '</div>',
    
            footer:
            '<div class="Integrantes">'+
            '<div>Integrantes <br> Biologia: <br> Karen Amanda Calderas de León <br> Jaydi Dayana Orrego Perez <br> Angel Gabriel Castro</div>'+
            ' <div>Integrantes <br> Diseño Gráfico: <br> Detlef Ivan Iquique Galvez <br> Hannah Maribel Mijangos</div>'+
            '<div>Integrantes <br> Computación: <br> Oscar Gerardo de Jesus Ordoñez Alvarez <br> Alexis Fabian Pirir Montanico</div>'+
        
            '<div>Empresa: <br> Healthy Point</div>'+
            ' <div>Paginas de referencia: <br> Nutrium <br> Pagina de inicio con Genshin Impact</div>'+
            '</div>',
        
    }
    ]
    
    let root = document.querySelector("#root")
     root.innerHTML = homepage[0].header + homepage[0].paginaPrincipal + homepage[0].footer;
    

 }