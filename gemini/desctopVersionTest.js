/* eslint-disable */

gemini.suite('Start page desctop', (suite) => {
    suite
      .setUrl('/')
      .before((actions) => {
        actions.focus('.search-form__input');
      })
      .setCaptureElements('#root')
      .capture('enter search value', (actions) => {
        actions.sendKeys('.search-form__input', 'море');
      })
      .capture('render images', (actions) => {
        actions.click('.search-form__button');
        actions.waitForElementToShow('.image');
      })    
});
  
gemini.suite('Image preview desctop', (suite) => {
    suite
      .setUrl('/')
      .before((actions) => {
        actions.focus('.search-form__input');
        actions.sendKeys('.search-form__input', 'море');
        actions.click('.search-form__button');
        actions.waitForElementToShow('.image');
        actions.click('.image');
      })
      .setCaptureElements('.show-image')
      .capture('preview', (actions) => {
        actions.waitForElementToShow('.show-image__image');
      });
});