// Dependencies
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB connection URL and configuration
const url = 'mongodb://localhost:27017'; // ✅ Fixed URL string
const dbName = 'studentinfo';
const collectionName = 'student';

let db; // Global database reference

// Connect to MongoDB
async function connectToDatabase() {
  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
  db = client.db(dbName);
  console.log('Connected to MongoDB.');
}

// Middleware
app.use(express.json());
app.use(cors());

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/client.html'));
});

// Insert Route
app.post('/insert', async (req, res) => {
  const { studid, lname, fname, mname, course } = req.body;
  console.log('Received request body:', req.body);

  try {
    if (!db) {
      console.log('Database connection is not established yet.');
      return res.status(500).json({ error: 'Database connection is not ready.' });
    }

    await db.collection(collectionName).insertOne({ studid, lname, fname, mname, course });

    console.log('Record inserted successfully!');
    res.status(201).json({ message: 'Record inserted successfully!' });
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      console.log('Duplicate entry for studid:', studid);
      return res.status(400).json({ error: 'The provided studid already exists.' });
    }

    console.error('Error inserting record:', err);
    res.status(500).json({ error: 'An error occurred while inserting the record.' });
  }
});

// Search Route
app.get('/search', async (req, res) => {
  const { studid } = req.query;

  try {
    if (!db) {
      console.log('Database connection is not established yet.');
      return res.status(500).json({ error: 'Database connection is not ready.' });
    }

    const student = await db.collection(collectionName).findOne({ studid });

    if (student) {
      console.log('Student found:', student);
      res.status(200).json(student);
    } else {
      console.log('No student found with the provided studid.');
      res.status(404).json({ error: 'No student found with the provided studid.' });
    }
  } catch (err) {
    console.error('Error searching for student:', err);
    res.status(500).json({ error: 'An error occurred while searching for the student.' });
  }
});

// Update Route
app.post('/update', async (req, res) => {
  const { studid, lname, fname, mname, course } = req.body;

  try {
    if (!db) {
      console.log('Database connection is not established yet.');
      return res.status(500).json({ error: 'Database connection is not ready.' });
    }

    const updateQuery = { studid };
    const updateValues = { $set: { lname, fname, mname, course } };

    const result = await db.collection(collectionName).updateOne(updateQuery, updateValues);

    if (result.matchedCount > 0) {
      console.log('Document updated successfully.');
      res.status(200).json({ message: 'Document updated successfully!' });
    } else {
      console.log('No document found with the provided studid.');
      res.status(404).json({ error: 'No document found with the provided studid.' });
    }
  } catch (err) {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'An error occurred while updating the document.' });
  }
});

// Delete Route
app.post('/delete', async (req, res) => {
  const { studid } = req.body;

  try {
    if (!db) {
      console.log('Database connection is not established yet.');
      return res.status(500).json({ error: 'Database connection is not ready.' });
    }

    const result = await db.collection(collectionName).deleteOne({ studid });

    if (result.deletedCount > 0) {
      console.log('Document deleted successfully.');
      res.status(200).json({ message: 'Document deleted successfully!' });
    } else {
      console.log('No document found with the provided studid.');
      res.status(404).json({ error: 'No document found with the provided studid.' });
    }
  } catch (err) {
    console.error('Error deleting document:', err);
    res.status(500).json({ error: 'An error occurred while deleting the document.' });
  }
});

// Start Server
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
  });
