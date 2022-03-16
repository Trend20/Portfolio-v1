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

$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});



