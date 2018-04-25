module.exports = {
    rootUrl: 'https://collection-homework.herokuapp.com/',
    gridUrl: 'http://localhost:4444/wd/hub',

    browsers: {
        chrome: {
            calibrate: false,
            desiredCapabilities: {
                browserName: 'chrome',
            },
            compositeImage: true,
            screenshotMode: 'viewport',
        },
    }
};