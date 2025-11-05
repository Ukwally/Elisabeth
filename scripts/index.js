/*Constomize didamic Header*/
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
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

function addContentNumber() {
    const experienceNumber = document.querySelector('resume-item');
    experienceNumber.forEach(element => {
        element.style="background-color:red;!importa";
    });
}