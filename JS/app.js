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
