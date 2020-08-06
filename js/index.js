const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update the nav content
const navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

//Add two new elements to nav and change color
constnavTitles = document.querySelectorAll("header nav a");
navTitles.forEach((a) => {
  value.style.color = 'green';
});

const nav = document.querySelector("nav");

const newNavElement = document.createElement("a");
newNavElement.textContent = "Samples";
newNavElement.href = "#";
newNavElement.style.color = "pink";
nav.append(newNavElement);

const newNavElement2 = document.createElement("a");
newNavElement2.textContent = "Other";
newNavElement2.href = "#";
newNavElement2.style.color = "pink";
nav.prepend(newNavElement2);

//Update the CTA content
const ctaItems = document.querySelector('.cta-text');
ctaItems.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector('cta-img');
ctaImg.src = siteContent.cta["img-src"];
ctaImg.alt = "Code Snippet Image";


//Update the Main-Content Features area
const txtFeatures = document.querySelectorAll(".main-content .top-content h4");
txtFeatures[0].textContent = siteContent["main-content"]["features-h4"];

const paraFeatures = document.querySelectorAll(".main-content .top-content p");
paraFeatures[0].textContent = siteContent["main-content"]["features-content"];

const topAbout = document.querySelectorAll(".main-content .top-content h4");
topAbout[1].textContent = siteContent["main-content"]["about-h4"];

const topFeatures = document.querySelectorAll(".main-content .top-content p");
topFeatures[1].textContent = siteContent["main-content"]["about-content"];

//Update the middle image section
const midImage = document.getElementById("middle-img");
midImage.src = siteContent["main-content"]["middle-img-src"];
midImage.alt = "Shows a mid-page accent photo";

//Update the bottom content
const bottomServicesHeader = document.querySelectorAll(".main-content .bottom-content h4");
bottomServicesHeader[0].textContent = siteContent["main-content"]["services-h4"];

const bottomServicesText = document.querySelectorAll(".main-content .bottom-content p");
bottomServicesText[0].textContent = siteContent["main-content"]["services-content"];

const bottomProdHeader = document.querySelectorAll(".main-content .bottom-content h4");
bottomProdHeader[1].textContent = siteContent["main-content"]["product-h4"];

const bottomProdText = document.querySelectorAll(".main-content .bottom-content p");
bottomProdText[1].textContent = siteContent["main-content"]["product-content"];

const bottomVisHeader = document.querySelector(".main-content .bottom-content h4");
bottomVisHeader[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomVisText = document.querySelectorAll(".main-content .bottom-content p");
bottomVisText[2].textContent = siteContent["main-content"]["vision-content"];

//Update the Contact Section
const contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].textContent = siteContent["contact"]["contact-h4"];

const contactAbout = document.querySelectorAll(".contact p");
contactAbout[0].textContent = siteContent["contact"]["address"];
contactAbout[1].textContent = siteContent["contact"]["phone"];
contactAbout[2].textContent = siteContent["contact"]["email"];

//Update the Footer
