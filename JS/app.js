const menu=document.querySelector('.menu')
const all_page=document.querySelector('.all-page')
const navbar =document.querySelector('.navbar')

menu.addEventListener('click',function(){
    navbar.classList.toggle('active')
    
})
window.addEventListener('click', function (event) {
    // if (!event.target.classList.contains('navbar')==navbar) {
    //     this.window.classList.remove('active')
    // }
    // const  WindowClass = event.target.classList.value
    // if (WindowClass=='nav-ul') {
    //     navbar.classList.remove('active')
    // }
    if (event.target.classList.contains('nav-ul') ) {
       navbar.classList.remove('active')
   }
})

// const img_container = document.querySelectorAll('.img-main img')
// const balon_btn1=document.querySelector('#balon1')
// const balon_btn2=document.querySelector('#balon2')
// const balon_btn3=document.querySelector('#balon3')
// for (const iterator of img_container) {
//     balon_btn1.addEventListener('click', function () {
//         iterator.style.transform=`translateY:120px`
//     })
// }

//= = = = = = = = = = = img =  = = = = = = = = = /
let imagesContainer = [
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-02.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-03.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-04.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
    `<div class="img-item">
        <div class="img-img">
            <img src="/IMG/gallery-img-01.jpg" alt="" />
        </div>
        <div class="img-text">
            <h2>Julis dances in the deep darck</h2>
        </div>
    </div>`,
]
 
let sliderItemsCount = 0
if( window.innerWidth>=1000) sliderItemsCount=5
    else if(window.innerWidth<1000 && window.innerWidth>=700) sliderItemsCount=4 
    else if (window.innerWidth < 700&&window.innerWidth>=450) sliderItemsCount = 3
    else if (window.innerWidth < 450) sliderItemsCount = 1
 
 /* = = = = = = Slider = = = = = = = */
 
const sliderFunc = (array = [], step = 1, count = 4, index = 0) => {
    const start = index * count;
    const end = count * (index + 1) ;  
    const items = array.slice(start, end);
    let images = ``;
    for (const item of items) {
        images += item
    }
    return images;
}

const sliderBtnsCount = (len, count) => { 
    if (len <= 0 || count <= 0) return;
    const val = len / count; 
    if (Math.floor(val) == val) return val;   
    else return Math.ceil(val)
}

/* 
14 ta element bor, 4 tadan chiqar

        span-1 => 0 - 4
            index * count - (index * count + (count - 1))

            0 - 3
        span-2 => 1 - 4
            index * count - (index * count + (count - 1))
            4 - 7 
        span-3 => 2 - 4
        span-4 => 3 - 2
*/

/* = = = = = = Slider = = = = = = = */

//  buttons in slider
const sliderBtnsContainer = document.querySelector('.balon-container')

let sliderButtons = ``;
for (let index = 0; index < sliderBtnsCount(imagesContainer.length,sliderItemsCount); index++) {
    sliderButtons += `<span></span>`
}

sliderBtnsContainer.innerHTML = sliderButtons;

const sliderBtns = document.querySelectorAll('.balon-container span')

const imagesContent = document.querySelector('.img-content')

imagesContent.innerHTML = sliderFunc(imagesContainer, 1, sliderItemsCount, 0)

for (const [index,btn] of sliderBtns.entries()) {
    btn.addEventListener('click', function () {
        imagesContent.innerHTML = sliderFunc(imagesContainer, 1, sliderItemsCount, index)
    })
}

window.addEventListener('resize', function (event) {
    let checker = 0;
    if( window.innerWidth>=1000) checker=5
    else if(window.innerWidth<1000 && window.innerWidth>=700) checker=4 
    else if (window.innerWidth < 700&&window.innerWidth>=450) checker = 3
    else if (window.innerWidth < 450) checker = 1

    if (checker != sliderItemsCount) {
        sliderButtons = ''
        for (let index = 0; index < sliderBtnsCount(imagesContainer.length,checker); index++) {
            sliderButtons += `<span></span>`
        }
        imagesContent.innerHTML = sliderFunc(imagesContainer, 1, checker, 0)
        sliderBtnsContainer.innerHTML = sliderButtons;
        sliderItemsCount = checker
    }
})



