/* eslint-disable */

// gemini.suite('Start page mobile', (suite) => {
//   suite
//     .setUrl('/')
//     .before((actions) => {
//       actions.setWindowSize(375, 575);
//       actions.focus('.search-form__input');
//     })
//     .setCaptureElements('#root')
//     .capture('enter search value', (actions) => {
//       actions.sendKeys('.search-form__input', 'море');
//       actions.click('.search-form__button');
//     })
//     .capture('render images, orientation portrait', (actions) => {
//       actions.waitForElementToShow('.image');
//     })
//     .capture('images landscape', (actions) => {
//       actions.setWindowSize(575, 375);
//     })
// });

// gemini.suite('Image preview mobile', (suite) => {
//   suite
//     .setUrl('/')
//     .before((actions) => {
//       actions.setWindowSize(375, 575)
//       actions.focus('.search-form__input');
//       actions.sendKeys('.search-form__input', 'море');
//       actions.click('.search-form__button');
//       actions.waitForElementToShow('.image');
//     })
//     .setCaptureElements('.show-image')
//     .capture('preview portrait', (actions) => {
//       actions.click('.image');
//       actions.waitForElementToShow('.show-image__image', 5000);
//     })
//     .capture('preview mobile orientation landscape', (actions) => {
//       actions.setWindowSize(575, 375);
//     });
// });
