module.exports = {
    rootUrl: 'http://localhost:3000',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    httpTimeout: 5000,

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