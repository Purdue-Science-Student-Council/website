// Contributors page JavaScript
// Uses common.js for shared navigation functions

const contributors = [
    "Vritant Bhardwaj",
    "Jeonghu Park",
    "Jeonghu Park",
    "Tom Appenzeller",
    "Kaitlynn Tran",
    "Pramey Kabra",
    "Anushka Shome",
    "Anushka Shome",
    "Avi Aggarwal"
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

window.onload = function() {
    initCommonNav();
    addPreviousContributors();
};

