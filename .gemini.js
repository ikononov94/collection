module.exports = {
    rootUrl: 'http://localhost:3000',
    gridUrl: 'https://IvanKononov:31f699bb-2979-410f-aee2-4a864fa5faa7@ondemand.saucelabs.com:443/wd/hub',

    windowSize: "1024x768",

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