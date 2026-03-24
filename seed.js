// Small seeding script to add questions into MongoDB.
// NOTE: For copyright reasons this file ships with only a sample item.
// You can copy titles + links from the GeeksforGeeks page into the
// questionsToInsert array below.

const mongoose = require('mongoose');
require('dotenv').config();

const Question = require('./models/Question');

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern_coding_practice';

async function run() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB, seeding questions...');

    const questionsToInsert = [
      // Example item – replace with real titles + URLs from the page:
      // { title: 'Example: Print Hello World', url: 'https://www.geeksforgeeks.org/...', order: 1 },
    ];

    if (!questionsToInsert.length) {
      console.log('No questions defined yet. Edit seed.js and add items to questionsToInsert.');
      process.exit(0);
    }

    // Optional: clear existing questions before inserting
    await Question.deleteMany({});

    await Question.insertMany(questionsToInsert);
    console.log(`Inserted ${questionsToInsert.length} questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

run();
