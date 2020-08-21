const modal = document.querySelector(".modal");
const passInput = document.querySelector("#password-input");
const checkbox = document.querySelector("#pass-checkbox");
checkbox.onclick = function () {
    if (checkbox.checked) {
        passInput.removeAttribute("disabled");
    } else {
        passInput.setAttribute("disabled", true);
    }
};
function openModal() {
    event.preventDefault();
    document.querySelector(".modal").style.display = "block";
}
function closeModal() {
    event.preventDefault();
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        event.preventDefault();
        modal.style.display = "none";
    }
};