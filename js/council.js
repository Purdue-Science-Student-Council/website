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
      n: "Christine Farrell", //Exec
      p: "President",
      y: "Junior",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Mia Martinez", //Exec
      p: "Vice President",
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Samantha Maari",
      p: "Secretary",
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Caroline Zu", //Exec
      y: "Senior",
      p: "Treasurer",
      m: "Biochemistry",
    },
    {
      n: "Kaitlynn Tran", //Exec
      p: "Public Relations Director",
      y: "Senior",
      m: "Applied Statistics, Political Science",
    },
    {
      n: "Sarah Cronin", //Exec
      p: "Internal Activities Director",
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Anushka Shome", //Exec
      p: "Webmaster",
      y: "Junior",
      m: "Computer Science",
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
      y: "Senior",
      m: "Biochemistry",
    },
    {
      n: "Valentina Micolisin", //Campus Head
      p: c,
      y: "Senior",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Mahsa Farahani",
      y: "Senior",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Shreya Vasant",
      y: "Senior",
      m: "Data Science, Brain and Behavioral Science",
    },
    {
      n: "Emily Juhl",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Dhruv Shah",
      y: "Senior",
      m: "Biochemistry, Data Science",
    },
    {
      n: "Jang Lee",
      y: "Senior",
      m: "Computer Science, Data Science",
    },
    {
      n: "Taaran Sajalvinodh",
      pic: x,
      y: "Sophomore",
      m: "Chemistry ACS",
    },
    {
      n: "Leo Guido",
      y: "Sophomore",
      m: "Applied Math",
    },
    {
      n: "Addisyn Hamm",
      pic: x,
      y: "Sophomore",
      m: "Genetics",
    },
    {
      n: "Rishabh Kottakota",
      y: "Junior",
      m: "Cell, Molecular, & Developmental Biology",
    },
    {
      n: "Cara Suh",
      pic: x,
      y: "Sophomore",
      m: "Physics",
    },
    {
      n: "Sairam Ande",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Rianna Deckowitz",
      y: "Senior",
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
      n: "Allison Peterson", //Community Head
      p: c,
      y: "Senior",
      m: "Biology, Secondary Education",
    },
    {
      n: "Grace Lubbers", //Community Head
      p: c,
      y: "Sophomore",
      m: "Actuarial Science",
    },
    {
      n: "Rashmika Manipati",
      y: "Senior",
      m: "Environmental Geosciences",
    },
    {
      n: "Keela Zambre", 
      y: "Senior",
      m: "Chemistry",
    },
    {
      n: "Brooklin Shoulders",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Elliot Shi",
      y: "Sophomore",
      m: "Statistics",
    },
    {
      n: "Talia Kidder",
      y: "Senior",
      m: "Biology",
    },
    {
      n: "Katherine Zwiener",
      y: "Sophomore",
      m: "Biochemistry",
    },
  ],
};

const nco = {
  x: "nco",
  n: "Networking and Career Outreach",
  t: "The Networking and Career Outreach committee provides professional growth opportunities. Through partnering with the Campus Outreach committee, we host multiple Snack&Chats to provide a space for students to interact with their STEM professors. Additionally, we provide pre-professional panels for students to learn more about opportunities after college.",

  members: [
    {
      n: "Sophia Parker",
      p: c,
      y: "Senior",
      m: "Health and Disease",
    },
    {
      n: "Minsoo Oh", //NCO Head
      p: c,
      y: "Junior",
      m: "Applied Mathematics & Computer Science",
    },
    {
      n: "Jason Bodzy",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Nathan Schneider",
      y: "Junior",
      m: "Computer Science",
    },
    // {
    //   n: "Patrick Van Gheem",
    //   y: "Freshman",
    //   m: "Biochemistry",
    // },
    {
      n: "Rebekah Stryjewski",
      y: "Senior",
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
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Sadie Poirier",
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Shiv Kothari",
      y: "Sophomore",
      m: "Artificial Intelligence",
    },
    {
      n: "Morgan DesEnfants",
      y: "Junior",
      m: "Neurobiology & Physiology, Spanish",
    },
    {
      n: "Evangelina Kalathoti",
      pic: x,
      y: "Sophomore",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Keya Dutta",
      y: "Sophomore",
      m: "Chemistry",
    },
    {
      n: "Mehak Virdy",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Caleb Buening",
      y: "Sophomore",
      m: "Computer Science, Artificial Intelligence",
    },
  ],
};

const alum = {
  x: "alum",
  n: "PSSC Alumni",
  t: "PSSC Alumni are a vital part of PSSC and remain as advisors and friends. They often help in planning and volunteer in events!",

  members: [
    {
      n: "Mahesh Gupta",
      p: "President",
      y: "2024",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Ellis Lin", 
      p: "Vice President",
      y: "2024",
      m: "Chemistry",
    },
    {
      n: "Jack Mrachek",
      p: "Treasurer",
      y: "2024",
      m: "Planetary Science",
    },
    {
      n: "Sydney Moeller",
      p: "Public Relations Director",
      y: "2024",
      m: "Neurobiology, Health & Disease",
    },
    {
      n: "Lauren Gartenhaus",
      p: "Internal Activities Director",
      y: "2024",
      m: "Genetics, Cell, Molecular, & Devt Biology",
    },
    {
      n: "Pramey Kabra",
      p: "Webmaster",
      y: "2024",
      m: "Computer Science, Data Science",
    },
    {
      n: "Christina Warner", //Alum
      p: "Committee Head - Campus",
      y: "2024",
      m: "Chemistry, Psychology",
    },
    {
      n: "Kinzie Gamaleldin", //Alum
      p: "Committee Head - Community",
      y: "2024",
      m: "Biochemistry",
    },
    {
      n: "Elizabeth Martello", //Alum
      p: "Committee Head - NCO",
      y: "2024",
      m: "Biochemistry",
    },
    {
      n: "Bryce Raber",
      pic: x,
      y: "2024",
      m: "Genetics",
    },
    {
      n: "Nadia Seye", //Alum
      y: "2024",
      m: "Biology",
    },
    {
      n: "Olivia Tan", //Alum
      y: "2024",
      m: "Actuarial Science, Statistics, Economics",
    },
    {
      n: "Brianne Checketts", //Alum
      y: "2024",
      m: "Physics, Planetary Sciences",
    },
    {
      n: "Paige Kertes", //Alum
      y: "2024",
      m: "Biochemistry",
    },
    /*{
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
    },*/
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
