const footer = document.getElementById("footer");

function createFooter() {
    const p = document.createElement("p");
    p.textContent = "Copyright &#169 QPEE 2024";
    footer.appendChild(p).className = "footer";
}

createFooter();
