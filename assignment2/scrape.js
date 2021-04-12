const request = require("request");
const cheerio = require("cheerio");

request("https://www.thegioididong.com/", function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const load = cheerio.load(html);
    const item = load(".vertion2020.large");
    // console.log(item.html());
    // console.log(item.text());
    // const output = item.find("h3").text();
    const output = item.children("h3").next().text();

    console.log(output);
  }
});
