import { Auction1Page } from './app.po';

describe('auction1 App', () => {
  let page: Auction1Page;

  beforeEach(() => {
    page = new Auction1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
