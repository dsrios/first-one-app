import { FirstOneAppPage } from './app.po';

describe('first-one-app App', function() {
  let page: FirstOneAppPage;

  beforeEach(() => {
    page = new FirstOneAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
