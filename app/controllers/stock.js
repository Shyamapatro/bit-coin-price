const stock=require('../models/stock.model')
const { agenda } = require("../../app/jobs/AgendaJobs");

exports.addStocksData = async (req, res, next) => {
    try {
        const newStock = new stock(req.body);
        let stockData=await newStock.save();
         

        //  if(dd){
        //   await agenda.schedule('15 second', "TESTING");
        //  }
        return res.status(200).json({
            statusCode: 200,
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