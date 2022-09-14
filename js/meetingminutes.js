
  const dates_fa2021 = [
    "08-31-22",
  ];
  
  const links_fa2021 = [
    "https://docs.google.com/document/d/1s5k2_NDgOGLc2GBxXT9wAbxtvaL1gfJArdo1lOr_ajQ/edit",
  ];

  function addMeetingMinutesLink(semester, links, dates) {
    var table = document.getElementById("js-meeting-minute-table-" + semester);
  
    const str = links.reduce((acc, link, index) => {
      const temp =
        '<tr class="page-table-tr">' +
        '<td class="page-table-td">' +
        dates[index] +
        "</td>" +
        '<td class="page-table-td"> <a href="' +
        link +
        '">Meeting Minutes</a> </td>' +
        "<tr>";
      acc = temp + acc;
      return acc;
    }, "");
  
    table.insertAdjacentHTML("beforeend", str);
  }
  
  function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
  }
  
  function addClickListener(id, func) {
    document.getElementById(id).addEventListener("click", func);
  }
  
  window.onload = function () {
    addClickListener("js-m-nav-click", navDrawer);
    this.addMeetingMinutesLink("fa2021", links_fa2021, dates_fa2021);
    this.addMeetingMinutesLink("fa2020", links_fa2020, dates_fa2020);
  };