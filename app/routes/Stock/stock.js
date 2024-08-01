const routeBaseUrl = "/api/stock";
const stock = require("../../controllers/stock");

module.exports = app => {
  app.post(routeBaseUrl + "/",  stock.addStocksData);
  app.get(routeBaseUrl + "/",  stock.getStocksData);

}