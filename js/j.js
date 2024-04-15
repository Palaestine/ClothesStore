$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
  responsive: {
    511: {
      items: 3
    },
    768: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

/***************************************** Change Mood (LocalStorage) ***************************************************/

let mood = document.querySelector(".mood");

let getMode = localStorage.getItem("theMood");
if(getMode && getMode === "dark")
{
  document.body.classList.toggle("dark");
}

mood.addEventListener("click" , ()=>{

  mood.querySelector("i").classList.toggle("fa-sun");
  mood.querySelector("i").classList.toggle("fa-moon");

  document.body.classList.toggle("dark");
  
  if(!document.body.classList.contains("dark"))
  {
    return localStorage.setItem("theMood" , "light");
  }

  localStorage.setItem("theMood" , "dark");
});

window.addEventListener("load" , () =>{

  if(document.body.classList.contains("dark")  )
  {
    mood.querySelector("i").classList.toggle("fa-sun");
  }
  else
  {
    mood.querySelector("i").classList.toggle("fa-moon");
  }
});

/************************************** Change Nav's Background ******************************************************/

let nav = document.getElementById("nav");

const scrollNav = ()=>{

  this.scrollY >= 50 ? nav.classList.add("navChange")
                     : nav.classList.remove("navChange")
}
window.addEventListener("scroll" , scrollNav);




/******************************************** Show Arrow ************************************************/

let categoryOffset = $("#cate").offset().top;


$(window).scroll( ()=>{

  let wScroll = $(window).scrollTop(); // اليوزر اسكرووول قد ايييي


  if( wScroll > categoryOffset -300)
  {
    $(".arrow").fadeIn(400);
  }
  else
  {
    $(".arrow").fadeOut(400);

  }
});

$(".arrow").click(()=>{

  $("html , body").animate({scrollTop :0} , 1500)
});



/*==============================  Scroll Section Active Link  =========================================*/

const sectionss = document.querySelectorAll("section"),
menuList = document.querySelectorAll("nav ul a ");


function activeMenu (){
  let len = sectionss.length;
  
  while(--len && window.scrollY + 97 < sectionss[len].offsetTop){}
  menuList.forEach(sec => sec.classList.remove("activem"));
  menuList[len].classList.add("activem");
}

activeMenu();
window.addEventListener("scroll" , activeMenu)








const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }
    else{
      entry.target.classList.remove("show-items");
    }
  });

});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));
