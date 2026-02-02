const footer = document.getElementById("footer");

function createFooter() {
    const p = document.createElement("p");
    p.textContent = "Copyright QPEE 2024";
    footer.appendChild(p).className = "footer";
}

createFooter();
