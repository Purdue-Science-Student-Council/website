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
  t: "The Executive Committee oversees the other three committees, connects with other Purdue organizations, communicates with faculty, and plans New Student Orientation.",

  members: [
    {
      n: "Mahesh Gupta", //Alum
      p: "President",
      y: "Senior",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Ellis Lin",  //Alum
      p: "Vice President",
      y: "Senior",
      m: "Chemistry",
    },
    {
      n: "Samantha Maari",
      p: "Secretary",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Jack Mrachek", //Alum
      p: "Treasurer",
      y: "Senior",
      m: "Planetary Science",
    },
    {
      n: "Sydney Moeller", //Alum
      p: "Public Relations Director",
      y: "Senior",
      m: "Neurobiology, Health & Disease",
    },
    {
      n: "Lauren Gartenhaus", //Alum
      p: "Internal Activities Director",
      y: "Senior",
      m: "Genetics, Cell, Molecular, & Devt Biology",
    },
    {
      n: "Pramey Kabra", //Alum
      p: "Webmaster",
      y: "Senior",
      m: "Computer Science, Data Science",
    },
  ],
};

const cam = {
  x: "cam",
  n: "Campus Outreach",
  t: "The Campus Outreach committee provides events to support the College of Science students and faculty. We provide opportunities for students to engage with each other and connect with faculty. Some events we have put on in the past are Game Nights, Tabling free snacks, and Snack&Chats with professors.",

  members: [
    {
      n: "Sophia Benjemia",
      p: c,
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Christina Warner", //Alum
      p: c,
      y: "Senior",
      m: "Chemistry, Psychology",
    },
    {
      n: "Mahsa Farahani",
      y: "Junior",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Shreya Vasant",
      y: "Junior",
      m: "Data Science, Brain and Behavioral Science",
    },
    {
      n: "Kaitlynn Tran", //Exec
      y: "Junior",
      m: "Applied Statistics, Political Science",
    },
    {
      n: "Emily Juhl",
      y: "Sophomore",
      m: "Biology",
    },
    {
      n: "Dhruv Shah",
      y: "Junior",
      m: "Biochemistry, Data Science",
    },
    {
      n: "Bryce Raber",
      pic: x,
      y: "Senior",
      m: "Genetics",
    },
    {
      n: "Anushka Shome", //Exec
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Valentina Micolisin", //Campus Head
      y: "Junior",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Jang Lee",
      y: "Junior",
      m: "Computer Science, Data Science",
    },
    {
      n: "Taaran Sajalvinodh",
      pic: x,
      y: "Senior",
      m: "Chemistry ACS",
    },
    {
      n: "Leo Guido",
      y: "Freshman",
      m: "Applied Math",
    },
    {
      n: "Addisyn Hamm",
      pic: x,
      y: "Freshman",
      m: "Genetics",
    },
    {
      n: "Rishabh Kottakota",
      y: "Sophomore",
      m: "Cell, Molecular, and Developmental Biology",
    },
    {
      n: "Cara Suh",
      pic: x,
      y: "Freshman",
      m: "Physics",
    },
    {
      n: "Sairam Ande",
      y: "Freshman",
      m: "Computer Science",
    },
    {
      n: "Rianna Deckowitz",
      y: "Junior",
      m: "Planetary Science",
    },
  ],
};

const com = {
  x: "com",
  n: "Community Outreach",
  t: "The Community Outreach committee connects the College of Science and PSSC to the greater West Lafayette and Lafayette communities. We strive to support our community through various volunteer initiatives at Food Finders, mentorship with high school students, and “Science Day” at the local library where we perform science experiments with kids.",

  members: [
    {
      n: "Kinzie Gamaleldin", //Alum
      p: c,
      y: "Senior",
      m: "Biochemistry",
    },
    {
      n: "Christine Farrell", //Exec
      p: c,
      y: "Sophomore",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Nadia Seye", //Alum
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Caroline Zu", //Exec
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Rashmika Manipati",
      y: "Junior",
      m: "Environmental Geosciences",
    },
    {
      n: "Allison Peterson", //Community Head
      y: "Junior",
      m: "Biology, Secondary Education",
    },
    {
      n: "Mia Martinez", //Exec
      y: "Sophomore",
      m: "Chemistry",
    },
    {
      n: "Olivia Tan", //Alum
      y: "Senior",
      m: "Actuarial Science, Statistics, Economics",
    },
    {
      n: "Keela Zambre", 
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Brianne Checketts", //Alum
      y: "Senior",
      m: "Physics, Planetary Sciences",
    },
    {
      n: "Brooklin Shoulders",
      y: "Freshman",
      m: "Biochemistry",
    },
    {
      n: "Grace Lubbers", //Community Head
      y: "Freshman",
      m: "Actuarial Science",
    },
    {
      n: "Elliot Shi",
      y: "Freshman",
      m: "Statistics",
    },
    {
      n: "Talia Kidder",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Katherine Zwiener",
      y: "Freshman",
      m: "Biochemistry",
    },
    {
      n: "Sarah Cronin", //Exec
      y: "Sophomore",
      m: "Chemistry",
    },
  ],
};

