const Btheme = document.getElementById("Btheme");

const bgnavdark = getComputedStyle(document.documentElement).getPropertyValue('--bg-navbar');
const bgprimarydark = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
const bgsecundarydark = getComputedStyle(document.documentElement).getPropertyValue('--bg-secundary');
const textcolor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
const maincolor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

const bgnavligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-navbar-light');
const bgprimaryligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary-light');
const bgsecundaryligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-secundary-light');
const header = document.querySelector(".header");
const navitems = document.querySelectorAll(".header .navbar #navbar .navbar-nav .nav-item");

let navLinks = document.querySelectorAll('.nav-link');

Btheme.addEventListener("click",() =>{
    changetheme();
})

function changetheme() {
    let styles = window.getComputedStyle(header);
    const currentBgColor = rgbToHex(styles.backgroundColor);

    if (currentBgColor === bgnavdark) {
        header.style.backgroundColor = bgnavligth;
        navitems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "#ffffff";
                item.style["border-radius"] = "5rem";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = ""; // Restaura el color de fondo original al salir del hover
            });
        });

        navLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                link.style.color = bgnavdark;
                link.style.textShadow = "none"; // O el nuevo valor que desees
            });
            link.addEventListener("mouseout", () => {
                link.style.color = textcolor;
                link.style.textShadow = "none"; // O el nuevo valor que desees
            });
        });


    } else if (currentBgColor === bgnavligth) {
        header.style.backgroundColor = bgnavdark;
        navitems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "transparent";
                item.style["border-radius"] = "5rem";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = ""; // Restaura el color de fondo original al salir del hover
            });
        });

        navLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                link.style.color = maincolor;
                link.style.textShadow = "rgba(0, 183, 255, 0.533) 0px 0px 5.21269px, rgba(0, 183, 255, 0.533) 0px 0px 10.4254px, rgba(0, 183, 255, 0.533) 0px 0px 15.6381px"; // O el nuevo valor que desees
            });
            link.addEventListener("mouseout", () => {
                link.style.color = textcolor;
                link.style.textShadow = "none"; // O el nuevo valor que desees
            });
        });
    }
}

function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g);
    return "#" + rgbArray.map(num => parseInt(num).toString(16).padStart(2, '0')).join('');
}