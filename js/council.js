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
      n: "Christine Farrell",
      p: "President",
      y: "Junior",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Mia Martinez",
      p: "Vice President",
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Evangelina Kalathoti",
      p: "Secretary",
      y: "Sophomore",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Keya Dutta",
      y: "Sophomore",
      p: "Treasurer",
      m: "Chemistry",
    },
    {
      n: "Sarah Cronin",
      p: "Public Relations Director",
      y: "Junior",
      m: "Chemistry",
    },
    {
      n: "Jodie Yoshitomi",
      p: "Internal Activities Director",
      y: "Freshman",
      m: "Biology",
    },
    {
      n: "Anushka Shome",
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
      n: "Brian Young",
      p: c,
      y: "Sophomore",
      m: "Physics, Mathematics",
    },
    {
      n: "Sara DeHaan",
      p: c,
      y: "Freshman",
      m: "Environmental Geosciences",
    },
    {
      n: "Leo Guido",
      y: "Sophomore",
      m: "Applied Math",
    },
    {
      n: "Cara Suh",
      pic: x,
      y: "Sophomore",
      m: "Physics",
    },
    {
      n: "Sadie Wachsmann",
      y: "Freshman",
      m: "Chemistry",
    },
    {
      n: "Karthik Varigonda",
      y: "Freshman",
      m: "Cell, Molecular, & Devt Biology",
    },
  ],
};

const com = {
  x: "com",
  n: "Community Outreach",
  t: "The Community Outreach committee connects the College of Science and PSSC to the greater West Lafayette and Lafayette communities. We strive to support our community through various volunteer initiatives at Food Finders, mentorship with high school students, and “Science Day” at the local library where we perform science experiments with kids.",

  members: [
    {
      n: "Grace Lubbers",
      p: c,
      y: "Sophomore",
      m: "Actuarial Science",
    },
    {
      n: "Sydney Metz",
      p: c,
      y: "Sophomore",
      m: "Physics",
    },
    /*
    {
      n: "Brooklin Shoulders",
      y: "Sophomore",
      m: "Biochemistry",
    },
    */
    {
      n: "Elliot Shi",
      y: "Sophomore",
      m: "Statistics",
    },
    {
      n: "Katherine Zwiener",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Lucy Whyman",
      y: "Sophomore",
      m: "Cell, Molecular, & Devt Biology",
    },
    {
      n: "Hazel Vo",
      y: "Freshman",
      m: "Data Science",
    },
    {
      n: "Raveena Venkateshwaran",
      y: "Sophomore",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Gwen Carey",
      y: "Freshman",
      m: "Biochemistry",
    },
    {
      n: "Grace Amburgey",
      y: "Freshman",
      m: "Chemistry (ACS)",
    },
    {
      n: "Valentina Perera",
      y: "Freshman",
      m: "Neurobiology & Physiology"
    }
  ],
};

const nco = {
  x: "nco",
  n: "Networking and Career Outreach",
  t: "The Networking and Career Outreach committee provides professional growth opportunities. Through partnering with the Campus Outreach committee, we host multiple Snack&Chats to provide a space for students to interact with their STEM professors. Additionally, we provide pre-professional panels for students to learn more about opportunities after college.",

  members: [
    {
      n: "Minsoo Oh",
      p: c,
      y: "Junior",
      m: "Applied Mathematics, Computer Science",
    },
    {
      n: "Stephanie Sun",
      p: c,
      y: "Sophomore",
      m: "Computer Science, Business Management"
    },
    {
      n: "Shiv Kothari",
      y: "Sophomore",
      m: "Artificial Intelligence",
    },
    {
      n: "Mehak Virdy",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Chen Yang",
      y: "Freshman",
      m: "Applied Statistics",
    },
    {
      n: "Ray Lai",
      y: "Sophomore",
      m: "Biochemistry (ACS)",
    },
    {
      n: "Disha Ransingh",
      pic: x,
      y: "Freshman",
      m: "Biomedical Sciences",
    },
    {
      n: "Sritha Chavali",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Avni Verma",
      y: "Sophomore",
      m: "Applied Statistics",
    },
    {
      n: "Jang Hoon Lee",
      y: "Sophomore",
      m: "Computer Science"
    },
    {
      n: "Gwendolyn Carreon",
      y: "Junior",
      m: "Biochemistry"
    }
  ],
};

const alum = {
  x: "alum",
  n: "PSSC Alumni",
  t: "PSSC Alumni are a vital part of PSSC and remain as advisors and friends. They often help in planning and volunteer in events!",

  members: [
    {
      n: "Samantha Maari",
      p: "Secretary",
      y: "2025",
      m: "Biology",
    },
    {
      n: "Caroline Zu",
      p: "Treasurer",
      y: "2025",
      m: "Biochemistry",
    },
    {
      n: "Kaitlynn Tran",
      p: "Public Relations Director",
      y: "2025",
      m: "Applied Statistics, Political Science",
    },
    {
      n: "Sophia Benjemia",
      p: "Committee Head - Campus",
      y: "2025",
      m: "Biochemistry",
    },
    {
      n: "Valentina Micolisin",
      p: "Committee Head - Campus",
      y: "2025",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Allison Peterson",
      p: "Committee Head - Community",
      y: "2025",
      m: "Biology, Secondary Education",
    },
    {
      n: "Mahsa Farahani",
      y: "2025",
      m: "Neurobiology & Physiology",
    },
    {
      n: "Dhruv Shah",
      y: "2025",
      m: "Biochemistry, Data Science",
    },
    {
      n: "Rianna Deckowitz",
      y: "2025",
      m: "Planetary Science",
    },
    {
      n: "Rashmika Manipati",
      y: "2025",
      m: "Environmental Geosciences",
    },
    {
      n: "Talia Kidder",
      y: "2025",
      m: "Biology",
    },
    {
      n: "Rebekah Stryjewski",
      y: "2025",
      m: "Chemistry",
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
