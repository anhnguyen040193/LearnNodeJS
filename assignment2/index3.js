const { format } = require("date-fns");
const fs = require("fs");
const XLSX = require("xlsx");

fs.readFile("./products.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const getData = JSON.parse(data);
  const newdata = getData.map((values) => {
    const updated = format(new Date(values.dateUpdated), "MM/dd/yyyy");
    delete values.dateUpdated;
    const newObj = { ...values, updated };
    return newObj;
  });
  const ws = XLSX.utils.json_to_sheet(newdata);
  ws["!cols"] = [
    { width: 20 },
    { width: 15 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
  ];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Products");
  //   const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  XLSX.writeFile(wb, "products.xlsx");
});
