import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models.js";

export const sign_in = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await jwt.sign({ email }, process.env.JWT_SECRET_KEY);
        User.find({ email }, async (err, data) => {
            if (err)
                res.status(502).send({ errMsg: "Sorry, the login failed. PLease, try again after sometime." });
            else {
                if (data.length === 0)
                    res.status(404).send({ errMsg: "The requested account doesn't exist." });
                else {
                    const hashedPass = data[0].password;
                    const match = await bcrypt.compare(password, hashedPass);
                    if (match)
                        res.status(200).send({result: data[0], token});
                    else
                        res.status(401).send({ errMsg: "Password doesn't match! Try another one." });
                }
            }
        });
    } catch (err) { res.status(500).send({ errMsg: "Sorry, the login failed. PLease, try again after sometime." }) };
};

export const sign_up = async (req, res) => {
    const { name, email, password } = req.body;
    const userData = { name, email };
    try {
        const hashedPass = await bcrypt.hash(password, 10);
        const token = await jwt.sign({ email }, process.env.JWT_SECRET_KEY);
        const user = new User({...userData, password: hashedPass});
        user.save()
            .then(result => res.status(201).send({result, token}))
            .catch(err => res.status(403).send({ msg: "An account linked to this email address already exists" }))
    } catch (err) { res.status(500).send({ msg: "Database error" }) };
};