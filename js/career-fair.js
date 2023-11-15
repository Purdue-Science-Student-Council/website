function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
};

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
};


window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
};

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    element.classList.toggle('active');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

let currentSlide = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

// Show the first slide when the page loads
showSlide(currentSlide);
