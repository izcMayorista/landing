var watios = [];

var ups1kva = [
    "225w (25%) con autonomía de 42 minutos",
    "450w (50%) con autonomía de 18 minutos",
    "725w (75%) con autonomía de 11 minutos",
    "900w (100%) con autonomía de 7 minutos"
];
var ups2kva = [
    "450w (25%) con autonomía de 42 minutos",
    "900w (50%) con autonomía de 18 minutos",
    "1350w (75%) con autonomía de 11 minutos",
    "1800w (100%) con autonomía de 7 minutos"
];
var ups3kva = [
    "675w (25%) con autonomía de 36 minutos",
    "1350w (50%) con autonomía de 17 minutos",
    "2025w (75%) con autonomía de 11 minutos",
    "2700w (100%) con autonomía de 7 minutos"
];
var ups6kva = [
    "1350w (25%) con autonomía de 42 minutos",
    "2700w (50%) con autonomía de 22 minutos",
    "4050w (75%) con autonomía de 15 minutos",
    "5400w (100%) con autonomía de 7 minutos"
];

var ups10kva = [
    "2250w (25%) con autonomía de 31 minutos",
    "4500w (50%) con autonomía de 19 minutos",
    "6750w (75%) con autonomía de 14 minutos",
    "9000w (100%) con autonomía de 7 minutos"
];

const paginaFormulario = 'https://forms.gle/cPLC99wuoUdcjsym8',
    colorIZC = '#00B4E5',
    colorCancelar = '#ff1234';


