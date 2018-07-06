var exports = module.exports = {};


exports.openMainPage = function() {
    browser.get('/main.html');
}

exports.populateField = function(text,idName) {
  element.all(by.id(idName)).clear().sendKeys(text);
}

 exports.dumpHtml = function() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}
