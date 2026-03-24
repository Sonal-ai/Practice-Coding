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
      { title: 'Sum of sum-series of first N Natural numbers', url: 'https://www.geeksforgeeks.org/dsa/sum-of-sum-series-of-first-n-natural-numbers/', order: 1 },
      { title: 'Check for Binary', url: 'https://www.geeksforgeeks.org/dsa/check-if-a-number-is-binary-or-not-in-java/', order: 2 },
      { title: 'if-else (Decision Making)', url: 'https://www.geeksforgeeks.org/cpp/decision-making-c-cpp/', order: 3 },
      { title: 'Odd or Even', url: 'https://www.geeksforgeeks.org/dsa/check-whether-given-number-even-odd/', order: 4 },
      { title: 'Swap two numbers', url: 'https://www.geeksforgeeks.org/c/c-program-swap-two-numbers/', order: 5 },
      { title: 'Sum Of Digits', url: 'https://www.geeksforgeeks.org/problems/sum-of-digits1742/1?page=3&difficulty=School&sortBy=submissions', order: 6 },
      { title: 'Sum of elements in a matrix', url: 'https://www.geeksforgeeks.org/dsa/find-sum-of-all-matrix-elements/', order: 7 },
      { title: 'Vowel or Not', url: 'https://www.geeksforgeeks.org/dsa/program-find-character-vowel-consonant/', order: 8 },
      { title: 'Greatest of three numbers', url: 'https://www.geeksforgeeks.org/c/c-program-to-find-the-largest-number-among-three-numbers/', order: 9 },
      { title: 'Lower case to upper case', url: 'https://www.geeksforgeeks.org/dsa/lower-case-upper-case-interesting-fact/', order: 10 },
      { title: 'Binary representation', url: 'https://www.geeksforgeeks.org/dsa/binary-representation-of-a-given-number/', order: 11 },
      { title: 'Multiply Array', url: 'https://www.geeksforgeeks.org/dsa/program-multiplication-array-elements/', order: 12 },
      { title: 'Sum of odd and even elements', url: 'https://www.geeksforgeeks.org/dsa/sum-even-odd-elements-array/', order: 13 },
      { title: 'Count Digits', url: 'https://www.geeksforgeeks.org/dsa/program-count-digits-integer-3-different-methods/', order: 14 },
      { title: 'Palindromic Array', url: 'https://www.geeksforgeeks.org/dsa/program-to-check-if-an-array-is-palindrome-or-not/', order: 15 },
      { title: 'Find the median', url: 'https://www.geeksforgeeks.org/dsa/mean-and-median-of-an-unsorted-array/', order: 16 }
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
