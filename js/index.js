const navbar = document.querySelector("#myTopnav");
const topContainer = document.querySelector("#top-container")

// if navbar is open on smaller screen hide the mountain image
if (topContainer.offsetWidth <= 600) {
    $(document).ready(function () {
        $('.icon').click(function () {
            $(".mountain-img").toggleClass("small-screen");
        });
    });
}

function navbarToggle() {
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }
}

// go to top of page btn
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        document.querySelector('.back-to-top-button').style.display = 'block';
    } else {
        document.querySelector('.back-to-top-button').style.display = 'none';
    }
});


// MODAL JS

// Store all buttons and elements
const openModalBtns = document.querySelectorAll("[data-modal-target]");
const closeModalBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");


// open modal when contact me button clicked
openModalBtns.forEach(button => {

    button.addEventListener('click', () => {

        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        $('.modal').css('visibility', 'visible')
    })
})

// Close modal if outside of form is clicked 
overlay.addEventListener('click', () => {

    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {

        closeModal(modal);
    })
})

closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {

        // get parent of button with class .modal
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})


// open modal function
function openModal(modal) {

    modal.classList.add('active');
    overlay.classList.add('active');
}


// close modal function
function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


const year = new Date().getFullYear();
$(".copyright").html('© ' + year + '  M. Enes Celik.');
