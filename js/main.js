$(document).ready(function(){


     // $('.info').on('mouseenter',function(){
     //
     //      $(this).css("top", '100px');
     //
     // }).on('mouseenter',function(){
     //
     //      $(this).css("bottom", '100px');
     //
     // }



});





function dropMenu(){
     var m = document.getElementById('responsive_menu');

     if(m.className == "menu_log"){
          m.className += " responsive";

     }else{
          m.className = "menu_log";
     }
}



// create a variable containing 1
var sliderIndex = 1;
//start with first image
showImg(sliderIndex);
//
function plusDivs(n){
     // adds image to the slider index
     showImg(sliderIndex += n)
}
function showImg(n){
     var i;
     var x = document.getElementsByClassName('slides');
     var info = document.getElementsByClassName('photoinfo');


     // if the current image(n) is greater that all other images then make slider Index equal one
     if(n > x.length){ sliderIndex = 1}

     // if the current image(n) is less that 1 make images equal to all images length ??
     if(n < 1){ sliderIndex = x.length; }
     // if 0 is smaller that slides length add one until its equal
     for( i = 0; i < x.length; i++){
          // for every image until the last make style display none

          //x = slides i = forloop number and array index
          x[i].style.display = "none";
          info[i].style.display = "none";
     }
     x[sliderIndex-1].style.display = "block";
     info[sliderIndex-1].style.display = "block";

}
