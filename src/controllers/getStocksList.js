import axios from "axios";
import mongoose from "mongoose";
import Companies from "../models/Companies.js";
import {
  API_FETCH_TIME,
  OPENING_HOUR,
  OPENING_MINUTE,
  CLOSING_HOUR,
  CLOSING_MINUTE,
  MONDAY,
  FRIDAY,
} from "../constants/constants.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiConfigPath = path.resolve(__dirname, "../utils/apiConfig.txt");

const apiConfig = fs
  .readFileSync(apiConfigPath, "utf8")
  .split("\n")
  .reduce((config, line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      config[key] = value;
    }
    return config;
  }, {});

const fetchAndUpdateStocks = async () => {
  const options = {
    method: "GET",
    url: apiConfig.API_URL,
    headers: {
      "X-RapidAPI-Key": apiConfig.RAPIDAPI_KEY,
      "X-RapidAPI-Host": apiConfig.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const stocks = response.data;

    const updatePromises = stocks.map(async (stock) => {
      const query = { symbol: stock.symbol };
      const update = {
        max_stock_price: stock.dayHigh,
        min_stock_price: stock.dayLow,
        current_Price: stock.lastPrice,
        change: stock.change,
        pChange: stock.pChange,

        $setOnInsert: {
          Company_Id: new mongoose.Types.ObjectId(),
          symbol: stock.symbol,
          company_name: stock.identifier,
        },
      };
      const options = { upsert: true, new: true };

      return Companies.findOneAndUpdate(query, update, options);
    });

    await Promise.all(updatePromises);
  } catch (error) {
    console.error(error);
  }
};

const isMarketOpen = () => {
  const now = new Date();
  const day_of_week = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return (
    day_of_week >= MONDAY &&
    day_of_week <= FRIDAY &&
    (hours > OPENING_HOUR ||
      (hours === OPENING_HOUR && minutes >= OPENING_MINUTE)) &&
    (hours < CLOSING_HOUR ||
      (hours === CLOSING_HOUR && minutes <= CLOSING_MINUTE))
  );
};

const scheduleFetchAndUpdateStocks = () => {
  if (isMarketOpen()) {
    fetchAndUpdateStocks();
  }
};

setInterval(scheduleFetchAndUpdateStocks, API_FETCH_TIME);

export const getStocksList = async (req, res) => {
  try {
    const companies = await Companies.find({});
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching companies data");
  }
};