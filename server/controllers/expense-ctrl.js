import { Expense } from "../models.js";

export const get_expenses = (req, res) => {
  const { user } = req.params;
  try {
    Expense.find({ user }, (err, data) => {
      if (err)
        res
          .status(502)
          .send({ errMsg: "Sorry. PLease, try again after sometime." });
      else res.status(200).send(data);
    });
  } catch (err) {
    res
      .status(500)
      .send({
        errMsg: "Sorry, the fetch failed. PLease, try again after sometime.",
      });
  }
};

export const set_expenses = async (req, res) => {
  const expenseData = req.body;
  try {
    const expense = new Expense(expenseData);
    expense
      .save()
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(500).send({
        errMsg: "Sorry, the creation failed. PLease, try again after sometime.",
      }));
  } catch (err) {
    res
      .status(500)
      .send({
        errMsg: "Sorry, the creation failed. PLease, try again after sometime.",
      });
  }
};
