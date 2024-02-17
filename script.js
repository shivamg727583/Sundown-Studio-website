const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});



function pageAnimation(){
    
var elem =document.querySelectorAll(".elem");
var fixedImage=document.querySelector(".fixed-image")

elem.forEach(function(val){
 
val.addEventListener("mouseenter",function(dets){
    var imgSrc = val.getAttribute("data-image");
    console.log(imgSrc)
    fixedImage.style.display ="block";
    fixedImage.style.backgroundImage=`url(${imgSrc})`
    })
    val.addEventListener("mouseleave",function(){
    fixedImage.style.display ="none";
        
    })
})

}

function swipperAnimaion(){
    
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}

function responsiveMenu(){
  var mobileIcon=document.querySelector(".mobile-icon")
  var mobileNav=document.querySelector(".nav2")
  var close=document.querySelector(".nav2 i")


  mobileIcon.addEventListener("click",function(){
    mobileNav.style.top=0
  })
  close.addEventListener("click",function(){
    mobileNav.style.top="-100%"
  })
}

pageAnimation()
swipperAnimaion()
responsiveMenu()

function loaderAnimation(){
 setTimeout(() => {
  document.querySelector(".loader").style.top="-130%"
 }, 4000);
   
}

loaderAnimation();



