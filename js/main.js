//Get the button:
let myButton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		myButton.style.display = 'block';
	} else {
		myButton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



// navbar background color
// let myNavbar = document.getElementById('header');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNavbar.classList.add("nav-colored");
//         myNavbar.classList.remove("nav-transparent");
//     } 
//     else {
//         myNavbar.classList.add("nav-transparent");
//         myNavbar.classList.remove("nav-colored");
//     }
// };


// applying the active class
const linkElements = document.getElementsByTagName('li');

linkElements.forEach(element =>{
   element.addEventListener('click', function(){
    // if(this.href === element){
    //     element.classList.add(active);
    // }
    console.log('Clicked');
   })
})



