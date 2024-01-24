import dbConnect from "../../../util/mongo";
import User from "../../../modals/User.js";
import validator from "validator";

const handler = async (req, res) => {
    const { method } = req;
    // const body = JSON.parse(req.body); when data insert via postman

    await dbConnect();

    if (method === "POST") {
        const { firstname, lastname, birthday, gender, email, phone, address, city, pin, image } = req.body;
        const currentDate = new Date();
        const birthDate = new Date(birthday);
        const age = Math.floor(currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000);
        try {
            if (
                !firstname ||
                !lastname ||
                !birthday ||
                !gender ||
                !email ||
                !phone ||
                !address ||
                !city ||
                !pin ||
                !image
            ) {
                return res.status(400).json({ message: "Missing one or more required fields." });
            }

            if (!validator.isLength(firstname, { min: 3, max: 60 })) {
                return res.status(400).json({ message: "First name must be between 3 and 60 characters." });
            }

            if (!validator.isLength(lastname, { min: 3, max: 60 })) {
                return res.status(400).json({ message: "Last name must be between 3 and 60 characters." });
            }
            const user = await User.findOne({ email });
            if (user) {
                return res.status(403).json({ message: "Email address already exist" });
            }
            if (!validator.isEmail(email)) {
                return res.status(400).json({ message: "Email address is invalid" });
            }

            if (age >= 80) {
                return res.status(400).json({ message: "Age should be lessthan 80 year old" });
            }
            if (gender === "") {
                return res.status(400).json({ message: "Gender not selected" });
            }
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                return res.status(400).json({ message: "Invalid phone number" });
            }
            const pinRegex = /^\d{6}$/;
            if (!pinRegex.test(pin)) {
                return res.status(400).json({ message: "Invalid pin number" });
            }

            const newUser = new User({
                firstname,
                lastname,
                birthday,
                gender,
                email,
                phone,
                address,
                city,
                pin,
                image,
            });
            const creatUser = await newUser.save();

            res.status(201).json(creatUser);
        } catch (err) {
            console.log("internel server error", err);
            res.status(500).json(err);
        }
    }

    if (method === "GET") {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllUsers);
        } catch (err) {
            res.status(500).json({ message: "No data found" });
        }
    }
};

export default handler;
