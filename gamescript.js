var c=1
var h=0
var x=document.querySelector(".body")
x.addEventListener("mouseenter",function(){
    if(c<=10){
    var a=Math.floor((Math.random()*16)+1);
    var b =document.getElementById(a.toString())
    b.classList.add("newclass")
    }
    var t=document.getElementById(b)
    if (t.click=="True"){
        h=h+1
    }
    setTimeout(function(){
        b.classList.remove("newclass")
    },1000)
    c=c+1
    console.log(c)
}
)
// function element() {
//     ( "#element" ).click( function() {
//         return 0;
//     } );
// }
// if( element() == 0 ) {
//     alert( "yes" );
// } else {
//     alert( "no" );
// }






















// list = []
// onclick=function_name('this.id');
//  function new(parame)
//  list.push(parame)
// }
// function randomtile(b,c){
    // return Math.floor((Math.random()*(c-b+1))+1);
// }
// var a=randomtile(2,17);
// var b="blink"+a.toString()
// var c=document.getElementById(b)
// c.classList.add("newclass")
// i++
// setTimeout(function(){
    // c.classList.remove("newclass")
// },100)
// i++

    
// }
// const btn = document.querySelector('.body');
// btn.addEventListener('mouseenter',function(){

