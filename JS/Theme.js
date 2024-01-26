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
};

function changethemeHome(){ 
    
    const rds = document.querySelector('.home-rds');

    let styles = window.getComputedStyle(Home);

    const currentBackground = styles.background; 

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
};

function changethemeAbout(){
    let styles = window.getComputedStyle(About);

    const currentBackground = styles.background;

    const currentBgSecundary1 = hexToRgb(bgsecundarydark);

    const bgdegradadodark = `linear-gradient(to top, ${currentBgSecundary1}, rgb(12, 30, 46))`;
    const bgdegradadolight = `linear-gradient(to top, rgb(180, 180, 180), rgb(235, 246, 255))`;

    const textElements = About.querySelectorAll('h1, p, #A');

    const beforeStyle = About.querySelector('.about-content');
    let stylesbefore = window.getComputedStyle(beforeStyle, "::before");
    

    if (currentBackground.includes(currentBgSecundary1)) {
        About.style.background = bgdegradadolight;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        About.style.setProperty("--before-background","rgb(180, 180, 180)");
    } else if (currentBackground.includes("rgb(180, 180, 180)")){
        About.style.background = bgdegradadodark;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        About.style.setProperty("--before-background","rgb(0, 0, 0)");
    }
};

function changethemeSKills(){
    let styles = window.getComputedStyle(SKills);
    const currentBackground = styles.background;

    const currentBgPrimary2 = hexToRgb(bgprimaryligth);

    const bgdegradadodark = `linear-gradient(to top, rgb(113, 113, 113), rgb(0, 0, 0))`;
    const bgdegradadolight = `linear-gradient(to top, rgb(182, 251, 182), rgb(255, 255, 255), rgb(180, 180, 180))`;
    
    const textElements = SKills.querySelectorAll('#My, h3, h5');


    if (currentBackground.includes("rgb(113, 113, 113)")) {
        SKills.style.background = bgdegradadolight;
        textElements.forEach(element => {
            element.style.color = bgprimarydark; 
        });
        SKills.style.setProperty("--bg-before",currentBgPrimary2);
    } else if (currentBackground.includes("rgb(180, 180, 180)")){
        SKills.style.background = bgdegradadodark;
        textElements.forEach(element => {
            element.style.color = textcolor; 
        });
        
        SKills.style.setProperty("--bg-before",bgprimarydark);
}
};

function changethemeProjects(){
    let styles = window.getComputedStyle(Projects);

    const currentBackground = styles.background;

    const currentBgPrimary1 = hexToRgb(bgprimarydark);
    const currentBgSecundary1 = hexToRgb(bgsecundarydark);
    const currentBgPrimary2 = hexToRgb(bgprimaryligth);

    const bgdegradadodark = `linear-gradient(to top, ${currentBgSecundary1}, ${currentBgPrimary1})`;
    const bgdegradadolight = `linear-gradient(to top, rgb(240, 240, 240), ${currentBgPrimary2})`;

    const textElements = Projects.querySelectorAll('#My, #VWM');

    const btn = Projects.querySelector('#VWM');

    if (currentBackground.includes(currentBgPrimary1)) {
        Projects.style.background = bgdegradadolight;
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
    } else if(currentBackground.includes(currentBgPrimary2)){
        Projects.style.background = bgdegradadodark;
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
    let styles = window.getComputedStyle(Contact);

    const currentBackground = styles.background;

    const currentBgPrimary1 = hexToRgb(bgprimarydark);
    const currentBgSecundary1 = hexToRgb(bgsecundarydark);

    const bgdegradadodark = `linear-gradient(to bottom, ${currentBgSecundary1}, ${currentBgPrimary1})`;
    const bgdegradadolight = `linear-gradient(to bottom, rgb(240, 240, 240), rgb(150, 150, 150))`;

    const textElements = Contact.querySelectorAll('#Ct, #bsubmit');

    const btn = Contact.querySelectorAll('button');

    
    if (currentBackground.includes(currentBgPrimary1)) {
        Contact.style.background = bgdegradadolight;
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
        Contact.style.background = bgdegradadodark;
        textElements.forEach(element => {
            element.style.color = maincolor; 
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