function addComm() {
    var page = document.getElementById("js-council");
    coms.map(com => {
        const com_name = com.x;
        const members = com.members.reduce((acc, member) => {
            const list =
                '<div class="page-council-members-member">' +
                    '<img src="' + getImagePath(com.x, member.n) + '" class="page-council-members-member-img">' +
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

function getImagePath(com_name, member_name) {
    return 'images/' + com_name + '/' + member_name.toLowerCase().replace(/\s+/g, '-') + '.jpg';
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
            n: "Andrew David Santos",
            p: "Treasurer"
        },
        {
            n: "Clarice Lopez",
            p: "Vice President"
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
            n: "Rishvanjay Maheshwari"
        },
        {
            n: "Anirudh Gupta"
        },
        {
            n: "Kolten Peterson"
        },
        {
            n: "Niharika Pujar"
        },
        {
            n: "Manvir Bains"
        }
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
            n: "Vritant Bhardwaj",
        }
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
            n: "Yujie Chen",
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
            n: "Chrishan Fernando"
        },
    ]
}

const pub = {
    x: 'pub',
    n: "Publicity and Fundraising",
    t: "Fundraising and Publicity are in are in charge of publicizing all PSSC events and putting on fun fundraising events to raise money for PSSC. We make sure PSSC's name gets out in the Purdue community and plenty of people know about all the great events we host. We also do about two events per semester to raise money for PSSC and spread awareness about our club!",

    members: [
        {
            n: "Shwetha Umashanker",
            p: c
        },
        {
            n: "Andrew Davis",
            p: c
        },
        {
            n: "Nicolas Imhoff",
        },
        {
            n: "Clare Gallagher",
        },
        {
            n: "Anna Barker"
        },
        {
            n: "Megan Varcie"
        },
        {
            n: "Elizabeth Gallagher"
        }
    ]
}

const coms = [
    xcomm,
    cam,
    com,
    nco,
    pub
];

window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    addComm();
};
