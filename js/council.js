function addComm() {
  var page = document.getElementById("js-council");
  coms.map((com) => {
    const com_name = com.x;
    const members = com.members.reduce((acc, member) => {
      const list =
        '<div class="page-council-members-member">' +
        '<img src="' +
        getImagePath(com.x, member.n, member.pic) +
        '" class="page-council-members-member-img">' +
        '<h4 class="page-council-members-member-name">' +
        member.n +
        "</h4>" +
        '<h5 class="page-council-members-member-position">' +
        (member.p ? member.p : "") +
        "</h5>" +
        '<h5 class="page-council-members-member-position">' +
        member.y +
        " / " +
        member.m +
        "</h5><h5/>" +
        "</div>";
      acc += list;
      return acc;
    }, "");

    page.insertAdjacentHTML(
      "beforeend",
      '<div class="page-council">' +
        '<h3 class="page-council-title">' +
        com.n +
        "</h3>" +
        '<p class="page-council-text">' +
        com.t +
        "</p>" +
        '<div class="page-council-members">' +
        members +
        "</div>" +
        "</div>"
    );
  });
}

function getImagePath(com_name, member_name, member_pic) {
  if (member_pic === x) return "images/other/nopic.png";
  else
    return (
      "images/" +
      com_name +
      "/" +
      member_name.toLowerCase().replace(/\s+/g, "-") +
      ".jpg"
    );
}

function navDrawer() {
  var m_nav = document.getElementById("js-m-nav");
  m_nav.classList.toggle("m-nav-active");
}

function addClickListener(id, func) {
  document.getElementById(id).addEventListener("click", func);
}

function idToMembers(id) {
  if (id >= 0 && id < xcomm.members.length) return xcomm.members[id];
  id -= xcomm.members.length;
  if (id >= 0 && id < cam.members.length) return cam.members[id];
  id -= cam.members.length;
  if (id >= 0 && id < com.members.length) return com.members[id];
  id -= com.members.length;
  if (id >= 0 && id < nco.members.length) return nco.members[id];
  else return null;
}

const c = "Committee Head";
const x = "No Picture";

const xcomm = {
  x: "xcom",
  n: "The Executive Committee",
  t:
    "The Executive Committee oversees the other three committees, connects with other Purdue organizations, communicates with faculty, and plans New Student Orientation.",

    members: [
    {
      n: "Mahesh Gupta",
      p: "President",
      y: "Junior",
      m: "Genetics, Cell, Molecular, & Devt Biology",
    },
    {
      n: "Ellis Lin",
      p: "Vice President",
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Samantha Maari",
      p: "Secretary",
      y: "Sophomore",
      m: "Biology",
    },
    {
      n: "Jack Mrachek",
      p: "Treasurer",
      y: "Junior",
      m: "Planetary Science",
    },
    {
      n: "Sydney Moeller",
      p: "Public Relations Director",
      y: "Junior",
      m: "Neurobiology, Health & Disease",
    },
    {
      n: "Lauren Gartenhaus",
      p: "Internal Activities Director",
      y: "Junior",
      m: "Genetics, Cell, Molecular, & Devt Biology",
    },
    {
      n: "Pramey Kabra",
      p: "Webmaster",
      y: "Junior",
      m: "Computer Science, Data Science",
    },
  ],
};

const cam = {
  x: "cam",
  n: "Campus Outreach",
  t:
    "The Campus Outreach committee provides events to support the College of Science students and faculty. We provide opportunities for students to engage with each other and connect with faculty. Some events we have put on in the past are Game Nights, Tabling free snacks, and Snack&Chats with professors.",

  members: [
    {
      n: "Sophia Benjemia",
      p: c,
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Christina Warner",
      p: c,
      pic: x,
      y: "Junior",
      m: "Chemistry, Psychology",
    },
    {
      n: "Mahsa Farahani",
      y: "Sophomore",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Shreya Vasant",
      y: "Sophomore",
      m: "Data Science",
    },
    {
      n: "Kaitlynn Tran",
      y: "Sophomore",
      m: "Applied Statistics, Political Science",
    },
    {
      n: "Emily Juhl",
      y: "Freshman",
      m: "Biology",
    },
    {
      n: "Dhruv Shah",
      y: "Sophomore",
      m: "Biochemistry, Data Science",
    },
    {
      n: "Bryce Raber",
      pic: x,
      y: "Junior",
      m: "Genetics",
    },
    {
      n: "Anushka Shome",
      y: "Freshman",
      m: "Computer Science",
    },
    {
      n: "Valentina Micolisin",
      y: "Sophomore",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Kisal Wijesooriya",
      y: "Junior",
      m: "Math, Statistics",
    },
    {
      n: "Jang Lee",
      y: "Sophomore",
      m: "Computer Science, Data Science",
    },
  ],
};

