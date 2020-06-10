
let navContainer = $(".nav-container");
let menuBtn = $(".menu-btn");
let menuHeading = $(".menu-heading");
let filterDiv = $(".filters");



$(".open-menu").on("click",function(){
  
   filterDiv.css("display","none");

   navContainer.css({
      "transform":"translateX(0)",
      height:$("body").height()+80,
      
   });
});

menuBtn.on("click",function(){
  
    menuBtn.hide();
    filterDiv.css("display","none");

   navContainer.css({
      "transform":"translateX(0)",
      height:$("body").height()+80,
      
   });
});


$(".close-menu").on("click",function(){
   filterDiv.css("display","flex");
   if(menuHeading.css("display") === 'block'){
      menuBtn.css("display","none");
   }else{
      menuBtn.css("display","flex");
   }
    navContainer.css("transform","translateY(-100%)");
})

 



//    autocomplete



