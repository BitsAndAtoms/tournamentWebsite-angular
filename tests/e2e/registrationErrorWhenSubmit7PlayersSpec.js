function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Succeess scenario from loading to tournament complete', function() {
  it('should complete a tournament successfully', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.id('welcome'))).getText()).toEqual('Welcome');
    element(by.id('registrationLink')).click();
    expect((element(by.id('registrationHeading'))).getText()).toEqual('Register Players');
    element.all(by.id('Contestant_1')).clear().sendKeys('Beethoven');
    element.all(by.id('Contestant_2')).clear().sendKeys('Mozart');
    element.all(by.id('Contestant_3')).clear().sendKeys('Tchaikovsky');
    element.all(by.id('Contestant_4')).clear().sendKeys('Kalidas');
    element.all(by.id('Contestant_5')).clear().sendKeys('Shelly');
    element.all(by.id('Contestant_6')).clear().sendKeys('Yeats');
    element.all(by.id('Contestant_7')).clear().sendKeys('Rachmanioff');
    element(by.id('submitRosterButton')).click();
    expect(element(by.id('error')).getText()).toEqual('Must seed bracket with either 2, 4, or 8 players');
  });
});
