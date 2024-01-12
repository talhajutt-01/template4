const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const title = document.getElementById('title');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');


const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');


const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');

const t0 =document.getElementById('t0');


const t1 =document.getElementsByClassName('t1');
const t2 =document.getElementsByClassName('t2');
const t3 =document.getElementsByClassName('t3');
const t4 =document.getElementsByClassName('t4');
const t5 =document.getElementsByClassName('t5');
const t6 =document.getElementsByClassName('t6');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');

const paragraph1 = document.getElementById('paragraph1');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            updateLinkContent(nav3, jsonData.nav.nav3);

            updateContent(h0, jsonData.slide.h0);
            updateContent(h1, jsonData.slide.h1);
            updateContent(h2, jsonData.slide.h2);
            updateContent(h3, jsonData.slide.h3);
            updateContent(h4, jsonData.slide.h4);
            updateContent(h5, jsonData.slide.h5);
            
            updateContent(a0, jsonData.ourclass.a0);
            updateContent(a1, jsonData.ourclass.a1);
            updateContent(a2, jsonData.ourclass.a2);
            updateContent(a3, jsonData.ourclass.a3);
            updateContent(a4, jsonData.ourclass.a4);
            updateContent(a5, jsonData.ourclass.a5);
            updateContent(a6, jsonData.ourclass.a6);
            updateContent(a7, jsonData.ourclass.a7);

            updateContent(b0, jsonData.about.b0);
            updateContent(b1, jsonData.about.b1);
            updateContent(b2, jsonData.about.b2);
            
            updateContent(c1, jsonData.skating.c1);
            updateContent(c2, jsonData.skating.c2);
            updateContent(c3, jsonData.skating.c3);
            updateContent(c4, jsonData.skating.c4);

            updateContent(s0, jsonData.shop.s0);
            updateContent(s1, jsonData.shop.s1);
            updateContent(s3, jsonData.shop.s3);
            
            updateContent(t0, jsonData.testimonial.t0);
            updateContent(t1, jsonData.testimonial.t1);
            updateContent(t2, jsonData.testimonial.t2);
            updateContent(t3, jsonData.testimonial.t3);
            updateContent(t4, jsonData.testimonial.t4);
            updateContent(t5, jsonData.testimonial.t5);
            updateContent(t6, jsonData.testimonial.t6);

            updateContent(f0, jsonData.footer.f0);
            updateContent(f1, jsonData.footer.f1);
            updateContent(f2, jsonData.footer.f2);
            updateContent(f3, jsonData.footer.f3);

            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);

            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'contact.html') {
               
            } else if (fileName === 'about.html') {

            } else if (fileName === 'shop.html') {

            } else if (fileName === 'skating.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});