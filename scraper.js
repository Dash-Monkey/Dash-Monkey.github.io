import scrape from 'website-scraper';

let options = {
    urls: [
      'https://dash-monkey.softr.app/',
      {url: 'https://dash-monkey.softr.app/timeline', filename: 'timeline.html'},
      {url: 'https://dash-monkey.softr.app/features', filename: 'features.html'},
      {url: 'https://dash-monkey.softr.app/funding', filename: 'funding.html'},
    ],
    directory: './softr-scrape',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});