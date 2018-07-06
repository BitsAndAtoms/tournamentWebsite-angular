function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Succeess scenario from loading to tournament complete', function() {
  it('should complete a tournament successfully with 2 players', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.id('welcome'))).getText()).toEqual('Welcome');
    element(by.id('registrationLink')).click();
    expect((element(by.id('registrationHeading'))).getText()).toEqual('Register Players');
    element.all(by.id('Contestant_1')).sendKeys('Jobs');
    element.all(by.id('Contestant_2')).sendKeys('Gates');

    element(by.id('submitRosterButton')).click();
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Jobs', 'Gates', '', '', '', '', '', '']);
    //  element.all(by.tagName('input')).getAttribute('value').then(function(text) {
    //  console.log(text);
    //});
    element(by.id('tournamentLink')).click();
    expect((element(by.id('tournamentHeading'))).getText()).toEqual('Tournament');
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Jobs', 'Gates']);
    expect((element(by.id('round'))).getText()).toEqual('Round 1');
    element(by.id('player0_0')).click();
    element(by.id('completeThisRoundButton')).click();

    expect(element(by.id('winner')).getText()).toEqual('Winner: Jobs');

  });
});
