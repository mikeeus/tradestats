import { EtsClientPage } from './app.po';

describe('ets-client App', () => {
  let page: EtsClientPage;

  beforeEach(() => {
    page = new EtsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
