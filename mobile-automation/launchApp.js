"use strict";

const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "10",
        deviceName: "OnePlus 5",
        app: "mobile-automation\\apk\\com-ebay-mobile-6062002-62473774-7b59c581b367d148f5f7b7d77695681f.apk",
        appPackage: "com.android.vending",
        appActivity: "com.ebay.mobile.activities.MainActivity",
        automationName: "UiAutomator2"
    }
};

async function main () {
    const client = await wdio.remote(opts);
  
    await client.deleteSession();
}
  
main();
  