const Rize = require('rize');

const rize = new Rize({ headless: false });

describe('UI test', () => {
  it('example test', async done => {
    rize
      .goto('http://localhost:4000/')
      .assertTitle('Document')
      .click('h3 a')
      .type('#addsinput', ' e2etest')
      .click('#addsbutton')
      .click('#addsbutton');
    //   .click('#addsbutton')
    //   .click('#addsbutton')
    //   .end();
    // done();
  }).timeout(10000);
});
