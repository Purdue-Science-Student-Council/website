// Career Fair page JavaScript
// Uses common.js for shared navigation functions

window.onload = function() {
    initCommonNav();
};

// Page-specific function for FAQ toggle
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    element.classList.toggle('active');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}