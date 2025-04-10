const contributors = [
    "Vritant Bhardwaj",
    "Jeonghu Park",
    "Jeonghu Park",
    "Tom Appenzeller",
    "Kaitlynn Tran",
    "Pramey Kabra",
    "Anushka Shome"
];
const beginning_year = 2018;

function addPreviousContributors() {
    var table = document.getElementById("js-contributors-table");

    const str = contributors.reduce((acc, contributor, index) => {
        const temp = 
            '<tr class="page-table-tr">' + 
                '<td class="page-table-td">' + (beginning_year + index) + '</td>' +
                '<td class="page-table-td">' + contributor + '</td>' +
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
    addPreviousContributors();
};

