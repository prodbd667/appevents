import { AppeventsPage } from './app.po';

describe('appevents App', () => {
  let page: AppeventsPage;

  beforeEach(() => {
    page = new AppeventsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
