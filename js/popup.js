const popupLinks = document.querySelectorAll('.login_link');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock_padding');

let unlock = true;

const timeout = 500;

if (popupLinks.lenght > 0) {
    for (let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e){
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDeafult();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('close_login');
if (popupCloseIcon > 0) {
    for (let index = 0; index < popupCloseIcon.lenght; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click' function (e){
            popupClose(el.closest('.popup'));
            e.preventDeafult();
        });
    }
}