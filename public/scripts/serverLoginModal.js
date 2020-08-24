const serverLoginModal = document.querySelector('#server-login-modal');
serverLoginModal.addEventListener('click', (evt) => {
    if (evt.target === serverLoginModal) {
        serverLoginModal.setAttribute('style', 'display:none;')
    }
})