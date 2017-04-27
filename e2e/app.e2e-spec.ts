import { Ng2ContactsPage } from './app.po';

describe('ng2-contacts App', () => {
  let page: Ng2ContactsPage;

  beforeEach(() => {
    page = new Ng2ContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
