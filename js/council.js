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
            n: "Rachel Leonora Collicott",
            p: "President"
        },
        {
            n: "Clarice Lopez",
            p: "Vice President & Public Relations Officer"
        },
        {
            n: "Andrew David Santos",
            p: "Treasurer"
        },
        {
            n: "Mitchell Demerly",
            p: "Secretary"
        },
        {
            n: "Jeonghu Park",
            p: "Webmaster"
        },
        {
            n: "Gabby Rene Lorenz",
            p: "Internal Activities Chair"
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
            n: "Brody Connor",
            p: c
        },
        {
            n: "Kevin Lamaster",
            p: c
        },
        {
            n: "Manvir Bains"
        },
        {
            n: "Dithi Saxena"
        },
        {
            n: "Natasha Das"
        },
        {
            n: "Mae Shy"
        },
        {
            n: "Elena Stanczykiewicz"
        },
        {
            n: "Bridget Kiley"
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
            n: "Mallory Roach"
        },
        {
            n: "Nicholas Hilgert"
        },
        {
            n: "Sidnie Bienz"
        },
        {
            n: "Avarokin Saini"
        },
        {
            n: "James Kane"
        },
        {
            n: "Francis O'Leary"
        },
        {
            n: "Andrew Espeland"
        },
        {
            n: "Kaylee Stowe"
        },
    ]
}

const nco = {
    x: 'nco',
    n: "Networking and Career Outreach",
    t: "Our goal is to connect students in the College of Science with both faculty and alumni in order for them to gain knowledge about research and to help them make connections. We strive to facilitate discussions relating to potential fields of interests for students in order to help students achieve their career goals. We provide interactive events so that we can create a camaraderie among students in the College of Science in an academic manner.",

    members: [
        {
            n: "Angela Zhao",
            p: c
        },
        {
            n: "Kaitlyn Stangl",
            p: c
        },
        {
            n: "Abigail Gichaba",
        },
        {
            n: "Mason Wesolek"
        },
        {
            n: "Unnati Pulla"
        },
        {
            n: "Madison Rosen"
        },
        {
            n: "Rachel Tat"
        },
        {
            n: "Humaira Nashmin"
        },
        {
            n: "Shreyas Kharbanda",
            pic: x
        },
        {
            n: "Tom Appenzeller",
            pic: x
        },
        {
            n: "Connor Kuntz"
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
