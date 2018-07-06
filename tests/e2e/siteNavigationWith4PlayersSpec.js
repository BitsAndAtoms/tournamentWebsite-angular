function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Succeess scenario from loading to tournament complete', function() {
  it('should complete a tournament successfully with 4 players', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.id('welcome'))).getText()).toEqual('Welcome');
    element(by.id('registrationLink')).click();
    expect((element(by.id('registrationHeading'))).getText()).toEqual('Register Players');
    element.all(by.id('Contestant_1')).sendKeys('Hercules');
    element.all(by.id('Contestant_2')).sendKeys('Troy');
    element.all(by.id('Contestant_3')).sendKeys('Hector');
    element.all(by.id('Contestant_4')).sendKeys('Janus');

    element(by.id('submitRosterButton')).click();
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Hercules', 'Troy', 'Hector', 'Janus', '', '', '', '']);
    //  element.all(by.tagName('input')).getAttribute('value').then(function(text) {
    //  console.log(text);
    //});
    element(by.id('tournamentLink')).click();
    expect((element(by.id('tournamentHeading'))).getText()).toEqual('Tournament');

    expect((element(by.id('round'))).getText()).toEqual('Round 1');
    element(by.id('player0_0')).click();
    element(by.id('player1_1')).click();
    element(by.id('completeThisRoundButton')).click();


    expect((element(by.id('round'))).getText()).toEqual('Round 2');
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Hercules', 'Janus']);
    element(by.id('player1_0')).click();
    element(by.id('completeThisRoundButton')).click();

    expect(element(by.id('winner')).getText()).toEqual('Winner: Janus');

  });
});
