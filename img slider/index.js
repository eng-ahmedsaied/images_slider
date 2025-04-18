var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount=sliderImages.length;

var currentSlide =1 ;

var slideNumberElement = document.getElementById('slide-number');

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElement =document.createElement("ul");
paginationElement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {

 var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
//كل data index جواه الرقم بتاعه
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);

}
document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl =document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop on bullets numbers
for (var i = 0; i < paginationsBullets.length; i++) {

        paginationsBullets[i].onclick=function(){

        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker();

        }
}

theChecker();

function nextSlide(){

if(nextButton.classList.contains('disabled')){
    
  } 
  else {

    currentSlide++;

    theChecker();

  }
}

function prevSlide(){
    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    
      } else {
    
        currentSlide--;
    
        theChecker();
    
      }
    }


function theChecker(){

    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    //بحط الاكتيف علي الصوره
    sliderImages[currentSlide - 1].classList.add('active');
    //ده بحط الاكتيف علي الارقام 
    paginationCreatedUl.children[currentSlide-1].classList.add('active');

    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');
    
      } else {
    
        // Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled');
    
      }

      if (currentSlide == slidesCount) {

        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled');
    
      } else {
    
        // Remove Disabled Class From Next Button
        nextButton.classList.remove('disabled');
    
      }

}

function removeAllActive(){

    sliderImages.forEach (function(img){

    img.classList.remove('active');

    })
    paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');
    
      });
}