function calculadora(){
    // TOMA DE DATOS DE UPS 
    let tiempoAutonomia = document.getElementById('tiempo-de-autonomia').value;

    // CALCULO PARA SERVIDORES 
    let potenciaServidor = document.getElementById('potenciaServidor').value;
    let servidores = document.getElementById('servidores').value;

    // CALCULO PARA TORRES
    let potenciaTorre = document.getElementById('potenciaTorre').value;
    let torres = document.getElementById('torres').value;

    // CALCULO MONITOR PC
    let potenciaMonitorPC = document.getElementById('potenciaMonitorPC').value;
    let monitoresPC = document.getElementById('monitoresPC').value;

    // CALCULO ORDENADOR PORTÁTIL
    let potenciaOrdenadorPortatil = document.getElementById('potenciaOrdenadorPortatil').value;
    let ordenadoresPortatiles = document.getElementById('ordenadoresPortatiles').value;

    // CALCULO DE TV
    let potenciaTV = document.getElementById('potenciaTV').value;
    let tv = document.getElementById('tv').value;

    // CALCULO ROUTER
    let potenciaRouter = document.getElementById('potenciaRouter').value;
    let router = document.getElementById('router').value;

    // CALCULO SWITCH
    let potenciaSwitch = document.getElementById('potenciaSwitch').value;
    let switchs = document.getElementById('switch').value;

    // CALCULO AP - WIFI
    let potenciaAPWifi = document.getElementById('potenciaAPWifi').value;
    let apWifi = document.getElementById('apWifi').value;

    // CALCULO IMPRESORA
    let potenciaImpresora = document.getElementById('potenciaImpresora').value;
    let impresoras = document.getElementById('impresoras').value;

    // CALCULO FOTOCOPIADORA
    let potenciaFotocopiadora = document.getElementById('potenciaFotocopiadora').value;
    let fotocopiadora = document.getElementById('fotocopiadora').value;

    // CALCULO FAX
    let potenciaFax = document.getElementById('potenciaFax').value;
    let fax = document.getElementById('fax').value;

    // CALCULO IMPRESORA MULTIFUNCIONAL
    let potenciaImpresoraMulti = document.getElementById('potenciaImpresoraMulti').value;
    let impresoraMulti = document.getElementById('impresoraMulti').value;

    // CALCULO CENTRALITA TELEFONICA
    let potenciaCentralitaTelefonica = document.getElementById('potenciaCentralitaTelefonica').value;
    let centralita = document.getElementById('centralita').value;

    // CALCULO TELEFONO
    let potenciaTelefono = document.getElementById('potenciaTelefono').value;
    let telefono = document.getElementById('telefono').value;

    // CAJONES ILUMINACIÓN 18W
    let potenciaIluminacion18 = document.getElementById('potenciaIluminacion18').value;
    let iluminacion18w = document.getElementById('iluminacion18w').value;

    // CALCULO ILUMINACIÓN 36W
    let potenciaIluminacion36 = document.getElementById('potenciaIluminacion36').value;
    let iluminacion36w = document.getElementById('iluminacion36w').value;

    // CALCULO ILUMINACIÓN 54W
    let potenciaIluminacion54 = document.getElementById('potenciaIluminacion54').value;
    let iluminacion54w = document.getElementById('iluminacion54w').value;

    // CALCULO ILUMINACIÓN BAJO CONSUMO
    let potenciaIluminacionBajoConsumo = document.getElementById('potenciaIluminacionBajoConsumo').value;
    let iluminacionBajo = document.getElementById('iluminacionBajo').value;

    // CALCULO NEVERAS
    let potenciaNevera = document.getElementById('potenciaNevera').value;
    let nevera = document.getElementById('nevera').value;

    // CALCULO MICRONDAS
    let potenciaMicrondas = document.getElementById('potenciaMicrondas').value;
    let microndas = document.getElementById('microndas').value;

    // CALCULO OTROS
    let potenciaotros = document.getElementById('potenciaotros').value;
    let otros = document.getElementById('otros').value;

    function potencias(){
        watios.push(servidores * potenciaServidor); //servidor
        watios.push(potenciaTorre * torres); // torre
        watios.push(potenciaMonitorPC * monitoresPC); //monitor pc
        watios.push(potenciaOrdenadorPortatil * ordenadoresPortatiles); //ordenadores
        watios.push(potenciaTV * tv); //tv
        watios.push(potenciaRouter * router); //router
        watios.push(potenciaSwitch * switchs); //switch
        watios.push(potenciaAPWifi * apWifi); //ap wifi
        watios.push(potenciaImpresora * impresoras); //impresoras
        watios.push(potenciaFotocopiadora * fotocopiadora); //fotocopoadora
        watios.push(potenciaFax * fax); //fax
        watios.push(potenciaImpresoraMulti * impresoraMulti); //impresora multi
        watios.push(potenciaCentralitaTelefonica * centralita); //centralita
        watios.push(potenciaTelefono * telefono); //telefono
        watios.push(potenciaIluminacion18 * iluminacion18w); //18w
        watios.push(potenciaIluminacion36 * iluminacion36w); //36w
        watios.push(potenciaIluminacion54 * iluminacion54w); //54w
        watios.push(potenciaIluminacionBajoConsumo * iluminacionBajo); //medico
        watios.push(potenciaNevera * nevera); //nevera
        watios.push(potenciaMicrondas * microndas); //microndas
        watios.push(potenciaotros * otros); //otros

        // suma de wats
        var sumaWats = watios.reduce((a, b) =>a  + b, 0);

        return sumaWats;
    };

    function resetear(){
        setTimeout(document.location = document.location);
    };

    var sumaWats = potencias();
    
    if(sumaWats === 0){
        Swal.fire({
            title: 'El valor solicitado en wats debe ser mayor a 0',
            confirmButtonColor: colorCancelar,
            confirmButtonText: 'Reintentar',
        }).then((result) => {
            if (result.isConfirmed) {
                resetear();
            }
        });
    };

    //ups de 1kva 10 min
    if(tiempoAutonomia == 10 && sumaWats <= 900){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 1kva de ' + ups1kva[3] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }
    
    // ups 2kva 10 min
    if(tiempoAutonomia == 10 && sumaWats > 900 && sumaWats <= 1800){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 2kva de ' + ups2kva[3] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 3kva 10 min
    if(tiempoAutonomia == 10 && sumaWats > 1800 && sumaWats <= 2700){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 3kva de ' + ups3kva[3] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 6kva 10 min
    if(tiempoAutonomia == 10 && sumaWats > 2700 && sumaWats <= 5400){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 6kva de ' + ups6kva[3] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 10kva 10 min
    if(tiempoAutonomia == 10 && sumaWats > 9000){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas más de una UPS</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // mayor a 9000w de 10 min
    if(tiempoAutonomia == 10 && sumaWats > 9000){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas más de una UPS</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 1kva 20min
    if(tiempoAutonomia == 20 && sumaWats > 225 && sumaWats <= 450){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 1kva de ' + ups1kva[1] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

     // ups 2kva 20min
     if(tiempoAutonomia == 20 && sumaWats > 450 && sumaWats <= 900){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 2kva de ' + ups2kva[1] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }
    
    // ups 3kva 20min
    if(tiempoAutonomia == 20 && sumaWats > 900 && sumaWats <= 1350){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 3kva de ' + ups3kva[1] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 6kva 20min
    if(tiempoAutonomia == 20 && sumaWats > 1350 && sumaWats <= 2700){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 6kva de ' + ups6kva[1] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 10kva 20min
    if(tiempoAutonomia == 20 && sumaWats > 2700 && sumaWats <= 4500){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 10kva de ' + ups10kva[1] + '</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // mayor a 4500w de 20 min
    if(tiempoAutonomia == 20 && sumaWats > 4500){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas más de una UPS</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    // ups 1kva 40 min
    if(tiempoAutonomia == 40 && sumaWats <= 225){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 1kva de ' + ups1kva[0] + '</p>',
            showCancelButton: true,
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }
        });
        sumaWats = 0; 
    }

     // ups 2kva 40 min
     if(tiempoAutonomia == 40 && sumaWats > 225 && sumaWats <=450){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 2kva de ' + ups2kva[0] + '</p>',
            showCancelButton: true,
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }
        });
        sumaWats = 0; 
    }

     // ups 3kva 40 min
     if(tiempoAutonomia == 40 && sumaWats > 450 && sumaWats <= 675){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 3kva de ' + ups3kva[0] + '</p>',
            showCancelButton: true,
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }
        });
        sumaWats = 0; 
    }

    // ups 6kva 40 min
    if(tiempoAutonomia == 40 && sumaWats > 675 && sumaWats <= 1350){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 6kva de ' + ups6kva[0] + '</p>',
            showCancelButton: true,
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
        sumaWats = 0; 
    }

    // ups 10kva 40 min
    if(tiempoAutonomia == 40 && sumaWats > 1350 && sumaWats <= 2250){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas una UPS de 10kva de ' + ups10kva[0] + '</p>',
            showCancelButton: true,
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }
        });
        sumaWats = 0; 
    }

    // mayor a 2250w de 40 min
    if(tiempoAutonomia == 20 && sumaWats > 2250){
        Swal.fire({
            title: 'Registrate y recibe más información',
            html: '<p >Para '+ sumaWats+'wats necesitas más de una UPS</p>',
            confirmButtonColor: colorIZC,
            confirmButtonText: 'Registrarme',
            showCancelButton: true,
            cancelButtonColor: colorCancelar
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(paginaFormulario);
            }else{
                resetear();
            };
        });
    }

    return sumaWats;
};
