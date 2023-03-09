let net = document.querySelector('.net');
let moveBy = 10;

window.addEventListener('load', () => {
    net.style.position = 'relative';
    net.style.left = 600;
    net.style.top = 500;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            net.style.left = parseInt(net.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            net.style.left = parseInt(net.style.left) + moveBy + 'px';
            break;
    }
});