const com = {
  x: "com",
  n: "Community Outreach",
  t:
    "The Community Outreach committee connects the College of Science and PSSC to the greater West Lafayette and Lafayette communities. We strive to support our community through various volunteer initiatives at Food Finders, mentorship with high school students, and “Science Day” at the local library where we perform science experiments with kids.",

  members: [
    {
      n: "Kinzie Gamaleldin",
      p: c,
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Christine Farrell",
      p: c,
      y: "Freshman",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Nadia Seye",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Caroline Zu",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Rashmika Manipati",
      y: "Sophomore",
      m: "Environmental Geosciences",
    },
    {
      n: "Evian Davenport",
      y: "Freshman",
      m: "Biology",
    },
    {
      n: "Allison Peterson",
      y: "Sophomore",
      m: "Biology, Secondary Education",
    },
    {
      n: "Casey Ernest",
      pic: x,
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Mia Martinez",
      y: "Freshman",
      m: "Chemistry",
    },
    {
      n: "Olivia Tan",
      y: "Junior",
      m: "Actuarial Science, Statistics, Economics",
    },
    {
      n: "Keela Zambre",
      y: "Sophomore",
      m: "Chemistry",
    },
    {
      n: "Brianne Checketts",
      y: "Junior",
      m: "Physics, Planetary Sciences",
    },
  ],
};

const nco = {
  x: "nco",
  n: "Networking and Career Outreach",
  t:
    "The Networking and Career Outreach committee provides professional growth opportunities. Through partnering with the Campus Outreach committee, we host multiple Snack&Chats to provide a space for students to interact with their STEM professors. Additionally, we provide pre-professional panels for students to learn more about opportunities after college.",

  members: [
    {
      n: "Elizabeth Martello",
      p: c,
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Sophia Parker",
      p: c,
      y: "Sophomore",
      m: "Health and Disease",
    },
    {
      n: "Connor Kuntz",
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Diana Hrushka",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Pooja Mathi",
      pic: x,
      y: "Senior",
      m: "Computer Science",
    },
    {
      n: "Claire Bohman",
      pic: x,
      y: "Junior",
      m: "Atmoshperic Science",
    },
    {
      n: "Jason Bodzy",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Minsoo Oh",
      pic: x,
      y: "Freshman",
      m: "Applied Mathematics",
    },
    {
      n: "Nathan Schneider",
      y: "Freshman",
      m: "Computer Science",
    },
    {
      n: "Paige Kertes",
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Patrick Van Gheem",
      y: "Freshman",
      m: "Biochemistry",
    },
    {
      n: "Rebekah Stryjewski",
      pic: x,
      y: "Sophomore",
      m: "Chemistry",
    },
    {
      n: "Shreyaa Karan",
      y: "Freshman",
      m: "Computer Science",
    },
  ],
};

/*
const alum = {

  x: "alum",
  n: "PSSC Alumni",
  t: " Alumni ",
  
  members : [     
    {
      n: "Mae Shu",
      p: "President",
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Sydney Brown",
      p: "Vice President",
      y: "Junior",
      m: "Atmospheric Science",
    },
    {
      n: "Bridget Kiley",
      p: "Secretary",
      y: "Senior",
      m: "Computer Science",
    },
    {
      n: "Priyanka Ranga",
      p: "Treasurer",
      y: "Senior",
      m: "Health and Disease",
    },
    {
      n: "Dithi Saxena",
      p: c,
      y: "Senior",
      m: "Computer Science",
    },
  ],
};
*/

const coms = [xcomm, cam, com, nco];
/* @todo - Add alum to coms and other necesarry changes */

function test(id) {
  var mem = idToMembers(id);
  alert(mem.n);
}

window.onload = function () {
  addClickListener("js-m-nav-click", navDrawer);
  addComm();
};
