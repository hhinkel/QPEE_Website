let menuItems = [{text: "Events", link: "events.html"},
        {text: "Volunteers", link: "volunteers.html"},
        {text: "Cross-country Course Info", link: "index.html"},
        {text: "About Queeny Park", link: "about_queeny.html"},
        {text: "Helpful Links", link: "index.html"},
        {text: "Contact Us", link: "index.html"}];
let graphic = "images/QP_logo.gif";
const header = document.getElementById("header");

function createMenuItems(menu) {
    for (const menuItem of menuItems) {
        const aItem = document.createElement('a');
        aItem.textContent = menuItem.text;
        aItem.href = menuItem.link;
        menu.appendChild(aItem).className = "menu_item";
    }
}

function createMenu() {
    const headerBar = document.createElement('div');
    const logo = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = "images/QP_logo.gif";
    img.alt = "QPEE logo";
    a.appendChild(img);
    a.href = "index.html";
    logo.appendChild(a);
    headerBar.appendChild(logo);
    const menu = document.createElement('div');
    createMenuItems(menu);
    headerBar.appendChild(menu).className = "links";
    header.appendChild(headerBar).className = "header_bar";
}

createMenu();