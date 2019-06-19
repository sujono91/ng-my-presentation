describe('Protractor Demo', () => {
  const userName = element(by.name('username'));
  const password = element(by.name('password'));
  const submitBtn = element(by.id('submitBtn'));
  const resultText = element(by.id('result'))

  it('should show the form status', async () => {
      await browser.executeScript('sauce:context=Going to "sujono github pages"');
      await browser.get('https://sujono91.github.io/ng-my-presentation/');
      await browser.executeScript('sauce:context=Asserting "Ng MY Presentation" title is present');
      userName.sendKeys('sujonochen91@gmail.com');
      password.sendKeys('sjbluejack12');
      submitBtn.click();
      expect(resultText.getText()).toEqual('Valid: true');
      await browser.executeScript('sauce:context=Asserting "Valid: true" is present');
  });
});
