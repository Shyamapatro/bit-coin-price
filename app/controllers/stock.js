const stock=require('../models/stock.model')


exports.addStocksData = async (req, res, next) => {
    try {
        const newStock = new stock(req.body);
        let dd=await newStock.save();
         console.log(dd)
        return res.status(200).json({
            statusCode: 200,
            dd,
            message: "Stock data successfully added."
        });
    } catch (error) {
        console.error("Error adding new stock data:", error);
        return res.status(500).send({
            statusCode: 500,
            message: "Error adding new stock data."
        });
    }
};


  exports.getStocksData = async (req, res, next) => {
    try {
      let stockData=await stock.find({})
      return res.status(200).json({
        message: "stock details successfully fetch.",
        stockData:stockData
      });
    } catch (error) {
      console.error(error);
    }
  };