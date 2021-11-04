const dates_fa2020 = [
//   "08-26-20",
//   "09-02-20",
//   "09-09-20",
//   "09-23-20",
//   "09-30-20",
//   "10-07-20",
//   "10-14-20",
//   "10-21-20",
//   "10-28-20",
];

const links_fa2020 = [
//   "https://docs.google.com/document/d/e/2PACX-1vTUBLiHuNWioxrb_3-sblhh8ltthhpufsVgHfAoN4piDShipioshOlxqFRFTfwR8vdPEJ9ZCoFuF_DW/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vQNryxIV25WUypepbVDtPMJTUECadGgJWTPmG8AzunBV74PYMrtarG0U4kJTfjsPzYqRMXoUddz1eFh/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vRHLo6wQMUCdT6gu3DqwJJB7y5XuJE5Iuh2z5QvYxu9szHu-LApxfuz3V1bPz_Gj4YWG4DsvMW2uf_b/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vQjyU9IRAW-0pYeY3ca-SPTY3kxrqLpouQlYtoV0MVn9Lgd3F1k6kTRvJH2WrLoLMs8GrrOSWOHJR8o/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vRg2C16l4xPTUl6lTFrErzCCR-NRxmPvkJkNjo8oUIoKxEV-kygBbreB23lMWUj8b6DtFB65cM4Up10/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vQN-yxxZ9OOOxXeA2sPdAjxgnIWZCn1Wp-28tIom1CtI0Zi8UfUDJQwQvGHH98N-oLTAICtvKYJqJ5e/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vQq9ttwgRcFpwCkcpMZixTcMBxpkCQ3DQJPF49arJTZS5cu0nkr5pXMGsTAit0f_ZBXCcq1HMsNjA8V/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vQVQEN58nilEfW0M7o5PWVr-ay8XfNaEMQX2SsppY71_V8gAMYjM-q30cPOjM4gh-UOCTVrK6p9aNsY/pub",
//   "https://docs.google.com/document/d/e/2PACX-1vScZTPf2S-itjN4_mU8pqkABOHTyEUb_i6Vec6SjEFx8Ruebtj9vLiaKoVwxDXhpDpURQbpEt-vaomy/pub",
];

const dates_sp2020 = [
  // "01-22-20",
  // "01-29-20",
  // "02-05-20",
  // "02-19-20",
  // "02-26-20",
];

const links_sp2020 = [
  // "https://docs.google.com/document/d/e/2PACX-1vRrlQX8RrJaPZ-3-gGZRj6B9mi75yJ-HNAJLQ5e-2r5fdkJX4vy8jySBI6v-Mq_aeo9izWyO4VAYRXF/pub",
  // "https://docs.google.com/document/d/e/2PACX-1vQo1R1zjvDbzguF-1QBEJmgUF0v3zFzyduIqG4WpiYWeIzYzOhmobxYtQJVKmf6reFXbldrft3_2Blt/pub",
  // "https://docs.google.com/document/d/e/2PACX-1vSI-JlN9NwSoZY4tpD9091pySN1VRPDTVEHvLQciq5k8FNi-eOqgyrVEJvJvGedoWzOEl3FVSEOrAFZ/pub",
  // "https://docs.google.com/document/d/e/2PACX-1vQnoWTucPraXHezNGacctAebBqIZCjFuzjbwlSzsl74-WjzORE7nMPtoH4Pu74dcA6mlinBXPtxPr35/pub",
  // "https://docs.google.com/document/d/e/2PACX-1vRcoq-R3TvWJXmWhMSq7tFa0okxztQqUZFbaNvQT8M-MJhB4t1yhn_PPOxIfGrxYEy319IujBXkgTsA/pub"
];

const dates_fa2021 = [
  "09-01-21",
  "09-08-21",
  "02-05-20",
  "09-29-21",
  "10-13-21",
  "11-03-21",
];

const links_fa2021 = [
  "https://docs.google.com/document/d/1ogN4poUsTHuG8VGPXCbpzOb2jMZlQS-dPsWeZOfhK2s/edit",
  "https://docs.google.com/document/d/1T3wWDMI2tKx-SkegMoMumVaISLo7Ao5FaD9in376zCs/edit",
  "https://docs.google.com/document/d/1Ion85pd5sVHFlzoVQ1I8NSz_jDCIxZGGxcIPTTpZ4PQ/edit",
  "https://docs.google.com/document/d/1y9MWlEAXDZCOSIym4_ja3U6CVSKqRI4lAO0CzB-o3JE/edit",
  "https://docs.google.com/document/d/1y9MWlEAXDZCOSIym4_ja3U6CVSKqRI4lAO0CzB-o3JE/edit",
  "https://docs.google.com/document/d/1TRLT2Yk0BBv55J4wwtRP27raBDQhz-hBxA8uPXvUY08/edit",
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
