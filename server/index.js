require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const axios = require("axios");
const Data = require('./dataModel')
const app = express();
app.use(cors())

const runOnStart = async () => {
   axios.get("https://api.wazirx.com/api/v2/tickers").then(async (res) => {
    console.log(res.data);
    let i = 0;
    for (let key in res.data) {
        let obj = res.data[key]
      if (i > 10) {
        break;
      }
      await Data.create({
        name: obj.name,
        last: obj.last,
        buy: Number(obj.buy),
        sell: Number(obj.sell),
        volume: Number(obj.volume),
        base_unit: obj.base_unit
    })
      console.log(res.data[key]);
      i++;
    }
  });
};
runOnStart()
app.get('/', async (req, res) => {
    const datas = await Data.find({})
    return res.status(200).json({
        coins : datas
    })
})
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("Database Connected!"));

app.listen(process.env.PORT || 5000, () => {
  console.log("server listening");
});
