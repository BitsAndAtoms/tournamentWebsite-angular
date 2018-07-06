function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Error on registration page', function() {
  it('displays error when duplicate players are submitted', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('registrationLink')).click();
    element.all(by.id('Contestant_1')).clear().sendKeys('Beethoven');
    element.all(by.id('Contestant_2')).clear().sendKeys('Mozart');
    element.all(by.id('Contestant_3')).clear().sendKeys('Tchaikovsky');
    element.all(by.id('Contestant_4')).clear().sendKeys('Kalidas');
    element.all(by.id('Contestant_5')).clear().sendKeys('Shelly');
    element.all(by.id('Contestant_6')).clear().sendKeys('Shelly');
    element.all(by.id('Contestant_7')).clear().sendKeys('Rachmanioff');
    element(by.id('submitRosterButton')).click();
    expect(element(by.id('error')).getText()).toEqual('Duplicate name(s) not allowed');

  });
});
