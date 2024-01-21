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

const g0 = document.getElementById('header');
const g1 = document.getElementById('class');
const g2 = document.getElementById('about');
const g3 = document.getElementById('skating');
const g4 = document.getElementById('shop');
const g5 = document.getElementById('testimonial');
const g6 = document.getElementById('footer');





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
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}


  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            updateContent(title,mergedData.title.title);

            updateLinkContent(nav0,mergedData.nav.nav0);
            updateLinkContent(nav1,mergedData.nav.nav1);
            updateLinkContent(nav2,mergedData.nav.nav2);
            updateLinkContent(nav3,mergedData.nav.nav3);

            updateContent(h0,mergedData.slide.h0);
            updateContent(h1,mergedData.slide.h1);
            updateContent(h2,mergedData.slide.h2);
            updateContent(h3,mergedData.slide.h3);
            updateContent(h4,mergedData.slide.h4);
            updateContent(h5,mergedData.slide.h5);
            
            updateContent(a0,mergedData.ourclass.a0);
            updateContent(a1,mergedData.ourclass.a1);
            updateContent(a2,mergedData.ourclass.a2);
            updateContent(a3,mergedData.ourclass.a3);
            updateContent(a4,mergedData.ourclass.a4);
            updateContent(a5,mergedData.ourclass.a5);
            updateContent(a6,mergedData.ourclass.a6);
            updateContent(a7,mergedData.ourclass.a7);

            updateContent(b0,mergedData.about.b0);
            updateContent(b1,mergedData.about.b1);
            updateContent(b2,mergedData.about.b2);
            
            updateContent(c1,mergedData.skating.c1);
            updateContent(c2,mergedData.skating.c2);
            updateContent(c3,mergedData.skating.c3);
            updateContent(c4,mergedData.skating.c4);

            updateContent(s0,mergedData.shop.s0);
            updateContent(s1,mergedData.shop.s1);
            updateContent(s3,mergedData.shop.s3);
            
            updateContent(t0,mergedData.testimonial.t0);
            updateContent(t1,mergedData.testimonial.t1);
            updateContent(t2,mergedData.testimonial.t2);
            updateContent(t3,mergedData.testimonial.t3);
            updateContent(t4,mergedData.testimonial.t4);
            updateContent(t5,mergedData.testimonial.t5);
            updateContent(t6,mergedData.testimonial.t6);

            updateContent(f0,mergedData.footer.f0);
            updateContent(f1,mergedData.footer.f1);
            updateContent(f2,mergedData.footer.f2);
            updateContent(f3,mergedData.footer.f3);

            updateBackgroundColor(g0,mergedData.color.header);
            updateBackgroundColor(g1,mergedData.color.class);
            updateBackgroundColor(g2,mergedData.color.about);
            updateBackgroundColor(g3,mergedData.color.skating);
            updateBackgroundColor(g4,mergedData.color.shop);
            updateBackgroundColor(g5,mergedData.color.testimonial);
            updateBackgroundColor(g6,mergedData.color.footer);

            updateImageSrc(img1,mergedData.images.img1);
            updateImageSrc(img2,mergedData.images.img2);
            updateImageSrc(img3,mergedData.images.img3);
            updateImageSrc(img4,mergedData.images.img4);
            updateImageSrc(img5,mergedData.images.img5);
            updateImageSrc(img6,mergedData.images.img6);
            updateImageSrc(img7,mergedData.images.img7);
            updateImageSrc(img8,mergedData.images.img8);
            updateImageSrc(img9,mergedData.images.img9);
            updateImageSrc(img10,mergedData.images.img10);
            updateImageSrc(img11,mergedData.images.img11);
            updateImageSrc(img12,mergedData.images.img12);
            updateImageSrc(img13,mergedData.images.img13);

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