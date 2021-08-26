// document.slider.src = 'img/inversor.jpg';
// var imagenes = [
//     'img/ups.jpg',
//     'img/regulador.jpg',
//     'img/inversor.jpg'
// ];

// var indice = 0;
// var tiempo = 2000;

// function cambiarImg (){
//     document.slider.src = imagenes[indice];

//     if(indice < 2){
//         indice++;
//     }else{
//         indice = 0;
//     };

// };  
// setInterval(cambiarImg, tiempo);

var header = document.querySelector('header'),
    main = document.querySelector('main');

function scroll_Header_Styles(scroll){
    header.style.position = 'fixed';
    main.style.paddingTop = '60px';
    main.style.transition = '2s';
}
var scroll = window.addEventListener('scroll', (event)=>{
    setTimeout(() => {
        event != false ; scroll_Header_Styles(scroll);
    }, 4000);
});
