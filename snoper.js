
function doclick(info, tab) {
  
  var snoper = 'http://www.snopes.com/?s=='+info.selectionText
  chrome.tabs.create({url: snoper});
}

var selection = chrome.contextMenus.create({"title": "Search Snopes for \"%s\"","contexts":["selection"],"onclick": doclick});
