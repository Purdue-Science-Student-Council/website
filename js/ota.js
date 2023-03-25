const winners = [
    "J. W. Vanable, Jr.",
    "Michael Forman",
    "Fred E. Lytle",
    "Hubert Dunsmore",
    "Laurie Iten",
    "John T. Korb",
    "George M. Bodner",
    "Joseph Wolinsky",
    "Thomas P. Murtagh",
    "Carl C. Cowen, Jr.",
    "Justin J. Price",
    "Michael R. Hannaford",
    "Anne E. Gillespie",
    "Keith E. Schwingendorf",
    "Ed Dubinsky",
    "Dennis J. Minchella",
    "George Vanecek, Jr.",
    "Robert E. Zink",
    "Joann J. Otto",
    "Richard C. Penney",
    "Stephen E. Konieczny",
    "Johnny E. Brown",
    "James E. McClure",
    "Justin J. Price",
    "Harry L. Pardue",
    "Ananth Y. Grama",
    "Christine A. Hrycyna",
    "Mikhail J. Atallah",
    "Dennis J. Minchella",
    "Jeffrey A. Beckley",
    "Jeffrey A. Beckley",
    "Peter J. Hollenbeck",
    "Dor Ben-Amotz, Henry C. Chang",
    "Jeffrey A. Beckley",
    "Jonathan J. Wilker",
    "Stephanie Gardner",
    "Cynthia Harwood",
    "Gustavo Rodriguez-Rivera",
    "C. David Bridges",
    "Gustavo Rodriguez-Rivera",
    "George Bunch Adams III",
    "George Bunch Adams III",
    "Carina Rebello",
    "Mark Lipton",
    "Corey Thompson",
    "Shalini Low-Nam"
    "Andrew Freed"
];
const beginning_year = 1977;

function addPreviousWinners() {
    var table = document.getElementById("js-ota-table");

    const str = winners.reduce((acc, winner, index) => {
        const temp = 
            '<tr class="page-table-tr">' + 
                '<td class="page-table-td">' + (beginning_year + index) + '</td>' +
                '<td class="page-table-td">' + winner + '</td>' +
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
    addPreviousWinners();
};

