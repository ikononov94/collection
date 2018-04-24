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
      actions.click('.search-form__button');
    })
    .capture('render images', (actions) => {
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
    })
    .setCaptureElements('.show-image')
    .capture('preview', (actions) => {
      actions.click('.image');
      actions.waitForElementToShow('.show-image__image', 5000);
    });
});
