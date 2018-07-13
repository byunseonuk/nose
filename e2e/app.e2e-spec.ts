import { NosePage } from './app.po';

describe('nose App', function() {
  let page: NosePage;

  beforeEach(() => {
    page = new NosePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
