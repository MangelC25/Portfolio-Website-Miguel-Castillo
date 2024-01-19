const Btheme = document.getElementById("Btheme");

const bgnavdark = getComputedStyle(document.documentElement).getPropertyValue('--bg-navbar');
const bgprimarydark = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
const bgsecundarydark = getComputedStyle(document.documentElement).getPropertyValue('--bg-secundary');
const textcolor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
const maincolor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

const bgdegradado = getComputedStyle(document.documentElement).getPropertyValue('--bg-degradado');

const bgnavligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-navbar-light');
const bgprimaryligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary-light');
const bgsecundaryligth = getComputedStyle(document.documentElement).getPropertyValue('--bg-secundary-light');
const header = document.querySelector(".header");
const Home = document.querySelector(".Home");
const About = document.querySelector(".About");
const navitems = document.querySelectorAll(".header .navbar #navbar .navbar-nav .nav-item");

let navLinks = document.querySelectorAll('.nav-link');



Btheme.addEventListener("click",() =>{
    changetheme();
    
})

function changetheme() {
    changethemeheader();
    changethemeHome();
    changethemeAbout();
};

function changethemeheader(){
    let styles = window.getComputedStyle(header);
    const currentBgColor = rgbToHex(styles.backgroundColor);
    let Bthemeheader = header.getElementsByClassName("Btheme")[0];

    if (currentBgColor === bgnavdark) {
        header.style.backgroundColor = bgnavligth;
        Bthemeheader.querySelector("i").className = "bx bxs-sun";
        navitems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "#ffffff";
                item.style["border-radius"] = "5rem";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = ""; 
            });
        });

        navLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                link.style.color = bgnavdark;
                link.style.textShadow = "none"; 
            });
            link.addEventListener("mouseout", () => {
                link.style.color = textcolor;
                link.style.textShadow = "none"; 
            });
        });

    } else if (currentBgColor === bgnavligth) {
        Bthemeheader.querySelector("i").className = "bx bxs-moon";
        header.style.backgroundColor = bgnavdark;
        navitems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "transparent";
                item.style["border-radius"] = "5rem";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = ""; 
            });
        });

        navLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                link.style.color = maincolor;
                link.style.textShadow = '0 0 1rem ' + maincolor + ', 0 0 2rem ' + maincolor + ', 0 0 3rem ' + maincolor; 
            });
            link.addEventListener("mouseout", () => {
                link.style.color = textcolor;
                link.style.textShadow = "none"; 
            });
        });
    }
}

function changethemeHome(){ 
    
    const rds = document.querySelector('.home-rds');

    let styles = window.getComputedStyle(Home);
    let style2 = window.getComputedStyle(rds);

    const currentBackground = styles.background; 
    const currentBackground2 = style2.background;
    const currentBgPrimary1 = hexToRgb(bgprimarydark);
    const currentBgPrimary2 = hexToRgb(bgprimaryligth);

    const bgdegradadolight = `linear-gradient(to top, rgb(255, 255, 255), ${currentBgPrimary2})`;

    const textElements = Home.querySelectorAll('h1, h2, p, a');
    const btn = Home.querySelectorAll('a');

    const linksbtm = rds.querySelectorAll('a');
    
    if (currentBackground.includes(currentBgPrimary1)) {
        Home.style.background = bgdegradadolight;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        btn.forEach(item => {
            item.style.color = bgprimarydark; 
            item.addEventListener("mouseover", () => {
                item.style.color = textcolor;
            });
            item.addEventListener("mouseout", () => {
                item.style.color = bgprimarydark
            });
        });

        linksbtm.forEach(item => {
            item.style.color = bgprimarydark; 
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = bgsecundarydark;
                item.style.boxShadow = `0 0 5rem `+ maincolor;
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = "transparent"; 
                item.style.boxShadow = "none";
            });
        });
    } else if (currentBackground.includes(currentBgPrimary2)){
        Home.style.background = bgdegradado;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        btn.forEach(item => {
            item.style.color = maincolor; 
            item.addEventListener("mouseover", () => {
                item.style.color = textcolor;
            });
            item.addEventListener("mouseout", () => {
                item.style.color = maincolor;
            });
        });

        linksbtm.forEach(item => {
            item.style.color = maincolor; 
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = bgsecundarydark;
                item.style.boxShadow = `0 0 5rem `+ maincolor
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = "transparent"; 
                item.style.boxShadow = "none";
            });
        });
    }

    console.log(currentBackground2);

}

function changethemeAbout(){
    let styles = window.getComputedStyle(About);
    const currentBackground = styles.background;

    const currentBgSecundary1 = hexToRgb(bgsecundarydark);

    const bgdegradadodark = `linear-gradient(to top, ${currentBgSecundary1}, rgb(12, 30, 46))`;
    const bgdegradadolight = `linear-gradient(to top, rgb(128, 128, 128), rgb(235, 246, 255))`;
    

    const textElements = About.querySelectorAll('h1, p, #A, .carousel-control-prev-icon, .carousel-control-next-icon');

    if (currentBackground.includes(currentBgSecundary1)) {
        About.style.background = bgdegradadolight;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });

    } else if (currentBackground.includes("rgb(128, 128, 128)")){
        About.style.background = bgdegradadodark;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
    }
}

function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g);
    return "#" + rgbArray.map(num => parseInt(num).toString(16).padStart(2, '0')).join('');
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    let pairs = hex.match(/.{1,2}/g);
    let r = parseInt(pairs[0], 16);
    let g = parseInt(pairs[1], 16);
    let b = parseInt(pairs[2], 16);

    return `rgb(${r}, ${g}, ${b})`;
}