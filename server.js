import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create Supabase admin client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceRoleKey) {
  console.error("SUPABASE_SERVICE_ROLE_KEY environment variable is required for admin operations");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey || "");

// Delete user endpoint
app.post('/api/deleteUser', async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Check if service role key is available
    if (!supabaseServiceRoleKey) {
      return res.status(500).json({
        error: 'Service role key not configured. Please set SUPABASE_SERVICE_ROLE_KEY environment variable.'
      });
    }

    // Delete user from auth
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      return res.status(500).json({ error: authError.message });
    }

    // Optionally delete user data from other tables here
    // e.g. await supabaseAdmin.from('profiles').delete().eq('id', userId);

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
