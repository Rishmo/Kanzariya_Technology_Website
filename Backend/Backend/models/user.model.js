const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please tell us your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide your valid email']
    },
    password: {
        type: String,
        required: true,
        // minlength: 8,
    },
    role: {
        type: String,
        enum: ['user', 'executive', 'admin'],
        default: 'user'
    },
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
