/**
 * This file will be loaded when the user would open the browser action
 */

// Set listeners
let btn = document.getElementById('myBtn');
btn.onclick = function(element) {
    //let color = element.target.value;
    let color = '#cdcdcd';
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log('tabs: ', tabs);  // tabs[0].width, tabs[0].height
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            }
        );
    });
};