window.onload = function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.get(tabs[0].id, function (tab) {
            $('#info').qrcode(tab.url);
        });
    });
};