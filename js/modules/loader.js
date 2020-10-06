let preloader = document.getElementById('page-preloader');
window.addEventListener('load', () => {
    setTimeout((e) => {
    if (!preloader.classList.contains('disabled')) {
        preloader.classList.add('disabled');
    }
}, 1000);
});
