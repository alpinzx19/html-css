const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

const menuDots = document.getElementById('menuDots');
const menuPopup = document.getElementById('menuPopup');
const closeMenu = document.getElementById('closeMenu');

// Open the product popup
openPopup.addEventListener('click', function() {
    popup.style.display = 'block';
});

// Close the product popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Open the menu popup
menuDots.addEventListener('click', function() {
    menuPopup.style.display = 'block';
});

// Close the menu popup
closeMenu.addEventListener('click', function() {
    menuPopup.style.display = 'none';
});

// Close the product popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
    if (event.target == menuPopup) {
        menuPopup.style.display = 'none';
    }
});
