
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
const SKills = document.querySelector(".SKills");
const Projects = document.querySelector(".Projects");
const Contact = document.querySelector(".Contact");
const navitems = document.querySelectorAll(".header .navbar #navbar .navbar-nav .nav-item");

let navLinks = document.querySelectorAll('.nav-link');

let fondoVisibleH = 1;
let fondoVisibleA = 1;
let fondoVisibleS = 1;
let fondoVisibleP = 1;
let fondoVisibleC = 1;

Btheme.addEventListener("click",() =>{
    changetheme();
})

function changetheme() {
    changethemeheader();
    changethemeHome();
    changethemeAbout();
    changethemeSKills();
    changethemeProjects();
    changethemeContact();
};

function changethemeheader(){
    let styles = window.getComputedStyle(header);
    const currentBgColor = rgbToHex(styles.backgroundColor);
    let Bthemeheader = header.getElementsByClassName("Btheme")[0];

    if (currentBgColor === bgnavdark) {
        header.style.transition = "background-color 0.5s ease-in-out";
        header.style.backgroundColor = bgnavligth;
        Bthemeheader.querySelector("i").className = "bx bxs-sun";
        navitems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.transition = "background-color 0.5s ease-in-out";
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
        header.style.transition = "background-color 0.5s ease-in-out";
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
};

function changethemeHome(){ 
    
    let fondoActual = document.getElementById(`fondoH${fondoVisibleH}`);
    let fondoSiguiente = document.getElementById(`fondoH${3 - fondoVisibleH}`);
    const rds = document.querySelector('.home-rds');

    let styles = window.getComputedStyle(fondoActual);

    const currentBackground = styles.background; 

    const textElements = Home.querySelectorAll('h1, h2, p, a');
    const btn = Home.querySelectorAll('a');

    const linksbtm = rds.querySelectorAll('a');
    
    if (currentBackground.includes("rgb(14, 35, 54)")) {

        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleH = 3 - fondoVisibleH;

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
    } else if (currentBackground.includes("rgb(105, 185, 255)")){

        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleH = 3 - fondoVisibleH;

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
};

function changethemeAbout(){
    let fondoActual = document.getElementById(`fondoA${fondoVisibleA}`);
    let fondoSiguiente = document.getElementById(`fondoA${3 - fondoVisibleA}`);

    let styles = window.getComputedStyle(fondoActual);

    const currentBackground = styles.background;

    const textElements = About.querySelectorAll('h1, p, #A');
    

    if (currentBackground.includes("rgb(41, 92, 136)")) {
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleA = 3 - fondoVisibleA;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        About.style.setProperty("--before-background","rgb(180, 180, 180)");
    } else if (currentBackground.includes("rgb(180, 180, 180)")){
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleA = 3 - fondoVisibleA;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        About.style.setProperty("--before-background","rgb(0, 0, 0)");
    }
};

function changethemeSKills(){
    let fondoActual = document.getElementById(`fondoS${fondoVisibleS}`);
    let fondoSiguiente = document.getElementById(`fondoS${3 - fondoVisibleS}`);

    let styles = window.getComputedStyle(fondoActual);

    const currentBackground = styles.background;
    
    const textElements = SKills.querySelectorAll('#My, h3, h5');


    if (currentBackground.includes("rgb(113, 113, 113)")) {
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleS = 3 - fondoVisibleS;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        SKills.style.setProperty("--bg-before","rgb(105, 185, 255)");
    } else if (currentBackground.includes("rgb(182, 251, 182)")){
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleS = 3 - fondoVisibleS;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        
        SKills.style.setProperty("--bg-before",bgprimarydark);
}
};

function changethemeProjects(){
    let fondoActual = document.getElementById(`fondoP${fondoVisibleP}`);
    let fondoSiguiente = document.getElementById(`fondoP${3 - fondoVisibleP}`);

    let styles = window.getComputedStyle(fondoActual);

    const currentBackground = styles.background;

    const textElements = Projects.querySelectorAll('#My, #VWM');

    const btn = Projects.querySelector('#VWM');

    if (currentBackground.includes("rgb(14, 35, 54)")) {
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleP = 3 - fondoVisibleP;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        btn.style.color = bgprimarydark; 
        btn.addEventListener("mouseover", () => {
            btn.style.color = textcolor;
            });
            btn.addEventListener("mouseout", () => {
                btn.style.color = bgprimarydark
            });
    } else if(currentBackground.includes("rgb(105, 185, 255)")){
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleP = 3 - fondoVisibleP;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        btn.style.color = maincolor; 
        btn.addEventListener("mouseover", () => {
            btn.style.color = textcolor;
            });
            btn.addEventListener("mouseout", () => {
                btn.style.color = maincolor;
            });
    }
}

function changethemeContact(){
    let fondoActual = document.getElementById(`fondoC${fondoVisibleC}`);
    let fondoSiguiente = document.getElementById(`fondoC${3 - fondoVisibleC}`);

    let styles = window.getComputedStyle(fondoActual);

    const currentBackground = styles.background;

    const textElements = Contact.querySelectorAll('#Ct, #bsubmit');

    const btn = Contact.querySelectorAll('button');

    
    if (currentBackground.includes("rgb(41, 92, 136)")) {
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleC = 3 - fondoVisibleC;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        btn.forEach(item => {
            item.style.color = bgprimarydark; 
            item.addEventListener("mouseover", () => {
                item.style.color = textcolor;
            });
            item.addEventListener("mouseout", () => {
                item.style.color = bgprimarydark;
            });
        });
    } else if(currentBackground.includes("rgb(150, 150, 150)")){
        fondoActual.style.opacity = '0';
        fondoSiguiente.style.opacity = '1';

        fondoVisibleC = 3 - fondoVisibleC;
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