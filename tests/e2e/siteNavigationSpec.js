function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Routing Test to navigate to welcome.html', function() {
  it('should select winner and display the name', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.tagName('h2'))).getText()).toEqual('Welcome');
    element(by.id('registrationLink')).click();
    expect((element(by.tagName('h2'))).getText()).toEqual('Register Players');
    element.all(by.tagName('input')).get(0).clear().sendKeys('Beethoven');
    element.all(by.tagName('input')).get(1).sendKeys('Mozart');
    element.all(by.tagName('input')).get(2).sendKeys('Tchaikovsky');
    element.all(by.tagName('input')).get(3).sendKeys('Kalidas');
    element.all(by.tagName('input')).get(4).sendKeys('Frost');
    element.all(by.tagName('input')).get(5).sendKeys('Shelly');
    element.all(by.tagName('input')).get(6).sendKeys('Yeats');
    element.all(by.tagName('input')).get(7).sendKeys('Rachmanioff');
    element(by.id('submitRosterButton')).click();
 //dumpHtml();
 element.all(by.tagName('input')).getAttribute('value').then(function(text) {
   console.log(text);
 });
    element.all(by.tagName('input')).get(0).getAttribute('value').then(function(text) {
      console.log(text);
    });
    element(by.id('tournamentLink')).click();

  });
});



describe('Routing Test for tournament link', function() {
  it('should show teams on the first page', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('tournamentLink')).click();
    element.all(by.tagName('h2')).get(0).getText().then(function(text) {
      console.log(text);
    });
    expect((element.all(by.tagName('h2'))).get(0).getText()).toEqual('Tournament');
  });
});
