window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    myAlert();
};

function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
}

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
}

var locNo = undefined;
var initLocNo = undefined;

const locName = ["Location 0", "Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6"];
const locDescription = [
    "This is location 0, home of Biology. Add more description",
    "This is location 1, home of Chemistry. Add more description",
    "This is location 2, home of Computer Science. Add more description",
    "This is location 3, home of EAPS. Add more description",
    "This is location 4, home of Mathematics. Add more description",
    "This is location 5, home of Physics. Add more description",
    "This is location 6, home of Statistics. Add more description",
];

const locData = {
    name : ["Location 0", "Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6"],
    description : [
        "This is location 0, home of Biology. Add more description",
        "This is location 1, home of Chemistry. Add more description",
        "This is location 2, home of Computer Science. Add more description",
        "This is location 3, home of EAPS. Add more description",
        "This is location 4, home of Mathematics. Add more description",
        "This is location 5, home of Physics. Add more description",
        "This is location 6, home of Statistics. Add more description",
    ],
    question : [
        "What is the question for location 0?",
        "What is the question for location 1?",
        "What is the question for location 2?",
        "What is the question for location 3?",
        "What is the question for location 4?",
        "What is the question for location 5?",
        "What is the question for location 6?",
    ],
    correct : [1,0,2,1,2,0,0]
};

const ansChoices = [
    ["Wrong 1", "Correct", "Wrong 2"],
    ["Correct", "Wrong 1", "Wrong 2"],
    ["Wrong 1", "Wrong 2", "Correct"],
    ["Wrong 1", "Correct", "Wrong 2"],
    ["Wrong 1", "Wrong 2", "Correct"],
    ["Correct", "Wrong 1", "Wrong 2"],
    ["Correct", "Wrong 1", "Wrong 2"]
];

function myAlert() {

    if(locNo === undefined) {
        locNo = rand(7);
        injectNextClue();
    } else {
        locNo = (locNo + 1)%7;
        if(locNo === initLocNo){
            injectEnding();
        } else {
            injectNextClue();
        }
    }
}

function injectEnding(){
    var page = document.getElementById("js-body");
    page.insertAdjacentHTML("beforeend",
            '<div class="scavengerBox">' +
                '<h3 class="page-council-title">' + "Congratualtions!" +
                '</h3>' +
                '<p>' + "You've completed the New Student Orientation Scavenger Hunt! Please enter your name and PUID to prove your completion. Don't forget to pick up your gift of completion at HERE!!!" +
                '</p>' +
                '<form>' +
                '<input type="text" name="fullname" value="Name Here"></input>' +
                '<input type="text" name="PUID" value="PUID Here"></input>' +
                '<input type="submit" value="Submit" class="scavengerButton"></input>' +
                '</form>' +
            '</div>'
        );
}

function injectNextClue(){
    var page = document.getElementById("js-body");
    page.insertAdjacentHTML("beforeend",
            '<div class="scavengerBox">' +
                '<h3 class="page-council-title">' + locData.name[locNo] +
                '</h3>' +
                '<img src="' + getImagePath(locNo) + '" class="page-council-members-member-img">' +
                '<p>' + locData.description[locNo] +
                '</p>' +
                '<hr class="page-divider-dark"></hr>' +
                '<h4 class="page-council-title">' + locData.question[locNo] +
                '</h4>' +
                '<button class="scavengerButton" onClick="answer0()">' + ansChoices[locNo][0] +
                '</button>' +
                '<button class="scavengerButton" onClick="answer1()">' + ansChoices[locNo][1] +
                '</button>' +
                '<button class="scavengerButton" onClick="answer2()">' + ansChoices[locNo][2] +
                '</button>' +
            '</div>'
        );
}

function answer0(){
    if(locData.correct[locNo] === 0){
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function answer1(){
    if(locData.correct[locNo] === 1){
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function answer2(){
    if(locData.correct[locNo] === 2){
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function rand(arg){
    initLocNo = Math.floor(Math.random() * arg);
    return initLocNo;
}

function getImagePath(arg) {
    return 'images/scavengerHunt/' + arg + '.jpg';
}