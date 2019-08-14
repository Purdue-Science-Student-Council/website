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

const locData = {
    name : ["Lilly Hall of Life Science", "Lawson Computer Science Building", "Felix Haas Hall", "Mathematical Sciences Building", "Wetherill Hall of Chemistry", "Purdue Physics Building", "Hampton Hall"],
    description : [
        "This is Lilly Hall of Life Science, home of Biology.",
        "This is Lawson Computer Science Building, home of Computer Science.",
        "This is Felix Haas Hall, home of Statistics.",
        "This is Mathematical Sciences Building, home of Mathematics.",
        "This is Wetherill Hall of Chemistry, home of Chemistry.",
        "This is Purdue Physics Building, home of Physics.",
        "This is Hampton Hall, home of EAPS, Earth, Atmospheric, and Planetary Science.",
    ],
    question : [
        "Carbohydrate: An organic compound to which hydrogen and oxygen are attached; the hydrogen and oxygen are in a 3:1 ratio; examples include sugars, starches, and cellulose",
        "In a party with 5 people, it is possible that 2 people have 3 friends and 3 people have 2 friends, as shown in the graph to the right?",
        "Determine whether the following is a statistical question. How many internet searches do Purdue University undergrads perform each day?",
        "A function F is defined by F(x)=|x+4|. For what values of x is the graph of f not differentiable?",
        "Which of the following gases has the weakest attractive forces between particles?",
        "A race car going around a flat, unbanked circular track gradually increases speed as it completes one full trip around the track. Which of the following can explain why the car gains speed?",
        "If a glacier experiences greater ablation than accumulation, which of the following scenarios will occur?",
    ],
    correct : [1,0,0,0,2,2,3]
};

const ansChoices = [
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["X = -4", "X = 4", "X = 0", "The function is differential over its entire domain."],
    ["CO2", "NO", "He", "HCl"],
    ["A component of the frictional force exerted by the ground on the tires is directed toward the center of the circle.", "A component of the frictional force exerted by the ground on the tires is in the direction of motion.", "The car’s velocity and acceleration are perpendicular"],
    ["The glacier will retreat", "The glacier will experience calving", "The glacier will advance", "The glacier will experience sublimation"]
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
                '<h3 class="page-council-title">' + "Congratulations!" +
                '</h3>' +
                '<p>' + "You  have officially completed the NSO Scavenger hunt. Enter the first and last names as well as PUID’s of your teammates to be entered into the raffle that starts at 3:30 PM! Head back on over to where the scavenger hunt started to meet with advisors and professors from your department. Also, check out the Q&A session schedule to meet with students from your department and ask any questions you might have!" +
                '</p>' +
                '<form>' +
                '<div>' +
                '<input type="text" name="fullname_1" value="Name 1"></input>' +
                '<input type="text" name="PUID_1" value="PUID 1"></input>' +
                '</div>' + '<div>' +
                '<input type="text" name="fullname_2" value="Name 2"></input>' +
                '<input type="text" name="PUID_2" value="PUID 2"></input>' +
                '</div>' + '<div>' +
                '<input type="text" name="fullname_3" value="Name 3"></input>' +
                '<input type="text" name="PUID_3" value="PUID 3"></input>' +
                '</div>' + '<div>' +
                '<input type="text" name="fullname_4" value="Name 4"></input>' +
                '<input type="text" name="PUID_4" value="PUID 4"></input>' +
                '</div>' + '<div style="align-self: center;">' +
                '<input type="submit" value="Submit" class="scavengerButton" ></input>' +
                '</div>' +
                '</form>' +
                '<p>' + "Interested in joining the Purdue Science Student Council? Our Callout is August 27th 6:30 – 7:30 PM in WTHR 200. We look forward to meeting you!" +
            '</div>'
        );
}

function injectNextClue(){
    var page = document.getElementById("js-body");
    var ansBtns = "";
    for(var i=0; i<ansChoices[locNo].length; i++){
        var c = 'onClick="answer' + i + '()"';
        ansBtns += '<button class="scavengerButton"'+ c +'>' + ansChoices[locNo][i] +
                '</button>';
    }
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
                ansBtns +
            '</div>'
        );
}

function answer0(){
    if(locData.correct[locNo] === 0){
        alert("Correct! Scroll down for the next clue");
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function answer1(){
    if(locData.correct[locNo] === 1){
        alert("Correct! Scroll down for the next clue");
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function answer2(){
    if(locData.correct[locNo] === 2){
        alert("Correct! Scroll down for the next clue");
        myAlert();
    } else {
        alert("Wrong, try again");
    }
}

function answer3(){
    if(locData.correct[locNo] === 3){
        alert("Correct! Scroll down for the next clue");
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