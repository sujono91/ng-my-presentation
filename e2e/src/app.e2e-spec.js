describe('Protractor Demo', () => {
  it('should confirm page title', async () => {
      await browser.executeScript('sauce:context=Going to "sujono github pages"');
      await browser.get('https://sujono91.github.io/ng-my-presentation/');
      await browser.executeScript('sauce:context=Asserting "Ng MY Presentation" title is present');
      const title = await browser.getTitle();
      expect(title).toEqual('NgMyPresentation');
  });
});
