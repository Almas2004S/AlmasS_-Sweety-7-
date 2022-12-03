function initMap(){
             
             var pos = {lat:40.4423223542656, lng:-79.99766892679453};
            
             var map = new google.maps.Map(document.getElementById("map"),{
             zoom: 10,
             center: pos

             });
             
             var marker = new google.maps.Marker({
             position: pos,
             map: map,
             title:"Pittsburgh"

             });
             window.initMap = initMap;
         }

function Calla(){
  var result = true;
  var a = document.forms.Calla.name.value;
  var b = document.forms.Calla.email.value;
  var c = document.forms.Calla.phone.value;


    var phone_v= /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,2}\)?([\-\. ])?\d{0,2}/;
  var email_v= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var name_v=/^[A-Z]/;
    
   
    document.getElementById("phone_message").innerHTML ="";
    document.getElementById("name_message").innerHTML ="";
  document.getElementById("email_message").innerHTML ="";
  

     if (c==null || c=="" || phone_v.test(c) == false) { 
        document.getElementById("phone_message").innerHTML="Введите правильно свой номер";
        result = false;
    }

  if(b==null || b=="" || email_v.test(b)==false){
    document.getElementById("email_message").innerHTML="Нет такого формата";
    result = false;
  }
    if(a==null || a=="" || name_v.test(a)==false){
      document.getElementById("name_message").innerHTML="Пишите заглавными буквами";
    result = false;
  }
  




    if(result == true){

      if(confirm("Проверьте пожалуйста правильность")==true){
   confirm("Name : "+a +"\n"+"Email : " + b +"  \n "+"Phone : " + c +" \n ") }
        document.getElementById("Calla").reset(); 
       alert("Ближайшее время вам позвонят");

    } 
   if(result == true){
    document.location.href = "index.html";
   }
   

}
   
 
      
      function menu(){
      	window.location="https://www.figma.com/file/lMUMS5xY5giK5By4ljvGKb/food-world?node-id=0%3A1";
      } 
   
     var mode = document.getElementById("nightandlight");
     mode.onclick = function(){
     	var q = document.getElementById("style");

     	if(q.getAttribute("href")=="style.css"){
     		q.href = "dark and light mode.css";
     	}
     	else{
     		q.href ="style.css";
     	}
     }
     let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
