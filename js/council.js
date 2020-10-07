function addComm() {
    var page = document.getElementById("js-council");
    coms.map(com => {
        const com_name = com.x;
        const members = com.members.reduce((acc, member) => {
            const list =
                '<div class="page-council-members-member">' +
                    '<img src="' + getImagePath(com.x, member.n, member.pic) + '" class="page-council-members-member-img">' +
                    '<h4 class="page-council-members-member-name">' + member.n + '</h4>' +
                    '<h5 class="page-council-members-member-position">' + (member.p ? member.p : "") + '</h5>' +
                    '<h5 class="page-council-members-member-position">' + member.y + ' / ' + member.m + '</h5><h5/>' +
                '</div>';
            acc += list;
            return acc;
        }, "");

        page.insertAdjacentHTML("beforeend",
            '<div class="page-council">' +
                '<h3 class="page-council-title">' + com.n + '</h3>' +
                '<p class="page-council-text">' + com.t + '</p>' +
                '<div class="page-council-members">' +
                    members +
                '</div>' +
            '</div>'
        )
    });
};

function getImagePath(com_name, member_name, member_pic) {
    if(member_pic === x) return 'images/other/nopic.png';
    else return 'images/' + com_name + '/' + member_name.toLowerCase().replace(/\s+/g, '-') + '.jpg';
}

function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
};

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func);
};

function idToMembers(id){
    if(id>=0 && id<xcomm.members.length) return xcomm.members[id];
    id -= xcomm.members.length;
    if(id >= 0 && id<cam.members.length) return cam.members[id];
    id -= cam.members.length;
    if(id >=0 && id<com.members.length) return com.members[id];
    id -= com.members.length;
    if(id >=0 && id<nco.members.length) return nco.members[id];
    else return null
}

const xcomm = {
    x: 'xcom',
    n: 'The Executive Committee',
    t: 'The Executive Committee is responsible for the direction of the council, the organization of events, and the cooperation between committees, council, and faculty.',

    members: [
        {
            n: "Mitchell Demerly",
            p: "President",
            y: "Senior",
            m: "Computer Science & Economics"
        },
        {
            n: "Mallory Roach",
            p: "Vice President",
            y: "Junior",
            m: "Genetics & Cell Biology"
        },
        {
            n: "Avarokin Saini",
            p: "Treasurer",
            y: "Junior",
            m: "Computer Science"
        },
        {
            n: "Bridget Kiley",
            p: "Secretary",
            y: "Sophomore",
            m: "Computer Science"
        },
        {
            n: "Kaylee Stowe",
            p: "Internal Activities Director",
            y: "Junior",
            m: "Biology"
        },
        {
            n: "Natasha Das",
            p: "Public Relations Director",
            y: "Sophomore",
            m: "Biochemistry"
        },
        {
            n: "Jeonghu Park",
            p: "Webmaster",
            y: "Senior",
            m: "Computer Science"
        }
        
    ]
};

const c = "Committee Head";
const x = "No Picture";

const cam = {
    x: 'cam',
    n: "Campus Outreach",
    t: "The Campus Outreach Committee is here for the students of the College of Science to communicate their voices to the campus at large, and provide the resources for a meaningful experience in the Purdue Science community. We enjoy putting on collaboration events with other student organizations. Feel free to contact us if you have an idea about how to better serve the community.",

    members: [
        {
            n: "Kevin Lamaster",
            p: c,
            y: "Senior",
            m: "Math"
        },
        {
            n: "Dithi Saxena",
            p: c,
            y: "Sophomore",
            m: "Computer Science"
        },
        {
            n: "Manvir Bains",
            y: "Senior",
            m: "Biology"
        },
        {
            n: "Mae Shu",
            y: "Sophomore",
            m: "Biology"
        },
        {
            n: "Victor Pacheco",
            pic: x,
            y: "Sophomore",
            m: "Biology"
        },
        {
            n: "Sahana Rayan",
            y: "Junior",
            m: "Applied Statistics"
        },
        {
            n: "Niharika Pujar",
            y: "Senior",
            m: "Computer Science"
        },
        {
            n: "Nathan Paul",
            pic: x,
            y: "Freshman",
            m: "Neurobiology & Physiology"
        },
        {
            n: "Sydney Brown",
            y: "Freshman",
            m: "Atmospheric Science"
        },
    ]
}

const com = {
    x: 'com',
    n: "Community Outreach",
    t: "On the community outreach committee, we strive to engage and instill a love of science in the greater Lafayette community. See us in action every year at SpringFest and our experiment days at the local library. ",

    members: [
        {
            n: "Holly Weilbaker",
            p: c,
            y: "Senior",
            m: "Biochemistry"
        },
        {
            n: "Ilakkiya Venkatachalam",
            p: c,
            y: "Junior",
            m: "Genetics"
        },
        {
            n: "James Kane",
            y: "Sophomore",
            m: "Math & Math Ed"
        },
        {
            n: "Francis O'Leary",
            y: "Sophomore",
            m: "Math & Computer Science"
        },
        {
            n: "Andrew Espeland",
            y: "Junior",
            m: "Biology"
        },
        {
            n: "Casey Enest",
            pic: x,
            y: "Sophomore",
            m: "Microbiology"
        },
        {
            n: "Kinzie Gamaledin",
            y: "Freshman",
            m: "Chemistry"
        },
        {
            n: "Lauren Gartenhaus",
            pic: x,
            y: "Freshman",
            m: "Biology"
        },
        {
            n: "Mahesh Gupta",
            y: "Freshman",
            m: "Biochemistry"
        },
    ]
}

const nco = {
    x: 'nco',
    n: "Networking and Career Outreach",
    t: "Our goal is to connect students in the College of Science with both faculty and alumni in order for them to gain knowledge about research and to help them make connections. We strive to facilitate discussions relating to potential fields of interests for students in order to help students achieve their career goals. We provide interactive events so that we can create a camaraderie among students in the College of Science in an academic manner.",

    members: [
        {
            n: "Tom Appenzeller",
            p: c,
            y: "Sophomore",
            m: "Computer Science"
        },
        {
            n: "Connor Kuntz",
            p: c,
            y: "Sophomore",
            m: "CMD Biology"
        },
        {
            n: "Madison Rosen",
            p: c,
            y: "Senior",
            m: "Computer Science"
        },
        {
            n: "Angela Zhao",
            y: "Senior",
            m: "Biochemistry"
        },
        {
            n: "Kaitlyn Stangl",
            y: "Junior",
            m: "Actuarial Science"
        },
        {
            n: "Unnati Pulla",
            y: "Senior",
            m: "Computer Science"
        },
        {
            n: "Rachel Tat",
            y: "Junior",
            m: "Biochemistry"
        },
        {
            n: "Leen Abdelkhaleg",
            y: "Sophomore",
            m: "Actuarial Science"
        },
        {
            n: "Creighton Burns",
            y: "Sophomore",
            m: "Health and Disease"
        },
        {
            n: "Diana Hrushka",
            y: "Freshman",
            m: "Biology"
        },
        {
            n: "Elizabeth Martello",
            pic: x,
            y: "Freshman",
            m: "Biochemistry"
        },
        {
            n: "Manuela Haddad Correa",
            pic: x,
            y: "Sophomore",
            m: "Genetics & CMD Biology"
        },
    ]
}

const coms = [
    xcomm,
    cam,
    com,
    nco
];

function test(id){
    var mem = idToMembers(id);
    alert(mem.n);
}

window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    addComm();
};
