const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kanban', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema and model
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});
const Event = mongoose.model('Event', eventSchema);

// API routes
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
