
const header = document.querySelector('header'),
    main = document.querySelector('main');

function scroll_Header_Styles(scroll){
    header.style.position = 'fixed';
    main.style.paddingTop = '60px';
    main.style.transition = '2s';
}
const scroll = window.addEventListener('scroll', (event)=>{
    setTimeout(() => {
        event != false ; scroll_Header_Styles(scroll);
    }, 4000);
});

// botón de contacto
const buttonContact = document.querySelector('.button_Contact');


function showModalContact(){
    Swal.fire({
        title: 'Contactanos por',
        html:
            '<a href="https://api.whatsapp.com/send?phone=+3118033847&text=Buen%20d%C3%ADa,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20de%20toda%20su%20l%C3%ADnea%20de%20UPS" class="btn_wp_sweet" target="_blank" rel="noopener"><img src="img/logo-whatsapp.png" alt="contacto por whatsapp"></a>'+
            '<a href="https://forms.gle/FQWtuAQY27mEZsY78" class="btn_wp_sweet" target="_blank" rel="noopener"><img src="img/logo-email.png" alt="contacto por email "></a>',
        showCloseButton: true,
        focusConfirm: false
    })
      
}
buttonContact.addEventListener('click', () =>{
    showModalContact()
});
