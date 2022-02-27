let html = document.getElementsByTagName('html')[0];
let topNav = document.getElementById('top-nav');
if (html && topNav) {
    let hamburgers = topNav.getElementsByClassName('hamburger-menu');
    for (const hamburger of hamburgers) {
        hamburger.addEventListener('click', event => {
            html.classList.toggle('collapsed');
        });
    }
}
