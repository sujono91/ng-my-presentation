describe('Protractor Demo', () => {
  const userName = element(by.name('username'));
  const password = element(by.name('password'));
  const submitBtn = element(by.id('submitBtn'));
  const resultText = element(by.id('result'))

  it('should show the form status', async () => {
      await browser.executeScript('sauce:context=Going to "sujono github pages"');
      await browser.get('https://sujono91.github.io/ng-my-presentation/');
      await userName.sendKeys('sujonochen91@gmail.com');
      await password.sendKeys('sjbluejack12');
      await submitBtn.click();
      await browser.executeScript('sauce:context=Asserting "Valid: true" is present');
      await browser.sleep(5000);
      expect(resultText.getText()).toEqual('Valid: true');
  });
});
