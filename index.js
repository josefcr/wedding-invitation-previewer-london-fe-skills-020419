 document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener('keyup', e => copyDiv(e)) 
 })
 
  document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener('keyup', e => copyDiv2(e)) 
 })
 
  document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener('keyup', e => copyDiv3(e)) 
 })
   
  document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener('keyup', e => copyDiv4(e)) 
 })
 
   document.addEventListener("DOMContentLoaded", function(){
  document.body.addEventListener('keyup', e => copyDiv5(e)) 
 })
   


document.getElementById('button1').addEventListener('click', function (event){
   var element = document.getElementById("mockup");
  element.classList="art";
});

document.getElementById('button2').addEventListener('click', function (event){
   var element = document.getElementById("mockup");
  element.classList="sea";
});
   
document.getElementById('button3').addEventListener('click', function (event){
   var element = document.getElementById("mockup");
  element.classList='trees';
});
      
   
      function copyDiv(e) {
    var firstDivContent = document.getElementById('firstname').value;
    console.log(firstDivContent)
    
    var secondDivContent = document.getElementById('first');
    secondDivContent.innerText = firstDivContent;}
    
          function copyDiv2(e) {
    var firstDivContent = document.getElementById('secondname').value;
    console.log(firstDivContent)
    
    var secondDivContent = document.getElementById('second');
    secondDivContent.innerText = firstDivContent;}
    
              function copyDiv3(e) {
    var firstDivContent = document.getElementById('lastname').value;
    console.log(firstDivContent)
    
    var secondDivContent = document.getElementById('last');
    secondDivContent.innerText = firstDivContent;}
    
                 function copyDiv4(e) {
    var firstDivContent = document.getElementById('date').value;
    console.log(firstDivContent)
    
    var secondDivContent = document.getElementById('weddingdate');
    secondDivContent.innerText = firstDivContent;}
    
                     function copyDiv5(e) {
    var firstDivContent = document.getElementById('location').value;
    console.log(firstDivContent)
    
    var secondDivContent = document.getElementById('weddinglocation');
    secondDivContent.innerText = firstDivContent;}
    
    
    
    
    
    