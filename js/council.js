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
    "The Executive Committee is responsible for the direction of the council, the organization of events, and the cooperation between committees, council, and faculty.",

    members: [
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
      n: "Priyanka Ranga",
      pic: x,
      p: "Treasurer",
      y: "Junior",
      m: "Computer Science",
    },
    {
      n: "Bridget Kiley",
      p: "Secretary",
      y: "Senior",
      m: "Computer Science",
    },
    {
      n: "Ellis Lin",
      pic: x,
      p: "Internal Activities Director",
      y: "Junior",
      m: "Biology",
    },
    {
      n: "Sydney Moeller",
      pic: x,
      p: "Public Relations Director",
      y: "Sophomore",
      m: "Economics, Neurobiology",
    },
    {
      n: "Kaitlynn Tran",
      p: "Webmaster",
      y: "Sophomore",
      m: "Applied Statistics and Political Science",
    },
  ],
};

const cam = {
  x: "cam",
  n: "Campus Outreach",
  t:
    "The Campus Outreach Committee is here for the students of the College of Science to communicate their voices to the campus at large, and provide the resources for a meaningful experience in the Purdue Science community. We enjoy putting on collaboration events with other student organizations. Feel free to contact us if you have an idea about how to better serve the community.",

  members: [
    {
      n: "Dithi Saxena",
      p: c,
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Mahsa Farahani",
      p: c,
      y: "Sophomore",
      m: "Neurobiology and Physiology",
    },
    {
      n: "Sophia Benjemia",
      y: "Sophomore",
      m: "Biochemistry",
    },
    {
      n: "Pramey Kabra",
      pic: x,
      y: "Junior",
      m: "Computer Science and Data Science",
    },
    {
      n: "Shreya Vasant",
      y: "Sophomore",
      m: "Data Science",
    },
    {
      n: "Jang Lee",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Samantha Maari",
      pic: x,
      y: "Freshman",
      m: "Biology",
    },
  ],
};

const com = {
  x: "com",
  n: "Community Outreach",
  t:
    "On the community outreach committee, we strive to engage and instill a love of science in the greater Lafayette community. See us in action every year at SpringFest and our experiment days at the local library. ",

  members: [
    {
      n: "Mahesh Gupta",
      p: c,
      y: "Junior",
      m: "Cell, Molecular, and Developmental Biology and Genetics",
    },
    {
      n: "Lauren Gartenhaus",
      p: c,
      y: "Junior",
      m: "Genetics and Cell, Molecular, and Developmental Biology",
    },
    {
      n: "Kinzie Gamaleldin",
      pic: x,
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Jack Mrachek",
      y: "Junior",
      m: "Physics and Planetary Science",
    },
    {
      n: "Nadia Seye",
      pic: x,
      y: "Sophomore",
      m: "Math & Computer Science",
    },
    {
      n: "Rashmika Manipati",
      y: "Sophomore",
      m: "Environmental Geosciences",
    },
    {
      n: "Olivia Tan",
      y: "Junior",
      m: "Actuarial Science and Applied Statistics",
    },
  ],
};

const nco = {
  x: "nco",
  n: "Networking and Career Outreach",
  t:
    "Our goal is to connect students in the College of Science with both faculty and alumni in order for them to gain knowledge about research and to help them make connections. We strive to facilitate discussions relating to potential fields of interests for students in order to help students achieve their career goals. We provide interactive events so that we can create a camaraderie among students in the College of Science in an academic manner.",

  members: [
    {
      n: "Connor Kuntz",
      p: c,
      y: "Junior",
      m: "CMD Biology",
    },
    {
      n: "Elizabeth Martello",
      p: c,
      y: "Junior",
      m: "Biochemistry",
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
      m: "Biochemistry",
    },
    {
      n: "Jason Bodzy",
      y: "Sophomore",
      m: "Computer Science",
    },
    {
      n: "Claire Bohman",
      pic: x,
      y: "Junior",
      m: "Atmoshperic Science",
    },
    {
      n: "Sydney West",
      pic: x,
      y: "Junior",
      m: "Biochemistry",
    },
    {
      n: "Will Zou",
      pic: x,
      y: "Sophomore",
      m: "Actuarial Science",
    },
  ],
};

const coms = [xcomm, cam, com, nco];

function test(id) {
  var mem = idToMembers(id);
  alert(mem.n);
}

window.onload = function () {
  addClickListener("js-m-nav-click", navDrawer);
  addComm();
};
