function addComm() {
    var page = document.getElementById("js-council");
    coms.map(com => {
        const com_name = com.x;
        const members = com.members.reduce((acc, member) => {
            const list =
                '<div class="page-council-members-member">' +
                    '<img src="' + getImagePath(com.x, member.n, member.pic) + '" class="page-council-members-member-img">' +
                    '<h4 class="page-council-members-member-name">' + member.n + '</h4>' +
                    '<h5 class="page-council-members-member-position">' + (member.p ? member.p : "") + '<h5>' +
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

const xcomm = {
    x: 'xcom',
    n: 'The Executive Committee',
    t: 'The Executive Committee is responsible for the direction of the council, the organization of events, and the cooperation between committees, council, and faculty.',

    members: [
        {
            n: "Mitchell Demerly",
            p: "President"
        },
        {
            n: "Mallory Roach",
            p: "Vice President"
        },
        {
            n: "Avarokin Saini",
            p: "Treasurer"
        },
        {
            n: "Bridget Kiley",
            p: "Secretary"
        },
        {
            n: "Kaylee Stowe",
            p: "Internal Activities Director"
        },
        {
            n: "Natasha Das",
            p: "Public Relations Director"
        },
        {
            n: "Jeonghu Park",
            p: "Webmaster"
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
            p: c
        },
        {
            n: "Dithi Saxena",
            p: c
        },
        {
            n: "Brody Connor"
        },
        {
            n: "Manvir Bains"
        },
        {
            n: "Mae Shy"
        },
        {
            n: "Elena Stanczykiewicz"
        },
        {
            n: "Victor Pacheco",
            pic: x
        },
        {
            n: "Sahana Rayan"
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
            p: c
        },
        {
            n: "Ilakkiya Venkatachalam",
            p: c
        },
        {
            n: "Tyler Netherly",
        },
        {
            n: "Nicholas Hilgert"
        },
        {
            n: "Sidnie Bienz"
        },
        {
            n: "James Kane"
        },
        {
            n: "Francis O'Leary"
        },
        {
            n: "Andrew Espeland"
        }
    ]
}

const nco = {
    x: 'nco',
    n: "Networking and Career Outreach",
    t: "Our goal is to connect students in the College of Science with both faculty and alumni in order for them to gain knowledge about research and to help them make connections. We strive to facilitate discussions relating to potential fields of interests for students in order to help students achieve their career goals. We provide interactive events so that we can create a camaraderie among students in the College of Science in an academic manner.",

    members: [
        {
            n: "Tom Appenzeller",
            pic: x,
            p: c
        },
        {
            n: "Connor Kuntz",
            p: c
        },
        {
            n: "Madison Rosen",
            p: c
        },
        {
            n: "Angela Zhao"
        },
        {
            n: "Kaitlyn Stangl"
        },
        {
            n: "Abigail Gichaba"
        },
        {
            n: "Mason Wesolek"
        },
        {
            n: "Unnati Pulla"
        },
        {
            n: "Rachel Tat"
        },
        {
            n: "Shreyas Kharbanda"
        },
        {
            n: "Leen Abdelkhaleg"
        },
    ]
}

const coms = [
    xcomm,
    cam,
    com,
    nco
];

window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    addComm();
};
