const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger');
	const navList = document.querySelector('.nav-list ul');

	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		navList.classList.toggle('active');
	});
});

function showImage(src) {
	const popupContainer = document.getElementById('popup-container');
	const popupImage = document.getElementById('popup-image');

	popupImage.src = `./img/${src}`;
	popupContainer.style.display = 'flex';
}

document.getElementById('popup-container').addEventListener('click', function() {
	this.style.display = 'none';
});


// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Function to open the modal with the image
function openModal(imgSrc, imgAlt) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = imgAlt;
}

// Add click event listeners to all images within .img-container
var imgContainers = document.querySelectorAll('.img-container');
imgContainers.forEach(function(container) {
  var img = container.querySelector('img');
  img.onclick = function() {
    openModal(this.src, this.alt);
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close the modal
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

