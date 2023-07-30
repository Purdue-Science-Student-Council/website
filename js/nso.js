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
  
