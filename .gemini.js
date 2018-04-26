module.exports = {
    rootUrl: 'http://localhost:3000',
    gridUrl: 'https://ikononov94:6bdf379a-d405-456e-817a-7591bf853f13@ondemand.saucelabs.com:443/wd/hub',

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