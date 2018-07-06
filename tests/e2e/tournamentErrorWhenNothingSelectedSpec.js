function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Error on registration page when submitted without selecting form each match', function() {
  it('should select a winner for each match', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('registrationLink')).click();
    element.all(by.id('Contestant_1')).sendKeys('Hercules');
    element.all(by.id('Contestant_2')).sendKeys('Troy');
    element.all(by.id('Contestant_3')).sendKeys('Hector');
    element.all(by.id('Contestant_4')).sendKeys('Janus');
    element(by.id('submitRosterButton')).click();
    element(by.id('tournamentLink')).click();
    element(by.id('completeThisRoundButton')).click();
    expect(element(by.id('error')).getText()).toEqual('Please select a winner for every match.');
  });
});
