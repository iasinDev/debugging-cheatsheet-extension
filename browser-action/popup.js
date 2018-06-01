/**
 * This file will be loaded when the user would open the browser action
 */

// Set listeners
let helpBtn = document.getElementById('help');
helpBtn.onclick = function(element) {
    element.target.classList.add('help-visible-option');
};

let aboutBtn = document.getElementById('about');
aboutBtn.onclick = function(element) {
    element.target.classList.add('help-visible-option');
};