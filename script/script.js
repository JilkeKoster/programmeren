console.log("Hallo Wereld")

let bericht = "Digitaal Artefact";
let kop = document.querySelector("h2");
kop.textContent = bericht;

// Popup
let openPopupButtons = document.querySelectorAll('[data-popup-target]');
let closePopupButtons = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openPopup(popup);
    });
});

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    });
});

closePopupButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopup(popup);
    });
});

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

// Audio
const muziek = document.getElementById('muziek');
let audio = new Audio();

audio.src = '../audio/muziek.m4a';

let isPlaying = false;

muziek.addEventListener('click', function(){
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
});