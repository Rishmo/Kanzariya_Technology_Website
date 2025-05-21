const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');

const generateToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

const signup = async (req, res) => {
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).send({ message: "Email already exists" });
    } else {
        const newUser = await User.create(req.body)
        res.status(200).send(newUser)
    }

};

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send('invalid email or password')
    }
    const user = await User.findOne({ email: email })
    const token = generateToken(user)
    res.send({ token, user })
};

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users });
};

module.exports = {
    signup,
    login,
    getAllUsers
}