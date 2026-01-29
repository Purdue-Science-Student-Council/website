// Common utility functions shared across all pages
// This file should be included before page-specific JS files

/**
 * Toggle mobile navigation drawer
 */
function navDrawer() {
    var m_nav = document.getElementById("js-m-nav");
    m_nav.classList.toggle("m-nav-active");
}

/**
 * Add click event listener to an element by ID
 * @param {string} id - Element ID
 * @param {function} func - Callback function
 */
function addClickListener(id, func) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", func);
    }
}

/**
 * Initialize common navigation functionality
 * Call this in window.onload or DOMContentLoaded
 */
function initCommonNav() {
    addClickListener("js-m-nav-click", navDrawer);
}

// Position options by committee - shared between update-profile and admin
const POSITION_OPTIONS = {
    'executive': [
        'President',
        'Vice President',
        'Secretary',
        'Treasurer',
        'Public Relations Director',
        'Internal Activities Director',
        'Webmaster'
    ],
    'campus-outreach': [
        'Committee Head',
        'Member'
    ],
    'community-outreach': [
        'Committee Head',
        'Member'
    ],
    'networking-career-outreach': [
        'Committee Head',
        'Member'
    ],
    'alumni': [] // No position for alumni
};

/**
 * Map committee ID to folder name for photo storage
 * @param {string} committee - Committee ID
 * @returns {string} Folder name
 */
function getCommitteeFolder(committee) {
    const folderMap = {
        'executive': 'xcom',
        'campus-outreach': 'cam',
        'community-outreach': 'com',
        'networking-career-outreach': 'nco',
        'alumni': 'alum'
    };
    return folderMap[committee] || 'other';
}
