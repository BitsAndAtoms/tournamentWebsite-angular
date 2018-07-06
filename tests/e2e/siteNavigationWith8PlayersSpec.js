function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}



describe('Succeess scenario from loading to tournament complete', function() {
  it('should complete a tournament successfully', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.tagName('h2'))).getText()).toEqual('Welcome');
    element(by.id('registrationLink')).click();
    expect((element(by.tagName('h2'))).getText()).toEqual('Register Players');
    element.all(by.id('Contestant_1')).sendKeys('Beethoven');
    element.all(by.id('Contestant_2')).sendKeys('Mozart');
    element.all(by.id('Contestant_3')).sendKeys('Tchaikovsky');
    element.all(by.id('Contestant_4')).sendKeys('Kalidas');
    element.all(by.id('Contestant_5')).sendKeys('Frost');
    element.all(by.id('Contestant_6')).sendKeys('Shelly');
    element.all(by.id('Contestant_7')).sendKeys('Yeats');
    element.all(by.id('Contestant_8')).sendKeys('Rachmanioff');
    element(by.id('submitRosterButton')).click();
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Beethoven', 'Mozart', 'Tchaikovsky', 'Kalidas', 'Frost', 'Shelly', 'Yeats', 'Rachmanioff']);
    //  element.all(by.tagName('input')).getAttribute('value').then(function(text) {
    //  console.log(text);
    //});
    element(by.id('tournamentLink')).click();
    expect((element(by.id('tournamentHeading'))).getText()).toEqual('Tournament');

    expect((element(by.id('round'))).getText()).toEqual('Round 1');
    element(by.id('player0_0')).click();
    element(by.id('player1_1')).click();
    element(by.id('player1_2')).click();
    element(by.id('player0_3')).click();
    element(by.id('completeThisRoundButton')).click();


    expect((element(by.id('round'))).getText()).toEqual('Round 2');
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Beethoven', 'Kalidas', 'Shelly', 'Yeats']);
    element(by.id('player0_0')).click();
    element(by.id('player0_1')).click();
    element(by.id('completeThisRoundButton')).click();

    expect((element(by.id('round'))).getText()).toEqual('Round 3');
    expect(element.all(by.tagName('input')).getAttribute('value')).toEqual(['Beethoven', 'Shelly']);
    element(by.id('player0_0')).click();
    element(by.id('completeThisRoundButton')).click();

    expect(element(by.id('winner')).getText()).toEqual('Winner: Beethoven');

  });
});
