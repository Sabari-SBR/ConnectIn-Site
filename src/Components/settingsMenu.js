// Settings Menu Toggle JS
const userProfile = document.getElementById ("user-profile");
const settingsMenu = document.getElementById ("settings-menu");

userProfile.addEventListener('click', () => {
    settingsMenu.classList.toggle ("settings-menu-active");
});