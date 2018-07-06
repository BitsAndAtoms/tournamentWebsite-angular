function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Error is displayed on tournament page', function() {
  it('should complete a tournament successfully', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('registrationLink')).click();
    element.all(by.id('Contestant_1')).clear().sendKeys('Hercules');
    element.all(by.id('Contestant_2')).clear().sendKeys('Troy');
    element.all(by.id('Contestant_3')).clear().sendKeys('Hector');
    element.all(by.id('Contestant_4')).clear().sendKeys('Janus');
    element(by.id('submitRosterButton')).click();
    element(by.id('tournamentLink')).click();
    element(by.id('player0_1')).click();
    element(by.id('completeThisRoundButton')).click();
    expect(element(by.id('error')).getText()).toEqual('Please select a winner for every match.');
  });
});
