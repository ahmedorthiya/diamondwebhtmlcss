
let navContainer = $(".nav-container");
let menuBtn = $(".menu-btn");
let menuHeading = $(".menu-heading");
let filterDiv = $(".filters");
let furtherOptions = $(".further-options");
let mainOptions = $(".main-options");
let back = $(".back-to-main-options");



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


$(".gemstones-further-option").on("click",function(){options()});


$(".rings-further-option").on("click",function(){options()});

$(".neck-further-option").on("click",function(){options()});

$(".ear-further-option").on("click",function(){options();});


back.on("click",function(){
   mainOptionsDisplay({
      display:"flex",
      flexDirection:"column",
   })
   furtherOptionDisplay({
      display:'none'
   });
})


const options = function(){
   mainOptionsDisplay({
      display:'none'
   });
    furtherOptionDisplay({
       display:"flex",
       flexDirection:"column",
    });
}


const  mainOptionsDisplay = function(value){
    mainOptions.css(value);
}

const furtherOptionDisplay  =function(value){
   furtherOptions.css(value);
}
 



//    autocomplete



