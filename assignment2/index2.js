const fs = require("fs");
const formatDistance = require("date-fns/formatDistance");
const viLocale = require("date-fns/locale/vi");

fs.readFile("./products.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const getData = JSON.parse(data);
  console.log("total data:", getData.length);
  getData.forEach((values) => {
    const date = new Date(values.dateUpdated);
    const today = new Date();
    const fromNow = formatDistance(today, date, { locale: viLocale });
    const price = values.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(`${values.name} - ${price}VND - Cập nhật cách đây: ${fromNow}`);
  });
});
