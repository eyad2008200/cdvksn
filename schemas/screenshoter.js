const fetch = require("node-fetch");

const BASE_URL = "https://image.thum.io/get/fullpage/";

module.exports = {

    /**
	 * Screenshoting the site
	 * @param site The specified site to screenshot
	*/

    async screenshot(site) {
        
        if(!site) throw new TypeError("[ERROR: SCREENSHOTER] (Missing the first parameter) No site URL provided!")

        const url = /^(https?:\/\/)/i.test(site) ? site : `http://${site}`
        const { body } = await fetch(`${BASE_URL}${url}`);

        const attachment = { attachment: body, name: "Screenshot.png" }
        return attachment;
    },
    
    get version() {
        return "1.0.0"
    }
}