import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: String, required: true },
    date: { type: Date, required: true }
}, { timestamps: true });

export const User = new mongoose.model("users", userSchema);
export const Expense = new mongoose.model("expenses", expenseSchema);
