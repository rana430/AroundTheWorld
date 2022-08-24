var sliderImages= Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;


//Set current slide
var currentSlide=1;

//slide number string
var slideNum =document.getElementById('slide-num');

// next and prev buutons

var nextbtn=document.getElementById('next');
var prevbtn=document.getElementById('prev');


nextbtn.onclick=nextslide;
prevbtn.onclick=prevslide;


//create main ul element


var pagin =document.createElement('ul');

//set id on ul
pagin.setAttribute('id','pagin-ul');


//loop for li 

for(var i=1; i<=slidesCount  ;i++){
    var paginItem =document.createElement('li');

    paginItem.setAttribute('data-index',i);

    //set item cintent

    paginItem.appendChild(document.createTextNode(i));

    //append item to the main list

    pagin.appendChild(paginItem);

}

//add the created ul element to the page

document.getElementById('indicator').appendChild(pagin);

var pagincreateUl = document.getElementById('pagin-ul');

var paginBullets= Array.from(document.querySelectorAll('#pagin-ul li'));

//loop through all bullets items

for(var i=0;i<paginBullets.length;i++){

    paginBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        cheaker();
    }

}


cheaker();


//Next slide functon

function nextslide(){


    if(nextbtn.classList.contains('disabled')){
        return false;

    }
    else{
    currentSlide++;
    cheaker();

    }

}
function prevslide(){
    if(prevbtn.classList.contains('disabled')){
        return false;

    }
    else{
    currentSlide--;
    cheaker();

    }
}

//cheaker function

function cheaker(){
    


    removeAllactive();
    //set current slide active


    sliderImages[currentSlide - 1].classList.add('active');


    
    pagincreateUl.children[currentSlide-1].classList.add('active');
    

    if(currentSlide==1){
        prevbtn.classList.add('disabled');
    }
    else{
        prevbtn.classList.remove('disabled');
    }
    if(currentSlide==sliderImages.length){
        nextbtn.classList.add('disabled');
    }
    else{
        nextbtn.classList.remove('disabled');
    }
   

}


function removeAllactive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });


    paginBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}

