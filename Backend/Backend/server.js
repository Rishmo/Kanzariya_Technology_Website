const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const contactRoutes = require('./routes/contact.route');
const authRoutes = require('./routes/auth.route');
const partnerRoutes = require('./routes/partner.routes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI;

app.use(cors({
    origin: ['https://stalwart-mermaid-ec4da3.netlify.app', 'http://localhost:5173'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

app.use(express.json());
app.use(morgan('dev'));

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

    app.get('/', (req, res) => {
    res.send('Kanzariya Server is running...' );
    });

app.use('/contacts', contactRoutes);
app.use('/auth', authRoutes);
app.use('/partners', partnerRoutes)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
