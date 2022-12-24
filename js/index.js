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
 const nav = document.querySelector('nav');
        for (const [key, value] of Object.entries(siteContent.nav)) {
          if (key.startsWith('nav-item-')) {
            const a = document.createElement('a');
            a.textContent = value;
            a.href = '#';
            nav.appendChild(a);
          }
        }

   const h1t = document.querySelector('.cta h1') 
   h1t.textContent = siteContent.cta['h1']

   const boton = document.querySelector('.cta button')  
   boton.textContent = siteContent.cta['button']
   
   const imgHero = document.querySelector('.cta #cta-img')
   imgHero.setAttribute('src', siteContent.cta['img-src'])

   const featur = document.querySelector('.main-content .text-content h4')
   featur.textContent = siteContent["main-content"]['features-h4']

   const featureCon = document.querySelector('.main-content .text-content p')
   featureCon.textContent = siteContent["main-content"]['features-content']

  const topContentDiv = document.querySelector('.top-content');
  
  const textContentDiv1 = document.createElement('div');
  textContentDiv1.classList.add('text-content');
  
  const h4 = document.createElement('h4');
  h4.textContent = siteContent["main-content"]['about-h4'];
  textContentDiv1.appendChild(h4);
  
  const p = document.createElement('p');
  p.textContent = siteContent["main-content"]['about-content'];
  textContentDiv1.appendChild(p);
  
  topContentDiv.appendChild(textContentDiv1);
  
  const middleImage = document.querySelector('#middle-img')
   middleImage.setAttribute('src', siteContent["main-content"]['middle-img-src'])

const botomCon = document.querySelector('.bottom-content h4')
botomCon.textContent = siteContent["main-content"]['services-h4']
const botompar1 = document.querySelector('.bottom-content p')
botompar1.textContent = siteContent["main-content"]['services-content']

const botoTith4 = document.querySelector('.bottom-content .tith4')
botoTith4.textContent = siteContent["main-content"]['product-h4']
const botomTitp = document.querySelector('.bottom-content .titp')
botomTitp.textContent = siteContent["main-content"]['product-content']

const botoTitle3 = document.querySelector('.bottom-content .title3')
botoTitle3.textContent = siteContent["main-content"]['vision-h4']
const visionp = document.querySelector('.bottom-content .para4')
visionp.textContent = siteContent["main-content"]['vision-content']

const contect = document.querySelector('.contact h4')
contect.textContent = siteContent.contact['contact-h4']
const contactp1 = document.querySelector('.contact .para1')
  contactp1.textContent = siteContent.contact['address']
const contactp2 = document.querySelector('.contact .para2')
contactp2.textContent = siteContent.contact['phone']
 const contactp3 = document.querySelector('.contact .para3')
 contactp3.textContent = siteContent.contact['email']

const foter = document.querySelector('footer p')
foter.textContent = siteContent.footer['copyright']