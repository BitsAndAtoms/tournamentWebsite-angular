function dumpHtml() {
  browser.getPageSource().then(function(source) {
    console.log(source);
  });
}


describe('Routing Test to navigate to welcome.html', function() {
  it('should take user to welcome page after loading main.html', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    expect((element(by.id('welcome'))).getText()).toEqual('Welcome');
  });
});

describe('Routing Test for navigating to registration link', function() {
  it('should display "Register Players"" as page title', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('registrationLink')).click();
    expect((element(by.id('registrationHeading'))).getText()).toEqual('Register Players');
  });
});

describe('Routing Test for tournament link', function() {
  it('should show teams on the first page', function() { // Open the list of teams page browser . get ( '/' );
    browser.get('/main.html');
    element(by.id('tournamentLink')).click();
    expect((element(by.id('tournamentHeading'))).getText(0)).toEqual('Tournament');
    //  expect((element.all(by.tagName('h2'))).get(0).getText()).toEqual('Tournament');
  });
});
