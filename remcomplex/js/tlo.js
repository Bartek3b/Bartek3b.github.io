let container = document.getElementById('container');
window.onmousemove = function (e) {
    let x = -e.clientX / 15,
        y = -e.clientY / 9;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}