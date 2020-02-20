const dates = [
    "01-29-20",
    "02-05-20",
    "02-19-20",
];

const links = [
    "https://docs.google.com/document/d/e/2PACX-1vQo1R1zjvDbzguF-1QBEJmgUF0v3zFzyduIqG4WpiYWeIzYzOhmobxYtQJVKmf6reFXbldrft3_2Blt/pub",
    "https://docs.google.com/document/d/e/2PACX-1vSI-JlN9NwSoZY4tpD9091pySN1VRPDTVEHvLQciq5k8FNi-eOqgyrVEJvJvGedoWzOEl3FVSEOrAFZ/pub",
    "https://docs.google.com/document/d/e/2PACX-1vQnoWTucPraXHezNGacctAebBqIZCjFuzjbwlSzsl74-WjzORE7nMPtoH4Pu74dcA6mlinBXPtxPr35/pub",
]

function addMeetingMinutesLink(semester) {
    var table = document.getElementById("js-meeting-minute-table-"+semester);

    const str = links.reduce((acc, link, index) => {
        const temp = 
            '<tr class="page-table-tr">' + 
                '<td class="page-table-td">' + dates[index] + '</td>' +
                '<td class="page-table-td"> <a href="' + link + '">Meeting Minutes</a> </td>' +
            '<tr>';
        acc = temp + acc;
        return acc;
    }, "");

    table.insertAdjacentHTML("beforeend", str);
};

function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
};

function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func); 
};


window.onload = function() {
    addClickListener("js-m-nav-click", navDrawer);
    this.addMeetingMinutesLink("sp2020");
};

