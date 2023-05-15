let container = document.querySelector(".container");
var i;
for(i = 0 ; i < 70 ;i++){
    // var  to create element to html 
    let blocks =document.createElement('div');
    // to add class to html
    blocks.classList.add('blocks');
    // to add element to html
    container.appendChild(blocks)
}
// must use animeJs lib
function generate(){
    anime({
        // to select class
        targets : ".blocks",
        // an css attr in transition 
        translateX : function(){
            // to generate number between -700 and 700
            return anime.random(-700,700);
        },
        translateY : function(){
            return anime.random(-500,500);
        },
        scale : function(){
            return anime.random(1,5);
        }
    })
}
generate();
function circle(){
    let circle_btn = document.querySelector(".circle_btn");
    container.classList.toggle("circle");
}

