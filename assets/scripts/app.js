var accordions = document.getElementsByClassName("accordion");
var icons = document.getElementsByClassName("icon-question");

addListeners();
activateFirstAccordion();

function addListeners() {
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", accordionHandler);
    }
}

function activateFirstAccordion() {
    accordions[0].classList.toggle("active");
    icons[0].classList.toggle("active");

    accordions[0].nextElementSibling.style.display = "block";
}

function accordionHandler() {
    this.classList.toggle("active");

    var iconsOfThisAccordion = this.getElementsByClassName("icon-question");
    for (let i = 0; i < iconsOfThisAccordion.length; i++) {
        iconsOfThisAccordion[i].classList.toggle("active");
    }

    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    }
    else {
        answer.style.display = "block";
    }
}