const nco = {
  x: "nco",
  n: "Networking and Career Outreach",
  t: "The Networking and Career Outreach committee provides professional growth opportunities. Through partnering with the Campus Outreach committee, we host multiple Snack&Chats to provide a space for students to interact with their STEM professors. Additionally, we provide pre-professional panels for students to learn more about opportunities after college.",

  members: [
    {
      n: "Elizabeth Martello", //Alum
      p: c,
      y: "Senior",
      m: "Biochemistry",
    },
    {
      n: "Sophia Parker",
      p: c,
      y: "Junior",
      m: "Health and Disease",
    },
    {
      n: "Jason Bodzy",
      y: "Junior",
      m: "Computer Science",
    },
    {
      n: "Minsoo Oh", //NCO Head
      y: "Sophomore",
      m: "Applied Mathematics",
    },
    {
      n: "Nathan Schneider",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Paige Kertes", //Alum
      y: "Senior",
      m: "Biochemistry",
    },
    // {
    //   n: "Patrick Van Gheem",
    //   y: "Freshman",
    //   m: "Biochemistry",
    // },
    {
      n: "Rebekah Stryjewski",
      y: "Junior",
      m: "Chemistry",
    },
    // {
    //   n: "Shreyaa Karan",
    //   y: "Sophomore",
    //   m: "Computer Science",
    // },
    {
      n: "Yohaan Chokhany",
      pic: x,
      y: "Freshman",
      m: "Computer Science",
    },
    {
      n: "Sadie Poirier",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Shiv Kothari",
      y: "Freshman",
      m: "Artificial Intelligence",
    },
    {
      n: "Morgan DesEnfants",
      y: "Sophomore",
      m: "Neurobiology & Physiology and Spanish",
    },
    {
      n: "Evangelina Kalathoti",
      pic: x,
      y: "Freshman",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Keya Dutta",
      y: "Freshman",
      m: "Chemistry",
    },
    {
      n: "Mehak Virdy",
      y: "Freshman",
      m: "Computer Science",
    },
    {
      n: "Caleb Buening",
      y: "Freshman",
      m: "Computer Science and Artificial Intelligence",
    },
  ],
};

const alum = {
  x: "alum",
  n: "PSSC Alumni",
  t: "PSSC Alumni are a vital part of PSSC and remain as advisors and friends. They often help in planning and volunteer in events!",

  members: [
    {
      n: "Mae Shu",
      p: "President",
      y: "2023",
      m: "Biology",
    },
    {
      n: "Bridget Kiley",
      p: "Secretary",
      y: "2023",
      m: "Computer Science",
    },
    {
      n: "Priyanka Ranga",
      y: "2023",
      m: "Health and Disease",
    },
    {
      n: "Dithi Saxena",
      p: "Committee Head - Campus",
      y: "2023",
      m: "Computer Science",
    },
    {
      n: "Connor Kuntz",
      y: "2023",
      m: "Biology",
    },
    {
      n: "Casey Ernest",
      pic: x,
      y: "2023",
      m: "Biology",
    },
  ],
};

const coms = [xcomm, cam, com, nco, alum];
/* @todo - Add alum to coms and other necesarry changes */

function test(id) {
  var mem = idToMembers(id);
  alert(mem.n);
}

window.onload = function () {
  addClickListener("js-m-nav-click", navDrawer);
  addComm();
};
