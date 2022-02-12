const scrape = require('website-scraper');

let options = {
    urls: [
      'https://dash-monkey.softr.app/',
      'https://dash-monkey.softr.app/timeline',
      'https://dash-monkey.softr.app/features',
      'https://dash-monkey.softr.app/funding'
    ],
    directory: './softr-scrape',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});