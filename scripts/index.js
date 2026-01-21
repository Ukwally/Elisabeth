/*Constomize didamic Header*/
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    //inicio animação banner
    document.getElementById('banner-txt-head-id').classList.add('visivel');
    document.getElementById('banner-txt-tittle-id').classList.add('visivel');
    document.getElementById('banner-txt-description-id').classList.add('visivel');
    document.getElementById('banner-description-side-txt-set-id').classList.add('visivel');
    //fim animação banner

    const header = document.querySelector('#header');
    if (header) {
        document.addEventListener('scroll', () => {
            window.scrollY > 30 ? header.classList.add('sticked') : header.classList.remove('sticked');
        });
    }
});
/*Constomize Tabs*/

const mobileTab = document.getElementById('mobile-tab');
const webTab = document.getElementById('web-tab');
const desktopTab = document.getElementById('desktop-tab');

const mobileTabBotton = document.getElementById('mobile-tab-botton');
const webTabBotton = document.getElementById('web-tab-botton');
const desktpTabBotton = document.getElementById('desktp-tab-botton');

function openMobileTab() {
    document.getElementById('mobile-tab').classList.add('active');
    document.getElementById('web-tab').classList.remove('active');
    document.getElementById('desktop-tab').classList.remove('active');

    document.getElementById('mobile-tab-botton').classList.add('active');
    document.getElementById('web-tab-botton').classList.remove('active');
    document.getElementById('desktp-tab-botton').classList.remove('active');
}
function openWebTab() {
    document.getElementById('web-tab').classList.add('active');
    document.getElementById('mobile-tab').classList.remove('active');
    document.getElementById('desktop-tab').classList.remove('active');

    document.getElementById('web-tab-botton').classList.add('active');
    document.getElementById('mobile-tab-botton').classList.remove('active');
    document.getElementById('desktp-tab-botton').classList.remove('active');
}
function openDesktopTab() {
    document.getElementById('desktop-tab').classList.add('active');
    document.getElementById('mobile-tab').classList.remove('active');
    document.getElementById('web-tab').classList.remove('active');

    document.getElementById('desktp-tab-botton').classList.add('active');
    document.getElementById('mobile-tab-botton').classList.remove('active');
    document.getElementById('web-tab-botton').classList.remove('active');
}


function mostrarAviso() {
    const modal = document.getElementById('modal-aviso');
    modal.classList.toggle('hidden');
}
function mostrarModalRecrutar() {
    const modal = document.getElementById('modal-recrutar');
    modal.classList.toggle('hidden');
}
function mostrarErroWhatsapp() {
    const modal = document.getElementById('modal-erro-Whatsapp');
    modal.classList.toggle('hidden');
}
function mostrarRedeSocialIndisponivel(nomeDaRede) {
    const modal = document.getElementById('modal-erro-RedeSocial');
    modal.classList.toggle('hidden');
    const rede = document.getElementById('nomeDaRede');
    rede.innerHTML = nomeDaRede;
}
function mostrarModalInfo() {
    const modal = document.getElementById('modal-info');
    modal.classList.toggle('hidden');
}

/*
function contarTempo() {
    const inicio = Date.now();
    const final = new Date('2026-02-02').getTime();
    const falta = final - inicio;

    const miliSegundoPorDia = 1000 * 60 * 60 * 24;
    diasEmFalta = Math.floor(falta / miliSegundoPorDia);

    const miliSegundoPorHora = 1000 * 60 * 60;
    horasEmFalta = Math.floor(diasEmFalta / miliSegundoPorHora) % 60;

    const miliSegundoPorSegundo = 1000 * 60;
    segundosEmFalta = Math.floor(horasEmFalta / miliSegundoPorSegundo) % 60;

    document.getElementById('show-segundo').innerHTML = horasEmFalta;

    console.log('INICIO E ' + inicio);
    console.log('FINAL E ' + final);
    console.log('O TEMPO EM FALTA  E ' + falta);
    console.log('DIAS EM FALTA' + diasEmFalta);

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#formats_of_tostring_method_return_values

    //setInterval(() => {
    //    for (let hora = 60; hora > 0; hora--) {
    //        const element = array[hora];
    //    }
    //
    //}, 1000);
}*/

function contarTempo() {
    const inicio = Date.now();
    const final = new Date('2026-03-02').getTime();
    const falta = final - inicio;

    const segundos = Math.floor(falta / 1000) % 60;
    const minutos = Math.floor(falta / (1000 * 60)) % 60;
    const horas = Math.floor(falta / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(falta / (1000 * 60 * 60 * 24));


    document.getElementById('show-segundo').innerHTML = segundos;
    document.getElementById('show-minuto').innerHTML = minutos;
    document.getElementById('show-hora').innerHTML = horas;
    document.getElementById('show-dia').innerHTML = dias;

    document.getElementById('show-segundo2').innerHTML = segundos;
    document.getElementById('show-minuto2').innerHTML = minutos;
    document.getElementById('show-hora2').innerHTML = horas;
    document.getElementById('show-dia2').innerHTML = dias;
}

setInterval(() => {
    contarTempo()
}, 1000);


function copiarLink(link) {

    if (link.indexOf('http') === -1) {
        document.getElementById('mini-dialog-txt').innerHTML = 'Erro ao copiar';
        document.getElementById('mini-dialog-div').classList.add('visivel');
    } else {
        navigator.clipboard.writeText(link);
        document.getElementById('mini-dialog-txt').innerHTML = 'Link Copiado';
        document.getElementById('mini-dialog-div').classList.add('visivel');
    }


    setTimeout(() => {
        document.getElementById('mini-dialog-div').classList.remove('visivel');
    }, 2000);


}

/*ATRIBUIR ANIMAÇÕES*/

window.addEventListener('scroll', function () {
    const elementoAnimado = document.querySelectorAll('.animado');

    // Verifica se o elemento está visível na tela
    elementoAnimado.forEach(function (box) {
        const posicaoElemento = box.getBoundingClientRect().top;
        const areaRenderizada = window.innerHeight / 1.5;  // O fator 1.5 vai fazer o efeito acontecer antes de estar no centro total

        // Se o topo do elemento estiver dentro da janela de visualização
        if (posicaoElemento < areaRenderizada) {
            box.classList.add('visivel');
        }
    });
});

/*
const employer={};
employer.name='Elisabeth Pedro';
employer.skills[backend,frontend,server,AI,hosting,]

*/