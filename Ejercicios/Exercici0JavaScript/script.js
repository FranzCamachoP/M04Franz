console.log("Pagina creada a la perfección :D ");
window.onload = function() {
    const modal = document.getElementById("modal");

    const modalText = document.getElementById("modalText");
    modalText.textContent = "HELLO, Me llamo tu padre, digo Franz";

    modal.style.display = "block";
};

function closeModal() {
    const modal = document.getElementByid("modalText");
    modal.style.display = "none";
};
