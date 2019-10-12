// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
var header = document.getElementById('section-header');
var section = document.getElementById('section');
console.log(header)
header.addEventListener('click', function () {
    section.style.display === 'none' ? section.style.display = 'block' : section.style.display = 'none'
});