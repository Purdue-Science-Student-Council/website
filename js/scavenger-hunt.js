var firebaseConfig = {
    apiKey: "AIzaSyDtMdiUnKSCriY0VrTK6RmHdDIvUiz-FrQ",
    authDomain: "nso-scavenger-hunt-2019.firebaseapp.com",
    databaseURL: "https://nso-scavenger-hunt-2019.firebaseio.com",
    projectId: "nso-scavenger-hunt-2019",
    storageBucket: "nso-scavenger-hunt-2019.appspot.com",
    appID: "1:519209424405:web:0a78bdef03d082c1",
};

function postReq(name,PUID,num,ref){
    if(postReqValidation(PUID,name,num)){
        var time = new Date(Date.now());
        var timestamp = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        var database = firebase.database().ref(ref);
        database.push({
            puid: PUID,
            name: name,
            timestamp: timestamp
        });
    }
}

function postReqValidation(PUID, name, num){
    if(PUID === undefined || name === undefined) return false;
    if(PUID === "" || name === "") return false;
    if(PUID === "PUID "+num) return false;
    if(name === "Name "+num) return false;
    return true;
}

window.onload = function() {
    firebase.initializeApp(firebaseConfig);
    addClickListener("js-m-nav-click", navDrawer);
    myAlert();
    postReq("init","0",1,"init");
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
        "This building is home to the Biological Sciences Department. In addition to a large lecture hall, which was remodeled last summer, there is teaching laboratory space, and many research labs belonging to professors in this building. To get here, you will need to cross state street and walk right past Marriot Hall, which is a nice place to stop for lunch or coffee on your way to and from classes.",
        "This building is the home of the Computer Science Department. This building, which is the newest in all of the College of Science, is home to classrooms and research and teaching laboratories. You will find this building across the street from the armory on one side and from the University Street Parking Garage on the other side. There is also a large study space on the first floor, the Lawson Commons, along with a great Cafe ‘The Port’.",
        "This building is a building where you will find a majority of the Statistics Department faculty. This building is very close to the start of the Scavenger Hunt as well as Class of 1950 Lecture Hall and across the street from Elliot Hall of Music, places where you will likely have multiple exams and classes this year.",
        "Most students are familiar with the home of the Mathematics Department, due to having walked under this building a number of times. In addition to the first floor lecture hall in this building, many of the College of Science academic advisors have their offices on the second floor, which is also the location of the math help room. This building is also very close to the start of the scavenger hunt, and is right across from the recitation building, another place you will likely have class sometime this year.",
        "The Chemistry Department is housed in two buildings that are connected by a skywalk. The building that you will be visiting today has one of the largest lecture halls on campus, the Chemistry Help Room, and the Catalyst Cafe. The building connected to this destination is the Herbert C. Brown Laboratory of Chemistry, named after one of the Chemistry Department’s two Nobel prize winning faculty members. Most chemistry lab classes will be in Brown and the associated lectures will likely be in the destination you are trying to find.",
        "This building is the home of the Physics and Astronomy department. You’ll likely find yourself here on the first floor for lectures or on the second and third floors for recitations. A few floors beneath is where you can find Purdue University’s particle accelerator, which also offers tours to students. This destination is next to Materials and Electrical Engineering building, which is a nice place to stop for Starbucks.",
        "The Earth, Atmosphere, and Planetary Science (EAPS) Department doesn’t have it’s own building, but it does have the third floor of the Civil Engineering building. This building is just past the engineering fountain and right off of the engineering mall.",
    ],
    question : [
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
        "Possible answers for this location’s challenge question: ",
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
                '<p>' + "You  have officially completed the NSO Scavenger hunt. Correctly enter the first and last names as well as PUID’s of your team to be entered into the raffle that starts at 3:30 PM! Head back on over to where the scavenger hunt started to meet with advisors and professors from your department. Also, check out the Q&A session schedule to meet with students from your department and ask any questions you might have!" +
                '</p>' +
                '<form id="completionForm">' +
                '<div>' +
                '<input type="text" id="fullname_1" name="fullname_1" value="Name 1"></input>' +
                '<input type="text" id="PUID_1" name="PUID_1" value="PUID 1"></input>' +
                '</div>' + '<div>' +
                '<input type="text" id="fullname_2" name="fullname_2" value="Name 2"></input>' +
                '<input type="text" id="PUID_2" name="PUID_2" value="PUID 2"></input>' +
                '</div>' + '<div>' +
                '<input type="text" id="fullname_3" name="fullname_3" value="Name 3"></input>' +
                '<input type="text" id="PUID_3" name="PUID_3" value="PUID 3"></input>' +
                '</div>' + '<div>' +
                '<input type="text" id="fullname_4" name="fullname_4" value="Name 4"></input>' +
                '<input type="text" id="PUID_4" name="PUID_4" value="PUID 4"></input>' +
                '</div>' + '<div style="align-self: center;">' +
                '<input type="submit" value="Submit" class="scavengerButton" ></input>' +
                '</div>' +
                '</form>' +
                '<p>' + "Interested in joining the Purdue Science Student Council? Our Callout is August 27th 6:30 – 7:30 PM in WTHR 200. We look forward to meeting you!" +
            '</div>'
        );
        $("#completionForm").submit(submitCallback);
}

function submitCallback(){
    for(var i = 1; i<= 4; i++){
        var f = $("#fullname_"+i).val();
        var p = $("#PUID_"+i).val();
        postReq(f,p,i,"submissions");
    }
    alert("Thank you for your submission!");
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