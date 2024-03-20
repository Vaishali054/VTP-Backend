import { authenticateJWT } from "../middlewares/authJWT.js";
import { validateUser } from "../middlewares/validateUser.js";
import Transaction from "../models/Transactions.js";
import Company from "../models/Companies.js";

export const getTransactions = async (req, res) => {
  try {
    authenticateJWT(req, res, async () => {
      validateUser(req, res, async () => {
        const userId = req.body.user.id;

        const transactions = await Transaction.find({ user_Id: userId }).populate('_id', 'company_name');

        const formattedTransactions = transactions.map(transaction => ({
          user_Id: transaction.user_Id,
          company_name: transaction._id.company_name, 
          price: transaction.price,
          quantity: transaction.quantity,
          transactionType: transaction.transactionType,
          transactionTime: transaction.transactionTime,
          transactionDate: transaction.transactionDate,
        }));

        res.status(200).json(formattedTransactions);
      });
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Error fetching transactions" });
  }
};
