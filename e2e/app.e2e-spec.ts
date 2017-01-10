import { AppRetainPage } from './app.po';

describe('app-retain App', function() {
  let page: AppRetainPage;

  beforeEach(() => {
    page = new AppRetainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
