import Transaction from "../models/Transactions.js";
import Companies from "../models/Companies.js";

const getTransactions = async (req, res) => {
  try {
    // Retrieve user ID from request
    const userId = req.user.userId;

    const transactions = await Transaction.find({ user_Id: userId }).populate('company_Id', 'company_name');

    const transactionsWithCompanyName = transactions.map(transaction => {
      const { _id, price, quantity, transaction_type, company_Id } = transaction;
      return {
        _id,
        price,
        quantity,
        transaction_type,
        company_name: company_Id.company_name
      };
    });

    res.status(200).json({ transactions: transactionsWithCompanyName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getTransactions };
