console.log("Hallo Wereld")

let bericht = "Digitaal Artefact";
let kop = document.querySelector("h2");
kop.textContent = bericht;

// Popup bron: https://www.youtube.com/watch?v=MBaw_6cPmAw
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

// Audio bron: https://www.youtube.com/watch?v=VXWvfrmpapI&t=275s
const muziek = document.getElementById('muziek');
let audio = new Audio();

audio.src = '../audio/muziek1.mp3';

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