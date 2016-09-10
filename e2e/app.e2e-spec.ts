import { Ng2CordovaOnsenuiPage } from './app.po';

describe('ng2-cordova-onsenui App', function() {
  let page: Ng2CordovaOnsenuiPage;

  beforeEach(() => {
    page = new Ng2CordovaOnsenuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
