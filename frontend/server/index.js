import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import authRoutes from './routes/auth.js';
import partnerRoutes from './routes/partners.js';
import leadRoutes from './routes/leads.js';
import commissionRoutes from './routes/commissions.js';
import agreementRoutes from './routes/agreements.js';
import adminRoutes from './routes/admin.js';
import executiveRoutes from './routes/executives.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client initialization
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/partners', authenticateToken, partnerRoutes);
app.use('/api/leads', authenticateToken, leadRoutes);
app.use('/api/commissions', authenticateToken, commissionRoutes);
app.use('/api/agreements', authenticateToken, agreementRoutes);
app.use('/api/admin', authenticateToken, adminRoutes);
app.use('/api/executives', authenticateToken, executiveRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});