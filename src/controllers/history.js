import Transaction from "../models/Transactions.js";

export const getTransactions = async (req, res) => {
  try {
    const { id: userId } = req.body.user;

    const transactions = await Transaction.find({ user_Id: userId }).populate(
      "company_Id"
    );

    const transactionsWithCompanyName = transactions.map((transaction) => {
      const {
        _id,
        price,
        quantity,
        transactionType,
        company_Id,
        transactionTime,
        transactionDate,
      } = transaction;
      return {
        _id,
        price,
        quantity,
        transactionType,
        transactionTime,
        transactionDate,
        companyName: company_Id.company_name,
      };
    });

    res.status(200).json({ status: 200, data: transactionsWithCompanyName });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Error fetching transactions" });
  }
};
