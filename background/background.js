chrome.runtime.onInstalled.addListener(function() {
    console.log('background.js');
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});