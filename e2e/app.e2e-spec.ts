import { MyWebPageAngularPage } from './app.po';

describe('my-web-page-angular App', () => {
  let page: MyWebPageAngularPage;

  beforeEach(() => {
    page = new MyWebPageAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
